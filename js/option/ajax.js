define([], function () {

    function Ajax(target) {
        this._queue = [];
        this._target = target;
    }

    var proto = Ajax.prototype;

    proto.send = function (buffer, silence) {
        var call = $.Deferred();
        if (this.inQueue(buffer))
            return;

        var self = this;

        if (buffer) {
            $.ajax({
                url: buffer['url'],
                type: 'POST',
                data: buffer['data'],
                beforeSend: function () {
                    self.loadQueue(buffer);
                    if (!silence)
                        self._target.load.openAnimation();
                },
                success: function (data) {
                    try {
                        data = JSON.parse(data);
                    } catch (e) {
                    }
                    if (data.code != 0 && !buffer['skipError']) {
                        call.reject(data.code, data.msg)
                    } else if (buffer['skipError']) {
                        call.resolve(data)
                    } else {
                        call.resolve(data.content)
                    }
                },
                complete: function () {
                    if (!silence && self._target.load)
                        self._target.load.closeAnimation();
                    self._queue.remove(buffer);
                },
                error: function () {
                    if (buffer['retry'])
                        setTimeout(function () {
                            self._queue.remove(buffer);
                            self.load(buffer);
                        }, buffer['delay'] || 5000);
                    else
                        call.reject();
                }
            });

            return call;
        }
    };

    proto.load = function (buffer, silence) {
        if (this.inQueue(buffer))
            return;

        var self = this;

        if (buffer) {
            $.ajax({
                url: buffer['url'],
                type: 'POST',
                data: buffer['data'],
                beforeSend: function () {
                    self.loadQueue(buffer);
                    if (!silence && self._target.load)
                        self._target.load.openAnimation();
                },
                success: function (data) {
                    self._target.schedule.dispatchEvent(buffer['response'], false, data);
                },
                complete: function () {
                    if (!silence && self._target.load)
                        self._target.load.closeAnimation();
                    self._queue.remove(buffer);
                },
                error: function () {
                    if (buffer['retry'])
                        setTimeout(function () {
                            self._queue.remove(buffer);
                            self.load(buffer);
                        }, buffer['delay'] || 5000);
                    else
                        self._target.schedule.dispatchEvent(buffer['response'], false, null);
                }
            });
        }
    };

    proto.inQueue = function (buffer) {
        return this._queue.contains(buffer);
    };

    proto.loadQueue = function (buffer) {
        if (!this.inQueue(buffer))
            this._queue.push(buffer);
    };

    return Ajax;
});