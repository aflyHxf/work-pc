/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
    return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/**
 * @namespace config
 */
define('config',[],function () {
    var DOM = {
        HEAD: 'head',
        FOOT: 'foot',
        MAIN: 'main',
        POPUP: 'popup'
    };

    /**
     * @name config
     * @example
     * 'home':{
     *   address:'js/model/home.html',
     *   renderer:DOM.MAIN,
     *   js:'../js/page/page.home'
     * }
     */
    return {
        /**
         * 模块文件
         */
        'ui-alert': {
            address: 'js/model/layer/alert.html'
        },
        'ui-normal': {
            address: 'js/model/layer/normal.html'
        },
        'progress': {
            address: 'js/model/ui/progress.html'
        },
        'reportController': {
            address: 'js/model/ui/reportController.html'
        },
        'pageController': {
            address: 'js/model/ui/pageController.html'
        },
        'rechargeRecord': {
            address: 'js/model/ui/rechargeRecord.html'
        },
        'withdrawRecord': {
            address: 'js/model/ui/withdrawRecord.html'
        },
        'promotionRecord': {
            address: 'js/model/ui/promotionRecord.html'
        },
        'createdRecord':{
            address:'js/model/ui/createdRecord.html'
        },
        'commissionRecord':{
            address: 'js/model/ui/commissionRecord.html'
        },
        'topupRecord':{
            address: 'js/model/ui/topupRecord.html'
        },

        'header': {
            address: 'js/model/header.html',
            renderer: DOM.HEAD,
            js: '../js/page/page.header'
        },

        'login': {
            address: 'js/model/popup/popup.login.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.login'
        },

        'loginbyphone': {
            address: 'js/model/popup/popup.loginbyphone.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.loginbyphone'
        },

        'register': {
            address: 'js/model/popup/popup.register.html',
            renderer: DOM.POPUP,
            nexus:['register','home','header'],
            js: '../js/page/popup/popup.register'
        },

        'headportrait': {
            address: 'js/model/popup/popup.headportrait.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.headportrait'
        },

        'contact': {
            address: 'js/model/popup/popup.contact.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.contact'
        },

        'ptLogin':{
            address:'js/model/ptLogin.html',
            renderer:DOM.MAIN,
            nexus:['ptLogin'],
            js:'../js/page/page.ptLogin'
        },

        'home': {
            address: 'js/model/home.html',
            renderer: DOM.MAIN,
            nexus: ['home', 'header'],
            js: '../js/page/page.home'
        },

        'openGame':{
            address:'js/model/openGame.html',
            renderer:DOM.MAIN,
            nexus:['openGame'],
            js:'../js/page/page.openGame'
        },

        'transaction': {
            address: 'js/model/transaction.html',
            renderer: DOM.MAIN,
            nexus: ['transaction', 'header'],
            js: '../js/page/page.transaction'
        },

        'wechatpay': {
            address: 'js/model/deposit/page.wechatpay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'wechatpay'],
            js: '../js/page/deposit/page.wechatpay'
        },

        'wechatpay_manual': {
            address: 'js/model/deposit/page.wechatpay.manual.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'wechatpay_manual'],
            js: '../js/page/deposit/page.wechatpay.manual'
        },

        'alipay_manual': {
            address: 'js/model/deposit/page.alipay.manual.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'alipay_manual'],
            js: '../js/page/deposit/page.alipay.manual'
        },

        'unionpay': {
            address: 'js/model/deposit/page.unionpay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'unionpay'],
            js: '../js/page/deposit/page.unionpay'
        },

        'onlinepay': {
            address: 'js/model/deposit/page.onlinepay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'onlinepay'],
            js: '../js/page/deposit/page.onlinepay'
        },

        'bankpay': {
            address: 'js/model/deposit/page.bankpay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'bankpay'],
            js: '../js/page/deposit/page.bankpay'
        },

        'alipay': {
            address: 'js/model/deposit/page.alipay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'alipay'],
            js: '../js/page/deposit/page.alipay'
        },

        'withdrawals': {
            address: 'js/model/withdrawals.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'withdrawals'],
            js: '../js/page/page.withdrawals'
        },

        'promotions': {
            address: 'js/model/promotions.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'promotions', 'topupRecord'],
            js: '../js/page/page.promotions'
        },

        'proxy': {
            address: 'js/model/proxy.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'proxy'],
            js: '../js/page/page.proxy'
        },

        'mobile': {
            address: 'js/model/mobile.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'mobile'],
            js: '../js/page/page.mobile'
        },

        'account': {
            address: 'js/model/account.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'account', 'headportrait'],
            js: '../js/page/page.account'
        },

        'overview': {
            address: 'js/model/account/overview.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'overview'],
            js: '../js/page/account/page.overview'
        },

        'transfer': {
            address: 'js/model/account/transfer.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'transfer'],
            js: '../js/page/account/page.transfer'
        },

        'report': {
            address: 'js/model/account/report.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'report', 'reportController', 'rechargeRecord', 'withdrawRecord', 'promotionRecord', 'pageController'],
            js: '../js/page/account/page.report'

        },

        'mailbox': {
            address: 'js/model/account/mailbox.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'mailbox'],
            js: '../js/page/account/page.mailbox'
        },

        'personal': {
            address: 'js/model/account/personal.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'personal'],
            js: '../js/page/account/page.personal'
        },

        'fastsearch': {
            address: 'js/model/account/fastsearch.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'fastsearch'],
            js: '../js/page/account/page.fastsearch'
        },

        'created_records': {
            address: 'js/model/account/created_records.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'created_records','createdRecord','pageController'],
            js: '../js/page/account/page.created.records'
        },

        'commission': {
            address: 'js/model/account/commission.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'commission','commissionRecord','pageController'],
            js: '../js/page/account/page.commission'
        },

        'modifypassword': {
            address: 'js/model/popup/popup.modifypassword.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.modifypassword'
        },

        'modifybank': {
            address: 'js/model/popup/popup.modifybank.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.modifybank'
        },

        'resetpassword': {
            address: 'js/model/popup/popup.resetpassword.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.resetpassword'
        },

        'registersubuser': {
            address: 'js/model/popup/popup.register.subuser.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.register.subuser'
        },

        'withdrawal': {
            address: 'js/model/popup/popup.withdrawal.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.withdrawal'
        },

        'record': {
            address: 'js/model/popup/popup.record.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.record'
        }

        // 'example':{
        //     address:'js/model/foot.html',
        //     depend:'home',
        //     nexus:['head', 'foot'],
        //     renderer:DOM.FOOT,
        //     js:'js/page/home'
        // }
    }
});

/**
 * @namespace
 * @alias renderer
 */
define('renderer',['config'], function (config) {

    var map = config;

    var self = {

        /**
         * 等待队列
         */
        _dependentSequence:[],

        /**
         * @method
         * @param {String} url 对应{@link config}中的url
         * @desc 根据url渲染页面模板到指定位置
         * @author 2016/12/14 by wildeChen
         */
        make: function (url) {
            var pageArray = map[url].nexus ? map[url].nexus : [url];

            /**
             * 做一个交叉对比,将渲染的页面中未覆盖的组件从浏览器中移除掉
             *
             * @description 存在隐患 当depend的url不包含他的依赖对象的全部加载时,可能因交叉对比导致部分模块被移除
             */
            if (map[url].nexus) {
                var standard = pageArray.each(function (o) {
                    return map[o].renderer ? map[o].renderer : null
                });

                var clear = Array.minus(Object.keys(mcm.part), standard);
                clear.forEach(function (e) {
                    var target = mcm.part[e] && map[mcm.part[e]].js || '';
                    if (!mcm.part[e])
                        return;
                    require([target], function (og) {
                        if (og && og.onExit) {
                            og.onExit();
                            $.when(og.exit.promise()).then(function () {
                                og.exit = null;
                                var target = document.getElementById(e);
                                if (target)
                                    target.innerHTML = '';
                                mcm.part[e] = null;
                            })
                        } else {
                            var target = document.getElementById(e);
                            if (target)
                                target.innerHTML = '';
                            mcm.part[e] = null;
                        }
                    })
                })
            }

            //渲染页面及其组件
            pageArray.forEach(function (element) {
                if (mcm.part[map[element].renderer] == element)
                    return;

                //用来处理在关系链中加载的附加组件,不对其进行渲染
                if (!map[element].renderer)
                    return;

                var target = map[element];

                // var temp = $('#' + target.renderer);
                var temp = document.getElementById(target.renderer);

                if (target.depend && mcm.part[map[target.depend].renderer] != target.depend) {
                    self._queueIntoDependentSequence(element,'make',target.depend);
                    return;
                }

                var origin = mcm.part[target.renderer];
                if (origin) {
                    origin = map[origin].js;
                } else {
                    origin = '';
                }

                var content;
                //判断是否需要模板引擎渲染
                if (target.js) {

                    require([target.js, origin], function (ctr, og) {
                        ctr.insertRequestData().then(function () {
                            if (og && og.onExit) {
                                og.onExit();
                                $.when(og.exit.promise()).then(function () {
                                    og.exit = null;

                                    ctr.init();
                                    content = ctr.dom;

                                    temp.innerHTML = '';
                                    temp.innerHTML = content;

                                    // 绑定dom节点和事件映射
                                    ctr.bindDomNode();
                                    ctr.bindEvents();
                                    ctr.bindView();

                                    if (ctr.bind)
                                        ctr.bind();

                                    ctr.onEnter();
                                    //注销页面委托
                                    mcm.part[target.renderer] = element;
                                    self._awakeDependentSequence(element);
                                })
                            } else {
                                ctr.init();
                                content = ctr.dom;

                                temp.innerHTML = '';
                                temp.innerHTML = content;

                                // 绑定dom节点和事件映射
                                ctr.bindDomNode();
                                ctr.bindEvents();
                                ctr.bindView();

                                if (ctr.bind)
                                    ctr.bind();

                                ctr.onEnter();
                                //注销页面委托
                                mcm.part[target.renderer] = element;
                                self._awakeDependentSequence(element);
                            }
                        }).fail(function () {
                            // mark 2018/04/09 注解了 history.back, 因为一出现错误，就会一直将此页面导向前页。
                            // 如果你是第一次打开，就会直接被弹出页面。
                            // history.back();
                            //todo 执行加载超时或错误回调
                            if(mcm.timeoutCallback)
                                mcm.timeoutCallback();
                            //todo 抛出错误
                            console.error('%s 预加载请求失败',url)
                        });
                    });

                } else {
                    require([origin], function (og) {
                        if (og && og.onExit) {
                            og.onExit();
                            $.when(og.exit.promise()).then(function () {
                                og.exit = null;
                                content = mcm.page[element];
                                temp.innerHTML = '';
                                temp.innerHTML = content;
                                mcm.part[target.renderer] = element;
                                self._awakeDependentSequence(element);
                            })
                        } else {
                            content = mcm.page[element];
                            temp.innerHTML = '';
                            temp.innerHTML = content;
                            mcm.part[target.renderer] = element;
                            self._awakeDependentSequence(element);
                        }
                    });
                }
            });
        },

        /**
         * @method
         * @param {string} url 要渲染的页面的url
         * @param {object} [eventData] 要传递到对象的init中的参数
         */
        update: function (url, eventData) {
            // var pageArray = map[url].nexus ? map[url].nexus : [url];
            var pageArray = [url];

            if (!eventData)
                eventData = null;

            pageArray.forEach(function (element) {

                //限制重复渲染
                // if (mcm.part[map[element].renderer] == element)
                //     return;

                //用来处理在关系链中加载的附加组件,不对其进行渲染
                if (!map[element].renderer)
                    return;

                var target = map[element];

                var temp = document.getElementById(target.renderer);

                if (target.depend && mcm.part[map[target.depend].renderer] != target.depend) {
                    self._queueIntoDependentSequence(element,'update',target.depend);
                    return;
                }

                var origin = mcm.part[target.renderer];
                if (origin) {
                    origin = map[origin].js;
                } else {
                    origin = '';
                }

                var content;
                //判断是否需要模板引擎渲染
                if (target.js) {

                    require([target.js, origin], function (ctr, og) {
                        ctr.insertRequestData().then(function () {
                            if (og && og.onExit) {
                                og.onExit();
                                $.when(og.exit.promise()).then(function () {
                                    og.exit = null;

                                    ctr.data['reference'] = eventData;
                                    ctr.init();
                                    content = ctr.dom;

                                    temp.innerHTML = '';
                                    temp.innerHTML = content;

                                    // 绑定dom节点和事件映射
                                    ctr.bindDomNode();
                                    ctr.bindEvents();
                                    ctr.bindView();

                                    if (ctr.bind)
                                        ctr.bind();

                                    ctr.onEnter();
                                    //注销页面委托
                                    mcm.part[target.renderer] = element;
                                    self._awakeDependentSequence(element);
                                })
                            } else {
                                ctr.data['reference'] = eventData;
                                ctr.init();
                                content = ctr.dom;

                                temp.innerHTML = '';
                                temp.innerHTML = content;

                                // 绑定dom节点和事件映射
                                ctr.bindDomNode();
                                ctr.bindEvents();
                                ctr.bindView();

                                if (ctr.bind)
                                    ctr.bind();

                                ctr.onEnter();
                                //注销页面委托
                                mcm.part[target.renderer] = element;
                                self._awakeDependentSequence(element);

                            }
                        }).fail(function () {
                            self.update_out(url);
                            //todo 执行加载超时或错误回调
                            if(mcm.timeoutCallback)
                                mcm.timeoutCallback();
                            //todo 抛出错误
                            console.error('%s 预加载请求失败',url)
                        });
                    });

                } else {
                    require([origin], function (og) {
                        if (og && og.onExit) {
                            og.onExit();
                            $.when(og.exit.promise()).then(function () {
                                og.exit = null;
                                content = mcm.page[element];
                                temp.innerHTML = '';
                                temp.innerHTML = content;
                                mcm.part[target.renderer] = element;
                                self._awakeDependentSequence(element);
                            })
                        } else {
                            content = mcm.page[element];
                            temp.innerHTML = '';
                            temp.innerHTML = content;
                            mcm.part[target.renderer] = element;
                            self._awakeDependentSequence(element);
                        }
                    });
                }
            });
        },

        /**
         * @description 在不退出页面的情况下 刷新页面,禁止使用该方法刷新一个包含子页面的页面
         * @param {object} obj 传入一个页面{@link page}对象
         */
        refresh:function (obj) {
            if(typeof obj !== 'object')
                return console.error('刷新页面传入参数错误');
            var url = obj.url;
            var target = map[url];
            var temp = document.getElementById(target.renderer);
            var content;
            obj.insertRequestData().then(function () {
                obj.init();
                content = obj.dom;

                temp.innerHTML = '';
                temp.innerHTML = content;

                // 绑定dom节点和事件映射
                obj.bindDomNode();
                obj.bindEvents();
                obj.bindView();

                if (obj.bind)
                    obj.bind();

                obj.onEnter();

            }).fail(function () {
                //todo 执行加载超时或错误回调
                if(mcm.timeoutCallback)
                    mcm.timeoutCallback();
                //todo 抛出错误
                console.error('%s 刷新加载失败',url)
            });
        },

        /**
         * @method
         * @param {string} url 要退出的界面url
         * @param {boolean} [all] 是否清除关系链
         */
        update_out: function (url, all) {
            var pageArray = all ? map[url].nexus ? map[url].nexus : [url] : [url];

            pageArray.forEach(function (element) {
                var target = map[element];
                var temp = document.getElementById(target.renderer);
                if (target.js) {
                    require([target.js], function (og) {
                        if (og.onExit) {
                            og.onExit();
                            $.when(og.exit.promise()).then(function () {
                                temp.innerHTML = '';
                                mcm.part[target.renderer] = null;
                            })
                        } else {
                            temp.innerHTML = '';
                            mcm.part[target.renderer] = null;
                        }
                    })
                } else {
                    temp.innerHTML = '';
                    mcm.part[target.renderer] = null;
                }
            });
        },

        /**
         *
         * @param {String} url 等待渲染的url
         * @param {String} fn 渲染执行的事件
         * @param {String} depend 依赖的url
         * @private
         * @description 将由依赖url添加到等待唤醒队列
         */
        _queueIntoDependentSequence : function (url,fn,depend) {
            if(!this._dependentSequence[depend]){
                this._dependentSequence[depend] = [];
            }
            this._dependentSequence[depend].push([url,fn]);
        },

        /**
         *
         * @param target
         * @private
         */
        _awakeDependentSequence:function (target) {
            var self = this;
            if(this._dependentSequence[target]){
                var list = this._dependentSequence[target];
                var url,fn;
                list.forEach(function (array) {
                    url = array[0];
                    fn = array[1];
                    self[fn](url);
                });
                this._dependentSequence[target] = null;
            }
        }


    };

    return self;
});

define('app',[],function () {return {"js/model/layer/alert.html":"<div class=\"noticeLayer\" id=\"%layer%\">\n    <div class=\"noticeMask\"></div>\n    <div class=\"noticeWrap\">\n        <div class=\"noticeBox\">\n            <h1 class=\"notice_title\">\n                提示\n                <b class=\"cancel\" id=\"%cancel%\"></b>\n            </h1>\n            <div class=\"notice_body\">\n                <div class=\"notice_content notice_alert\">\n                    <img src=\"images/warning.png?v=3f384eb6ff\">\n                    <br/>\n                    %content%\n                </div>\n                <div class=\"notice_button\">\n                    %btn%<a id=\"%uid%\">%name%</a>%btn%\n                </div>\n            </div>\n        </div>\n    </div>\n</div>","js/model/layer/normal.html":"<div class=\"noticeLayer\" id=\"%layer%\">\n    <div class=\"noticeMask\"></div>\n    <div class=\"noticeWrap\">\n        <div class=\"noticeBox\">\n            <h1 class=\"notice_title\">\n                提示\n                <b class=\"cancel\" id=\"%cancel%\"></b>\n            </h1>\n            <div class=\"notice_body\">\n                <div class=\"notice_content\">\n                    %content%\n                </div>\n                <div class=\"notice_button\">\n                    %btn%<a id=\"%uid%\">%name%</a>%btn%\n                </div>\n            </div>\n        </div>\n    </div>\n</div>","js/model/ui/progress.html":"<div class=\"UI-progress\">\n    <div class=\"line-container\">\n        <!-- 背景图层 -->\n        <div class=\"line-background\">\n            <%  if (anchors.length > 2 && isRoundAnchor) { %>\n            <div class=\"circle-group\">\n                <% for (var i = 0; i < anchors.length; i++) {\n                    var percent = 100 / (anchors.length - 1) * i;\n                %>\n                <span style=\"left: <%==percent%>%;\"></span>\n                <% } %>\n            </div>\n            <% } %>\n            <div class=\"line\"></div>\n        </div>\n        <!-- 动画遮罩层 -->\n        <div class=\"line-current progressNode\">\n            <div class=\"box\">\n                <% if (anchors.length > 2 && isRoundAnchor) { %>\n                <div class=\"circle-group\">\n                    <% for (var i = 0; i < anchors.length; i++) {\n                        var percent = 100 / (anchors.length - 1) * i;\n                    %>\n                    <span style=\"left: <%==percent%>%;\"></span>\n                    <% } %>\n                </div>\n                <% } %>\n                <div class=\"line\"></div>\n            </div>\n            <!-- 当前进度值 -->\n            <div class=\"count-numer\">\n                <span><%=currentVal%></span>\n            </div>\n        </div>\n        <% if (anchors.length > 2) { %>\n        <!-- 遮罩图层 -->\n        <div class=\"hide-beyond-line\"></div>\n        <% } %>\n    </div>\n    <!-- 数值图层 -->\n    <div class=\"progress-targes\">\n        <% for (var i = 0; i < anchors.length; i++) {\n            var percent = 100 / (anchors.length - 1) * i;\n        %>\n        <span style=\"left: <%==percent%>%;\"><%==anchors[i]%></span>\n        <% if (anchors.length <= 2 && i == 0) { %>\n        <!--<span style=\"left: 50%\"><%-xjs.tool.calcPercent(currentVal, anchors[anchors.length - 1], 2)%></span>-->\n        <% } %>\n        <% } %>\n    </div>\n</div>","js/model/ui/reportController.html":"<div class=\"mid\">\n    <% var info = $business() %>\n    <% var tool = $tool() %>\n\n    <% if(type == 'bet'){ %>\n    <table class=\"control\">\n        <tr>\n            <td>\n                <label>游戏大厅</label>\n                <select class=\"UI-Select\" v-input=\"lobby\">\n                    <option value=\"\">全部</option>\n                    <% for(var i = 0,len = data.providerList.length;i < len;i++){ %>\n                    <option value=\"<%=data.providerList[i].providerId%>\"><%=info.provider[data.providerList[i].providerId]%></option>\n                    <% } %>\n                </select>\n            </td>\n            <td>\n                <label>起始时间</label>\n                <input type=\"text\" class=\"UI-Input\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(1, 1)%>\" data-element=\"startNode\">\n            </td>\n            <td>\n                <label>结束时间</label>\n                <input type=\"text\" class=\"UI-Input\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(0, 2)%>\" data-element=\"endNode\">\n            </td>\n            <td>\n                <div class=\"UIButton\" data-events=\"click:betRecord;\">\n                    <div>查询</div>\n                </div>\n            </td>\n        </tr>\n    </table>\n    <table class=\"bet\">\n        <tr>\n            <td></td>\n        </tr>\n        <tr>\n            <td>\n                总计(有效投注额:<span v-param=\"betAmount\"></span>)\n            </td>\n        </tr>\n    </table>\n\n\n    <% }else if(type == 'recharge'){ %>\n\n    <table class=\"control\">\n        <tr>\n            <td>\n                <label>充值方式</label>\n                <select class=\"UI-Select\" v-input=\"type\">\n                    <option value=\"2\">在线充值</option>\n                    <option value=\"1\">手工存款</option>\n                    <option value=\"3\">支付宝充值</option>\n                    <option value=\"4\">个人微信</option>\n                </select>\n            </td>\n            <td>\n                <label>起始时间</label>\n                <input type=\"text\" class=\"UI-Input\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(1, 1)%>\" data-element=\"startNode\">\n            </td>\n            <td>\n                <label>结束时间</label>\n                <input type=\"text\" class=\"UI-Input\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(0, 2)%>\" data-element=\"endNode\">\n            </td>\n            <td>\n                <div class=\"UIButton\" data-events=\"click:savingRecord;\">\n                    <div>查询</div>\n                </div>\n            </td>\n        </tr>\n    </table>\n    <table class=\"recharge\">\n        <tr class=\"black\">\n            <th>订单号</th>\n            <th>订单时间</th>\n            <th>充值金额</th>\n            <th>充值方式</th>\n        </tr>\n        <tbody class=\"rechargeTable\"></tbody>\n    </table>\n    <div class=\"page-controller\">\n\n    </div>\n    <% }else if(type == 'withdraw'){ %>\n\n    <table class=\"control\">\n        <tr>\n            <td>\n                <label>状态</label>\n                <select class=\"UI-Select\" v-input=\"status\">\n                    <option value=\"\">请选择</option>\n                    <% for( i in info.orderStatus){%>\n                    <option value=\"<%=i%>\"><%=info.orderStatus[i]%></option>\n                    <% } %>\n                </select>\n            </td>\n            <td>\n                <label>起始时间</label>\n                <input type=\"text\" class=\"UI-Input\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(1, 1)%>\" data-element=\"startNode\">\n            </td>\n            <td>\n                <label>结束时间</label>\n                <input type=\"text\" class=\"UI-Input\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(0, 2)%>\" data-element=\"endNode\">\n            </td>\n            <td>\n                <div class=\"UIButton\" data-events=\"click:withdrawRecord;\">\n                    <div>查询</div>\n                </div>\n            </td>\n        </tr>\n    </table>\n    <table class=\"withdraw\">\n        <tr class=\"black\">\n            <th>订单号</th>\n            <th>提款时间</th>\n            <th>提款金额</th>\n            <th>状态</th>\n            <th>操作</th>\n        </tr>\n        <tbody class=\"withdrawTable\"></tbody>\n    </table>\n    <div class=\"page-controller\">\n\n    </div>\n    <% }else if(type == 'promotion'){ %>\n\n    <table class=\"control\">\n        <tr>\n            <td>\n                <label>起始时间</label>\n                <input type=\"text\" class=\"UI-Input\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(1, 1)%>\">\n            </td>\n            <td>\n                <label>结束时间</label>\n                <input type=\"text\" class=\"UI-Input\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(0, 2)%>\">\n            </td>\n            <td>\n                <div class=\"UIButton\" data-events=\"click:promotionRecord;\">\n                    <div>查询</div>\n                </div>\n            </td>\n        </tr>\n    </table>\n    <table class=\"promotion\">\n        <tr class=\"black\">\n            <th>时间</th>\n            <th>优惠类型</th>\n            <th>优惠金额</th>\n            <th>状态</th>\n            <!--<th>操作</th>-->\n        </tr>\n        <tbody class=\"promotionTable\"></tbody>\n    </table>\n    <div class=\"page-controller\">\n    </div>\n\n    <% }else{ %>\n\n    <div>报表类型错误</div>\n\n    <% } %>\n</div>\n","js/model/ui/pageController.html":"<% if(stats.totalCount > 0){ %>\n<% tool = $tool(),win = $getCommonVal(); %>\n<% var now = tool.pageCalculate(stats.startIndex,stats.requestCount),max = tool.pageMax(stats.totalCount,stats.requestCount);%>\n<% var length = 3,limit = length - 1,offset = limit - 1;%>\n<table class=\"page UI-Page\">\n    <tr>\n        <td>\n            <div class=\"neighbor\" <% if(now > 1){ %> data-events=\"click:<%=event%>\" data-bind=\"<%=(now-2)*stats.requestCount%>\" <% } %> >上一页</div>\n        </td>\n        <td>\n            <ul class=\"jump\">\n                <% for(var i = (now == 1 || max < length) ? 1 : ((now == max ||max - limit < now) ? max - limit : win.Math.max(now - offset,1)),len = max <= limit ? max : ( i + limit > max ? i + 1 : i + limit);i <= len;i++){ %>\n                <li <% if(i == now){ %> class=\"active\" <% }else{ %> data-events=\"click:<%=event%>\" data-bind=\"<%=(i-1)*stats.requestCount%>\" <% } %> ><%=i%></li>\n                <% } %>\n            </ul>\n        </td>\n        <td>\n            <div class=\"neighbor\" <% if(now < max){ %> data-events=\"click:<%=event%>\" data-bind=\"<%=now*stats.requestCount%>\" <% } %>>下一页</div>\n        </td>\n        <td>\n            <input type=\"text\" class=\"amount\" data-element=\"detailNode\" v-input=\"page\" v-min=\"1\" v-max=\"<%=max%>\">\n        </td>\n        <td><div class=\"redirect\" <% if(now < max || now > 1){ %> data-events=\"click:<%=event%>\" data-bind=\"detailNode\" <% } %>>跳转</div></td>\n        <td>共<span><%=max%></span>页</td>\n    </tr>\n</table>\n<% } %>","js/model/ui/rechargeRecord.html":"<% var tool = $tool(),win = $getCommonVal(),info = $business().topupType,amount = 0; %>\n<% if(list.length > 0){ %>\n<% for(var i = 0,len = win.Math.min(list.length,10);i < len;i ++){ %>\n<% amount += list[i].data.amount; %>\n<tr>\n    <td><%=list[i].proposalId%></td>\n    <td><%=tool.transferDateToString(new win.Date(list[i].createTime))%></td>\n    <td><%=tool.formatCurrency(list[i].data.amount)%></td>\n    <td>\n      <!-- <%=info[list[i].data.topupType] || '手工存款'%> -->\n      <% if(info[list[i].data.topupType]){ %>\n          <%=info[list[i].data.topupType] || '' %>\n      <% }else {%>\n          <%=topupStatus[list[i].type] || '' %>\n      <% } %>\n    </td>\n</tr>\n<% } %>\n<tr class=\"white\">\n    <td colspan=\"2\">当前小计</td>\n    <td colspan=\"2\"><%=tool.formatCurrency(amount)%></td>\n</tr>\n<tr class=\"black\">\n    <td colspan=\"2\">总计</td>\n    <td colspan=\"2\"><%=tool.formatCurrency(stats.totalAmount)%></td>\n</tr>\n<% }else{ %>\n<tr><td colspan=\"4\">暂无记录</td></tr>\n<% } %>\n","js/model/ui/withdrawRecord.html":"<% var tool = $tool(),win = $getCommonVal(),info = $business().orderStatus,amount = 0; %>\n<% if(list.length > 0){ %>\n<% for(var i = 0,len = win.Math.min(list.length,10);i < len;i ++){ %>\n<% amount += list[i].data.amount; %>\n<tr>\n    <td><%=list[i].proposalId%></td>\n    <td><%=tool.transferDateToString(new win.Date(list[i].createTime))%></td>\n    <td><%=tool.formatCurrency(list[i].data.amount)%></td>\n    <td><%=info[list[i].status]%></td>\n    <td><% if(list[i].status == 'Pending'){ %> <div class=\"UIButton\" data-events=\"click:cancelWithdraw\" data-id=\"<%=list[i].proposalId%>\"><div>取消</div></div> <% } %></td>\n</tr>\n<% } %>\n<% }else{ %>\n<tr><td colspan=\"5\">暂无记录</td></tr>\n<% } %>\n","js/model/ui/promotionRecord.html":"<% var tool = $tool(),win = $getCommonVal(),info = $business().orderStatus; %>\n<% if(list.length > 0){ %>\n<% for(var i = 0,len = win.Math.min(list.length,10);i < len;i ++){ %>\n<tr>\n    <td><%=tool.transferDateToString(new win.Date(list[i].createTime))%></td>\n    <td><%=list[i].eventName%></td>\n    <td><%=tool.formatCurrency(list[i].rewardAmount)%></td>\n    <td><%=info[list[i].status]%></td>\n    <!--<td><% if(list[i].status == 'Pending'){ %> <div class=\"UIButton\" data-events=\"click:cancelPromotion\" data-id=\"<%=list[i].proposalId%>\"><div>取消</div></div> <% } %></td>-->\n</tr>\n<% } %>\n<% }else{ %>\n<tr><td colspan=\"4\">暂无记录</td></tr>\n<% } %>\n","js/model/ui/createdRecord.html":"<% var tool = $tool(); %>\n<% if (players && players.length > 0){ %>\n<% for (var i = 0,len = players.length;i < len;i++){%>\n<tr>\n    <td><%=players[i].name%></td>\n    <td><%=players[i].realName%></td>\n    <td><%=players[i].topUpTimes%></td>\n    <td><%=tool.transferDateToString(players[i].registrationTime)%></td>\n    <td><%=tool.transferDateToString(players[i].lastAccessTime)%></td>\n    <td><%=players[i].lastLoginIp%></td>\n    <td><%=players[i].domain%></td>\n</tr>\n<% } %>\n<% }else{ %>\n<tr>\n    <td colspan=\"7\">\n        暂无信息\n    </td>\n</tr>\n<% } %>","js/model/ui/commissionRecord.html":"<% if(playerCommissions && playerCommissions.length > 0){ %>\n<% var a = 0,b = 0,c = 0,d = 0,e = 0,f = 0,g = 0 %>\n<% for(var i = 0,len = playerCommissions.length;i < len;i++){ %>\n<% a += playerCommissions[i].totalTopUpAmount%>\n<% b += playerCommissions[i].totalPlayerBonusAmount%>\n<% c += playerCommissions[i].operationAmount%>\n<% d += playerCommissions[i].totalRewardAmount%>\n<% e += playerCommissions[i].platformFee%>\n<% f += playerCommissions[i].serviceFee%>\n<% g += playerCommissions[i].profitAmount%>\n<tr>\n    <td><%=playerCommissions[i].playerName%></td>\n    <td><%=playerCommissions[i].totalTopUpAmount.toFixed(2)%></td>\n    <td><%=playerCommissions[i].totalPlayerBonusAmount.toFixed(2)%></td>\n    <td><%=playerCommissions[i].operationAmount.toFixed(2)%></td>\n    <td><%=playerCommissions[i].totalRewardAmount.toFixed(2)%></td>\n    <td><%=playerCommissions[i].platformFee.toFixed(2)%></td>\n    <td><%=playerCommissions[i].serviceFee.toFixed(2)%></td>\n    <td><%=playerCommissions[i].profitAmount.toFixed(2)%></td>\n</tr>\n<% } %>\n<tr>\n    <td>小计：</td>\n    <td><%=a.toFixed(2)%></td>\n    <td><%=b.toFixed(2)%></td>\n    <td><%=c.toFixed(2)%></td>\n    <td><%=d.toFixed(2)%></td>\n    <td><%=e.toFixed(2)%></td>\n    <td><%=f.toFixed(2)%></td>\n    <td><%=g.toFixed(2)%></td>\n</tr>\n<% }else{ %>\n<tr>\n    <td colspan=\"8\">\n        暂无信息\n    </td>\n</tr>\n<tr>\n    <td>小计：</td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n</tr>\n<% } %>\n<% if(total){ %>\n<tr>\n    <td>总计：</td>\n    <td><%=total.totalTopUpAmount.toFixed(2)%></td>\n    <td><%=total.totalPlayerBonusAmount.toFixed(2)%></td>\n    <td><%=total.operationAmount.toFixed(2)%></td>\n    <td><%=total.totalRewardAmount.toFixed(2)%></td>\n    <td><%=total.platformFee.toFixed(2)%></td>\n    <td><%=total.serviceFee.toFixed(2)%></td>\n    <td><%=total.profitAmount.toFixed(2)%></td>\n</tr>\n<% }else{ %>\n<tr>\n    <td>总计：</td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n</tr>\n<% } %>\n","js/model/ui/topupRecord.html":"<%  var tool = $tool();\n    var record, i;\n    for (i = 0; i < data.recordList.records.length; i++) {\n        record = data.recordList.records[i];\n%>\n<div class=\"record\">\n    <input type=\"<%if (!data.reference.multipleChoice){%>radio<%}else{%>checkbox<%}%>\" name=\"choice\" value=\"<%=record._id%>\" id=\"<%=record._id%>\">\n    <label for=\"<%=record._id%>\">\n        <p>存款时间：<%=tool.formatDate(record.createTime, \"y-m-d h:i:s\")%></p>\n        <p>存款方式：在线充值</p>\n        <p>存款金额：<%=record.amount%></p>\n    </label>\n</div>\n<% } %>","js/model/header.html":"<div class=\"head\">\n    <div class=\"container row\">\n        <div class=\"col-left\">\n            <a href=\"#home\" class=\"logo\"><img src=\"images/logo.png?v=66b01a55fb\"></a>\n        </div>\n        <div class=\"col-right\">\n            <nav class=\"nav-wrap\" data-element=\"navNode\">\n                <% var url = $tool().url(); var search = $tool().getSearch();%>\n                <a href=\"#home\"  data-events=\"click: menuClickCount;\"  class=\"nav switch <%if(url.hash=='home' || !url.hash){%>active<%}%>\"><span>首页</span></a>\n                <a href=\"#promotions\" class=\"nav switch <%if(url.hash=='promotions'){%>active<%}%>\"><span>优惠</span></a>\n                <!-- <a href=\"#proxy\" class=\"nav switch <%if(url.hash=='proxy'){%>active<%}%>\"><span>赚钱分成</span></a> -->\n                <!-- <a href=\"#mobile\" class=\"nav switch <%if(url.hash=='mobile'){%>active<%}%>\"><span>手机版</span></a> -->\n                <a href=\"#alipay_manual?pid=transaction\" class=\"nav switch <%if(search.pid=='transaction'){%>active<%}%>\"><span>充值提款</span></a>\n                <a class=\"nav\" pop=\"contact\"><span>在线客服</span></a>\n            </nav>\n            <div class=\"col-right unLogin\" data-element=\"unLoginNode\">\n                <a data-events=\"click: registerClickCount;\" class=\"btn btn-prime\" pop=\"register\">注册</a>\n                <a data-events=\"click: loginClickCount;\" class=\"btn btn-prime\" pop=\"login\">登录</a>\n            </div>\n            <div class=\"col-right login\" data-element=\"loginNode\">\n                <a class=\"btn btn-prime\" href=\"#overview?pid=1\">账户中心</a>\n                <a class=\"btn btn-prime\" data-events=\"click:logout;\">退出</a>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/popup/popup.login.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-login\">\n            <div class=\"head\"><p>登录账号</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\">\n                <form data-element=\"formNode\">\n                    <div class=\"UI-input-box\">\n                        <label for=\"username\"><i class=\"icon icon-controller\"></i><span>游戏账号:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"username\" name=\"name\" v-input=\"name\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"password\"><i class=\"icon icon-lock\"></i><span>游戏密码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"password\" name=\"password\" v-input=\"password\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\" style=\"display: none\" data-element=\"captchaNode\">\n                        <label for=\"captcha\"><i class=\"icon icon-shield\"></i><span>验证码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"captcha\" name=\"captcha\" placeholder=\"请填写4位验证码\" v-input=\"captcha\">\n                            <img src=\"\" alt=\"\" data-element=\"validImg\" class=\"validImg\" data-events=\"click:checkValidCode;\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"submit\" class=\"submit\" value=\"登录\">\n                    </div>\n                </form>\n                <div class=\"row foot\">\n                    <div class=\"col-4\">\n                        <a data-events=\"click: openRegisterPopup;\">注册账号</a>\n                    </div>\n                    <div class=\"col-4\">\n                        <a target=\"_blank\" href=\"<%=data.getPlatformDetails.csUrl%>\" >忘记密码</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/popup/popup.loginbyphone.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-login popup-loginbyphone\">\n            <div class=\"head\"><p>登录账号</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\">\n                <form data-element=\"formNode\">\n                    <div class=\"UI-input-box\">\n                        <label for=\"phoneNum\"><i class=\"icon icon-phone\"></i><span>手机号码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"phoneNum\" name=\"phoneNumber\" v-input=\"phoneNumber\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"smsCode\"><i class=\"icon icon-shield\"></i><span>验证码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" name=\"smsCode\" id=\"smsCode\" placeholder=\"请填写4位验证码\">\n                            <div class=\"UIButton\" data-events=\"click: phoneCode;\">\n                                <div>获取手机验证码</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"submit\" class=\"submit\" value=\"登录\">\n                    </div>\n                    <div class=\"row foot\">\n                        <div class=\"col-4\">\n                            <a data-events=\"click: switchLoginByNormal;\">账号登陆</a>\n                        </div>\n                        <div class=\"col-4\">\n                            <a data-events=\"click: openRegisterPopup;\">注册账号</a>\n                        </div>\n                        <div class=\"col-4\">\n                            <a href=\"<%=data.getPlatformDetails.csUrl%>\" target=\"_blank\">忘记密码</a>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>","js/model/popup/popup.register.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-register\">\n            <div class=\"head\"><p>注册账号</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\">\n                <form data-element=\"formNode\">\n                    <div class=\"UI-input-box\">\n                        <label for=\"account\"><i class=\"icon icon-controller\"></i>\n                          <span style=\"\n                              width: auto;\n                              color: red;\n                          \">*</span>\n                          <span style=\"margin-left: 0;\">申请账号</span><b>:</b></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"account\" name=\"name\" placeholder=\"请使用6-20位小写英文字母与数字组合\" v-input=\"account\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"password\"><i class=\"icon icon-lock\"></i>\n                          <span style=\"\n                              width: auto;\n                              color: red;\n                          \">*</span>\n                          <span style=\"margin-left: 0;\">申请密码</span><b>:</b></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"请输入6-20位密码\" v-input=\"password\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"confirmPassword\"><i class=\"icon icon-lock\"></i>\n                          <span style=\"\n                              width: auto;\n                              color: red;\n                          \">*</span>\n                          <span style=\"margin-left: 0;\">确认密码</span><b>:</b></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"请重覆输入6-20位密码\" v-input=\"confirmPassword\">\n                        </div>\n                    </div>\n                    <!-- <div class=\"UI-input-box\">\n                        <label for=\"realName\"><i class=\"icon icon-person\"></i>\n                          <span style=\"\n                              width: auto;\n                              color: red;\n                          \">*</span>\n                          <span style=\"margin-left: 0;\">会员姓名</span><b>:</b></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"realName\" name=\"realName\" placeholder=\"会员姓名必须与提款帐户姓名一致\" v-input=\"realName\">\n                        </div>\n                    </div> -->\n                    <div class=\"UI-input-box\">\n                        <label for=\"email\"><i class=\"icon icon-email\"></i><span>邮箱</span><b>:</b></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"请输入正确的电子邮箱地址\" v-input=\"email\">\n                        </div>\n                    </div>\n                    <!-- <div class=\"UI-input-box\">\n                        <label for=\"phoneNum\"><i class=\"icon icon-phone\"></i><span>手机号码</span><b>:</b></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"phoneNum\" name=\"phoneNumber\" placeholder=\"手机号码是更改资料和找回密码的唯一途径\" v-input=\"phoneNumber\">\n                        </div>\n                    </div> -->\n                    <!-- <div class=\"UI-input-box\">\n                        <label for=\"smsCode\"><i class=\"icon icon-shield\"></i><span>验证码</span><b>:</b></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"smsCode\" name=\"smsCode\" placeholder=\"请填写4位验证码\" v-input=\"validCode\">\n                            <div class=\"UIButton\" data-events=\"click:phoneCode\">\n                                <div>获取手机验证码</div>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!--<div class=\"UI-input-box\">-->\n                        <!--<label for=\"validCode\"><i class=\"icon icon-shield\"></i><span>验证码:</span></label>-->\n                        <!--<div class=\"right-side\">-->\n                            <!--<input type=\"text\" id=\"validCode\" placeholder=\"请填写4位验证码\" v-input=\"validCode\">-->\n                            <!--<img src=\"\" alt=\"\" data-element=\"validImg\" class=\"validImg\" data-events=\"click:checkValidCode;\">-->\n                        <!--</div>-->\n                    <!--</div>-->\n                    <div class=\"UI-input-box\">\n                        <label for=\"recommend\"><i class=\"icon icon-recommend\"></i><span>推荐人:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"recommend\" placeholder=\"没有则无需填写\" v-input=\"recommend\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"submit\" class=\"submit\" value=\"立即申请\">\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/popup/popup.headportrait.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-headportrait\">\n            <div class=\"head\"><p>修改头像</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\">\n                <div class=\"photos-group\" data-element=\"photosGroupNode\">\n                    <div class=\"row\">\n                        <div class=\"photo-box\"><img src=\"images/portrait/1.jpg?v=49325cdf51\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/2.jpg?v=e425c77e99\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/3.jpg?v=232f98e5b9\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/4.jpg?v=f31936ac83\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/5.jpg?v=cd843f34da\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/6.jpg?v=3b8677d362\"></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"photo-box\"><img src=\"images/portrait/7.jpg?v=6b0224a674\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/8.jpg?v=3ff5047f70\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/9.jpg?v=c2813ccb02\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/10.jpg?v=bead9ba286\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/11.jpg?v=70d7cf0f82\"></div>\n                        <div class=\"photo-box\"><img src=\"images/portrait/12.jpg?v=c7f94f18e5\"></div>\n                    </div>\n                </div>\n                <button class=\"submit\" data-events=\"click: onSubmit;\">确认</button>\n            </div>\n        </div>\n    </div>\n</div>","js/model/popup/popup.contact.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-contact\">\n            <div class=\"popup-title\"><h2>在线客服</h2><i class=\"icon icon-popup-close-2\" data-events=\"click: close;\"></i></div>\n            <div class=\"popup-body\">\n                <div class=\"row\">\n                    <a class=\"contact-block\" href=\"<%=data.getPlatformDetails.csUrl%>\" target=\"_blank\">\n                        <i class=\"icon icon-online-chat\"></i>\n                        <div class=\"col-right\">\n                            <p class=\"lh45\">在线客服</p>\n                        </div>\n                    </a>\n                    <div class=\"contact-block\" data-element=\"contactByQQNode\">\n                        <i class=\"icon icon-qq\" qq=\"<%=data.firstQQ%>\"></i>\n                        <div class=\"col-right\" >\n                            <p><span qq=\"<%=data.firstQQ%>\">QQ客服</span></p>\n                            <% for (var i = 0; i < data.csQQData.length; i++) { %>\n                                <span qq=\"<%=data.csQQData[i]%>\"><%=data.csQQData[i]%></span>\n                            <% } %>\n                        </div>\n                    </div>\n                    <a class=\"contact-block\" target=\"_blank\">\n                        <!-- <i class=\"icon icon-wechat\"></i> -->\n                        <div class=\"col-right\">\n                            <center>\n                              <p>微信客服</p>\n                              <img src=\"images/bannerQr7.jpg?v=137bdb96f0\" width=\"100\" height=\"100\">\n                              <span><%=data.getPlatformDetails.csWeixin%></span>\n                            </center>\n                        </div>\n                    </a>\n                    <!-- <div class=\"contact-block\"> -->\n                        <!-- <a href=\"skype:<%=data.getPlatformDetails.csPhone%>?call\">\n                            <i class=\"icon icon-call\"></i>\n                            <div class=\"col-right\">\n                                <p>电话客服</p>\n                                <span><%=data.getPlatformDetails.csPhone%></span>\n                            </div>\n                        </a> -->\n                    <!-- </div> -->\n                </div>\n            </div>\n            <div class=\"popup-footer\">\n                <div class=\"row\">\n                    <div class=\"contact-block\">\n                        <i class=\"icon icon-recall\"></i>\n                        <div class=\"col-right\">\n                            <p>免费热线回拨</p>\n                        </div>\n                    </div>\n                </div>\n                <form data-element=\"formNode\">\n                    <% var userInfo = $mcm().cache.getUserInfoFromCache(); %>\n                    <div class=\"UI-input-box\"><input type=\"number\" placeholder=\"手机号\" name=\"phone\" value=\"<%=userInfo?userInfo.phoneNumber:''%>\"></div>\n                    <div class=\"UI-input-box\"><input type=\"text\" placeholder=\"验证码\" name=\"captcha\"><img src=\"<%=getCode();%>\" data-events=\"click: changeCode;\" class=\"code\"></div>\n                    <input type=\"submit\" class=\"btn btn-submit\" value=\"确定\">\n                </form>\n                <p class=\"tips\">温馨提示 : 回拨为注册电话，点击号码回拨即可， 如果回拨不是注册电话，请输入最新电话，点击回拨.</p>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/ptLogin.html":"<div class=\"ptLogin\">\n    <div class=\"table-cell\">\n        <div class=\"area\">\n            <div class=\"content\">\n                <div class=\"logo\">\n                    <img src=\"images/logo.png?v=66b01a55fb\" alt=\"\">\n                </div>\n                <form data-element=\"formNode\">\n                    <table>\n                        <tr>\n                            <td>\n                                <div class=\"text\">\n                                    <label for=\"name\">账号名称</label><input type=\"text\" class=\"UI-Input\" id=\"name\" name=\"name\" v-input=\"name\">\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div class=\"text\">\n                                    <label for=\"password\">账号密码</label><input type=\"password\" class=\"UI-Input\" id=\"password\" name=\"password\" v-input=\"password\">\n                                </div>\n                            </td>\n                        </tr>\n                        <tr style=\"display: none;\" data-element=\"captchaNode\">\n                            <td>\n                                <div class=\"text\">\n                                    <label for=\"captcha\">验证码</label><input type=\"text\" maxlength=\"\" class=\"UI-Input\" id=\"captcha\" name=\"captcha\" v-input=\"captcha\" placeholder=\"请填写4位验证码\">\n                                    <img src=\"\" alt=\"\" data-element=\"validImg\" class=\"validImg\" data-events=\"click:checkValidCode;\">\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <input type=\"submit\" class=\"submit\" value=\"\">\n                            </td>\n                        </tr>\n                    </table>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>","js/model/home.html":"<div class=\"page-home\">\n    <div class=\"topside-wrap row\">\n        <div class=\"col-left\">\n            <a class=\"btn btn-register\" data-events=\"click: openRegisterPopup;\"></a>\n            <a class=\"btn btn-download enter-game\" data-events=\"click: play;\"></a>\n        </div>\n        <div class=\"col-right\">\n            <img src=\"images/download-qr.jpg?v=3b87982c14\" class=\"wechat-code\">\n        </div>\n    </div>\n    <div class=\"page-inner-wrapper\">\n        <div class=\"announcement-wrap row\">\n            <div class=\"col-left\">\n                <i class=\"icon icon-chat\"></i><span class=\"label\">游戏公告：</span>\n            </div>\n            <div class=\"bfe-node\">\n                <div id=\"broadcast-holder\" class=\"announcement-view broadcast\"  data-element=\"broadcastNode\"></div>\n            </div>\n        </div>\n        <div class=\"game-lab-wrap row\">\n            <div class=\"col-left\">\n                <div class=\"game-banner\">\n                    <img src=\"images/game1.jpg?v=cff4ac5a3f\">\n                    <a data-gameId=\"EBETFISH\" data-events=\"click:play;\">进入游戏</a>\n                </div>\n            </div>\n            <!-- <div class=\"col-right\">\n                <div class=\"game-download-link\">\n                    <a href=\"http://hunter2.agmjs.com/\" class=\"btn btn-green\">\n                        <i class=\"icon icon-download-green\"></i>\n                        <span>捕鱼皇<br><b>手机APP下载</b></span>\n                    </a>\n                    <a href=\"\" class=\"btn btn-orange\">\n                        <i class=\"icon icon-download-orange\"></i>\n                        <span>捕鱼皇<br><b>单独APP下载</b></span>\n                    </a>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>\n","js/model/openGame.html":"<div class=\"openGame\">\n    <div class=\"gameWrap\">\n        <div class=\"block\"></div>\n        <iframe src=\"\" frameborder=\"0\" data-element=\"gameNode\"></iframe>\n    </div>\n</div>","js/model/transaction.html":"<div class=\"page-transaction\">\n    <div class=\"page-inner-wrapper\">\n        <div class=\"page-switch-nav\">\n            <a href=\"#wechatpay_manual?pid=transaction\" class=\"active\">充值</a>\n            <a href=\"#withdrawals?pid=transaction\">提款</a>\n        </div>\n        <div class=\"page-inner-container\">\n            <div class=\"content page-deposit\">\n                <div class=\"left-sidebar\" data-element=\"navBarNode\">\n                    <% var url = $tool().url(); %>\n                    <!-- <a href=\"#wechatpay?pid=transaction\" <%if(url.hash==\"wechatpay\"){%>class=\"active\"<%}%>><i class=\"icon icon-sm-wechat\"></i><span>微信扫码充值</span></a> -->\n                    <a href=\"#alipay_manual?pid=transaction\" <%if(url.hash==\"alipay_manual\"){%>class=\"active\"<%}%>><i class=\"icon icon-sm-alipay\"></i><span>支付宝手工充值</span></a>\n                    <a href=\"#wechatpay_manual?pid=transaction\" <%if(url.hash==\"wechatpay_manual\"){%>class=\"active\"<%}%>><i class=\"icon icon-sm-wechat\"></i><span>微信充值</span></a>\n                    <!-- <a href=\"#alipay?pid=transaction\" <%if(url.hash==\"alipay\"){%>class=\"active\"<%}%>><i class=\"icon icon-sm-alipay\"></i><span>支付宝扫码充值</span></a> -->\n                    <a href=\"#onlinepay?pid=transaction\" <%if(url.hash==\"onlinepay\"){%>class=\"active\"<%}%>><i class=\"icon icon-sm-unionpay\"></i><span>在线支付</span></a>\n                    <!-- <a href=\"#unionpay?pid=transaction\" <%if(url.hash==\"unionpay\"){%>class=\"active\"<%}%>><i class=\"icon icon-sm-unionpay\"></i><span>在线支付(支持信用卡)</span></a> -->\n                    <a href=\"#bankpay?pid=transaction\" <%if(url.hash==\"bankpay\"){%>class=\"active\"<%}%>><i class=\"icon icon-sm-bank\"></i><span>手工存款</span></a>\n                </div>\n                <div class=\"main-content\" id=\"mainContent\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/deposit/page.wechatpay.html":"<div class=\"page-wechatpay\">\n    <% if (1) { %>\n    <form class=\"submit-form\" data-element=\"formNode\">\n        <div class=\"tips-node\"><span>友情提示：</span>单笔限额最低50元，单笔支付限额最高<%=data.amountLimit.singleLimitList.wechat%>元，单日最高上限10万元。</div>\n        <div class=\"p32\">\n            <div class=\"row\">\n                <div class=\"col-left\">\n                    <span class=\"img-scan\"></span>\n                    <div class=\"input-row\">\n                        <label for=\"amount\">充值金额：</label>\n                        <div class=\"UI-input-box\"><input type=\"number\" id=\"amount\" name=\"amount\" v-input=\"amount\"></div>\n                    </div>\n                    <button class=\"btn btn-submit\">提交</button>\n                </div>\n                <div class=\"col-right\">\n                    <img src=\"images/scan-wechat.png?v=0b36e60a76\" class=\"scan-wechat\">\n                </div>\n            </div>\n            <div class=\"footnote\">\n                <h5>微信扫描二维码支付</h5>\n                <p>请于以上“充值金额”处填写您需要充值的金额，然后点击提交，跳转到二维码页面后，打开微信，点击右上角的+号，使用扫一扫功能扫描网页上的二维码并付款后就充值成功啦！</p>\n            </div>\n        </div>\n    </form>\n    <% } else { %>\n    <div class=\"results-view\">\n        <div class=\"tips-node\"><span>温馨提示：</span>下方将出现您充值的详情，提供会员核对充值金额是否到帐。如遇网路延迟，请点击刷新按钮，谢谢。</div>\n        <div class=\"p32\">\n            <div class=\"results-view\">\n                <ul class=\"order-details\">\n                    <li><span class=\"label\">单号 :</span><span>2016061100302</span></li>\n                    <li><span class=\"label\">时间：</span><span>6月11日17:50</span></li>\n                    <li><span class=\"label\">金额：</span><span class=\"blue\">100.00</span></li>\n                    <li><span class=\"label\">有效：</span><span class=\"blue\">00:50分钟</span></li>\n                    <li><span class=\"label\">状态：</span><span class=\"blue\">审核中...</span></li>\n                    <li>\n                        <span class=\"label\">操作：</span>\n                        <button class=\"btn btn-submit\">刷新</button>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"footnote\">\n                <h5>微信扫描二维码支付</h5>\n                <p>请于以上“充值金额”处填写您需要充值的金额，然后点击提交，跳转到二维码页面后，打开微信，点击右上角的+号，使用扫一扫功能扫描网页上的二维码并付款后就充值成功啦！</p>\n            </div>\n        </div>\n    </div>\n    <% } %>\n</div>","js/model/deposit/page.wechatpay.manual.html":"<div class=\"page-wechatpay-manual\">\n    <form class=\"submit-form\" data-element=\"formNode\">\n        <div class=\"tips-node\"><span>友情提示：</span>请于下方栏位输入充值金额、支付宝姓名/昵称，确认无误后点击提交，系统将会自动生成支付宝帐户，您可使用手机支付宝扫一扫支付，或登入支付宝网页转帐。</div>\n        <div class=\"p32 pl145 pt40\">\n            <div class=\"input-row\">\n                <label for=\"amount\">充值金额</label><b>：</b>\n                <div class=\"UI-input-box\"><input type=\"number\" id=\"amount\" name=\"amount\"></div>\n            </div>\n            <button class=\"btn btn-submit\">提交</button>\n        </div>\n    </form>\n    <div class=\"results-view\" data-element=\"resultNode\">\n        <div class=\"tips-node\"><span>温馨提示：</span>提交存款申请，系统会自动分配收款账号.手机扫码支付或网页转账指定账号.财务部门审核后添加额度至您的游戏帐号.</div>\n        <table class=\"records-list\">\n            <tr>\n                <th>申请单号</th>\n                <th>申请时间</th>\n                <th>有效时间</th>\n                <th>申请金额</th>\n                <th>当前状态</th>\n                <th>操作</th>\n            </tr>\n            <tr>\n                <td v-param=\"proposalId\"></td>\n                <td v-param=\"createTime\">6月11日17:50</td>\n                <td v-param=\"validTime\"><span class=\"blue\">1小时</span></td>\n                <td v-param=\"amount\"><span class=\"blue\">100000</span></td>\n                <td v-param=\"status\"><span class=\"blue\">审核中...</span></td>\n                <td><button class=\"btn btn-submit\" data-events=\"click: cancelOrder;\">取消</button></td>\n            </tr>\n        </table>\n        <div class=\"row row-center\">\n            <div class=\"col-6\">\n                <div class=\"payment-node\">\n                    <h5>手机扫码支付</h5>\n                    <div class=\"payment-content\">\n                        <img class=\"qr-code\" data-element=\"QRCodeNode\">\n                    </div>\n                    <div class=\"foot\">\n                        <p>1. 开启微信支付『扫一扫』。</p>\n                        <p>2. 扫描上方二维码进行转帐。</p>\n                        <p>3. 请于备注栏位输入您的游戏帐号以便自动匹配。</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"payment-node\">\n                    <h5>微信网站支付</h5>\n                    <div class=\"payment-content\">\n                        <div class=\"payment-info\">\n                            <!-- <a href=\"https://www.alipay.com/\" target=\"_blank\">\n                                <img src=\"images/alipayLogo.png?v=5f74decf28\" alt=\"\">\n                            </a> -->\n                            <p>账号：<span v-param=\"weChatAccount\"></span><span v-param=\"wechatAccount\"></span></p>\n                            <p>姓名：<span v-param=\"weChatName\"></span><span v-param=\"wechatName\"></span></p>\n                        </div>\n                    </div>\n                    <div class=\"foot\">\n                        <p>1. 前往微信官网。</p>\n                        <p>2. 向上方微信帐户转帐。</p>\n                        <p>3. 请于备注栏位填入您的游戏帐号以便自动匹配。</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/deposit/page.alipay.manual.html":"<div class=\"page-alipay-manual\">\n    <form class=\"submit-form\" data-element=\"formNode\">\n        <div class=\"tips-node\"><span>友情提示：</span>请于下方栏位输入充值金额、支付宝姓名/昵称，确认无误后点击提交，系统将会自动生成支付宝帐户，您可使用手机支付宝扫一扫支付，或登入支付宝网页转帐。</div>\n        <div class=\"p32 pl145 pt40\">\n            <div class=\"input-row\">\n                <label for=\"amount\">充值金额</label><b>：</b>\n                <div class=\"UI-input-box\"><input type=\"number\" id=\"amount\" name=\"amount\"></div>\n            </div>\n            <div class=\"input-row\">\n                <label for=\"account\">支付宝姓名</label><b>：</b>\n                <div class=\"UI-input-box\"><input type=\"text\" id=\"account\" name=\"alipayName\"></div>\n                <span class=\"tips\">请输入您的支付宝账号或支付宝账户昵称</span>\n            </div>\n            <button class=\"btn btn-submit\">提交</button>\n        </div>\n    </form>\n    <div class=\"results-view\" data-element=\"resultNode\">\n        <div class=\"tips-node\"><span>温馨提示：</span>提交存款申请，系统会自动分配收款账号.手机扫码支付或网页转账指定账号.财务部门审核后添加额度至您的游戏帐号.</div>\n        <table class=\"records-list\">\n            <tr>\n                <th>申请单号</th>\n                <th>申请时间</th>\n                <th>有效时间</th>\n                <th>申请金额</th>\n                <th>当前状态</th>\n                <th>操作</th>\n            </tr>\n            <tr>\n                <td v-param=\"proposalId\"></td>\n                <td v-param=\"createTime\">6月11日17:50</td>\n                <td v-param=\"validTime\"><span class=\"blue\">1小时</span></td>\n                <td v-param=\"amount\"><span class=\"blue\">100000</span></td>\n                <td v-param=\"status\"><span class=\"blue\">审核中...</span></td>\n                <td><button class=\"btn btn-submit\" data-events=\"click: cancelOrder;\">取消</button></td>\n            </tr>\n        </table>\n        <div class=\"row row-center\">\n            <div class=\"col-6\">\n                <div class=\"payment-node\">\n                    <h5>手机扫码支付</h5>\n                    <div class=\"payment-content\">\n                        <img class=\"qr-code\" data-element=\"QRCodeNode\">\n                    </div>\n                    <div class=\"foot\">\n                        <p>1. 开启手机支付宝『扫一扫』。</p>\n                        <p>2. 扫描上方二维码进行转帐。</p>\n                        <p>3. 请于备注栏位输入您的游戏帐号以便自动匹配。</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"payment-node\">\n                    <h5>支付宝网站支付</h5>\n                    <div class=\"payment-content\">\n                        <div class=\"payment-info\">\n                            <a href=\"https://www.alipay.com/\" target=\"_blank\">\n                                <img src=\"images/alipayLogo.png?v=5f74decf28\" alt=\"\">\n                            </a>\n                            <p>账号：<span v-param=\"alipayAccount\"></span></p>\n                            <p>姓名：<span v-param=\"alipayName\"></span></p>\n                        </div>\n                    </div>\n                    <div class=\"foot\">\n                        <p>1. 点击支付宝LOGO前往登录支付宝官网。</p>\n                        <p>2. 向上方支付宝帐户转帐。</p>\n                        <p>3. 请于备注栏位填入您的游戏帐号以便自动匹配。</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>","js/model/deposit/page.unionpay.html":"<div class=\"page-unionpay\">\n    <% if (1) { %>\n    <form action=\"\" class=\"submit-form\">\n        <div class=\"tips-node\"><span>友情提示：</span>请于下方『充值金额』框架输入您所需要充值的金额，点击提交（最低充值金额50元人民币）。确认提交后，将新开充值页面，请依照页面提示一步步操作至扣款成功。</div>\n        <span class=\"img-computer\"></span>\n        <div class=\"input-row\">\n            <div class=\"inputArea\">\n                <label for=\"amount\">充值金额：</label>\n                <input type=\"number\" id=\"amount\" name=\"amount\" v-input=\"amount\" class=\"UI-Input\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <button class=\"btn btn-submit\">提交</button>\n        </div>\n    </form>\n    <% } else { %>\n    <div class=\"tips-node\"><span>温馨提示：</span>下方将出现您充值的详情，提供会员核对充值金额是否到帐。如遇网路延迟，请点击刷新按钮，谢谢。</div>\n    <div class=\"results-view\">\n        <ul class=\"order-details\">\n            <li><span class=\"label\">单号 :</span><span>2016061100302</span></li>\n            <li><span class=\"label\">时间：</span><span>6月11日17:50</span></li>\n            <li><span class=\"label\">金额：</span><span class=\"blue\">100.00</span></li>\n            <li><span class=\"label\">有效：</span><span class=\"blue\">00:50分钟</span></li>\n            <li><span class=\"label\">状态：</span><span class=\"blue\">审核中...</span></li>\n            <li>\n                <span class=\"label\">操作：</span>\n                <button class=\"btn btn-submit\">刷新</button>\n            </li>\n        </ul>\n    </div>\n    <div class=\"footnote\">\n        <h5>微信扫描二维码支付</h5>\n        <p>请于以上“充值金额”处填写您需要充值的金额，然后点击提交，跳转到二维码页面后，打开微信，点击右上角的+号，使用扫一扫功能扫描网页上的二维码并付款后就充值成功啦！</p>\n    </div>\n    <% } %>\n</div>","js/model/deposit/page.onlinepay.html":"<div class=\"page-onlinepay\">\n    <% if (1) { %>\n    <form data-element=\"formNode\" class=\"submit-form\">\n        <div class=\"tips-node\"><span>友情提示：</span><%=onlineTopupListTXT %></div>\n        <span class=\"img-computer\"></span>\n        <div class=\"form-group\" style=\"margin-top:10px;\">\n          <% for(var i = 0,len = data.onlineTopupType.length;i < len;i++ ){%>\n          <!-- <div ng-class=\"{'cashinout-bigBtn1': key%3===0, 'cashinout-bigBtn2': key%3===1, 'cashinout-bigBtn3': key%3===2 }\" ng-repeat=\"(key, topupType) in data.onlineTopupType\"> -->\n            <input type=\"number\" style=\"display:none\" name=\"topupType\" value=\"<%=data.onlineTopupType[i].type%>\">\n            <div data-events=\"click:choosetopup\"  data-id=\"<%=data.onlineTopupType[i].type%>\" class=\"btn btn-submit-online btn-primary y font10 btn-block payButton\">\n            <span class=\"<%=data.onlineTopupType[i].icon%>\"></span><%=data.onlineTopupType[i].name%></div>\n          </button>\n          <!-- </div> -->\n         <% } %>\n        </div>\n        <div class=\"input-row\" style=\"margin-top:20px;\">\n            <div class=\"inputArea\">\n                <label for=\"amount\">充值金额：</label>\n                <input type=\"number\" id=\"amount\" name=\"amount\" v-input=\"amount\" class=\"UI-Input\" style=\"height:36px;\">\n            </div>\n        </div>\n        <div class=\"row\" style=\"margin-top:10px;\">\n            <button class=\"btn btn-submit\">提交</button>\n        </div>\n    </form>\n    <% } else { %>\n    <div class=\"tips-node\"><span>温馨提示：</span>下方将出现您充值的详情，提供会员核对充值金额是否到帐。如遇网路延迟，请点击刷新按钮，谢谢。</div>\n    <div class=\"results-view\">\n        <ul class=\"order-details\">\n            <li><span class=\"label\">单号 :</span><span>2016061100302</span></li>\n            <li><span class=\"label\">时间：</span><span>6月11日17:50</span></li>\n            <li><span class=\"label\">金额：</span><span class=\"blue\">100.00</span></li>\n            <li><span class=\"label\">有效：</span><span class=\"blue\">00:50分钟</span></li>\n            <li><span class=\"label\">状态：</span><span class=\"blue\">审核中...</span></li>\n            <li>\n                <span class=\"label\">操作：</span>\n                <button class=\"btn btn-submit\">刷新</button>\n            </li>\n        </ul>\n    </div>\n    <div class=\"footnote\">\n        <h5>微信扫描二维码支付</h5>\n        <p>请于以上“充值金额”处填写您需要充值的金额，然后点击提交，跳转到二维码页面后，打开微信，点击右上角的+号，使用扫一扫功能扫描网页上的二维码并付款后就充值成功啦！</p>\n    </div>\n    <% } %>\n</div>\n","js/model/deposit/page.bankpay.html":"<%\n    var business = $business();\n    var depositedOrderInfo = data.topupRequest ? data.topupRequest.data : false;\n%>\n<div class=\"page-bankpay\">\n    <div class=\"tips-node\"><span>友情提示：</span>提交存款申请后，系统将自动显示最新收款帐户，您可使用网银转帐、ATM自动柜员机、银行人工柜台存款至我们指定的收款帐户。</div>\n    <div class=\"p32\">\n        <form class=\"submit-form \" data-element=\"formNode\">\n            <div class=\"input-row\">\n                <label for=\"depositMode\">付款方式：</label>\n                <div class=\"UI-input-box\">\n                    <select id=\"depositMode\" name=\"depositMethod\" data-events=\"change:loadFilter\">\n                        <% for (var i = 0; i < business.depositMethod.length; i++) { %>\n                        <option value=\"<%=i%>\" <%if(depositedOrderInfo && (depositedOrderInfo.depositMethod == i)){%>selected=\"selected\"<%}%>><%=business.depositMethod[i]%></option>\n                        <% } %>\n                    </select>\n                </div>\n            </div>\n            <div class=\"input-row\" id=\"bankAccountTypeDiv\">\n                <label for=\"bankAccountType\">收款银行：</label>\n                <div class=\"UI-input-box\">\n                    <select id=\"bankAccountType\" name=\"bankTypeId\">\n                        <option></option>\n                        <%\n                        data.bankListData.forEach(function(item){\n                        %>\n                          <option value=\"<%=item.id%>\" <%if(depositedOrderInfo && (depositedOrderInfo.bankTypeId == item.id)){%>selected=\"selected\"<%}%>><%=item.name%></option>\n                            <!-- <%=item.name%></option> -->\n                        <%\n                          })\n                        %>\n                    </select>\n                </div>\n            </div>\n            <div class=\"input-row\">\n                <label for=\"lastBankcardNo\">付款账号：</label>\n                <div class=\"UI-input-box\"><input type=\"text\" name=\"lastBankcardNo\" id=\"lastBankcardNo\" maxlength=\"3\" placeholder=\"账号后3位\" value=\"<%=depositedOrderInfo ? depositedOrderInfo.lastBankcardNo : ''%>\"></div>\n            </div>\n            <div class=\"input-row\">\n                <label for=\"realName\">付款姓名：</label>\n                <div class=\"UI-input-box\"><input type=\"text\" id=\"realName\" name=\"realName\" value=\"<%=depositedOrderInfo ? depositedOrderInfo.realName : ''%>\"></div>\n            </div>\n            <div class=\"input-row address-node\" data-element=\"addressNode\">\n                <label for=\"Province\">存款网点：</label>\n                <div class=\"UI-input-box\"><select id=\"province\" name=\"provinceId\"></select></div>\n                <div class=\"UI-input-box\"><select id=\"city\" name=\"cityId\"></select></div>\n                <div class=\"UI-input-box\"><select id=\"area\" name=\"districtId\"></select></div>\n            </div>\n            <div class=\"input-row\">\n                <label for=\"amount\">存款金额：</label>\n                <div class=\"UI-input-box max-width\"><input type=\"number\" id=\"amount\" name=\"amount\" value=\"<%=depositedOrderInfo ? depositedOrderInfo.amount : ''%>\"></div>\n            </div>\n            <button class=\"btn btn-submit\">提交</button>\n        </form>\n        <div class=\"results-view\" data-element=\"resultNode\">\n            <div class=\"row\">\n                <div class=\"col-left\">\n                    <ul class=\"order-details\">\n                        <li><span class=\"label\">单号 :</span><span v-param=\"proposalId\"></span></li>\n                        <li><span class=\"label\">时间：</span><span v-param=\"createTime\"></span></li>\n                        <li><span class=\"label\">金额：</span><span v-param=\"amount\" class=\"blue\"></span></li>\n                        <li><span class=\"label\">有效：</span><span v-param=\"validTime\" class=\"blue\"></span></li>\n                        <li><span class=\"label\">状态：</span><span v-param=\"status\" class=\"blue\"></span></li>\n                        <li>\n                            <span class=\"label\">操作：</span>\n                            <button class=\"btn btn-submit\" data-events=\"click: cancelOrder;\">取消</button>\n                            <button class=\"btn btn-submit\" data-events=\"click: applyCheckAgain;\">调整</button>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-right\">\n                    <div class=\"payment-node\">\n                        <h5>捕鱼皇收款银行信息</h5>\n                        <div class=\"p20\">\n                            <p><span>银行类型:</span><span class=\"bold\" v-param=\"payeeBankType\"></span></p>\n                            <p><span>开户户名:</span><span class=\"bold\" v-param=\"payeeName\"></span></p>\n                            <p><span>银行账号:</span><span class=\"bold\" v-param=\"payeeCardNo\"></span></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/deposit/page.alipay.html":"<div class=\"page-wechatpay\">\n    <% if (1) { %>\n    <form class=\"submit-form\" data-element=\"formNode\">\n        <div class=\"tips-node\"><span>友情提示：</span>单笔限额最低50元，单笔支付限额最高<%=data.amountLimit.singleLimitList.alipay%>元，单日最高上限10万元。</div>\n        <div class=\"p32\">\n            <div class=\"row\">\n                <div class=\"col-left\">\n                    <span class=\"img-scan\"></span>\n                    <div class=\"input-row\">\n                        <label for=\"amount\">充值金额：</label>\n                        <div class=\"UI-input-box\"><input type=\"number\" id=\"amount\" name=\"amount\" v-input=\"amount\"></div>\n                    </div>\n                    <button class=\"btn btn-submit\">提交</button>\n                </div>\n                <div class=\"col-right\">\n                    <img src=\"images/scan-alipay.png?v=67ae408716\" class=\"scan-wechat\">\n                </div>\n            </div>\n            <div class=\"footnote\">\n                <h5>支付宝扫描二维码支付</h5>\n                <p>请于以上“充值金额”处填写您需要充值的金额，然后点击提交，跳转到二维码页面后，打开支付宝，使用扫一扫功能扫描网页上的二维码并付款后就充值成功啦！</p>\n            </div>\n        </div>\n    </form>\n    <% } else { %>\n    <div class=\"results-view\">\n        <div class=\"tips-node\"><span>温馨提示：</span>下方将出现您充值的详情，提供会员核对充值金额是否到帐。如遇网路延迟，请点击刷新按钮，谢谢。</div>\n        <div class=\"p32\">\n            <div class=\"results-view\">\n                <ul class=\"order-details\">\n                    <li><span class=\"label\">单号 :</span><span>2016061100302</span></li>\n                    <li><span class=\"label\">时间：</span><span>6月11日17:50</span></li>\n                    <li><span class=\"label\">金额：</span><span class=\"blue\">100.00</span></li>\n                    <li><span class=\"label\">有效：</span><span class=\"blue\">00:50分钟</span></li>\n                    <li><span class=\"label\">状态：</span><span class=\"blue\">审核中...</span></li>\n                    <li>\n                        <span class=\"label\">操作：</span>\n                        <button class=\"btn btn-submit\">刷新</button>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"footnote\">\n                <h5>支付宝扫描二维码支付</h5>\n                <p>请于以上“充值金额”处填写您需要充值的金额，然后点击提交，跳转到二维码页面后，打开支付宝，使用扫一扫功能扫描网页上的二维码并付款后就充值成功啦！</p>\n            </div>\n        </div>\n    </div>\n    <% } %>\n</div>","js/model/withdrawals.html":"<%\n    var user = $mcm().cache.getUserInfoFromCache();\n%>\n<div class=\"page-transaction\">\n    <div class=\"page-inner-wrapper\">\n        <div class=\"page-switch-nav\">\n            <a href=\"#wechatpay_manual?pid=transaction\">充值</a>\n            <a href=\"#withdrawals?pid=transaction\" class=\"active\">提款</a>\n        </div>\n        <div class=\"page-inner-container\">\n            <div class=\"content page-withdrawals\">\n                <% if (user.bankAccount) { %>\n                <div class=\"input-row\">\n                    <label for=\"\">银行账号：</label>\n                    <div class=\"bank-info row\">\n                        <i class=\"icon icon-radio\"></i>\n                        <i class=\"icon icon-card\"></i>\n                        <%\n                            var bankName;\n                            for (var i = 0; i < data.bankList.length; i++) {\n                                if (user.bankName == data.bankList[i].id )\n                                bankName = data.bankList[i].name\n                            }\n                        %>\n                        <span class=\"bank-name\"><%=bankName%></span>\n                        <span>尾号：<%=user.bankAccount.slice(user.bankAccount.length-4, user.bankAccount.length);%></span>\n                        <div class=\"col-right\">\n                            <a href=\"#personal\"><span>查看</span><i class=\"arrow-right\"></i></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <form data-element=\"formNode\">\n                            <div class=\"input-row\"><label>可供提款金额：</label><span class=\"amount\" v-param=\"overage\">0.00</span></div>\n                            <div class=\"input-row\">\n                                <label for=\"amount\">提现金额：</label>\n                                <div class=\"UI-input-box\"><input type=\"number\" id=\"amount\" name=\"amount\" v-input=\"amount\"></div>\n                            </div>\n                            <!--<div class=\"input-row\">-->\n                                <!--<label for=\"isinform\">是否通知：</label>-->\n                                <!--<input type=\"checkbox\" id=\"isinform\">-->\n                                <!--<span>短信通知</span>-->\n                            <!--</div>-->\n                            <div class=\"input-row\">\n                                <label></label>\n                                <input type=\"submit\" class=\"btn btn-submit\" value=\"确认\">\n                            </div>\n                        </form>\n                    </div>\n                    <% if(data.reward){ %>\n                    <div class=\"col-6\">\n                        <div class=\"promotion-detail-wrapper\">\n                            <i class=\"icon icon-lock-gray\"></i>\n                            <span>优惠额度：<%=data.reward.currentAmount%></span>\n                            <div data-element=\"progressNode\"></div>\n                        </div>\n                    </div>\n                    <% } %>\n                </div>\n                <div class=\"footnote\">\n                    <h5>温馨提示</h5>\n                    <p>捕鱼皇单笔提款申请最低100元，最高无上限，7x24小时随时提款，所有5万元以下提款将在5分钟内支付（银行维护等特殊情况除外）。单笔提款最高20万元，如果您想提款更多，请分成多次提交，谢谢您的理解与支持。 </p>\n                    <p>※会员单日首次提款免手续费，单日第2次（含）以上，每次手续费1%，每日24时重置。</p>\n                </div>\n                <% } %>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/promotions.html":"<%\n    var parent = $getCommonVal();\n    var promotion = data.promotion;\n    var promoConfig = data.promoConfig.activity;\n    var promotionKeys = parent.Object.keys(promotion);\n%>\n<div class=\"page-promotions\">\n    <div class=\"page-inner-wrapper\">\n        <ul class=\"promotions-list\">\n            <% for (var i = 0; i < promotionKeys.length; i++) { %>\n            <li>\n                <div class=\"promotion-banner\">\n                    <img src=\"<%=promoConfig[promotionKeys[i]].img%>\">\n                </div>\n                <div class=\"promotion-title row\">\n                    <div class=\"col-left\">\n                        <h2><%=promoConfig[promotionKeys[i]].name%></h2>\n                    </div>\n                    <div class=\"col-right\">\n                        <button class=\"btn btn-prime\">详情</button>\n                    </div>\n                </div>\n                <div class=\"promotion-article-wrapper\"><div class=\"inner\"><%==promotion[promotionKeys[i]]%></div></div>\n            </li>\n            <% } %>\n        </ul>\n    </div>\n</div>\n","js/model/proxy.html":"<div class=\"page-proxy\">\n    <div class=\"page-inner-wrapper\">\n        <article>\n            <h4 class=\"mb30\">捕鱼皇赚钱分成！月入百万不是梦！</h4>\n            <p class=\"bold\">赚钱方式：</p>\n            <p>邀请朋友游玩捕鱼皇，朋友的输值的40%将作为您的奖金派发给您！</p>\n            <p class=\"mb30\">举例：朋友通过您的推广链接（或注册时推荐人一栏填写您的会员帐号）注册后成为您的下线会员并进行充值，充值1万元后输掉1万元，则您可以获得10000*40%=4000元的奖金！下线会员输值越多则您的奖金越多！ 输值为100万则您可以获得的奖金为40万！奖金无上限！</p>\n            <p class=\"bold\">奖金派发：</p>\n            <p>1：每月最低3名活跃下线玩家（充值500以上则算作活跃玩家）才可领取奖金。</p>\n            <p>2：每月最低奖金派发需要大于等于100元，低于100元的奖金则累积到下月派发。</p>\n            <p class=\"mb30\">3：每月5号24点前结算您上一个月的奖金并派发到您的游戏账号，派发的奖金您可以用来直接提款或者进行游戏。</p>\n            <p class=\"bold\">奖金计算公式：</p>\n            <p>下线会员总存款 - 下线会员总提款 = 奖金</p>\n            <p class=\"mb30\">举例：下线会员总存款10万元 - 下线会员总提款2万元 = 输值8万元 * 40% = 您的奖金为3万2千元</p>\n            <p>有关赚钱分成的问题请咨询邮箱:zhuanqian@buyuhuang.com 或直接联系客服</p>\n            <button class=\"btn btn-submit\" data-events=\"click: onClick;\">立即参与</button>\n        </article>\n    </div>\n</div>","js/model/mobile.html":"<div class=\"page-mobile\"></div>","js/model/account.html":"<% var user = $mcm().cache.getUserInfoFromCache(); %>\n<div class=\"page-account\">\n    <div class=\"banner-node\"></div>\n    <div class=\"page-inner-wrapper\">\n        <div class=\"sidebar-wrapper\">\n            <div class=\"top-node\">\n                <div class=\"head-portrait\" data-events=\"click: openPortraitPopup;\">\n                    <% if (user.photoUrl) { %>\n                    <img src=\"images/portrait/<%=user.photoUrl%>\" data-element=\"portraitNode\">\n                    <% } else { %>\n                    <img src=\"images/portrait/1.jpg?v=49325cdf51\" data-element=\"portraitNode\">\n                    <% } %>\n                </div>\n                <p align=\"center\" style=\"margin-bottom:5px;color:#58D3F7;\"><b><%= user.playerLevel.name || '' %></b></p>\n\n                <p v-param=\"name\">加载中</p>\n                <a href=\"#personal\" class=\"btn btn-prime\">基本资料</a>\n            </div>\n            <div class=\"nav-node\" data-element=\"navNode\">\n                <%\n                    var tool = $tool();\n                    var url = tool.getSearch();\n                    var pid = url.pid;\n                %>\n                <a href=\"#overview?pid=1\" class=\"link nav <%if(pid==1){%>active<%}%>\">账户中心</a>\n                <!--<a href=\"#\" class=\"link nav <%if(pid==1){%>active<%}%>\">申请优惠</a>-->\n                <a href=\"#transfer?pid=2\" class=\"link nav <%if(pid==2){%>active<%}%>\">游戏转账</a>\n                <a href=\"#report?pid=3\" class=\"link nav <%if(pid==3){%>active<%}%>\">记录查询</a>\n                <a href=\"#mailbox?pid=4\" class=\"link nav <%if(pid==4){%>active<%}%>\" id=\"mail\">站内信</a>\n                <!-- <div class=\"link drop-down\">\n                    <p class=\"<%if(pid>3){%>show<%}%>\" data-events=\"click:organMenu;\">赚钱分成</p>\n                    <div class=\"slide-node\">\n                        <a class=\"link nav <%if(pid==4){%>active<%}%>\" href=\"#fastsearch?pid=4\">快速查询</a>\n                        <a class=\"link nav <%if(pid==5){%>active<%}%>\" href=\"#created_records?pid=5\">开户分析</a>\n                        <a class=\"link nav <%if(pid==6){%>active<%}%>\" href=\"#commission?pid=6\">实时报表</a>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"content-wrapper\" id=\"contentNode\"></div>\n    </div>\n</div>\n","js/model/account/overview.html":"<% var win = $getCommonVal() %>\n<% var tool = $tool()%>\n<% var provide = $business().provider %>\n<% var info = $business() %>\n<div class=\"page-overview\">\n    <div class=\"section-title row\">\n        <span class=\"col-left\">中心钱包</span>\n        <div class=\"amount-setting col-left\">\n            <span class=\"amount\" v-param=\"totalCredit\">0.00</span>\n            <a class=\"btn btn-prime\" href=\"#alipay_manual\">充值</a>\n            <a class=\"btn btn-prime\" href=\"#withdrawals\">提现</a>\n            <a class=\"tips-node\" href=\"<%=data.getPlatformDetails.csUrl%>\" target=\"_blank\">\n                <i class=\"icon icon-question\"></i>\n                <span>余额有问题？请联系客服查询。</span>\n            </a>\n        </div>\n    </div>\n    <table class=\"section-table section-wrapper\">\n        <tr>\n            <th>游戏大厅</th>\n            <% data.providerList.forEach(function(provider){ %>\n            <th><span class=\"blue\"><%= provider['nickName'] || provider['name'] %></span></th>\n            <% }) %>\n        </tr>\n        <tr>\n            <td>游戏额度</td>\n            <% data.providerList.forEach(function(provider){ %>\n            <td><span class=\"blue bold\" v-param=\"<%=provider['name']%>\">获取中</span></td>\n            <% }) %>\n        </tr>\n    </table>\n    <% if(data.reward){ %>\n    <div class=\"section-promotion-information section-wrapper\">\n        <div class=\"section-head row\">\n            <span class=\"bold\">参与活动：</span>\n            <div class=\"active-promotion\">\n                <a><%=data.reward.eventId.name%></a>\n                <% var info = $business() %>\n                <% for(var i = 0,len = data.reward.targetProviders.length;i < len;i++){ %>\n                    <% var id = data.reward.targetProviders[i].providerId %>\n                    <% if(info.provider[id]){ %>\n                    <div class=\"label\"><span class=\"bold\"><%=info.provider[id]%></span></div>\n                    <% } %>\n                <% }%>\n            </div>\n            <div class=\"col-right\">\n                <a class=\"btn btn-normal\">活动记录</a>\n            </div>\n        </div>\n        <div class=\"section-body\">\n            <div class=\"row row-center mb30\">\n                <span class=\"label-progress\">有效投注:</span>\n                <div data-element=\"progressNode\" class=\"progress-wrapper\"></div>\n            </div>\n            <div class=\"row\">\n                <i class=\"icon icon-lock-black\"></i>\n                <span class=\"bold middle mr30\">优惠额度：<%=data.reward.currentAmount%></span>\n                <span class=\"bold middle blue\">账户总额：<span v-param=\"totalOverage\"></span></span>\n            </div>\n        </div>\n    </div>\n    <% } %>\n\n    <div class=\"section-title\"><span>提款申请</span></div>\n    <table class=\"section-table section-wrapper\">\n        <tr>\n            <th>申请单号</th>\n            <th>生成日期</th>\n            <th>申请金额</th>\n            <th>当前状态</th>\n            <th>操作</th>\n        </tr>\n        <% var withdraw = data.withdraw.records; %>\n        <% if(withdraw.length > 0){ %>\n            <% for(var i = 0,len = win.Math.min(withdraw.length,5);i < len;i++){ %>\n            <% var obj = withdraw[i]%>\n            <tr>\n                <td><%=obj.proposalId%></td>\n                <td><%=tool.transferDateToString(new win.Date(obj.createTime))%></td>\n                <td><span class=\"blue bold\"><%=tool.formatCurrency(obj.data.amount)%></span></td>\n                <td><span class=\"blue bold\"><%=info.orderStatus[obj.status]%></span></td>\n                <td><% if(obj.status == 'Pending'){ %><div class=\"UIButton\" data-events=\"click:cancelWithdraw\" data-id=\"<%=obj.proposalId%>\"><div>取消</div></div><% } %></td>\n            </tr>\n            <% } %>\n        <% }else{ %>\n            <tr>\n                <td colspan=\"5\">\n                    暂无记录\n                </td>\n            </tr>\n        <% } %>\n    </table>\n    <div class=\"section-title\"><span>存款提交</span></div>\n    <table class=\"section-table section-wrapper\">\n        <tr>\n            <th>申请单号</th>\n            <th>申请时间</th>\n            <th>有效时间</th>\n            <th>申请金额</th>\n            <th>当前状态</th>\n            <th>操作</th>\n        </tr>\n        <% if(data.saving){ %>\n        <tr>\n            <td><%=data.saving.proposalId%></td>\n            <td><%=tool.transferDateToString(new win.Date(data.saving.createTime))%></td>\n            <td><%=tool.transferDateToString(new win.Date(data.saving.data.validTime))%></td>\n            <td><span class=\"blue bold\"><%=tool.formatCurrency(data.saving.data.amount)%></span></td>\n            <td><span class=\"blue bold\"><%=info.orderStatus[data.saving.status]%></span></td>\n            <td><% if(data.saving.status == 'Pending'){%><div class=\"UIButton\" data-events=\"click:cancelSaving\" data-id=\"<%=data.saving.proposalId%>\"><div>取消</div></div><% } %></td>\n        </tr>\n        <% }else{ %>\n        <tr>\n            <td colspan=\"6\">暂无记录</td>\n        </tr>\n        <% }%>\n    </table>\n</div>","js/model/account/transfer.html":"<% var user = $mcm().cache.getUserInfoFromCache(); %>\n<div class=\"page-transfer\">\n    <div class=\"row\">\n        <div class=\"l-block\">\n            <div class=\"balance\">本地余额：<strong v-param=\"overage\"></strong>元</div>\n            <% if (data.getReward) { %>\n            <div class=\"promotion-progress\">\n                <i class=\"icon icon-lock-gray\"></i>\n                <span>优惠额度：<%=data.getReward.currentAmount%></span>\n                <div data-element=\"progressNode\"></div>\n            </div>\n            <% } %>\n        </div>\n        <form class=\"r-block\" data-element=\"formNode\" data-events=\"submit: onSubmit;\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>游戏大厅</th>\n                        <th>游戏状态</th>\n                        <th>游戏额度</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <% for(var i = 0; i < data.gamesInfo.length; i++) { %>\n                    <tr data-status=\"<%=data.gamesInfo[i].status%>\">\n                        <td><%= data.gamesInfo[i].nickName || data.gamesInfo[i].name %>\n                          <!-- <input type=\"radio\" name=\"providerId\" id=\"radio-<%=i%>\" value=\"<%=data.gamesInfo[i].providerId%>\"> -->\n                        </td>\n                        <td><%=data.gamesInfo[i].status == 1 ? \"正常\" : \"维护中\"%></td>\n                        <td id=\"game-balance-<%=data.gamesInfo[i].providerId%>\">正在加载...</td>\n                    </tr>\n                    <% } %>\n                </tbody>\n            </table>\n            <div class=\"UI-input-box\">\n                <label for=\"method\">操作方式:</label>\n                <div class=\"right-side\">\n                    <select name=\"operation\" id=\"method\">\n                        <option value=\"0\">转入到游戏</option>\n                        <option value=\"1\">转出到本地</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row\"><input type=\"submit\" class=\"btn btn-submit\" value=\"确定\"></div>\n        </form>\n    </div>\n    <div class=\"tips\">\n    </div>\n</div>\n","js/model/account/report.html":"<div class=\"page-report\">\n    <table class=\"tabs\">\n        <tr data-events=\"click:switch;\">\n            <td class=\"active\" data-type=\"bet\">投注记录</td>\n            <td data-type=\"recharge\">充值记录</td>\n            <td data-type=\"withdraw\">提款记录</td>\n            <td data-type=\"promotion\">优惠记录</td>\n        </tr>\n    </table>\n    <div class=\"reportArea\">\n        <%=#cache.model%>\n    </div>\n</div>","js/model/account/mailbox.html":"<% var win = $getCommonVal() %>\n<% var tool = $tool()%>\n<div class=\"page-mailbox\">\n    <ul class=\"messages-list\" data-element=\"listNode\">\n        <% $console(data.mail)%>\n        <li>\n            <div class=\"message-title\"><i class=\"icon icon-email-blue\"></i><span>系统消息</span></div>\n        </li>\n        <% if(data.mail.length > 0){ %>\n            <% for(var i = 0,len = data.mail.length;i < len;i++ ){%>\n                <li class=\"slide\" index=<%=i%> >\n                    <div class=\"message-title row\">\n                        <% if(!data.mail[i].hasBeenRead){ %>\n                            <i class=\"m-point\">●</i>\n                        <% } %>\n                        <span><%=data.mail[i].title%></span>\n                        <div class=\"col-right\">\n                            <span><%=tool.transferDateToString(new win.Date(data.mail[i].createTime))%></span>\n                        </div>\n                    </div>\n                    <div class=\"message-content\">\n                        <div class=\"view\">\n                            <p><%=data.mail[i].content%></p>\n                        </div>\n                        <div class=\"message-delete\" index=<%=i%> >\n                            <img src=\"../../../images/trash.png\" alt=\"\">\n                        </div>\n                    </div>\n                </li>\n            <% } %>\n        <% }else{ %>\n        <li class=\"notice\">\n            暂无消息\n        </li>\n        <% } %>\n    </ul>\n</div>","js/model/account/personal.html":"<%\n    var user = $mcm().cache.getUserInfoFromCache();\n    var business = $business();\n%>\n<div class=\"page-personal\">\n    <div class=\"row\">\n        <h2>会员基本信息</h2>\n        <form class=\"form-node\">\n\n\n            <div class=\"inline left-side vertical-top mr30\">\n                <div class=\"inner-row\">\n                    <label>會員等級</label>\n                    <span class=\"current-val\"><%= user.playerLevel.name %></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>真实姓名</label>\n                    <span class=\"current-val\"><%=user.realName%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>绑定电话</label>\n                    <span class=\"current-val\"><%=user.phoneNumber%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>绑定邮箱</label>\n                    <span class=\"current-val\"><%=user.email%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>开户时间</label>\n                    <span class=\"current-val\"><%=$tool().formatDate(user.registrationTime, 'y-m-d h:i:s')%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>客户ID</label>\n                    <span class=\"current-val\"><%=user.playerId%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>登陆密码</label>\n                    <span class=\"current-val blue\">******</span>\n                </div>\n            </div>\n            <div class=\"inline vertical-bottom\">\n                <input type=\"button\" class=\"btn btn-submit\" value=\"修改\" data-events=\"click: openModifyPasswordPopup;\">\n            </div>\n        </form>\n    </div>\n    <div class=\"row\">\n        <h2>提款银行资料</h2>\n        <% var hasBindBankAccount = user.bankAccount; %>\n        <form class=\"form-node\" data-element=\"bankFormNode\" <%if (!hasBindBankAccount) {%>style=\"display: block;\"<%}else{%>style=\"display: none;\"<%}%>>\n            <div class=\"inline left-side vertical-top mr30\">\n                <div class=\"inner-row\">\n                    <label for=\"accountName\">收款人</label>\n                    <div class=\"UI-input-box\">\n                        <input type=\"text\" id=\"accountName\" name=\"bankAccountName\" value=\"<%=user.realName%>\">\n                    </div>\n                </div>\n                <div class=\"inner-row\">\n                    <label for=\"accountNum\">银行卡号</label>\n                    <div class=\"UI-input-box\">\n                        <input type=\"number\" id=\"accountNum\" name=\"bankAccount\">\n                    </div>\n                </div>\n                <div class=\"inner-row\">\n                    <label for=\"bankName\">银行行别</label>\n                    <div class=\"UI-input-box\">\n                        <select name=\"bankName\" id=\"bankName\">\n                            <option value=\"\"></option>\n                            <% for (var i = 0; i < data.bankList.length; i++) { %>\n                                <option value=\"<%=data.bankList[i].id%>\"><%=data.bankList[i].name%></option>\n                            <% } %>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"inner-row\">\n                    <label for=\"bankAccountType\">账户性质</label>\n                    <div class=\"UI-input-box\">\n                        <select name=\"bankAccountType\" id=\"bankAccountType\">\n                            <option value=\"\"></option>\n                            <option value=\"1\">信用卡</option>\n                            <option value=\"2\">借记卡</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"inner-row\">\n                    <label>开户城市</label>\n                    <div class=\"input-tab\" data-element=\"addressNode\">\n                        <table>\n                            <tr>\n                                <td>\n                                    <div class=\"UI-input-box\">\n                                        <select name=\"bankAccountProvince\" id=\"province\"></select>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"UI-input-box\">\n                                        <select name=\"bankAccountCity\" id=\"city\"></select>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"UI-input-box\">\n                                        <select name=\"bankAccountDistrict\" id=\"area\"></select>\n                                    </div>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"inner-row\">\n                    <label>银行网点</label>\n                    <div class=\"UI-input-box\">\n                        <input type=\"text\" name=\"bankAddress\">\n                    </div>\n                </div>\n                <div class=\"inner-row\">\n                    <label>SMS 验证码</label>\n                    <div class=\"input-tab\">\n                        <table>\n                            <tr>\n                                <td colspan=\"2\">\n                                    <div class=\"UI-input-box\">\n                                        <input type=\"text\" name=\"smsCode\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <button type=\"button\" class=\"UI-input-box btn btn-submit\" id=\"requestSMSCodeForBank\" data-events=\"click: requestSMSCode;\">获取验证码</button>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"inline vertical-bottom\">\n                <input type=\"submit\" class=\"btn btn-submit\" value=\"确认\">\n            </div>\n        </form>\n        <form class=\"form-node\" data-element=\"bankInfoNode\" <%if (hasBindBankAccount) {%>style=\"display: block;\"<%}else{%>style=\"display: none;\"<%}%>>\n            <div class=\"inline left-side vertical-top mr30\">\n                <div class=\"inner-row\">\n                    <label>收款人</label>\n                    <span class=\"current-val\"><%=user.bankAccountName%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>银行卡号</label>\n                    <span class=\"current-val\"><%=user.bankAccount%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>银行行别</label>\n                    <%\n                        var bankName;\n                        for (var i = 0; i < data.bankList.length; i++) {\n                            if (user.bankName == data.bankList[i].id )\n                                bankName = data.bankList[i].name\n                        }\n                    %>\n                    <span class=\"current-val\"><%=bankName%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>账户性质</label>\n                    <span class=\"current-val\"><%=user.bankAccountType == 1 ? '信用卡' : '借记卡'%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>开户城市</label>\n                    <span class=\"current-val\"><%=user.bankAccountProvince + user.bankAccountCity + (user.bankAccountDistrict || '')%></span>\n                </div>\n                <div class=\"inner-row\">\n                    <label>银行网点</label>\n                    <span class=\"current-val\"><%=user.bankAddress%></span>\n                </div>\n            </div>\n            <div class=\"inline vertical-bottom\">\n                <input type=\"button\" class=\"btn btn-submit\" value=\"修改\" data-events=\"click: openModifyBankPopup;\">\n            </div>\n        </form>\n    </div>\n    <div class=\"row\">\n        <h2>短信提醒设置</h2>\n        <form class=\"form-node\" data-element=\"smsSettingFormNode\" data-events=\"submit: smsSettingSubmit;\">\n            <div class=\"inline left-side vertical-top mr30\">\n                <% var settings = $mcm().getSmsSettings(data.smsSettings); %>\n                <% data.smsSettings = settings; %>\n                <% for (var i in settings) { %>\n                    <div class=\"checkbox-node\" style=\"display:block;\">\n                        <input type=\"checkbox\" name=\"<%=i%>\" id=\"<%=i%>\" <%if(settings[i].isTrue){%>checked<%}%>>\n                        <label for=\"<%=i%>\"><b><%=i%></b></label>\n                    </div>\n                <% } %>\n\n            </div>\n            <div class=\"inline vertical-bottom\">\n                <input type=\"submit\" class=\"btn btn-submit mb15\" value=\"确认\">\n            </div>\n        </form>\n    </div>\n</div>\n","js/model/account/fastsearch.html":"<%\n    var Date = $getCommonVal().Date;\n    var user = $mcm().cache.getUserInfoFromCache();\n%>\n<div class=\"page-fastsearch\">\n    <div class=\"promotion-node mb10\">\n        <div class=\"promotion-link-node\">\n            <div class=\"row\">\n                <label>推广连接：</label>\n                <div class=\"UI-input-box\"><input type=\"text\" value=\"<%=data.getDomainList.playerSpreadUrl + '/#register?r=p' + user['name']%>\" id=\"speardUrlNode\" readonly><button class=\"btn btn-submit\" data-element=\"copyMenuNode\" data-clipboard-target=\"#speardUrlNode\">复制链接</button></div>\n            </div>\n            <p>提示：通过此链接注册的会员，将自动设置为您的下线会员。</p>\n        </div>\n        <div class=\"promotion-time\">\n            <div class=\"row\">\n                <h4 v-param=\"monthTimeLeft\">00天00时00分</h4>\n                <p>距离获得高额佣金倒数</p>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4 text-center\" data-events=\"click: openPopupOfRegister;\"><i class=\"icon icon-person\"></i><span>会员开户</span></div>\n                <div class=\"col-4 text-center\" data-events=\"click: giveTips;\"><i class=\"icon icon-transfer\"></i><span>额度转移</span></div>\n                <div class=\"col-4 text-center\" data-events=\"click: openPopupOfWithdrawal;\"><i class=\"icon icon-bank\"></i><span>申请提款</span></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row mb10\">\n        <div class=\"report-node\">\n            <table>\n                <tr>\n                    <td>\n                        <div class=\"swiper-container\" id=\"amountDataSwipeNode\">\n                            <div class=\"swiper-wrapper\">\n                                <div class=\"swiper-slide\">\n                                    <h4>本月总存款</h4>\n                                    <p>人民币</p>\n                                    <p class=\"strong\" v-param=\"monthTopUp\">获取中</p>\n                                </div>\n                                <div class=\"swiper-slide\">\n                                    <h4>本月总取款</h4>\n                                    <p>人民币</p>\n                                    <p class=\"strong\" v-param=\"monthGetBonus\">获取中</p>\n                                </div>\n                                <div class=\"swiper-slide\">\n                                    <h4>本月总取款</h4>\n                                    <p>人民币</p>\n                                    <p class=\"strong\" v-param=\"monthBonus\">获取中</p>\n                                </div>\n                            </div>\n                            <div class=\"swiper-navbar\"></div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"swiper-container\" id=\"clientDataSwipeNode\">\n                            <div class=\"swiper-wrapper\">\n                                <div class=\"swiper-slide\">\n                                    <h4>累计总开户人数</h4>\n                                    <%\n                                        var yesterday = new Date();\n                                        var now = new Date();\n                                        yesterday.setDate(1);\n                                        var startTime = $tool().formatDate(yesterday, 'y/m/d');\n                                        var endTime = $tool().formatDate(now, 'y/m/d');\n                                    %>\n                                    <p><%=startTime%>-<%=endTime%></p>\n                                    <p class=\"strong\" v-param=\"totalNewPlayers\">获取中</p>\n                                </div>\n                                <div class=\"swiper-slide\">\n                                    <h4>累计总存款人数</h4>\n                                    <p>含有效会员</p>\n                                    <p class=\"strong\" v-param=\"totalTopUpPlayers\">获取中</p>\n                                </div>\n                                <div class=\"swiper-slide\">\n                                    <h4>累计有效会员</h4>\n                                    <p>本月存款500元以上</p>\n                                    <p class=\"strong\" v-param=\"totalValidPlayers\">获取中</p>\n                                </div>\n                            </div>\n                            <div class=\"swiper-navbar\"></div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"swiper-container\" id=\"extraDataSwipeNode\">\n                            <div class=\"swiper-wrapper\">\n                                <div class=\"swiper-slide\">\n                                    <h4>目前累计佣金</h4>\n                                    <p>人民币RMB</p>\n                                    <p class=\"strong\" v-param=\"commissionValue\">获取中</p>\n                                </div>\n                                <div class=\"swiper-slide\">\n                                    <h4>目前累计有效会员</h4>\n                                    <p>每月有效会员需达5人以上</p>\n                                    <p class=\"strong\" v-param=\"totalValidPlayers\">获取中</p>\n                                </div>\n                                <div class=\"swiper-slide\">\n                                    <h4>合营佣金比例</h4>\n                                    <p>总代理可以获取下线代理佣金的额外10%</p>\n                                    <!--<p class=\"strong\">获取中</p>-->\n                                </div>\n                            </div>\n                            <div class=\"swiper-navbar\"></div>\n                        </div>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n    <div class=\"row\">\n        <table class=\"graph-tab\">\n            <tr>\n                <td>\n                    <div class=\"graph-wrapper\">\n                        <div class=\"graph-title\">\n                            <!--<h5>存取款报表</h5>-->\n                            <!--<p>03月17日-03月23日</p>-->\n                            <h2>存取款报表</h2>\n                        </div>\n                        <div class=\"graph-view\"><p>敬请期待！！</p></div>\n                    </div>\n                </td>\n                <td>\n                    <div class=\"graph-wrapper\">\n                        <div class=\"graph-title\">\n                            <!--<h5>存取款报表</h5>-->\n                            <!--<p>03月17日-03月23日</p>-->\n                            <h2>新会员存款走势</h2>\n                        </div>\n                        <div class=\"graph-view\"><p>敬请期待！！</p></div>\n                    </div>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>","js/model/account/created_records.html":"<% var tool = $tool() %>\n<div class=\"page-records page-createdrecords\">\n    <h1>开户分析表</h1>\n    <form action=\"\" class=\"condition-form\">\n        <table class=\"row\">\n            <tr>\n                <td>\n                    <label for=\"beginTime\">开始时间：</label>\n                    <div class=\"UI-input-box\"><input type=\"text\" class=\"UI-Input\" id=\"beginTime\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(1, 1)%>\" data-element=\"startNode\"></div>\n                </td>\n                <td>\n                    <label for=\"endTime\">结束时间：</label>\n                    <div class=\"UI-input-box\"><input type=\"text\" class=\"UI-Input\" id=\"endTime\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(0, 2)%>\" data-element=\"endNode\"></div>\n                </td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>\n                    <label for=\"domain\">注册网址：</label>\n                    <div class=\"UI-input-box\"><input type=\"text\" class=\"UI-Input\" id=\"domain\" data-element=\"domain\"></div>\n                </td>\n                <td>\n                    <label for=\"userAccount\">会员账号：</label>\n                    <div class=\"UI-input-box\"><input type=\"text\" class=\"UI-Input\" id=\"userAccount\" data-element=\"playerName\"></div>\n                </td>\n                <td>\n                    <label for=\"pageCount\">每页：</label>\n                    <div class=\"UI-input-box\">\n                        <select id=\"pageCount\" v-input=\"every\">\n                            <option value=\"5\">5</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"20\">20</option>\n                            <option value=\"50\">50</option>\n                        </select>\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <div class=\"row\">\n            <div class=\"col-right\">\n                <div class=\"UIButton\" data-events=\"click:submit;\">\n                    <div>\n                        查询\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n    <div class=\"search-results-view\">\n        <div class=\"swiper-container\" data-element=\"swiperNode\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                    <table class=\"results-tab\">\n                        <tr>\n                            <th>账号 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>姓名 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>存款笔数 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>开户时间 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>登入时间 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>Ip <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>注册网址 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                        </tr>\n                        <tbody class=\"createReport\">\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"swiper-scrollbar\" data-element=\"scrollbarNode\"></div>\n        <div class=\"page-controller\">\n\n        </div>\n    </div>\n</div>","js/model/account/commission.html":"<% var tool = $tool() %>\n<div class=\"page-records page-commision\">\n    <h1>实时佣金详情</h1>\n    <form action=\"\" class=\"condition-form\">\n        <table class=\"row\">\n            <tr>\n                <td>\n                    <label for=\"beginTime\">开始时间：</label>\n                    <div class=\"UI-input-box\"><input type=\"text\" class=\"UI-Input\" id=\"beginTime\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(1, 1)%>\" data-element=\"startNode\"></div>\n                </td>\n                <td>\n                    <label for=\"endTime\">结束时间：</label>\n                    <div class=\"UI-input-box\"><input type=\"text\" class=\"UI-Input\" id=\"endTime\" data-events=\"click:date;\" readonly=\"readonly\" value=\"<%=tool.getOneDateBeforeToday(0, 2)%>\" data-element=\"endNode\"></div>\n                </td>\n                <td>\n                    <label for=\"pageCount\">每页：</label>\n                    <div class=\"UI-input-box\">\n                        <select id=\"pageCount\" v-input=\"every\">\n                            <option value=\"5\">5</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"20\">20</option>\n                            <option value=\"50\">50</option>\n                            <option value=\"100\">100</option>\n                        </select>\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <div class=\"row\">\n            <div class=\"col-right\"><div class=\"UIButton\" data-events=\"click:submit;\"><div>查询</div></div></div>\n        </div>\n    </form>\n    <!--<p class=\"tips\"><span>佣金＝（下级会员负盈利-推广成本）*％</span>总输赢:155,875.91 总佣金</p>-->\n    <div class=\"search-results-view\">\n        <div class=\"swiper-container\" data-element=\"swiperNode\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                    <table class=\"results-tab\">\n                        <tr>\n                            <th>账号 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>总存款 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>总取款 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>总流水 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>优惠 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>财务费 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>平台费 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                            <th>净利润 <i class=\"ctrl\"><span class=\"top\"></span><span class=\"bottom\"></span></i></th>\n                        </tr>\n                        <tbody class=\"commissionReport\">\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"swiper-scrollbar\" data-element=\"scrollbarNode\"></div>\n        <div class=\"page-controller\">\n        </div>\n    </div>\n</div>","js/model/popup/popup.modifypassword.html":"<% var phoneNum = $mcm().cache.getUserInfoFromCache().phoneNumber; %>\n<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-modifypassword\">\n            <div class=\"head\"><p>修改密码</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\">\n                <form data-element=\"formNode\">\n                    <div class=\"UI-input-box\">\n                        <label for=\"oldPassword\"><i class=\"icon icon-lock\"></i><span>旧密码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"oldPassword\" name=\"oldPassword\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"newPassword\"><i class=\"icon icon-lock\"></i><span>新密码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"newPassword\" name=\"newPassword\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"rePassword\"><i class=\"icon icon-lock\"></i><span>重复密码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"rePassword\" name=\"rePassword\">\n                        </div>\n                    </div>\n                    <!--<div class=\"UI-input-box\">-->\n                        <!--<label for=\"phoneNumber\"><i class=\"icon icon-phone\"></i><span>手机号:</span></label>-->\n                        <!--<div class=\"right-side\">-->\n                            <!--<input type=\"number\" id=\"phoneNumber\" name=\"phoneNumber\" value=\"<%=phoneNum%>\" disabled>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                    <div class=\"UI-input-box\">\n                        <label for=\"captcha\"><i class=\"icon icon-shield\"></i><span>验证码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" maxlength=\"4\" name=\"smsCode\" id=\"captcha\">\n                            <div class=\"send-code\">\n                                <span class=\"btn btn-prime\" data-events=\"click: phoneCode;\">获取验证码</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"submit\" class=\"submit\" value=\"确认修改\">\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>","js/model/popup/popup.modifybank.html":"<% var phoneNum = $mcm().cache.getUserInfoFromCache().phoneNumber; %>\n<%\n    var user = $mcm().cache.getUserInfoFromCache();\n    var business = $business();\n    var bankAccountType = ['','信用卡','借记卡']\n%>\n<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-modifybank\">\n            <div class=\"head\"><p>提款银行资料</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\" class=\"form-node\" >\n                <form data-element=\"formNode\">\n                <div data-element=\"addressNode\">\n                    <div class=\"UI-input-box\">\n                        <label for=\"oldPassword\"><i class=\"icon icon-lock\"></i><span>收款人:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"bankAccountName\" name=\"bankAccountName\" value=\"<%=user.bankAccountName%>\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"bankAccount\"><i class=\"icon icon-lock\"></i><span>银行卡号:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"bankAccount\" name=\"bankAccount\" value=\"\" placeholder=\"<%=user.bankAccount%>\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"bankAccountType\"><i class=\"icon icon-lock\"></i><span>账户性质:</span></label>\n                        <div class=\"right-side\">\n                        <select name=\"bankName\" id=\"bankName\">\n                            <option value=\"\"></option>\n                            <% for (var i = 0; i < data.bankList.length; i++) { %>\n                                <option value=\"<%=data.bankList[i].id%>\" <%if(user.bankName == data.bankList[i].id){%>selected=\"selected\"<%}%>><%=data.bankList[i].name%></option>\n                            <% } %>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"bankAccountType\"><i class=\"icon icon-lock\"></i><span>账户性质:</span></label>\n                        <div class=\"right-side\">\n                            <select name = \"bankAccountType\">\n                                <% for (var j = 0; j < bankAccountType.length; j++) { %>\n                                    <option value=\"<%=j%>\" <%if(user.bankAccountType == j){%>selected=\"selected\"<%}%>> <%=bankAccountType[j] %>\n                                <% } %>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"UI-input-box\">\n                        <label for=\"bankAccountProvince\"><i class=\"icon icon-lock\"></i><span>开户城市:</span></label>\n                        <div class=\"right-side\">\n                            <select name=\"bankAccountProvince\" id=\"province\"></select>\n                            <!-- <input type=\"password\" id=\"bankAccountProvince\" name=\"bankAccountProvince\"> -->\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"bankAccountCityId\"><i class=\"icon icon-lock\"></i><span>开户城市: </span></label>\n                        <div class=\"right-side\">\n                            <select name=\"bankAccountCity\" id=\"city\" name=\"city\"\\></select>\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"bankAccountDistrictId\"><i class=\"icon icon-lock\"></i><span></span></label>\n                        <div class=\"right-side\">\n                            <select name=\"bankAccountDistrict\" id=\"area\" name=\"area\"></select>\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"bankAddress\"><i class=\"icon icon-lock\"></i><span>银行网点:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"bankAddress\" id=\"bankAddress\" name=\"bankAddress\" value=\"<%=user.bankAddress%>\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"captcha\"><i class=\"icon icon-shield\"></i><span>验证码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" maxlength=\"4\" name=\"smsCode\" id=\"captcha\">\n                            <div class=\"send-code\">\n                                <span class=\"btn btn-prime\" data-events=\"click: phoneCode;\">获取验证码</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"submit\" class=\"submit\" value=\"确认修改\">\n                    </div>\n                </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n","js/model/popup/popup.resetpassword.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-resetpassword\">\n            <div class=\"head\"><p>忘记密码</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\">\n                <form data-element=\"formNode\">\n                    <div class=\"UI-input-box\">\n                        <label for=\"newPassword\"><i class=\"icon icon-lock\"></i><span>新密码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"newPassword\" name=\"password\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"phoneNumber\"><i class=\"icon icon-phone\"></i><span>手机号:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"number\" id=\"phoneNumber\" name=\"phoneNumber\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"captcha\"><i class=\"icon icon-shield\"></i><span>验证码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" maxlength=\"4\" name=\"smsCode\" id=\"captcha\">\n                            <div class=\"send-code\">\n                                <span class=\"btn btn-prime\" data-events=\"click: phoneCode;\">获取验证码</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"submit\" class=\"submit\" value=\"确认\">\n                    </div>\n                    <div class=\"row foot\">\n                        <div class=\"col-4\"></div>\n                        <div class=\"col-4\">\n                            <a href=\"<%=data.getPlatformDetails.csUrl%>\" target=\"_blank\">联系客服</a>\n                        </div>\n                        <div class=\"col-4\"></div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>","js/model/popup/popup.register.subuser.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-register\">\n            <div class=\"head\"><p>申请下级账号</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\">\n                <form data-element=\"formNode\">\n                    <div class=\"UI-input-box\">\n                        <label for=\"account\"><i class=\"icon icon-controller\"></i><span>申请账号:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"account\" name=\"name\" placeholder=\"6到15个字符，由小写英文字母或数字组成\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"password\"><i class=\"icon icon-lock\"></i><span>申请密码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"password\"  name=\"password\" placeholder=\"请输入6-16位密码\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"confirmPassword\"><i class=\"icon icon-lock\"></i><span>确认密码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"password\" id=\"confirmPassword\" name=\"repassword\" placeholder=\"请在此输入密码\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"realName\"><i class=\"icon icon-person\"></i><span>真实姓名:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"realName\" name=\"realName\" placeholder=\"真实姓名必须与提款账户姓名一致，否则不能提款\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"email\"><i class=\"icon icon-email\"></i><span>邮箱:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"请输入正确的电子邮箱地址\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"phoneNum\"><i class=\"icon icon-phone\"></i><span>手机号码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"phoneNum\" name=\"phoneNumber\" placeholder=\"手机号码是更改资料和找回密码的唯一途径\">\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"validCode\"><i class=\"icon icon-shield\"></i><span>验证码:</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"text\" id=\"validCode\" name=\"captcha\" placeholder=\"请填写4位验证码\">\n                            <img src=\"\" alt=\"\" data-element=\"validImg\" class=\"validImg\" data-events=\"click:checkValidCode;\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <input type=\"submit\" class=\"submit\" value=\"立即申请\">\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>","js/model/popup/popup.withdrawal.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-withdrawal\">\n            <div class=\"head\"><p>申请提款</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body row\">\n                <form data-element=\"formNode\">\n                    <div class=\"UI-input-box\">\n                        <label><span>银行账号：</span></label>\n                        <div class=\"right-side bank-info\">\n                            <i class=\"icon icon-card\"></i>\n                            <span class=\"bn\">中国工商银行</span>\n                            <span>尾号：7853</span>\n                            <div class=\"col-right\">\n                                <a href=\"#personal\">查看</a>\n                                <i class=\"arrow\"></i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"balance\"><span>账户余额：</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"number\" id=\"balance\" value=\"<%=data.partner.credits%>\" disabled>\n                        </div>\n                    </div>\n                    <div class=\"UI-input-box\">\n                        <label for=\"amount\"><span>提款金额：</span></label>\n                        <div class=\"right-side\">\n                            <input type=\"number\" id=\"amount\" name=\"amount\">\n                        </div>\n                    </div>\n                    <p>单笔提款金额最低500元 ，单笔限额20万元 ， 如您需要办理20万以上的提款金额 ， 请您分批提交 ， 感谢您的理解 ！</p>\n                    <div class=\"row\">\n                        <input type=\"submit\" class=\"submit\" value=\"确认\">\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>","js/model/popup/popup.record.html":"<div class=\"popup-view\" data-element=\"popupViewNode\">\n    <div class=\"popup-container\">\n        <div class=\"popup-wrap popup-default popup-record\">\n            <div class=\"head\"><p>充值记录选择</p><div class=\"right-side\"><i class=\"icon icon-popup-close\" data-events=\"click: close;\"></i></div></div>\n            <div class=\"body\">\n                <div class=\"switch-module-container\">\n                    <span class=\"menu menu-previous\" data-events=\"click: previousPage;\"></span>\n                    <div class=\"switch-box\" data-element=\"innerNode\">\n                    </div>\n                    <span class=\"menu menu-next\" data-events=\"click: nextPage;\"></span>\n                </div>\n                <div class=\"row row-center\">\n                    <input type=\"button\" class=\"submit\" value=\"确认\" data-events=\"click: onSubmit;\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"};});
/**
 * Created by wildeChen on 2017/2/17.
 */
define('tool',[],function () {
    return {

        extend: function () {
            //jquery扩展
            $.fn.pxToNum = function (str) {

                return parseInt($(this).css(str).substring(0, $(this).css(str).length - 2));

            };

            function accDiv(arg1, arg2) {

                var t1 = 0, t2 = 0, r1, r2;

                try {
                    t1 = arg1.toString().split(".")[1].length
                } catch (e) {
                }

                try {
                    t2 = arg2.toString().split(".")[1].length
                } catch (e) {
                }

                with (Math) {

                    r1 = Number(arg1.toString().replace(".", ""));

                    r2 = Number(arg2.toString().replace(".", ""));

                    return (r1 / r2) * pow(10, t2 - t1);

                }

            };

            //给Number类型增加一个div方法，调用起来更加方便。
            Number.prototype.div = function (arg) {
                return accDiv(this, arg);
            };


            function accMul(arg1, arg2) {

                var m = 0, s1 = arg1.toString(), s2 = arg2.toString();

                try {
                    m += s1.split(".")[1].length
                } catch (e) {
                }

                try {
                    m += s2.split(".")[1].length
                } catch (e) {
                }

                return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)

            }

            Number.prototype.mul = function (arg) {
                return accMul(arg, this);
            };

            function accAdd(arg1, arg2) {

                var r1, r2, m, c;

                try {
                    r1 = arg1.toString().split(".")[1].length
                } catch (e) {
                    r1 = 0
                }

                try {
                    r2 = arg2.toString().split(".")[1].length
                } catch (e) {
                    r2 = 0
                }

                c = Math.abs(r1 - r2);
                m = Math.pow(10, Math.max(r1, r2));
                if (c > 0) {
                    var cm = Math.pow(10, c);
                    if (r1 > r2) {
                        arg1 = Number(arg1.toString().replace(".", ""));
                        arg2 = Number(arg2.toString().replace(".", "")) * cm;
                    }
                    else {
                        arg1 = Number(arg1.toString().replace(".", "")) * cm;
                        arg2 = Number(arg2.toString().replace(".", ""));
                    }
                }
                else {
                    arg1 = Number(arg1.toString().replace(".", ""));
                    arg2 = Number(arg2.toString().replace(".", ""));
                }
                return (arg1 + arg2) / m

            }

            Number.prototype.add = function (arg) {
                return accAdd(arg, this);
            };

            //减法函数
            function accSub(arg1, arg2) {
                var r1, r2, m, n;
                try {
                    r1 = arg1.toString().split(".")[1].length
                } catch (e) {
                    r1 = 0
                }
                try {
                    r2 = arg2.toString().split(".")[1].length
                } catch (e) {
                    r2 = 0
                }
                m = Math.pow(10, Math.max(r1, r2));
                //last modify by deeka
                //动态控制精度长度
                n = (r1 >= r2) ? r1 : r2;
                return Number(((arg2 * m - arg1 * m) / m).toFixed(n));
            }

            //给number类增加一个sub方法，调用起来更加方便
            Number.prototype.sub = function (arg) {
                return accSub(arg, this);
            };

            Array.prototype.each = function (fn) {
                fn = fn || Function.K;
                var a = [];
                var args = Array.prototype.slice.call(arguments, 1);
                for (var i = 0; i < this.length; i++) {
                    var res = fn.apply(this, [this[i], i].concat(args));
                    if (res != null) a.push(res);
                }
                return a;
            };

            /**
             * 得到一个数组不重复的元素集合<br/>
             * 唯一化一个数组
             * @returns {Array} 由不重复元素构成的数组
             */
            Array.prototype.uniquelize = function () {
                var ra = new Array();
                for (var i = 0; i < this.length; i++) {
                    if (!ra.contains(this[i])) {
                        ra.push(this[i]);
                    }
                }
                return ra;
            };

            /**
             * 求两个集合的交集
             {%example
             <script>
                 var a = [1,2,3,4];
                 var b = [3,4,5,6];
                 alert(Array.intersect(a,b));
             </script>
              %}
             * @param {Array} a 集合A
             * @param {Array} b 集合B
             * @returns {Array} 两个集合的交集
             */
            Array.intersect = function (a, b) {
                return a.uniquelize().each(function (o) {
                    return b.contains(o) ? o : null
                });
            };

            /**
             * 求两个集合的并集
             {%example
             <script>
                 var a = [1,2,3,4];
                 var b = [3,4,5,6];
                 alert(Array.union(a,b));
             </script>
              %}
             * @param {Array} a 集合A
             * @param {Array} b 集合B
             * @returns {Array} 两个集合的并集
             */
            Array.union = function (a, b) {
                return a.concat(b).uniquelize();
            };

            /**
             * 求两个集合的并集
             {%example
             <script>
                 var a = [1,2,3,4];
                 var b = [3,4,5,6];
                 alert(Array.union(a,b));
             </script>
              %}
             * @param {Array} a 集合A
             * @param {Array} b 集合B
             * @returns {Array} 两个集合的并集
             */
            Array.minus = function (a, b) {
                return a.uniquelize().each(function (o) {
                    return b.contains(o) ? null : o
                })
            };

            Array.prototype.contains = function (element) {
                for (var i = 0; i < this.length; i++) {
                    if (this[i] == element) {
                        return true;
                    }
                }
                return false;
            };

            Array.prototype.indexOf = function (val) {
                for (var i = 0; i < this.length; i++) {
                    if (this[i] == val) return i;
                }
                return -1;
            };

            Array.prototype.remove = function (val) {
                for (var i = 0; i < this.length;) {
                    if (this[i] == val) {
                        this.splice(i, 1);
                    } else {
                        i++;
                    }
                }
            };

            Array.prototype.toObject = function (index) {
                var obj = {};
                for(var i = 0;i < this.length;i++){
                    if(typeof index == 'object'){
                        console.error('错误的参数类型');
                        return {}
                    }
                    if(index){
                        obj[this[i][index]] = this[i];
                    }else{
                        obj[i] = this[i];
                    }
                }
                return obj;
            };

            String.prototype.getLen = function () {
                if (this == null) return 0;
                return this.replace(/[^\x00-\xff]/g, "01").length;
            };

            if (!Object.keys)
                Object.keys = function (o) {
                    if (o !== Object(o))
                        throw new TypeError('Object.keys called on a non-object');
                    var k = [], p;
                    for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
                    return k;
                }

        },

        /**
         * 检查是否是空对象
         * @param obj
         * @returns {boolean}
         */
        isOwnEmpty: function (obj) {
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    return false;
                }
            }
            return true;
        },

        /**
         * 获取查询字符串
         * @example ?t=1  返回{t:1}
         * @returns {{}}
         */
        getSearch: function () {
            var search = {};
            var address = location.hash;
            address = address.split('?');
            if (address.length > 1) {
                address = address[1].split('&');
                for (var i = 0, len = address.length; i < len; i++) {
                    var key = address[i].split('=');
                    search[key[0]] = key[1];
                }
            }

            return search;
        },

        /**
         * @function 更新html模板 并重新绑定 data-element 和 data-events
         * @param  {object} pageClass 实例化后的Page对象{@link page} 作为绑定对象
         * @param  {String} html html模板字符串
         * @param  {String} node 插入的dom节点
         */
        mergeContextTemplate: function (pageClass, html, node) {
            var nodeList;
            html = html.replace(/[\r\n]/g, '');
            if(!node)
                return;

            if(node.indexOf('.') != -1){
                nodeList = document.getElementsByClassName(node.substring(1));
                nodeList = Array.apply(null,nodeList);
            }else if(node.indexOf('#') != -1){
                nodeList = document.getElementById(node.substring(1));
                nodeList = [nodeList];
            }else{
                nodeList = document.getElementsByTagName(node);
                nodeList = Array.apply(null,nodeList);
            }

            if(!nodeList)
                return console.dir('无法获取模板要插入的节点 %s',node);

            nodeList.forEach(function (element) {
                if(!element)
                    return;

                element.innerHTML = html;
                pageClass.bindDomNode(element);
                pageClass.bindEvents(element);
            });
        },

        /**
         * 黑名单验证,提供字符串或数组形式的list,提供的字符串或数组中的字符串任意一个在黑名单中将返回false
         * @param list
         * @param staff
         */
        blackListValid: function (list, staff) {
            if (list instanceof Array)
                return Array.intersect(list, staff).length == 0;
            else
                return !staff.contains(list)
        },

        /**
         * @method 输入当前index和每页数量,输出当前所在页数
         * @description start from 0
         * @param now
         * @param every
         * @returns {number}
         */
        pageCalculate: function (now, every) {
            return ((now - (now % every)) / every) + 1;
        },

        /**
         * @method 输入总共条数和每页数量,输出总页数
         * @param total
         * @param every
         * @returns {number}
         */
        pageMax:function (total,every) {
            return Math.ceil(total / every);
        },

        /**
         * 输入总共秒数返回一个时间数组
         * @param {number} second
         * @param {Boolean} [noZero] true则个位数时间不会在前面加0
         * @returns {*[]}
         */
        countdown: function (second, noZero) {
            var day = '', hour = '', minute = '';
            if (second >= 86400) {
                day = Math.floor(second / 86400);
                day += '';
                second = second % (86400);
            }
            if (second >= 3600) {
                hour = Math.floor(second / 3600);
                hour += '';
                hour = hour.length < 2 && !noZero ? ('0' + hour) : hour;
                second = second % 3600;
            }
            if (second >= 60) {
                minute = Math.floor(second / 60);
                minute += '';
                minute = minute.length < 2 && !noZero ? ('0' + minute) : minute;
                second = second % 60;
            } else {
                minute = '00';
            }
            if (second >= 0) {
                second += '';
                second = second.length < 2 && !noZero ? ('0' + second) : second;
            }
            return [day, hour, minute, second];
        },

        /**
         * 将一个日期转换成 yy-mm-dd hh-mm-ss 格式的字符串
         * @param {Date} obj 日期对象
         * @param {Number} [type] 可选对象,0或不传将返回完成的日期字符串,传入1将返回年月日
         * @returns {*}
         */
        transferDateToString: function (obj, type) {
            if (!obj instanceof Date) {
                console.log('传入对象错误,对象不是一个日期对象', obj);
                return null;
            }
            obj = new Date(obj);

            var year = obj.getFullYear();
            var month = obj.getMonth() + 1;
            month += '';
            if (month.length == 1)
                month = '0' + month;
            var day = obj.getDate();
            day += '';
            if (day.length == 1)
                day = '0' + day;
            var hour = obj.getHours();
            hour += '';
            if (hour.length == 1)
                hour = '0' + hour;
            var minute = obj.getMinutes();
            minute += '';
            if (minute.length == 1)
                minute = '0' + minute;
            var second = obj.getSeconds();
            second += '';
            if (second.length == 1)
                second = '0' + second;

            if (!type)
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

            if (type == 1)
                return year + '-' + month + '-' + day;

        },

        /**
         * @description 获取距离今日的某一个天日期
         * @param {Number} [days] 传入距离今日的天数,不传则默认为今日
         * @param {Number} type 用来选择获取的日期是否包含时分秒 1不包含 0为包含,只传一个参数时传入的是{@link type}
         * @returns {*}
         */
        getOneDayBeforeToday:function (days, type) {
            if (arguments.length == 1) {
                type = days;
                days = 0;
            }
            var today = new Date();
            today.setDate(today.getDate() + days);
            return this.transferDateToString(today, type);
        },

        /**
         * 获取今日前的某一个天日期,若不传值则获取今天的日期
         * @description 返回的日期格式为标准日期标签的格式
         * @example 2016-08-10 0:0:0
         * @param {Number} [days] 距离今天的天数,不传或者0则为今天
         * @param {Number} [type] 设置返回的时间规则,0或不传为当前时间,1为0时0分0秒,2为23时59分59秒
         * @returns {*}
         */
        getOneDateBeforeToday: function (days, type) {
            var num = days || 0;

            if (typeof(num) != 'number') {
                console.log('传入参数类型不是数字', num);
                return null;
            }

            if (String(num).indexOf('.') != -1) {
                console.log('传入参数类型不是整数', num);
                return null;
            }

            if (String(num).indexOf('-') != -1) {
                console.log('不能传入负数', num);
                return null;
            }

            var today = new Date();
            today.setDate(today.getDate() - num);
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            month += '';
            if (month.length == 1)
                month = '0' + month;
            var day = today.getDate();
            day += '';
            if (day.length == 1)
                day = '0' + day;
            var hour = today.getHours();
            var minute = today.getMinutes();
            var second = today.getSeconds();

            if (type) {
                if (type === 1)
                    return year + '-' + month + '-' + day + ' 00:00:00';
                else
                    return year + '-' + month + '-' + day + ' 23:59:59';
            } else {
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
            }
        },

        /**
         * 格式化金钱数字
         * @param num
         * @returns {string}
         */
        formatCurrency: function (num) {
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num))
                num = "0";
            var sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            var cents = num % 100;
            num = Math.floor(num / 100).toString();
            if (cents < 10)
                cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' +
                    num.substring(num.length - (4 * i + 3));
            return (((sign) ? '' : '-') + num + '.' + cents);
        },

        openApplication: function (url, fail) {
            if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                location.href = url;
            } else {
                var timeout, t = 1000, hasApp = true;
                var t1 = Date.now();
                var ifr = document.createElement("iframe");
                ifr.setAttribute('src', url);
                ifr.setAttribute('style', 'display:none');
                document.body.appendChild(ifr);
                timeout = setTimeout(function () {
                    var t2 = Date.now();
                    if (!t1 || t2 - t1 < (t + 100)) {
                        hasApp = false;
                    }
                }, t);
                setTimeout(function () {
                    if (!hasApp) fail && fail();
                    document.body.removeChild(ifr);
                }, 2000);
            }
        },
        /**
         * 分析当前url的结构
         * @param  {string} [url] url字符串
         * @return {*}
         */
        url: function (url) {
            var dm, hs, qu;
            url = url || location.href;
            dm = url.match(/^[^?#]+/i)[0];
            url = url.slice(dm.length);
            if (url.match(/^\?[^#]+/i)) {
                qu = url.match(/^\?[^#]+/i)[0];
                url = url.slice(qu.length);
                if (url.match(/^#[^?]+/i)) {
                    hs = url.match(/^#[^?]+/i)[0];
                }
            } else if (url.match(/^#[^?]+/i)) {
                hs = url.match(/^#[^?]+/i)[0];
                url = url.slice(hs.length);
                if (url.match(/^\?[^#]+/i)) {
                    qu = url.match(/^\?[^#]+/i)[0];
                }
            }
            url = {
                domain: dm,
                query: (qu || '').slice(1),
                hash: (hs || '').slice(1),
                param: {},
                toString: function () {
                    var key, ref, val;
                    qu = '';
                    ref = this.param;
                    for (key in ref) {
                        val = ref[key];
                        qu += key;
                        if (val !== void 0 && val !== null) {
                            qu += '=' + val + '&';
                        }
                    }
                    if (qu) {
                        qu = '?' + (key ? qu.slice(0, -1) : qu);
                    }
                    hs = this.hash ? '#' + this.hash : '';
                    return this.domain + qu + hs;
                }
            };
            if (url.query) {
                url.query.replace(/(?:^|&)([^=&]+)(?:=([^&]*))?/gi, function (a, b, d) {
                    return url.param[b] = d;
                });
            }
            return url;
        },

        /**
         * @description 对url跳转进行浏览器历史拦截
         * @param {String} url 将要更新或替换页面的url
         * @param {String} [search] 将要更新或替换页面的查询字符串
         * @param {Number} [type] 可选参数 0表示新增记录,1表示替换记录,2表示替换记录并弹窗,3表示hash方法
         * @param {Object} [state] 可选参数 替换或新增页面时上一页的url和查询字符串
         */
        browserInterceptor: function (url, search, type, state) {
            if (!type) {
                history.pushState(state || {}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            } else if (type == 1) {
                history.replaceState(state, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            } else if (type == 2) {
                history.replaceState(state, '', '#');
                mcm.route.popUp(url);
            } else if (type == 3){
                history.pushState(state || {}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.hashChange();
            }
        },

        /**
         * @description 拦截事件后的返回事件(通常用于登录成功后返回之前页面)
         */
        browserBack: function () {
            if (!this.isOwnEmpty(history.state)) {
                var url = history.state.url;
                var search = history.state.search;
                history.replaceState({}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            } else {
                history.back();
            }
        },

        insertObject: function (origin, target) {
            for (var i in target) {
                if (origin.hasOwnProperty(i)) origin[i] = target[i];
            }
        },

        formatDate: function(date, format) {
            if (!format) {
                format = date;
                date = new Date();
            }
            var date = new Date(date);
            var y = date.getFullYear(),
                m = this.completeNum(date.getMonth() + 1),
                d = this.completeNum(date.getDate()),
                h = this.completeNum(date.getHours()),
                i = this.completeNum(date.getMinutes()),
                s = this.completeNum(date.getSeconds());

            return format.replace('y', y).replace('m', m).replace('d', d).replace('h', h).replace('i', i).replace('s', s);
        },

        completeNum: function(num) {
            return num < 10 ? "0" + num : num;
        },

        objectCompare:function (origin,target) {
            for(var i in origin){
                if(origin[i] != target[i])
                    return false;
            }
            return true;
        },

        formToObject: function(form, trim) {
            var data;
            if (!form.serializeArray) {
                form = $(form);
            }
            data = {};
            if (trim === void 0) {
                trim = 1;
            }
            $.each(form.serializeArray(), function(i, field) {
                return data[field.name] = trim ? $.trim(field.value) : field.value;
            });
            return data;
        }
    }
});

/**
 * @namespace
 * @alias route
 * @desc 路由模块
 */
define('route',['config', 'renderer', 'app', 'tool'], function (map, render, app, tool) {

    var self = {

        /**
         * @method
         * @desc hashChange事件,禁止主动调用,通过浏览器的hashChange来触发该事件
         * @param {Object} [event] hashChange的事件对象
         */
        hashChange: function (event) {

            var self;
            if (event && event.data && event.data['sender']) {
                self = event.data['sender'];
            } else {
                self = this;
            }

            self.getHash().then(function (value) {
                if (value == '')
                    return;
                console.log('触发页面加载事件...');
                if (value instanceof Array) {
                    for (var i = 0; i < value.length; i++) {
                        if (value[i].indexOf('?') != -1)
                            self.changeUrl(value[i]);
                    }
                } else {
                    self.changeUrl(value);
                }
            }).fail(function (callback) {
                callback();
            });

        },

        /**
         * @function
         * @desc 路由分析方法
         * @returns {String|Array} 返回单个url,或以数组形式返回多个url
         * @example
         * about String
         * if the location is 'localhost#home' then
         * return 'home'
         * @example
         * about Array
         * if the location is 'localhost#home/login' then
         * return ['home','login']
         */
        getHash: function () {
            var self = this;

            var call = $.Deferred();

            //提取url
            var value = location.hash;

            //提取查询字符串
            var search = value.split('?')[1];

            //todo 返回首页
            if (value == '') {
                call.resolve('home');
            }

            value = value.replace('#', '');

            if (value.indexOf('/') == 0)
                value = value.substr(1);

            if (value.indexOf('?') != -1) {
                value = value.split('?');
                value = value[0];
            }

            if (value.indexOf('/') != -1) {
                value = value.split('/');
            }

            var check = blackListLoop(value),
                status,
                verify,
                callback,
                pass = false;
            if (typeof (check) == 'boolean') {
                if (check)
                    pass = check;
                status = mcm.loginStatus || (mcm.cache && function () {
                        return mcm.cache.isLogin();
                    });
                verify = mcm.loginVerify || (mcm.cache && function (callback) {
                        return mcm.cache.getLogin(callback);
                    });
                callback = mcm.blackListCallback;
            } else {
                status = (mcm.loginStatus && mcm.loginStatus[check]) || (mcm.cache && function () {
                        return mcm.cache.isLogin();
                    });
                verify = (mcm.loginVerify && mcm.loginVerify[check]) || (mcm.cache && function (callback) {
                        return mcm.cache.getLogin(callback);
                    });
                callback = mcm.blackListCallback && mcm.blackListCallback[check] || mcm.blackListCallback;
            }

            if (pass) {
                call.resolve(value);
            } else {
                /**
                 * 登录验证
                 */
                if (!mcm.cache) {
                    console.warn('尚未挂载 mcm.cache 缓存组件,无法进行登录验证判断');
                } else if (status()) {
                    call.resolve(value);
                } else {
                    var result = verify(function () {
                        if (status()) {
                            call.resolve(value)
                        } else {
                            call.reject(function () {
                                if (callback)
                                    callback.apply(self, [value, search]);
                            })
                        }
                    });
                    if (result !== '') {
                        call.reject(function () {
                            if (callback)
                                callback.apply(self, [value, search]);
                        })
                    }
                }
            }
            // if (tool.blackListValid(value, mcm.blackList)) {
            //     call.resolve(value);
            // } else {
            //     //登录验证
            //     if (!mcm.cache) {
            //         console.warn('尚未挂载 mcm.cache 缓存组件,无法进行登录验证判断');
            //         call.resolve(value);
            //     } else if (mcm.cache.isLogin()) {
            //         call.resolve(value)
            //     } else {
            //         var result = mcm.cache.getLogin(function () {
            //             if (mcm.cache.isLogin()) {
            //                 call.resolve(value)
            //             } else {
            //                 call.reject(function () {
            //                     if (mcm.blackListCallback)
            //                         mcm.blackListCallback.apply(self, [value, search]);
            //                 });
            //             }
            //         });
            //         if (result !== '') {
            //             call.reject(function () {
            //                 if (mcm.blackListCallback)
            //                     mcm.blackListCallback.apply(self, [value, search]);
            //             });
            //         }
            //
            //     }
            // }
            return call.promise();
        },

        /**
         * @method
         * @param {String} url
         * @desc 通过url来获取页面的模板,并通过{@link renderer.make}来进行渲染
         * @returns {*} 当要请求的url不存在时,返回一个history.back事件
         * @example
         * when the url is not exist will return a history.back function
         */
        changeUrl: function (url, isLogin) {
            if (!map[url]){
                if(isLogin){
                    return mcm.tool.browserInterceptor('home','');
                }else{
                    if(history.length == 1){
                        return mcm.tool.browserInterceptor('home','');
                    }else{
                        return history.back();
                    }
                }
            }

            mcm.initialization = true;

            var pageArray = map[url].nexus ? map[url].nexus : [url];

            //判断整个组件的缓存
            var noCache = pageArray.some(function (element) {
                return mcm.page[element] == undefined || mcm.page[element] == 'loading';
            });

            //存在页面缓存时,直接渲染
            if (!noCache)
                return render.make(url);

            var i;
            for (i = 0; i < pageArray.length; i++) {
                if (!mcm.page[pageArray[i]]) {
                    console.log('加载: ' + pageArray[i]);
                    mcm.page[pageArray[i]] = 'loading';
                    (function (target) {
                        if (mcm.config.LocalMode == 0 && app[map[target].address]) {
                            // 加载记录器
                            if (mcm.load)
                                mcm.load.addFile(true);

                            mcm.page[target] = app[map[target].address];
                            if (mcm.load)
                                mcm.load.loadedFile(true);
                            self.changeUrl(url);
                        } else if (mcm.config.LocalMode == 1 && document.domain != mcm.config.LocalUrl && document.domain.indexOf(mcm.config.LocalIp) == -1 && app[map[target].address]) {
                            // 加载记录器
                            if (mcm.load)
                                mcm.load.addFile(true);

                            mcm.page[target] = app[map[target].address];
                            if (mcm.load)
                                mcm.load.loadedFile(true);
                            self.changeUrl(url);
                        } else {
                            //加载记录器
                            if (mcm.load)
                                mcm.load.addFile(true);
                            $.ajax({
                                url: map[target].address,
                                type: 'GET',
                                success: function (data) {
                                    //加载记录器
                                    if (mcm.load)
                                        mcm.load.loadedFile(true);
                                    mcm.page[target] = data;
                                    self.changeUrl(url);
                                }
                            })
                        }
                    })(pageArray[i]);
                }
            }
        }
        ,

        /**
         * @method
         * @desc 在不改变hash的情况下，使用一个url来弹出一个界面,该url不允许使用关系链,若页面没有缓存时将会加载页面缓存再渲染页面
         * <br>
         * render a page with a url without changing the hash,the url not allow has a nexus,the page will ajax cache before render
         * @param {string} url 弹窗的路由地址
         * @param {object} [eventData] 携带的数据
         * @example
         * ...
         * mcm.route.popUp('login')
         * can popUp a login page
         * ...
         * @example
         * ...
         * mcm.route.popUp('login',{account:'111222',pass:'1122'})
         * can popUp a login page with some data
         * ...
         */
        popUp: function (url, eventData) {

            if (!eventData)
                eventData = null;

            var pageArray = map[url].nexus ? map[url].nexus : [url];

            //判断整个组件的缓存
            var noCache = pageArray.some(function (element) {
                return mcm.page[element] == undefined || mcm.page[element] == 'loading';
            });

            //存在页面缓存时,直接渲染
            if (!noCache)
                return render.update(url, eventData);

            var i;
            for (i = 0; i < pageArray.length; i++) {
                if (!mcm.page[pageArray[i]]) {
                    console.log('加载: ' + pageArray[i]);
                    mcm.page[pageArray[i]] = 'loading';
                    (function (target) {
                        if (mcm.config.LocalMode == 0 && app[map[target].address]) {
                            // 加载记录器
                            if (mcm.load)
                                mcm.load.addFile(true);
                            mcm.page[target] = app[map[target].address];
                            if (mcm.load)
                                mcm.load.loadedFile(true);
                            self.popUp(url, eventData);
                        } else if (mcm.config.LocalMode == 1 && document.domain != mcm.config.LocalUrl && document.domain.indexOf(mcm.config.LocalIp) == -1 && app[map[target].address]) {
                            // 加载记录器
                            if (mcm.load)
                                mcm.load.addFile(true);
                            mcm.page[target] = app[map[target].address];
                            if (mcm.load)
                                mcm.load.loadedFile(true);
                            self.popUp(url, eventData);
                        } else {
                            //加载记录器
                            if (mcm.load)
                                mcm.load.addFile(true);
                            $.ajax({
                                url: map[target].address,
                                type: 'GET',
                                success: function (data) {
                                    //加载记录器
                                    if (mcm.load)
                                        mcm.load.loadedFile(true);
                                    mcm.page[target] = data;
                                    self.popUp(url, eventData);
                                }
                            })
                        }
                    })(pageArray[i]);
                }
            }
        }
    };

    /**
     * 黑名单轮询
     */
    function blackListLoop(list) {
        var target = mcm.blackList;
        if (mcm.blackList.length > 0 && mcm.blackList[0] instanceof Array) {
            for (var i = 0, len = mcm.blackList.length; i < len; i++) {
                if (list instanceof Array) {
                    if (Array.intersect(list, mcm.blackList[i]).length != 0) {
                        return i;
                    }
                } else {
                    if (mcm.blackList[i].contains(list))
                        return i;
                }
            }
            return true;
        } else {
            if (list instanceof Array)
                return Array.intersect(list, target).length == 0;
            else
                return !mcm.blackList.contains(list)
        }
    }

    return self;
});

/**
 * @namespace mcm
 */
define('engine',['config', 'route', 'renderer', 'tool'], function (config, route, renderer, tool) {
    var self = {

        /**
         * @name mcm.map
         * @description 路由配置表 {@link config}
         * @example
         * 'home':{
         *      address:'js/model/home.html',
         *      renderer:DOM.MAIN,
         *      js:'../js/page/page.home'
         *  }
         */
        map: null,

        /**
         * @name mcm.route
         * @description 路由模块
         */
        route: null,

        /**
         * @name mcm.renderer
         * @description 渲染模块
         */
        renderer: null,

        /**
         * @name mcm.tool
         * @description 工具模块
         */
        tool:null,

        /**
         * @name mcm.page
         * @description 页面缓存模块,通过url来获取页面模板缓存
         * @example
         * console.log(mcm.page['home'])
         * '&lt;div&gt;首页&lt;/div&gt'
         */
        page: {},

        /**
         * @name mcm.part
         * @description 页面部件标记,通过标记来判断对应部分当前渲染的url
         * @example
         * console.log(mcm.part['main'])
         * 'home'
         * @author 2016/11/21 by wildeChen
         */
        part: {},

        /**
         * @name mcm.resources
         * @description 初始化加载的页面缓存
         */
        resources: [],

        /**
         * @name mcm.DOM
         * @description 根页面的节点
         */
        DOM: {},

        /**
         * @name mcm.loginStatus
         * @description 路由黑名单使用的登录状态参数
         * @type [null||function||Array]
         */
        loginStatus:null,

        /**
         * @name mcm.loginVerify
         * @description 路由的验证事件
         * @type [null||function||Array]
         */
        loginVerify:null,

        /**
         * @name mcm.blackList
         * @description 路由黑名单,用来控制必须登录以后才能访问的页面
         */
        blackList:[],

        /**
         * @name mcm.blackListCallback
         * @description 路由黑名单的回调事件,用来处理需要登录的页面验证登录失败以后的事件
         */
        blackListCallback:null,

        /**
         * @name mcm.alert
         * @description 弹窗组件
         */
        alert: null,

        /**
         * @name mcm.net
         * @description 通讯组件 {@link WebSocket}
         */
        net: null,

        /**
         * @name mcm.cache
         * @description 缓存管理器
         */
        cache: null,

        /**
         * @name mcm.load
         * @description 加载管理器
         */
        load: null,

        /**
         * @name mcm.initialization
         * @description 初始化参数,页面第一次hashChange以后变为true
         */
        initialization:false,

        /**
         * @name mcm.timeout
         * @description 页面预加载超时时间
         */
        timeout:null,

        /**
         * @name mcm.timeoutCallback
         * @description 页面预加载超时或者失败回调
         */
        timeoutCallback:null,

        /**
         * @name mcm.communicationError
         * @param {Object} data
         * @description webSocket通信中的的通用错误回调
         */
        communicationError:null,

        /**
         * @name mcm.config
         * @description 框架默认配置
         */
        config:{
            /**
             * @description 是否启用本地模式,在本地模式下运行时,若网页运行在 {@link mcm.config.LocalUrl} 下将会默认不从app.js中读取合并的文件
             * @example
             * 0 关闭  1 开启
             */
            LocalMode:0,

            /**
             * @description 本地模式的Url
             */
            LocalUrl:'localhost',

            /**
             * @description 本地模式的Ip段
             */
            LocalIp:'192.168'
        },

        /**
         * @method
         * @description 初始化全局对象,并挂载所有方法
         */
        init: function () {
            tool.extend();

            //todo 挂载工具模块
            self.tool = tool;

            //todo 挂载路由功能
            self.route = route;

            //todo 渲染器
            self.renderer = renderer;

            //todo 挂载路由配置
            self.map = config;

            //todo 初始化组件标签
            // var keys = Object.keys(self.DOM);
            // keys.forEach(function (element) {
            //     self.part[self.DOM[element]] = null;
            // });

            //todo 绑定hashChange事件
            $(window).on('hashchange', {sender: route}, route.hashChange);

            //todo 初始化当前页面
            route.hashChange();

            //预加载资源
            if (this.resources.length == 0)
                return;

            this.resources.forEach(function (element) {
                if (!self.page[element]) {
                    require(['app'], function (app) {
                        if (mcm.config.LocalMode == 0 && app[config[element].address]) {
                            self.page[element] = app[config[element].address];
                        }else if(mcm.config.LocalMode == 1 && document.domain != mcm.config.LocalUrl && document.domain.indexOf(mcm.config.LocalIp) == -1 && app[config[element].address]){
                            self.page[element] = app[config[element].address];
                        }else {
                            $.ajax({
                                url: config[element].address,
                                type: 'GET',
                                success: function (data) {
                                    self.page[element] = data;
                                }
                            })
                        }
                    });
                }
            });

            this._argumentsChecking();
        },

        //todo 对所有可重设的属性进行检查
        _argumentsChecking:function () {
            if(!this.cache)
                console.warn('未挂载缓存管理器,相关功能可能会受到影响');

            if(!this.schedule)
                console.warn('未挂载任务管理器,相关功能可能会受到影响');

            if(!this.net)
                console.warn('未挂载通信组件');

            if(!this.loginStatus)
                console.warn('未设置登录状态参数');

            if(!this.loginVerify)
                console.warn('未设置登录验证事件');

            if(this.blackList.length == 0)
                console.warn('未增加黑名单列表');

            if(!this.timeout)
                console.warn('未设置公共页面加载超时时间');

            if(!this.timeoutCallback)
                console.warn('未设置公共页面加载超时回调');

            if(!this.communicationError)
                console.warn('未设置公共通信错误回调');
        }
    };

    return self;
});
//load模块
define('load',[],function () {
    var AnimationType = {
        INIT:55,
        ACCESS:20,
        BUFFER:98
    };

    var load = function () {
        //加载动画切换
        this._animateStatus = AnimationType.INIT;

        //加载动画状态
        this.isShow = true;

        //加载进度
        this.loading = 0;

        //总加载文件
        this.allload = 0;

        //记录加载次数
        this.total_load = 0;

        //操作组件定位
        this._core = $('#loading');

        //操作组件定位
        this._init = $('#load-init');

        //操作组件定位
        this._access = $('#load-access');

        //操作组件定位
        this._buffer = $('#load-buffer');
    };

    var proto = load.prototype;

    //开启请求动画
    proto.openAnimation = function () {
        this.switchAnimation(AnimationType.ACCESS);
        this._core.fadeIn();
    };


    //关闭动画
    proto.closeAnimation = function () {
        this._core.fadeOut();
    };


    //新增加载项
    proto.addFile = function (show) {
        this.switchAnimation(AnimationType.BUFFER);

        this.allload++;
        if (!this.isShow) {
            //开启加载动画
            this._core.show();
            this.isShow = true;
        }

        if (show){
            console.log('加载进度:' + this.loading + '/' + this.allload);
            this._buffer.children('p').text('正在计算文件  0/'+this.allload);
        }

    };

    //完成加载项
    proto.loadedFile = function (show) {
        //记录
        this.total_load++;

        this.loading++;

        if (show){
            console.log('加载进度:' + this.loading + '/' + this.allload);
            this._buffer.children('p').text('正在加载  '+ this.loading +'/'+this.allload);
        }


        if (this.loading >= this.allload) {
            this.allload = 0;
            this.loading = 0;
            if (this.isShow) {
                //关闭加载动画
                this._core.hide();
                this.isShow = false;
            }
        }
    };

    //切换动画类型
    proto.switchAnimation = function (type) {
        if(this._animateStatus == type)
            return;
        this._animateStatus = type;
        
        switch (type){
            case AnimationType.INIT:
                this._core.css('background-color','rgba(0, 0, 0, 0.7)');
                this._init.show();
                this._access.hide();
                this._buffer.hide();
                break;
            case AnimationType.ACCESS:
                this._core.css('background-color','rgba(255, 255, 255, 0.3)');
                this._init.hide();
                this._access.show();
                this._buffer.hide();
                break;
            case AnimationType.BUFFER:
                this._core.css('background-color','rgba(255, 255, 255, 0.3)');
                this._init.hide();
                this._access.hide();
                this._buffer.show();
                break;
            default:
        }
    };

    return load;
});
define('schedule',[],function () {
    /**
     * @constructor schedule
     */
    var schedule = function () {
        /**
         * @desc 监听器存取对象
         * @type {object}
         * @private
         */
        this._listeners = {};

        /**
         * @desc 定时器存取对象
         * @type {object}
         * @private
         */
        this._tickers = {};
    };

    var proto = schedule.prototype;

    /**
     * @method schedule.addTicker
     * @description
     * @param {string} type
     * @param {function} ticker
     * @param {object} target
     * @param {number} interval
     * @param {number} [delay] 延迟N毫秒执行
     */
    proto.addTicker = function (type, ticker, target, interval, delay) {

        if (this._tickers === undefined)
            this._tickers = {};

        var tickers = this._tickers;
        if (tickers[type] === undefined)
            tickers[type] = [];

        if (!this.hasTicker(type, ticker, target)) {
            //激活
            if (delay != undefined) {
                var tempKey = setTimeout(function () {
                    ticker.call(target);
                    tickers[type].push({callback: ticker, eventTarget: target});
                    var value = tickers[type].length -1;
                    var timer = setInterval(function () {
                        ticker.call(target);
                    }, interval);
                    tickers[type][value]['index'] = timer;
                }, delay);
                tickers[type].push({timeout: tempKey});
            } else {
                tickers[type].push({callback: ticker, eventTarget: target});
                var value = tickers[type].length -1;
                var timer = setInterval(function () {
                    ticker.call(target);
                }, interval);
                tickers[type][value]['index'] = timer;
            }
        }
    };

    /**
     * @method schedule.hasTicker
     * @description
     * @param {string} type
     * @param {function} ticker
     * @param {object} target
     * @returns {boolean} 是否存在该定时器
     */
    proto.hasTicker = function (type, ticker, target) {
        if (this._tickers === undefined)
            return false;

        var tickers = this._tickers;
        if (tickers[type] !== undefined) {
            for (var i = 0, len = tickers[type].length; i < len; i++) {
                var selListener = tickers[type][i];
                if (selListener.callback === ticker && selListener.eventTarget === target) {
                    return true;
                }
            }
        }
        return false;
    };

    /**
     * @method schedule.clearTicker
     * @description
     * @param {string} type
     */
    proto.clearTicker = function (type) {
        if (this._tickers === undefined)
            return;

        var tickers = this._tickers;
        if (tickers[type] !== undefined) {
            for (var i = 0, lens = tickers[type].length; i < lens; i++) {
                var selTicker = tickers[type][i];
                if (selTicker['timeout'])
                    clearTimeout(selTicker['timeout']);
                if (selTicker['index'])
                    clearInterval(selTicker['index']);
            }
            tickers[type] = undefined;
        }
    };

    /**
     * @method schedule.addEventListener
     * @description
     * @param {string} type
     * @param {function} listener
     * @param {object} target
     */
    proto.addEventListener = function (type, listener, target) {

        if (this._listeners === undefined)
            this._listeners = {};

        var listeners = this._listeners;
        if (listeners[type] === undefined)
            listeners[type] = [];

        if (!this.hasEventListener(type, listener, target))
            listeners[type].push({callback: listener, eventTarget: target});
    };

    /**
     * @method schedule.hasEventListener
     * @description
     * @param {string} type
     * @param {function} listener
     * @param {object} target
     * @returns {boolean}
     */
    proto.hasEventListener = function (type, listener, target) {
        if (this._listeners === undefined)
            return false;

        var listeners = this._listeners;
        if (listeners[type] !== undefined) {
            for (var i = 0, len = listeners[type].length; i < len; i++) {
                var selListener = listeners[type][i];
                if (selListener.callback === listener && selListener.eventTarget === target)
                    return true;
            }
        }
        return false;
    };

    /**
     * @method schedule.removeEventListeners
     * @description
     * @param {object} target
     */
    proto.removeEventListeners = function (target) {
        if (this._listeners === undefined)
            return;

        var listeners = this._listeners;
        for (var key in listeners) {
            var listenerArray = listeners[key];

            if (listenerArray !== undefined) {
                for (var i = 0; i < listenerArray.length;) {
                    var selListener = listenerArray[i];
                    if (selListener.eventTarget === target)
                        listenerArray.splice(i, 1);
                    else
                        i++
                }
            }
        }
    };

    /**
     * @method schedule.removeEventListener
     * @description
     * @param type
     * @param target
     */
    proto.removeEventListener = function (type, target) {
        if (this._listeners === undefined)
            return;

        var listeners = this._listeners;
        var listenerArray = listeners[type];

        if (listenerArray !== undefined) {
            for (var i = 0; i < listenerArray.length;) {
                var selListener = listenerArray[i];
                if (selListener.eventTarget === target)
                    listenerArray.splice(i, 1);
                else
                    i++
            }
        }
    };

    /**
     * @method schedule.clearEventListeners
     * @description
     */
    proto.clearEventListeners = function () {
        if (this._listeners)
            this._listeners = {};
    };

    /**
     * @method schedule.dispatchEvent
     * @description
     * @param event
     * @param clearAfterDispatch
     * @param eventData
     */
    proto.dispatchEvent = function (event, clearAfterDispatch, eventData) {
        if (this._listeners === undefined)
            return;

        if (clearAfterDispatch == null)
            clearAfterDispatch = true;
        var listeners = this._listeners;
        var listenerArray = listeners[event];

        if (listenerArray !== undefined) {
            var array = [];
            var length = listenerArray.length;

            for (var i = 0; i < length; i++) {
                array[i] = listenerArray[i];
            }

            for (i = 0; i < length; i++) {
                array[i].callback.call(array[i].eventTarget, this, eventData);
            }

            if (clearAfterDispatch)
                listenerArray.length = 0;
        }
    };

    return schedule;
});
//模块名
define('net',[],function () {
    function Ws(url, trigger) {
        this._client = new WebSocket(url);
        this._queue = [];
        this._callback = {};
        this._delayQueue = [];
        this._currentURL = url;
        this._client.onopen = this.onOpenCallback.bind(this);
        this._client.onerror = this.onErrorCallback.bind(this);
        this._client.onclose = this.onCloseCallback.bind(this);
        this._client.onmessage = this.onMessageCallback.bind(this);
        this._count = 0;
        this._tryCount = 0;
        this._maxTryCount = 10;
        this._tryInterval = 5;
        this._trying = false;
        //todo 是否恢复登录中
        this._resuming = false;

        this.trigger = trigger;
    }

    var proto = Ws.prototype;

    proto.onOpenCallback = function () {
        console.log('The server connect success');
        console.log('服务器连接成功...');
        this._trying = false;
        this._tryCount = 0;
        var len = this._delayQueue.length;
        //todo 恢复登录
        if (this._resuming) {
            if (this.trigger.cache.isLogin())
                this.trigger.cache.getLogin();
            if (this.trigger.cache.isPartnerLogin())
                this.trigger.cache.getPartnerLogin();
        }


        //发送延迟的请求
        if (len > 0 && !this._resuming) {
            while (len > 0) {
                var buffer = this._delayQueue.shift();
                this.load(buffer[0], buffer[1], buffer[2]);
                len = this._delayQueue.length;
            }
        } else if (this._resuming) {
            var self = this;
            setTimeout(function () {
                self.onOpenCallback()
            }, 2000)
        }
    };

    proto.onErrorCallback = function (event) {
        console.log("The server connection has an error: ", event);
        console.log('服务器连接发生错误', event);

    };

    proto.onCloseCallback = function () {

        var self = this;
        this._trying = false;

        //断线关闭当前请求遮罩
        if (this.trigger.load)
            this.trigger.load.closeAnimation();

        //清除断线前的等待回调的事件
        this.cleanQueue();

        console.log("The server connection has been closed.");
        console.log("服务器连接已关闭");

        if (this._tryCount > this._maxTryCount)
            return;
        setTimeout(function () {
            self.reOpen();
            //断线重连
            // this.trigger.cache.getLogin();
        }, self._tryInterval * 1000); //wait n second to retry.
    };

    proto.onMessageCallback = function (msg) {
        var data = JSON.parse(msg.data);
        if (!data || data.length === 0)
            return;
        this.messageResponse(data);

        //通信中的登录验证,单独过滤
        if (data['data']['status'] == 420) {
            if (this.trigger.cache)
                this.trigger.cache.setLogout();
        }
    };

    proto.messageResponse = function (respData) {
        if (!respData)
            return;

        var name = respData['requestId'];
        if (!this.hasCallbackByName(name))
            return this.trigger.schedule.dispatchEvent(respData['functionName'], false, respData['data']);
        var caution = this.queryAnimation(name);
        if (!caution)
            this.trigger.load.closeAnimation();
        var request = this.queryData(name);
        if (!request)
            return;
        var callback = this.queryCallback(name);
        if (!callback)
            return;
        this.removeQueue(request);
        if (typeof callback == 'string') {
            if (this.trigger.schedule)
                this.trigger.schedule.dispatchEvent(callback, false, respData['data']);
        } else {
            if (respData['data']['status'] == 200) {
                callback.resolve(respData['data']['data'], respData['data'])
            } else {
                if (this.trigger.communicationError && !caution)
                    this.trigger.communicationError(respData['functionName'], respData['data']);
                callback.reject(respData['data'])
            }
        }
        this.deleteCallback(name);
    };

    /**
     * 重连webSocket端口
     * reopen the webSocket connect
     * @method reOpen
     * @author 2016/9/23 by Wilde.Chen
     */
    proto.reOpen = function () {
        if (this._trying)
            return;

        if (this._client && this._client.readyState === WebSocket.OPEN)
            return;

        try {
            if (this.trigger.cache.isLogin() || this.trigger.cache.isPartnerLogin())
                this._resuming = true;
            this._trying = true;
            this._tryCount++;
            this._client = new WebSocket(this._currentURL);
            this._client.onopen = this.onOpenCallback.bind(this);
            this._client.onerror = this.onErrorCallback.bind(this);
            this._client.onclose = this.onCloseCallback.bind(this);
            this._client.onmessage = this.onMessageCallback.bind(this);
        } catch (e) {
            console.log('The server is down for maintenance,please try again later');
            console.log('服务器正在维护,请稍后重试');
        }
    };

    proto.load = function (buffer, tag, silence) {
        if (this.inQueue(buffer))
            return;

        if (this._client.readyState === WebSocket.CLOSED || this._client.readyState === WebSocket.CLOSING) {
            this.delayQueue(buffer, tag, silence);
            console.log('The server is closed...\nmessage will be send,when the server is reconnect.');
            console.log('webSocket已经关闭...\n消息将会再重连后发送');
            return;
        }
        if (this._client.readyState === WebSocket.CONNECTING) {
            this.delayQueue(buffer, tag, silence);
            console.log('The server is connecting...\nmessage will be send delay');
            console.log('webSocket正在连接中...\n消息将会延迟发送');
            return;
        }
        if (this._client.readyState === WebSocket.OPEN) {
            if (buffer) {
                this._count++;
                this.loadQueue(buffer, tag, silence);
                var sender = $.extend(buffer, {});
                if (!sender['data'])
                    sender['data'] = {};
                sender['data']['platformId'] = this.trigger.platformId;
                sender['data']['requestId'] = 'RQ' + this._count;
                console.log('发送消息', sender);
                if (!silence)
                    this.trigger.load.openAnimation();
                this._client.send(JSON.stringify(sender));
            }
        }
    };

    proto.send = function (buffer, silence, tag) {
        if (this.inQueue(buffer))
            return $.Deferred();

        tag = tag || $.Deferred();

        if (this._client.readyState === WebSocket.CLOSED || this._client.readyState === WebSocket.CLOSING) {
            this.delayQueue(buffer, tag, silence);
            console.log('The server is closed...\nmessage will be send,when the server is reconnect.');
            console.log('webSocket已经关闭...\n消息将会再重连后发送');
            return tag;
        }
        if (this._client.readyState === WebSocket.CONNECTING) {
            this.delayQueue(buffer, tag, silence);
            console.log('The server is connecting...\nmessage will be send delay');
            console.log('webSocket正在连接中...\n消息将会延迟发送');
            return tag;
        }
        if (this._client.readyState === WebSocket.OPEN) {
            if (buffer) {
                this._count++;
                this.loadQueue(buffer, tag, silence);
                var sender = $.extend(true, {}, buffer);
                if (!sender['data'])
                    sender['data'] = {};
                sender['data']['platformId'] = this.trigger.platformId;
                sender['data']['requestId'] = 'RQ' + this._count;
                console.log('发送消息', sender);
                if (!silence)
                    this.trigger.load.openAnimation();
                this._client.send(JSON.stringify(sender));

                return tag;
            }
        }
    };

    proto.inQueue = function (buffer) {
        for (var i in this._queue) {
            if (this._queue[i].service == buffer.service && this._queue[i].functionName == buffer.functionName && objectCompare(this._queue[i].data, buffer.data))
                return true
        }
        return false;
    };

    proto.removeQueue = function (buffer) {
        this._queue.remove(buffer);
    };

    proto.cleanQueue = function () {
        this._queue = [];
        this._callback = {}
    };

    proto.loadQueue = function (buffer, tag, silence) {
        this._queue.push(buffer);
        var index = 'RQ' + this._count;
        this._callback[index] = {};
        this._callback[index]['cb'] = tag;
        this._callback[index]['data'] = buffer;
        this._callback[index]['silence'] = silence;
    };

    proto.delayQueue = function (buffer, tag, silence) {
        if (!this._delayQueue.contains([buffer, tag, silence]))
            this._delayQueue.push([buffer, tag, silence]);
    };

    proto.queryAnimation = function (name) {
        return this._callback[name]['silence'];
    };

    proto.queryData = function (name) {
        return this._callback[name]['data'];
    };

    proto.hasCallbackByName = function (name) {
        return this._callback[name] ? true : false;
    };

    proto.queryCallback = function (name) {
        return this._callback[name]['cb'];
    };

    proto.deleteCallback = function (name) {
        delete this._callback[name];
    };

    function objectCompare(origin, target) {
        for (var i in origin) {
            if (origin[i] != target[i])
                return false;
        }
        return true;
    }

    return Ws;
});
/**
 * Created by wildeChen on 2016/11/23.
 */
/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function a(a){return a.replace(t,"").replace(u,",").replace(v,"").replace(w,"").replace(x,"").split(y)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=s[1]+b(a)+s[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");n[f]||/^(include|print)$/.test(f)||(b="$escape("+b+")")}else b="$string("+b+")";b=s[1]+b+s[2]}return g&&(b="$line="+c+";"+b),r(a(b),function(a){if(a&&!p[a]){var b;b="print"===a?u:"include"===a?v:n[a]?"$utils."+a:o[a]?"$helpers."+a:"$data."+a,w+=a+"="+b+",",p[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,s=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+t+"}",v="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+t+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),x=s[0],y="return new String("+s[3]+");";r(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?x+=e(b):(x+=f(b),c&&(x+=e(c)))});var z=w+x+y;g&&(z="try{"+z+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",z);return A.prototype=n,A}catch(B){throw B.temp="function anonymous($data,$filename) {"+z+"}",B}}var d=function(a,b){return"string"==typeof b?q(b,{filename:a}):g(a,b)};d.version="3.0.0",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return q(a,b)};var g=d.renderFile=function(a,b){var c=d.get(a)||p({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=q(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m};d.helper=function(a,b){o[a]=b};var o=d.helpers=n.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var p=function(a){return d.onerror(a),function(){return"{Template Error}"}},q=d.compile=function(a,b){function d(c){try{return new i(c,h)+""}catch(d){return b.debug?p(d)():(b.debug=!0,q(a,b)(c))}}b=b||{};for(var g in e)void 0===b[g]&&(b[g]=e[g]);var h=b.filename;try{var i=c(a,b)}catch(j){return j.filename=h||"anonymous",j.name="Syntax Error",p(j)}return d.prototype=i.prototype,d.toString=function(){return i.toString()},h&&b.cache&&(f[h]=d),d},r=n.$each,s="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",t=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,v=new RegExp(["\\b"+s.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,y=/^$|,+/;"function"==typeof define?define('template',[],function(){return d}):"undefined"!=typeof exports?module.exports=d:this.template=d}();
//cookie模块

define('cookie',[],function() {
	var cookie = function(name, value, options) {
		if (typeof value != 'undefined') { // name and value given, set cookie
			options = options || {};
			if (value === null) {
				value = '';
				options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
				options.expires = -1;
			}
			var expires = '';
			if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
				var date;
				if (typeof options.expires == 'number') {
					date = new Date();
					date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
				} else {
					date = options.expires;
				}
				expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
			}
			// NOTE Needed to parenthesize options.path and options.domain
			// in the following expressions, otherwise they evaluate to undefined
			// in the packed version for some reason...
			var path = options.path ? '; path=' + (options.path) : '';
			var domain = options.domain ? '; domain=' + (options.domain) : '';
			var secure = options.secure ? '; secure' : '';
			document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		} else { // only name given, get cookie
			var cookieValue = null;
			if (document.cookie && document.cookie != '') {
				var cookies = document.cookie.split(';');
				for (var i = 0; i < cookies.length; i++) {
					var cookie = $.trim(cookies[i]);
					// Does this cookie string begin with the name we want?
					if (cookie.substring(0, name.length + 1) == (name + '=')) {
						cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
						break;
					}
				}
			}
			return cookieValue;
		}
	};

	return cookie;
});
//Common模块

define('common',[],function () {
    var Common = {

        getSearch: function () {
            var search = {};
            var address = location.hash;
            address = address.split('?');
            if (address.length > 1) {
                address = address[1].split('&');
                for (var i = 0, len = address.length; i < len; i++) {
                    var key = address[i].split('=');
                    search[key[0]] = key[1];
                }
            }

            return search;
        },

        forRounding: function (Digital, How) {
            Digital = Math.round(Digital * Math.pow(10, How)) / Math.pow(10, How);
            return Digital;
        },

        isOwnEmpty: function (obj) {
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    return false;
                }
            }
            return true;
        },

        combination: function (n, m) {
            m = parseInt(m);
            n = parseInt(n);
            if (m < 0 || n < 0) {
                return false;
            }
            if (m == 0 || n == 0) {
                return 1;
            }
            if (m > n) {
                return 0;
            }
            if (m > n / 2.0) {
                m = n - m;
            }

            var result = 0.0;
            for (i = n; i >= (n - m + 1); i--) {
                result += Math.log(i);
            }
            for (i = m; i >= 1; i--) {
                result -= Math.log(i);
            }
            result = Math.exp(result);
            return Math.round(result);
        },

        //数字大小排序-CP用
        sortNum: function (a, b) {
            a = a.toString();
            b = b.toString();
            a = parseInt(a, 10);
            b = parseInt(b, 10);
            if (isNaN(a) || isNaN(b)) {
                return true;
            }
            return (a - b);
        },

        //投注数组序列化
        arraySerialization: function (arr, type) {
            var temp = [];
            var tempStr = '';

            if (type == 1) { //模式1,拼接投注用的字符串

                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] != '' && arr[i] != null) {

                        temp.push(arr[i].sort(Common.sortNum).join('&'));

                    }
                }
                tempStr = temp.join('|');
                return tempStr;
            } else if (type == 2) { //模式2,拼接显示用的字符串
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] != '' && arr[i] != null) {
                        temp.push(arr[i].sort(Common.sortNum).join(''));
                    }
                }
                tempStr = temp.join();
                return tempStr;
            }

        },

        /**
         * 获取指定组合的所有可能性
         *
         * 例子：5选3
         * $aBaseArray = array('01','02','03','04','05');
         * ----getCombination($aBaseArray,3)
         * 1.初始化一个字符串：11100;--------1的个数表示需要选出的组合
         * 2.将1依次向后移动造成不同的01字符串，构成不同的组合，1全部移动到最后面，移动完成：00111.
         * 3.移动方法：每次遇到第一个10字符串时，将其变成01,在此子字符串前面的字符串进行倒序排列,后面的不变：形成一个不同的组合.
         *            如：11100->11010->10110->01110->11001->10101->01101->10011->01011->00111
         *            一共形成十个不同的组合:每一个01字符串对应一个组合---如11100对应组合01 02 03;01101对应组合02 03 05
         *
         *
         * @param  {Array} aBaseArray 基数数组
         * @param  {int}   iSelectNum 选数
         * @author mark
         *
         */
        getCombination: function (aBaseArray, iSelectNum) {
            var self = this;

            var iBaseNum = aBaseArray.length;
            var aResult = [];
            var aString = [];
            if (iSelectNum > iBaseNum) {
                return aResult;
            }
            if (iSelectNum == 1) {
                return aBaseArray;
            }
            if (iBaseNum == iSelectNum) {
                aResult[0] = aBaseArray.join(",");
                return aResult;
            }
            var sString = '';
            var sLastString = '';
            var sTempStr = '';
            for (var i = 0; i < iSelectNum; i++) {
                sString += '1';
                sLastString += '1';
            }
            for (var j = 0; j < iBaseNum - iSelectNum; j++) {
                sString += '0';
            }
            for (var k = 0; k < iSelectNum; k++) {
                sTempStr += aBaseArray[k] + ',';
            }
            aResult[0] = sTempStr.substr(0, sTempStr.length - 1);
            var count = 1;
            sTempStr = '';
            while (sString.substr(sString.length - iSelectNum, iSelectNum) != sLastString) {
                sString = self.moveString(sString);
                for (var k = 0; k < iBaseNum; k++) {
                    if (sString.substr(k, 1) == '1') {
                        sTempStr += aBaseArray[k] + ',';
                    }
                }
                aResult[count] = sTempStr.substr(0, sTempStr.length - 1);
                sTempStr = '';
                count++;
            }
            return aResult;
        },

        //移动字符串
        moveString: function (sString) {
            var top = '';//开始符串
            var middle = '01';//中间字符串
            var bottom = '';//结束符串
            var tmpone = '';
            var tmptwo = '';
            var find = false;//是否找到分隔字符串
            var findfirst = false;//找到第一个字符
            for (var m = 0; m < sString.length; m++) {
                if (find == false) {
                    top += sString.substr(m, 1);
                }
                if (find == false && sString.substr(m, 1) == '1') {
                    findfirst = true;
                } else if (find == false && findfirst == true && sString.substr(m, 1) == '0') {
                    find = true;
                } else if (find == true) {
                    bottom += sString.substr(m, 1);
                }
            }
            top = top.substr(0, top.length - 2);
            for (var n = 0; n < top.length; n++) {
                if (top.substr(n, 1) == '1') {
                    tmpone += top.substr(n, 1);
                } else if (top.substr(n, 1) == '0') {
                    tmptwo += top.substr(n, 1);
                }
            }
            top = tmpone + tmptwo;
            return top + middle + bottom;
        },

        //格式化金额数字
        formatCurrency: function (num) {
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num))
                num = "0";
            var sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            var cents = num % 100;
            num = Math.floor(num / 100).toString();
            if (cents < 10)
                cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' +
                    num.substring(num.length - (4 * i + 3));
            return (((sign) ? '' : '-') + num + '.' + cents);
        },

        //倒计时,输入秒数,输出时间
        timeDown: function (second, noZero) {
            var day = '', hour = '', minute = '';
            if (second >= 86400) {
                day = Math.floor(second / 86400);
                day += '';
                second = second % (86400);
            }
            if (second >= 3600) {
                hour = Math.floor(second / 3600);
                hour += '';
                hour = hour.length < 2 && !noZero ? ('0' + hour) : hour;
                second = second % 3600;
            }
            if (second >= 60) {
                minute = Math.floor(second / 60);
                minute += '';
                minute = minute.length < 2 && !noZero ? ('0' + minute) : minute;
                second = second % 60;
            } else {
                minute = '00';
            }
            if (second >= 0) {
                second += '';
                second = second.length < 2 && !noZero ? ('0' + second) : second;
            }
            return [day, hour, minute, second];
        },

        //Buffer转换成Base64字符串
        arrayBufferToBase64: function (buffer) {
            var binary = '';
            var bytes = new Uint8Array(buffer);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        },

        //获取剩余天数
        getLeftDayInMonth: function () {
            var today = new Date();
            var now = today.getDate();
            var year = today.getYear();
            if (year < 2000) year += 1900; // Y2K fix
            var month = today.getMonth();
            var monArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            // check for leap year
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) monArr[1] = "29";
            return (monArr[month] - now) * 24 * 3600;
        },

        //获取今日剩余时间
        getExpire: function () {

            var today = new Date();

            today.setHours(0);

            today.setMinutes(0);

            today.setSeconds(0);

            today.setMilliseconds(0);

            //明日0点时间戳

            var tomorrow_0 = today.getTime() / 1000 + (24 * 3600);

            var current_time = Math.round(new Date().getTime() / 1000);

            return tomorrow_0 - current_time;

        },

        //获取今日前的某一个天日期,若不传值则获取今天的日期
        //返回的日期格式为标准日期标签的格式
        //example:2016-08-10 0:0:0
        /**
         *
         * @param {Number} [days] 距离今天的天数,不传或者0则为今天
         * @param {Number} [type] 设置返回的时间规则,0或不传为当前时间,1为0时0分0秒,2为23时59分59秒
         * @returns {*}
         */
        getOneDateBeforeToday: function (days, type) {
            var num = days || 0;

            if (typeof(num) != 'number') {
                console.log('传入参数类型不是数字', num);
                return null;
            }

            if (String(num).indexOf('.') != -1) {
                console.log('传入参数类型不是整数', num);
                return null;
            }

            if (String(num).indexOf('-') != -1) {
                console.log('不能传入负数', num);
                return null;
            }

            var today = new Date();
            today.setDate(today.getDate() - num);
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            month += '';
            if (month.length == 1)
                month = '0' + month;
            var day = today.getDate();
            day += '';
            if (day.length == 1)
                day = '0' + day;
            var hour = today.getHours();
            var minute = today.getMinutes();
            var second = today.getSeconds();

            if (type) {
                if (type === 1)
                    return year + '-' + month + '-' + day + ' 00:00:00';
                else
                    return year + '-' + month + '-' + day + ' 23:59:59';
            } else {
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
            }
        },

        //日期转字符串
        transferDateToString: function (obj) {
            if (!obj instanceof Date) {
                console.log('传入对象错误,对象不是一个日期对象', obj);
                return null;
            }

            var year = obj.getFullYear();
            var month = obj.getMonth() + 1;
            month += '';
            if (month.length == 1)
                month = '0' + month;
            var day = obj.getDate();
            day += '';
            if (day.length == 1)
                day = '0' + day;
            var hour = obj.getHours();
            hour += '';
            if (hour.length == 1)
                hour = '0' + hour;
            var minute = obj.getMinutes();
            minute += '';
            if (minute.length == 1)
                minute = '0' + minute;
            var second = obj.getSeconds();
            second += '';
            if (second.length == 1)
                second = '0' + second;

            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

        },

        //百分比输出
        percent: function (number) {
            number = (number * 100).toFixed(2);
            return number.toString() + '%';
        },

        //页数计算
        pageCount: function (now, every) {
            return ((now - 1 - (now - 1) % every) / every) + 1;
        },

        //字符串加密成数字
        encrypt: function (code) {
            var back = 0;
            var team = code.split('');
            for (var i = 0, len = team.length; i < len; i++) {
                back += team[i].charCodeAt(0);
            }
            return back;
        },

        //传入作为密码本的时间基础
        encryptBookDate: function (book) {
            var now = parseInt(new Date().getTime().div(1000).toFixed());
            var base = parseInt(new Date(book).getTime().div(1000).toFixed());
            return now - base;
        },

        //求数字的因数个数
        countFactor: function (n) {
            if (n == 1)
                return 1;
            var f = 2;
            for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
                if (n % i == 0) {
                    if (Math.floor(Math.sqrt(n)) == Math.sqrt(n)) {
                        f += 1;
                    }
                    else {
                        f += 2;
                    }
                }
            }
            return f;
        },

        /**
         * 黑名单验证,提供字符串或数组形式的list,提供的字符串或数组中的字符串任意一个在黑名单中将返回false
         * @param list
         * @param staff
         */
        blackListValid:function (list,staff) {
            if(list instanceof Array)
                return Array.intersect(list,staff).length == 0;
            else
                return !staff.contains(list)
        },
        
        /**
         * @function 更新html模板 并重新绑定 data-element 和 data-events
         * @param  {object} pageClass 实例化后的Page对象{@link page} 作为绑定对象
         * @param  {String} html html模板字符串
         * @param  {HTMLElement} node 插入的dom节点
         */
        mergeContextTemplate: function (pageClass, html, node) {
            var html = html.replace(/[\r\n]/g, '');
            var node = $(node);
            var fragment = $(html);

            node.html(fragment);

            pageClass.bindDomNode(node);
            pageClass.bindEvents(node);
        }
    };

    return Common;
});
//cache模块
var mcm = mcm || {};
define('cache',['cookie', 'common'], function (cook, common) {
    var cache = function () {

        this._username = null;
        this._realName = null;
        this._overage = null;
        this._lockCredit = null;
        this._pendingCredit = null;
        this._playerLevel = null;
        this._allLevel = null;
        this._isLogin = false;
        this._isPartnerLogin = false;
        this._playerId = null;
        this._partnerId = null;
        this._provider = [];
        this._bankList = {};
        this._userInfo = null;
        this._partnerInfo = null;
        this._partnerName = null;
        this._partnerRealName = null;
        this._bank = null;
        this._partnerBank = null;
        this._init = true;

    };

    var proto = cache.prototype;

    proto.isLogin = null;

    proto.setLogin = null;

    proto.getLogin = null;

    proto.setLogout = null;

    proto.updateUserInfo = null;
    /**
     * @param {object} target
     * @param {string} [type]
     */
    proto.init = function (target, type) {

        if (!target)
            console.error('未加载缓存组件所依赖的事件管理器');

        /**
         * 根据type来设置cache事件针对的用户类型
         * @type {string|string}
         */
        type = type || 'player';
        switch (type) {
            case 'player':
            case 'separate':
                proto.setLogin = proto._setPlayerLogin;
                proto.isLogin = proto._isPlayerLogin;
                proto.getLogin = proto._getPlayerLogin;
                proto.setLogout = proto._setPlayerLogout;
                proto.updateUserInfo = proto._updatePlayerInfo;
                break;
            case 'combine':
                proto.setLogin = proto._setCombinedLogin;
                proto.isLogin = proto._isPlayerLogin;
                proto.getLogin = proto._getCombinedLogin;
                proto.updateUserInfo = proto._updateCombinedInfo;
                proto.setLogout = proto._setCombinedLogout;
                break;
            case 'partner':
                proto.setLogin = proto.setPartnerLogin;
                proto.isLogin = proto.isPartnerLogin;
                proto.getLogin = proto.getPartnerLogin;
                proto.updateUserInfo = proto.updatePartnerInfo;
                proto.setLogout = proto.setPartnerLogout;
                break;
        }


        /**
         * 登录相关注册
         */
        target.addEventListener('loginStatus', this._getPlayerInfo, this);
        target.addEventListener('loginPStatus', this._getPartnerInfo, this);
        target.addEventListener('loginCStatus', this._getCombinedInfo, this);
        target.addEventListener('loginResponse', this.loginResponse, this);

        /**
         * 用户等级信息
         */
        target.addEventListener('allLevel', this.setAllLevel, this);
        /**
         * 银行列表
         */
        target.addEventListener('bankList', this.setBankList, this);
        /**
         * 余额管理
         */
        target.addEventListener('loadOverage', this.loadOverage, this);

    };

    /**
     * 玩家登录
     * @param pack
     * @param token
     */
    proto._setPlayerLogin = function (pack, token) {
        var user = pack;

        this._username = user['name'];
        this._realName = user['realName'];
        this._playerLevel = user['playerLevel']['value'];
        this._playerId = user['playerId'];
        this._isLogin = true;
        this._userInfo = user;

        this._init = false;
        mcm.schedule.dispatchEvent('loginDelay', false, null);
        mcm.schedule.dispatchEvent('loadingDelay', false, null);


        // this.constUpdate();
        this.loginBroadcast(pack, token);

        //更新银行卡信息
        this._setPlayerBankInfo();

        /**
         * 更新余额
         */
        this.setOverage(user['validCredit'], user['lockedCredit'], user['pendingRewardAmount']);
    };

    /**
     * 代理登录
     * @param pack
     * @param token
     */
    proto.setPartnerLogin = function (pack, token) {
        var user = pack;

        this._partnerName = user['partnerName'].substring(1);
        this._partnerRealName = user['realName'];
        this._isPartnerLogin = true;
        this._partnerInfo = user;
        this._partnerId = user['partnerId'];

        this._init = false;
        mcm.schedule.dispatchEvent('loginDelay', false, null);
        mcm.schedule.dispatchEvent('loadingDelay', false, null);


        // this.constUpdate();
        this.loginBroadcast(pack, token);

        //更新银行卡信息
        this._setPartnerBankInfo();

        /**
         * 更新余额
         */
        this.setOverage(user['validCredit'], user['lockedCredit'], user['pendingRewardAmount']);
    };

    /**
     * 合并登录
     * @param pack
     * @param token
     * @private
     */
    proto._setCombinedLogin = function (pack, token) {
        var user = pack instanceof Array ? pack[0] : pack;
        var partner = pack instanceof Array ? pack[1] : pack;

        this._username = user['name'];
        this._realName = user['realName'];
        this._playerLevel = user['playerLevel']['value'];
        this._playerId = user['playerId'];
        this._isLogin = true;
        this._userInfo = user;
        this._partnerInfo = partner;
        this._partnerId = partner['partnerId'];

        this._init = false;
        mcm.schedule.dispatchEvent('loginDelay', false, null);
        mcm.schedule.dispatchEvent('loadingDelay', false, null);


        // this.constUpdate();
        this.loginBroadcast(pack, token);

        //更新银行卡信息
        this._setPlayerBankInfo();
        this._setPartnerBankInfo();

        /**
         * 更新余额
         */
        this.setOverage(user['validCredit'], user['lockedCredit'], user['pendingRewardAmount']);
    };

    /**
     * 登录后的常量加载
     */
    proto.constUpdate = function () {
        if (!this._allLevel)
            mcm.net.load({
                service: 'playerLevel',
                functionName: 'getAllLevel',
                data: {
                    playerId: this._playerId
                }
            }, 'allLevel', true);

        if (!this.hasBankList())
            mcm.net.load({
                service: 'payment',
                functionName: 'getBankTypeList'
            }, 'bankList', true);
    };

    /**
     * 登录后广播
     */
    proto.loginBroadcast = function (pack, token) {
        /**
         * 广播用户名
         */
        mcm.schedule.dispatchEvent('updateUserName', false, this._username);
        /**
         * 更新界面登录状态
         */
        mcm.schedule.dispatchEvent('loginCallback', false, this._isLogin);
        mcm.schedule.dispatchEvent('loginPCallback', false, this._isPartnerLogin);

        /**
         * 存储id与token至cookies
         */
        if (token && cook) {
            cook('token', token);
            var playerId = pack instanceof Array ? pack[0]['playerId'] : pack['playerId'];
            if (playerId)
                cook('playerId', playerId);
            var partnerId = pack instanceof Array ? pack[1]['partnerId'] : pack['partnerId'];
            if (partnerId)
                cook('partnerId', partnerId);
        } else {
            if (!cook)
                console.warn('未加载cookies组件,无法保存cookies');
        }
    };

    /**
     * 用户登录状态
     * @returns {boolean|*}
     */
    proto._isPlayerLogin = function () {
        return this._isLogin;
    };

    /**
     * 代理登录状态
     * @returns {boolean|*}
     */
    proto.isPartnerLogin = function () {
        return this._isPartnerLogin;
    };

    proto._getPlayerLogin = function (callback) {
        if (cook('token') != undefined) {
            var self = this;
            mcm.net.send({
                service: 'player',
                functionName: 'authenticate',
                data: {
                    playerId: cook('playerId'),
                    token: cook('token')
                }
            }, true).then(function (result, data) {
                self._isLogin = result;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginStatus', false, data);
            }).fail(function (data) {
                self._isLogin = false;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginStatus', false, data);
            });
            return '';
        } else {
            return false;
        }
    };

    proto.getPartnerLogin = function (callback) {
        if (cook('tokenPartner') != undefined) {
            var self = this;
            mcm.net.send({
                service: 'partner',
                functionName: 'authenticate',
                data: {
                    partnerId: cook('partnerId'),
                    token: cook('tokenPartner')
                }
            }, true).then(function (result, data) {
                self._isPartnerLogin = result;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginPStatus', false, data);
            }).fail(function (data) {
                self._isPartnerLogin = false;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginPStatus', false, data);
            });
            return '';
        } else {
            return false;
        }
    };

    proto._getCombinedLogin = function (callback) {
        if (cook('token') != undefined) {
            var self = this;
            mcm.net.send({
                service: 'player',
                functionName: 'authenticatePlayerPartner',
                data: {
                    playerId: cook('playerId'),
                    partnerId: cook('partnerId'),
                    token: cook('token')
                }
            }, true).then(function (result, data) {
                self._isLogin = result;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginCStatus', false, data);
            }).fail(function (data) {
                self._isLogin = false;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginCStatus', false, data);
            });
            return '';
        } else {
            return false;
        }
    };

    proto.getStatus = function () {
        return this._init;
    };

    proto._getPlayerInfo = function (sender, eventData) {
        if (!eventData)
            return;

        if (mcm.net._resuming)
            mcm.net._resuming = !mcm.net._resuming;

        if (eventData['data']) {
            mcm.net.load({
                service: 'player',
                functionName: 'get',
                data: {
                    playerId: cook('playerId')
                }
            }, 'loginResponse', true);
        } else {
            this.setLogout();
        }
    };

    proto._getPartnerInfo = function (sender, eventData) {
        if (!eventData)
            return;

        var self = this;

        if (mcm.net._resuming)
            mcm.net._resuming = !mcm.net._resuming;

        if (eventData['data']) {
            mcm.net.send({
                service: 'partner',
                functionName: 'get',
                data: {
                    partnerId: cook('partnerId')
                }
            }, true).then(function (result, data) {
                var token;

                if (result['token'])
                    token = eventData['token'];
                self.setLogin(result, token);
            })
        } else {
            this.setLogout();
        }
    };

    proto._getCombinedInfo = function (sender, eventData) {
        if (!eventData)
            return;

        if (mcm.net._resuming)
            mcm.net._resuming = !mcm.net._resuming;

        if (eventData['data']) {
            mcm.net.load({
                service: 'player',
                functionName: 'getPlayerPartner',
                data: {
                    playerId: cook('playerId'),
                    partnerId: cook('partnerId')
                }
            }, 'loginResponse', true);
        } else {
            this.setLogout();
        }
    };

    proto._updatePlayerInfo = function () {
        this._init = true;
        var self = this;
        mcm.net.send({
            service: 'player',
            functionName: 'get',
            data: {
                playerId: cook('playerId')
            }
        }, true).then(function (result) {
            var token;

            if (result['token'])
                token = result['token'];
            self._setPlayerLogin(result, token);
        })
    };

    proto.updatePartnerInfo = function () {
        this._init = true;
        var self = this;
        mcm.net.send({
            service: 'partner',
            functionName: 'get',
            data: {
                partnerId: cook('partnerId')
            }
        }, true).then(function (result) {
            var token;

            if (result['token'])
                token = result['token'];
            self.setPartnerLogin(result, token);
        })
    };

    proto._updateCombinedInfo = function () {
        this._init = true;
        var self = this;
        mcm.net.send({
            service: 'player',
            functionName: 'getPlayerPartner',
            data: {
                playerId: cook('playerId'),
                partnerId: cook('partnerId')
            }
        }, true).then(function (result) {
            var token;
            if (result['token'])
                token = result['token'];
            self._setCombinedLogin(result, token);
        })
    };

    proto.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            var token;
            var data = eventData['data'];

            if (eventData['token']) {
                //todo 登录行为
                token = eventData['token'];
                mcm.net.send({
                    service: 'player',
                    functionName: 'addClientSourceLog',
                    data: {
                        sourceUrl: document.referrer,
                        playerName: typeof data == Array ? data[0].name : data.name,
                        clientType: "web",
                        accessType: "normal"
                    }
                }, true);
            }
            this.setLogin(data, token);
        }
    };

    proto._setPlayerLogout = function () {
        cook('token', null);
        cook('playerId', null);
        this._username = null;
        this._realName = null;
        this._playerLevel = null;
        this._playerId = null;
        this._isLogin = false;
        this._userInfo = null;
        this._bank = null;
        mcm.schedule.dispatchEvent('loginCallback', false, this._isLogin);

    };

    proto.setPartnerLogout = function () {
        cook('tokenPartner', null);
        cook('partnerId', null);
        this._partnerName = null;
        this._partnerRealName = null;
        this._isPartnerLogin = false;
        this._partnerInfo = null;
        this._partnerId = null;
        this._partnerBank = null;
        mcm.schedule.dispatchEvent('loginPCallback', false, this._isPartnerLogin);

    };

    proto._setCombinedLogout = function () {
        cook('token', null);
        cook('playerId', null);
        cook('partnerId', null);
        this._username = null;
        this._realName = null;
        this._playerLevel = null;
        this._playerId = null;
        this._isLogin = false;
        this._userInfo = null;
        this._partnerInfo = null;
        this._partnerId = null;
        this._bank = null;
        mcm.schedule.dispatchEvent('loginCallback', false, this._isLogin);

    };


    proto.getUserInfoFromCache = function () {
        return this._userInfo;
    };

    proto.getPartnerInfoFromCache = function () {
        return this._partnerInfo;
    };

    proto.getUserAccount = function () {
        return this._username;
    };

    proto.getPartnerAccount = function () {
        return this._partnerName;
    };

    proto.getPlayerId = function () {
        return this._playerId || cook('playerId') || null;
    };

    proto.getPartnerId = function () {
        return this._partnerId || cook('partnerId') || null;
    };

    proto.getUserName = function () {
        return this._realName;
    };

    proto.getPartnerName = function () {
        return this._partnerRealName;
    };

    proto.getUserLevel = function () {
        return this._playerLevel;
    };

    proto.getLevelDetail = function (lv) {
        return this._allLevel[lv];
    };

    proto.setLevelRatio = function (ratioList) {
        var keys = Object.keys(ratioList);
        for (var i = 0, len = keys.length; i < len; i++) {
            var index = keys[i];
            if (!this._allLevel[index])
                this._allLevel[index] = {};
            this._allLevel[index]['ratio'] = ratioList[index]['7'];
        }
    };

    proto.getAllLevel = function () {
        return this._allLevel;
    };

    proto.setAllLevel = function (sender, eventData) {
        if (!eventData)
            return;

        if (eventData['status'] == 200) {
            var team = eventData['data'];
            if (team.length > 0)
                this._allLevel = {};
            for (var i = 0, len = team.length; i < len; i++) {
                var lv = team[i];
                this._allLevel[lv['value']] = {
                    name: lv['name']
                };
                for (var j = 0, jLen = lv['levelUpConfig'].length; j < jLen; j++) {
                    var config = lv['levelUpConfig'][j];
                    if (config['topupPeriod'] == 'DAY')
                        this._allLevel[lv['value']]['topUpMax'] = config['topupLimit'];
                    if (config['consumptionPeriod'] == 'DAY')
                        this._allLevel[lv['value']]['consumptionMax'] = config['consumptionLimit'];
                }
            }
        }
    };

    proto.addProvider = function (provider) {
        if (!this._provider.contains(provider))
            this._provider.push(provider);
    };

    proto.isReadyProviderCredit = function () {
        for (var i = 0, len = this._provider.length; i < len; i++) {
            var target = this._provider[i];
            if (target['status'] == 1 && target['credit'] == null)
                return false;
        }
        return true;
    };

    proto.setProviderCredit = function (providerId, credit) {
        for (var i = 0, len = this._provider.length; i < len; i++) {
            var target = this._provider[i];
            if (target['id'] == providerId) {
                target['credit'] = credit;
                break;
            }
        }
    };

    proto.getProviderCredit = function (providerId) {
        var credit = null;

        for (var i = 0, len = this._provider.length; i < len; i++) {
            var target = this._provider[i];
            if (target['id'] == providerId) {
                credit = target['credit'];
                break;
            }
        }

        return credit;
    };

    proto.getProviderList = function () {
        return this._provider;
    };

    proto.setBankList = function (sender, eventData) {
        if (eventData && eventData['status'] == 200) {
            var obj = eventData['data'];
            for (var i = 0, len = obj.length; i < len; i++) {
                var bank = obj[i];
                this.addBankList({
                    id: bank['id'],
                    name: bank['name']
                });
            }
        }
    };

    proto.hasBankList = function () {
        return !common.isOwnEmpty(this._bankList);
    };

    proto.addBankList = function (bank) {
        this._bankList[bank.id] = bank.name;
    };

    proto.getBankList = function () {
        var arr = [];
        var Keys = Object.keys(this._bankList);
        for (var i = 0, len = Keys.length; i < len; i++) {
            var key = Keys[i];
            var obj = {
                id: key,
                name: this._bankList[key]
            };
            arr.push(obj);
        }
        return arr;
    };

    proto.getBank = function (id) {
        return this._bankList[id];
    };

    proto.getPlayerBankInfo = function () {
        return this._bank || false;
    };
    proto.getPartnerBankInfo = function () {
        return this._partnerBank || false;
    };

    proto._setPlayerBankInfo = function () {
        if (this._userInfo.bankName == undefined)
            return;
        this._bank = {
            bankName: this._userInfo.bankName,
            bankAccount: this._userInfo.bankAccount,
            bankAccountName: this._userInfo.bankAccountName,
            bankAccountType: this._userInfo.bankAccountType,
            bankAccountCity: this._userInfo.bankAccountCity,
            bankAddress: this._userInfo.bankAddress
        };
    };

    proto._setPartnerBankInfo = function () {
        if (this._partnerInfo.bankName == undefined)
            return;
        this._partnerBank = {
            bankName: this._partnerInfo.bankName,
            bankAccount: this._partnerInfo.bankAccount,
            bankAccountName: this._partnerInfo.bankAccountName,
            bankAccountType: this._partnerInfo.bankAccountType,
            bankAccountCity: this._partnerInfo.bankAccountCity,
            bankAddress: this._partnerInfo.bankAddress
        };
    };

    //加载余额
    proto.loadOverage = function (sender, eventData) {

        if (eventData) {
            if (eventData['status'] == 200) {
                var value = eventData['data']['validCredit'];
                var lockValue = eventData['data']['lockedCredit'];
                var pendingValue = eventData['data']['pendingRewardAmount'];
                this.setOverage(value, lockValue, pendingValue);
            }
        } else {
            if (this._isLogin)
                mcm.net.load({
                    service: 'player',
                    functionName: 'getCredit'
                }, 'loadOverage', true);
        }
    };

    //改变余额
    proto.setOverage = function (value, lockValue, pendingRewardAmount) {
        this._overage = value;
        this._lockCredit = lockValue;
        this._pendingCredit = pendingRewardAmount;

        mcm.schedule.dispatchEvent('getOverage', false, this._overage);
        mcm.schedule.dispatchEvent('getBalance', false, [this._lockCredit, this._pendingCredit])
    };

    /**
     * 获取余额
     * @returns {null|*}
     */
    proto.getOverage = function () {
        return this._overage;
    };

    /**
     * 获取冻结余额
     * @returns {*}
     */
    proto.getLockCredit = function () {
        return this._lockCredit;
    };

    /**
     * 获取待审批金额
     * @returns {number}
     */
    proto.getPromoCredit = function () {
        return this._pendingCredit ? this._pendingCredit : 0;
    };

    return cache;
});
//_layer模块
define('_layer',[],function () {
    var Layer = function (pack) {

        //构成弹出层
        var $inputBox = $(pack['content']);

        var _wakeUp_layer = function () {

            $('body').append($inputBox);
            //弹出层动画
            setTimeout(function () {
                $('#layer-' + pack.eventId).addClass('show');
            }, 100)
        };
        //添加弹出层
        _wakeUp_layer();

        //事件绑定
        var time = pack.clock || 5;
        //定时器
        var timer;

        if (pack.btn != undefined) {
            for (var i = 0, len = pack.btn.length; i < len; i++) {
                (function (x) {
                    var event = pack.btn[x];
                    $('#' + event['id']).on('click', function () {
                        if (event['event'])
                            event['event']();
                        //关闭界面
                        $('#layer-' + pack.eventId).removeClass('show');
                        setTimeout(function () {
                            $inputBox.remove();
                        }, 300);
                        if (timer)
                            clearInterval(timer);
                    })
                })(i)
            }
            if (pack.clock && pack.clock > 0) {
                timer = setInterval(function () {
                    if (time === 0) {
                        clearInterval(timer);
                        if (pack['cancel']['event'])
                            pack['cancel']['event']();
                        $('#layer-' + pack.eventId).removeClass('show');
                        setTimeout(function () {
                            $inputBox.remove();
                        }, 300);
                    } else {
                        time--;
                    }
                }, 1000);
            }
        } else if (pack.btn == undefined || pack.clock && pack.clock > 0) {
            timer = setInterval(function () {
                if (time === 0) {
                    if (pack['cancel']['event'])
                        pack['cancel']['event']();
                    $('#layer-' + pack.eventId).removeClass('show');
                    setTimeout(function () {
                        $inputBox.remove();
                    }, 300);
                } else {
                    time--;
                }
            }, 1000);
        }


        $('#' + pack['cancel']['id']).on('click', function () {
            if (pack['cancel']['event'])
                pack['cancel']['event']();
            //关闭界面
            $('#layer-' + pack.eventId).removeClass('show');
            setTimeout(function () {
                $inputBox.remove();
            }, 300);
            if (timer)
                clearInterval(timer);
        });

    };

    return Layer;
});
//模块名
var mcm = mcm || {};
define('ui',[],function () {

    /**
     * @description 弹窗中心
     * @constructor
     */
    function AlertManager() {
        this.alert = null;
        this.floatList = [];
        this.floatSwitch = false;
    }

    var alertProto = AlertManager.prototype;

    /**
     * @method
     * @param {String} tip 弹窗的标签,用于制止相同来源的弹窗重复出现
     * @param {String} content 弹窗的内容
     * @param {String} type 弹窗的类型
     * @param {Object} btn 弹窗的按钮对象 例:[{name:'确定',then:function}]
     * @param {Object||Number} [clock] 定时关闭,单位是秒 或 参数对象 (向下兼容传定时关闭时间)
     * @author 2016/9/29 by Wilde.Chen
     */
    alertProto.sp = function (tip, content, type, btn, clock) {
        if (tip == undefined)
            return console.log('弹窗分类错误');
        if (content == undefined)
            return console.log('请输入弹窗内容');
        if (type == undefined)
            return console.log('弹窗类型错误');

        var self = this;

        if (self.alert == tip)
            return;

        self.alert = tip;
        var options = {};
        if(typeof clock == 'number'){
            options.clock = clock;
        }else{
            options = clock;
        }

        switch (type) {
            case 'normal':
                self.normalLayer(content, btn, options);
                break;
            case 'alert':
                self.alertLayer(content, btn, options);
                break;
            case 'custom':
                self.customLayer(content, btn, options);
                break;
            default:
        }
    };


    //错误弹窗
    alertProto.alertLayer = function (content, btn, options) {
        var self = this;

        var model = mcm.page['ui-alert'];
        var match = model.match(/%btn%(.*)?%btn%/);
        var txt = match[1];
        var _btn = '';
        var eventId = 'event' + (Math.random() * 10000).toFixed();
        //todo 为显示层增加事件ID
        model = model.replace('%layer%', 'layer-' + eventId);
        //todo 替换显示文本
        model = model.replace('%content%', content);
        var cancel = (Math.random() * 10000).toFixed(0);
        model = model.replace('%cancel%', 'btn-layer-cancel' + cancel);
        //替换按钮
        if (btn != undefined) {
            for (var i = 0, len = btn.length; i < len; i++) {
                (function (x) {
                    var t = txt.replace('%name%', btn[x].name);
                    var id = (Math.random() * 10000).toFixed(0);
                    t = t.replace('%uid%', 'btn-layer' + id);
                    btn[x].id = 'btn-layer' + id;
                    btn[x].event = function () {
                        if (btn[x].then)
                            btn[x].then();
                        self.alert = null;
                    };
                    _btn += t;
                })(i)
            }
        }
        model = model.replace(match[0], _btn);

        require(['_layer'], function (layer) {
            layer({
                eventId: eventId,
                content: model,
                btn: btn,
                cancel: {
                    id: 'btn-layer-cancel' + cancel,
                    event: function () {
                        self.alert = null;
                    }
                },
                clock: options && options.clock
            })
        })
    };

    //通用弹窗
    alertProto.normalLayer = function (content, btn, options) {
        var self = this;

        var model = mcm.page['ui-normal'];
        var match = model.match(/%btn%(.*)?%btn%/);
        var txt = match[1];
        var _btn = '';
        var eventId = 'event' + (Math.random() * 10000).toFixed();
        //todo 为显示层增加事件ID
        model = model.replace('%layer%', 'layer-' + eventId);
        //todo 替换显示文本
        model = model.replace('%content%', content);
        var cancel = (Math.random() * 10000).toFixed(0);
        model = model.replace('%cancel%', 'btn-layer-cancel' + cancel);
        //替换按钮
        if (btn != undefined) {
            for (var i = 0, len = btn.length; i < len; i++) {
                (function (x) {
                    var t = txt.replace('%name%', btn[x].name);
                    var id = (Math.random() * 10000).toFixed(0);
                    t = t.replace('%uid%', 'btn-layer' + id);
                    btn[x].id = 'btn-layer' + id;
                    btn[x].event = function () {
                        if (btn[x].then)
                            btn[x].then();
                        self.alert = null;
                    };
                    _btn += t;
                })(i)
            }
        }
        model = model.replace(match[0], _btn);

        require(['_layer'], function (layer) {
            layer({
                eventId: eventId,
                content: model,
                btn: btn,
                cancel: {
                    id: 'btn-layer-cancel' + cancel,
                    event: function () {
                        self.alert = null;
                    }
                },
                clock: options && options.clock
            })
        })
    };

    //错误弹窗
    alertProto.customLayer = function (content, btn, options) {
        var self = this;

        var model = mcm.page['ui-alert'];
        if(options && options.img){
            var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
            var img = model.match(srcReg);
            model = model.replace(img[1],options.img);
        }
        var match = model.match(/%btn%(.*)?%btn%/);
        var txt = match[1];
        var _btn = '';
        var eventId = 'event' + (Math.random() * 10000).toFixed();
        //todo 为显示层增加事件ID
        model = model.replace('%layer%', 'layer-' + eventId);
        //todo 替换显示文本
        model = model.replace('%content%', content);
        var cancel = (Math.random() * 10000).toFixed(0);
        model = model.replace('%cancel%', 'btn-layer-cancel' + cancel);
        //替换按钮
        if (btn != undefined) {
            for (var i = 0, len = btn.length; i < len; i++) {
                (function (x) {
                    var t = txt.replace('%name%', btn[x].name);
                    var id = (Math.random() * 10000).toFixed(0);
                    t = t.replace('%uid%', 'btn-layer' + id);
                    btn[x].id = 'btn-layer' + id;
                    btn[x].event = function () {
                        if (btn[x].then)
                            btn[x].then();
                        self.alert = null;
                    };
                    _btn += t;
                })(i)
            }
        }
        model = model.replace(match[0], _btn);

        require(['_layer'], function (layer) {
            layer({
                eventId: eventId,
                content: model,
                btn: btn,
                cancel: {
                    id: 'btn-layer-cancel' + cancel,
                    event: function () {
                        self.alert = null;
                    }
                },
                clock: options && options.clock
            })
        })
    };

    // //浮动提示中心
    // alertProto.ft = function (content, time) {
    //     this.floatList.push([content, time]);
    //     this.ftShow();
    // };
    //
    // //浮动提示调用
    // alertProto.ftShow = function () {
    //     if (this.floatList.length === 0)
    //         return;
    //
    //     if (!this.floatSwitch) {
    //         var obj = this.floatList.shift();
    //         var self = this;
    //
    //         self.floatSwitch = true;
    //         var model = mcm.page['floatUp_normal'];
    //         //替换显示文本
    //         model = model.replace('%content%', obj[0]);
    //         var cancel = (Math.random() * 10000).toFixed(0);
    //         model = model.replace('%cancel%', 'btn-layer-cancel' + cancel);
    //         model = model.replace('%float%', 'floatUp' + cancel);
    //
    //         require(['_float'], function (float) {
    //             float({
    //                 content: model,
    //                 id: 'floatUp' + cancel,
    //                 cancel: {
    //                     id: 'btn-layer-cancel' + cancel,
    //                     event: function () {
    //                         self.ftEnd();
    //                     }
    //                 },
    //                 clock: obj[1]
    //             })
    //         })
    //     }
    // };
    //
    // //浮动结束
    // alertProto.ftEnd = function () {
    //     var self = this;
    //     self.floatSwitch = false;
    //     self.ftShow();
    // };

    return {alert: AlertManager};
});
/**
 * Created by Ricky on 2017/4/17.
 */

define('validateForm',[],function() {
    //验证方法序列
    var validateRuleGroup = {
        mobile: function(s) {
            s = $.trim(s);
            return s && /^1[3587][0-9]{9}$/.test(s);
        },
        password: function(s) {
            s = $.trim(s);
            return s && /^[^\s]{6,20}$/i.test(s);
        },
        smscode: function(s) {
            s = $.trim(s);
            return s && /^\d{4}$/i.test(s);
        },
        cncheck: function(s) {
            s = $.trim(s);
            return s && /.*[\u4e00-\u9fa5]+.*$/.test(s);
        },
        idcard: function(s) {
            var reg15, reg18;
            s = $.trim(s);
            reg15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{2}(\d|x)$/i;
            reg18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|x)$/i;
            return s && (reg15.test(s) || reg18.test(s));
        },
        mail: function(s) {
            s = $.trim(s);
            return s && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(s) || s.length === 0;
        },
        bankcard: function (s) {
            s = $.trim(s);
            return s && /^\d{16}|\d{19}$/.test(s);
        },
        isNotEmpty: function(s) {
            return s !== null && s !== undefined && s !== "";
        },
        isNumber: function(s) {
            return !isNaN(s);
        }
    };
    //默认错误提示
    var validateDefaultError = {
        mobile: "您输入的手机号码有误，请输入11位手机号码",
        password: "您输入的密码有误，请输入6~20位密码",
        smscode: "您输入的验证码有误，请输入4位验证码",
        cncheck: "您的输入有误，请输入中文",
        idcard: "您输入的身份证号码有误",
        mail: "您输入的邮箱地址有误",
        bankcard: "您输入的银行卡有误，请输入16~19位银行卡号",
        isNotEmpty: "此项为必填，不能留空",
        isNumber: "请输入数字"
    };
    //input回调事件组
    var validateRecallsGroup = {
        inputSuccess: false,
        inputFail: false
    };

    /**
     * @constructor validate
     * @param {dom} formDom 表单元素
     * @param {object} inputGroup 验证对象组 包含input的name和报错信息以及验证回调
     * @param {function} success
     * @return {Object} this
     */
    var validate = function(formDom, inputGroup, success) {
        var self = this;

        self.formDom = $(formDom);

        /**
         * @desc 表单数据有效性
         * @type {boolean}
         * @private
         */
        self._effectiveness = true;

        /**
         * @desc 通过验证的回调
         * @type {function}
         * @private
         */
        self._success = success;

        self.bindInputEvents(inputGroup);
        self.bindSubmit(inputGroup);

        return self;
    };

    //监听Input的Change事件
    validate.prototype.bindInputEvents = function(group) {
        var self = this;

        self.formDom.on('change', function(e) {
            var inputDom = $(e.target);
            var inputName = inputDom.attr('name');
            var val = inputDom.val();
            var setting = group[inputName];
            var ruleFn, ruleError, result;
            var formData = formToObject(self.formDom);

            if (!group[inputName]) {
                return false;
            } else if (typeof group[inputName] == "string") {
                ruleFn = validateRuleGroup[setting];
                ruleError = validateDefaultError[setting];
            } else {
                ruleFn = setting.check;
                ruleError = setting.error;
            }

            ruleFn = ruleFn || validateRuleGroup.isNotEmpty;
            result = ruleFn(val, formData, validateRuleGroup);

            if (typeof result == "string" && result != '') {
                ruleError = result;
                result = false;
            } else {
                result = Boolean(result);
            }

            if (result) {
                self._effectiveness = true;
                validateRecallsGroup.inputSuccess(inputDom);
            } else {
                self._effectiveness = false;
                validateRecallsGroup.inputFail(inputDom, ruleError);
            }
        });
    };

    //监听form表单提交事件
    validate.prototype.bindSubmit = function(group) {
        var self = this;

        self.formDom.on('submit', function(e) {
            e.preventDefault();
            var snapStatus = true;
            var formData;

            $.each(group, function(name) {
                var input = self.formDom.find('[name="' + name + '"]');
                input.trigger('change', {ignore: true}); // 添加ignore参数 避免遇到省市县组件的change事件被触发
                if (!self._effectiveness) snapStatus = false;
            });

            if (snapStatus) {
                self._effectiveness = true;
                formData = formToObject(self.formDom);
                self._success(formData);
            } else {
                self._effectiveness = false;
            }
        });
    };

    //将表单数据转化为Object
    function formToObject(form, trim) {
        var data;
        if (!form.serializeArray) {
            form = $(form);
        }
        data = {};
        if (trim === void 0) {
            trim = 1;
        }
        $.each(form.serializeArray(), function(i, field) {
            return data[field.name] = trim ? $.trim(field.value) : field.value;
        });
        return data;
    }

    return {
        addValidateRule: function(group) {
            $.extend(validateRuleGroup, group);
        },
        addValidateError: function(group) {
            $.extend(validateDefaultError, group);
        },
        addInputRecalls: function(fns) {
            $.extend(validateRecallsGroup, fns);
        },
        validate: function(formDom, inputGroup, success) {
            return new validate(formDom, inputGroup, success);
        }
    };
});
/**
 * Created by Ricky on 2017/4/19.
 */

define('business',[],function() {
    return {
        provider:{
            20:'捕鱼王',
            42:'捕鱼天下',
            43:'捕鱼多福',
            44:'深海大赢家'
        },
        orderStatus: {
            Success: '提案成功',
            Fail: '提案失败',
            Pending: '待审批',
            PrePending: '系统异常',
            Approved: '审批通过',
            Rejected: '审批拒绝',
            Cancel:'已取消',
            Processing: '处理中'
        },
        topupStatus: {
            Success: '充值成功',
            Failure: '充值失败',
            Pending: '待处理',
            Processing: '处理中',
            Cancelled: '已取消'
        },
        bonusStatus: {
            Success: '提现成功',
            Failure: '提现失败',
            Pending: '待处理',
            Processing: '处理中',
            Cancelled: '已取消'
        },
        rewardType: {
            FullAttendance: '全勤奖励',
            PlayerConsumptionReturn: '玩家消费返点奖励',
            FirstTopUp: '玩家首冲奖励',
            GameProviderReward: '游戏提供商奖励',
            PartnerConsumptionReturn: '代理消费返点奖励',
            PartnerIncentiveReward: '代理激励奖励',
            PartnerReferralReward: '代理推荐奖励',
            PlatformTransactionReward: '银行转账奖励',
            ManualPlayerTopUp: '玩家手动充值',
            PlayerTopUp: '玩家在线充值',
            PlayerBonus: '玩家兑奖',
            PlayerTopUpReturn: '玩家充值返点'
        },
        depositMethod: ['','网银转账', 'ATM', '柜台存款', '支付宝转账', '微信转帐'],
        topupType: {
            1: '快捷支付',
            2: '微信支付',
            3: '支付宝支付',
            4: '微信APP支付',
            5: '支付宝APP支付'
        },
        smsSetting: {
            PlayerConsumptionReturnSuccess: '玩家洗码（成功）',
            ManualTopupSuccess: '手工存款（成功）',
            OnlineTopupSuccess: '在线充值（成功）',
            AlipayTopupSuccess: '个人支付宝（成功）',
            WechatTopupSuccess: '个人微信（成功）',
            WithdrawSuccess: '提款（成功）',
            WithdrawCancel: '提款（取消）',
            PlayerLimitedOfferRewardSuccess: '秒杀礼包（成功）',
            UpdateBankInfoSuccess: '编辑玩家银行资料（成功）',
            UpdatePhoneInfoSuccess: '编辑玩家电话资料（成功）',
            updatePassword: '更新密码',
            PlayerTopUpReturnGroupSuccess: '存送金（组）（成功）',
            PlayerLoseReturnRewardGroupSuccess: '输值反利（组）（成功）',
            PlayerConsecutiveRewardGroupSuccess: '签到全勤（组）（成功）',
            PlayerConsumptionRewardGroupSuccess: '投注额优惠（组）（成功）',
            PlayerFreeTrialRewardGroupSuccess: '免费体验金（组）（成功）',
            PlayerRegisterIntentionSuccess: '玩家注册意象（手动、成功）',
            PlayerPromoCodeRewardSuccess: '优惠代码（成功）',
            PlayerLevelUpMigrationSuccess: '玩家升级（成功）',
            PlayerLevelDownMigrationSuccess: '玩家降级（成功）',
            PlayerLevelUpSuccess: '升级优惠（成功）',
        },
        rewardCodeGourp: {
            "周首存": "ZSC",
            "洗码": "XM",
            "笔笔存38%": "BBC",
            "首存优惠100%": "SC01",
            "首存优惠68%": "SC02",
            "推荐好友": "TJHY",
            "救援金": "JYJ",
            "名利双收": "MLSS"
        }
    };
});

var mcm = mcm || {};

require.config({
    urlArgs: "v=" + (new Date().getTime() / 60000).toFixed(),

    waitSeconds: 0,

    paths: {

        //服务器配置
        'server': '../server',

        //路由配置文件
        'config': 'config',

        //html打包文件
        'app': 'app',
        //活动HTML文件
        'activity': '../activity',
        //活动配置文件
        'promoConfig': '../config',

        //项目配置文件
        'business': 'business',

        //core文件
        'engine': 'core/engine',
        'page': 'core/page',
        'renderer': 'core/renderer',
        'route': 'core/route',
        'tool': 'core/tool',

        //lib文件
        'jquery': 'lib/jquery',
        'template': 'lib/artTemplate',

        //module文件
        'cache': 'module/cache',
        'schedule': 'module/schedule',
        'net': 'module/socket_callback',

        //扩展文件
        'ui': 'option/ui',
        'load': 'option/load',
        'popup': 'option/popup',
        'progress': 'option/progress',
        'validateForm': 'option/validate',
        'address': 'option/address',

        //插件
        '_layer': 'plugin/_layer',
        'common': 'plugin/common',
        'swiper': 'plugin/swiper.jquery',
        'layDate': 'plugin/laydate',
        'clipboard': 'plugin/clipboard',

        //可选插件
        'cookie': 'plugin/cookie'
    },

    shim: {
        'template': {
            exports: 'template'
        },
        'layDate': {
            exports: 'laydate'
        }
    }
});

require(['jquery', 'engine', 'load', 'schedule', 'net', 'template', 'tool', 'server', 'cache', 'ui', 'validateForm', 'business', 'common'],
function ($, root, load, schedule, net, template, tool, config, cache, ui, validateForm, business, common) {
    function getWsUrl() {
        const url = document.createElement('a');
        url.setAttribute('href', window.location.href);

        var protocol = url.protocol;
        var socketProtocol;
        var webSocketUrl;

        if(config.serverIp === 'default') {
            if(protocol == 'https:'){
                socketProtocol = 'wss://';
            }else{
                socketProtocol = 'ws://';
            }

            if(url.hostname == 'localhost'){
                webSocketUrl = socketProtocol + url.hostname + ':9280'
            }else{
                webSocketUrl = socketProtocol + url.hostname + '/websocket'
            }
        } else {
            webSocketUrl = config.serverIp;
        }
        return webSocketUrl;
    }

    $(function () {
        mcm = root;

        mcm.config.LocalMode = 1;

        config.serverIp = getWsUrl();

        //platform id
        mcm.platformId = config.platformId;

        //version number
        mcm.version = '0.0.1';

        mcm.resources = [
            'ui-alert',
            'ui-normal',
            'progress'
        ];

        // 登陆拦截hash列表
        mcm.blackList = [
            'wechatpay',
            'alipay_manual',
            'wechatpay_manual',
            'alipay',
            'unionpay',
            'onlinepay',
            'bankpay',
            'withdrawals',
            'overview'
        ];
        // mcm.blackList = [
        //     [
        //         'wechatpay',
        //         'alipay_manual',
        //         'alipay',
        //         'unionpay',
        //         'bankpay',
        //         'withdrawals',
        //         'overview'
        //     ],
        //     [
        //         'proxy'
        //     ]
        // ];

        //todo 设置路由黑名单的回调事件
        mcm.blackListCallback = function (value, search) {
            if (!mcm.initialization)
                return mcm.tool.browserInterceptor('home', '');
            mcm.tool.browserInterceptor('login', '', 2, {url: value, search: search});
            // mcm.tool.browserInterceptor('login','n=会员登录',1,{url:value,search:search});
        };

        // mcm.blackListCallback = [
        //     function (value, search) {
        //         if (!mcm.initialization)
        //             return mcm.tool.browserInterceptor('home', '');
        //         mcm.tool.browserInterceptor('login', '', 2, {url: value, search: search});
        //     },
        //     function () {
        //         mcm.tool.browserInterceptor('home', '');
        //     }
        // ];

        //todo 设置公共通信错误处理
        mcm.communicationError = function (url, result) {
            if (result)
                mcm.alert.sp(url, result['errorMessage'] || '未知错误', 'alert', [{name: '确定'}]);
        };

        mcm.getSmsSettings = function(input) {
            function isAllSmsTrue (smsArray) {
                var user = mcm.cache.getUserInfoFromCache();
                var isAllTrue = true
                smsArray.forEach(v => {
                    if(!user.smsSetting[v]) {
                        isAllTrue = false;
                    }
                });
                return isAllTrue;
            }
            if(input) {
                var smsSettingsList = {};
                var smsSettings = {};
                var smsParentList = {};

                input.forEach(v => {
                    if(v.smsParentSmsId == -1) {
                        smsSettingsList[v.smsName] = [];
                        smsParentList[v.smsId] = v.smsName;
                    }
                });
                input.forEach(v => {
                    if(v.smsParentSmsId != -1) {
                        smsSettingsList[smsParentList[v.smsParentSmsId]].push(v.smsName);
                    }
                });
                for(var i in smsSettingsList) {
                    smsSettings[i] = {
                        list: []
                    };
                    smsSettings[i].list = smsSettingsList[i];
                    smsSettings[i].isTrue = isAllSmsTrue(smsSettings[i].list);
                }
                smsSettingsList = {};
                return smsSettings;
            }
        };

        //todo 挂载加载管理器
        mcm.load = new load();
        //todo 挂载弹窗组件
        mcm.alert = new ui.alert();
        //todo 挂载缓存组件
        mcm.cache = new cache();
        //todo 挂载任务管理组件
        mcm.schedule = new schedule();
        // todo 挂载socket数据交互组件
        mcm.net = new net(getWsUrl(), mcm);
        // todo 挂载表单验证组件
        mcm.validate = validateForm.validate;


        mcm.business = business;

        //cache module initialize
        mcm.cache.init(mcm.schedule,'player');

        //engine initialize
        mcm.init();

        //extend function of validate at once
        validateForm.addInputRecalls({
            inputSuccess: function (input) {
                input.addClass('checked').removeClass('error');
            },
            inputFail: function (input, error) {
                input.addClass('error').removeClass('checked');
                mcm.alert.sp('formValidate', error, 'alert', [{name: '确定'}]);
            }
        });

        template.helper('$console', function (data) {
            console.log(data)
        });

        template.helper('$isEmpty', function (obj) {
            return mcm.tool.isOwnEmpty(obj);
        });

        template.helper('$contain', function (index, array) {
            return array.contains(index);
        });

        template.helper('$tool', function () {
            return tool;
        });

        template.helper('$getCommonVal', function () {
            return window;
        });

        template.helper('$business', function () {
            return mcm.business;
        });

        template.helper('$mcm', function () {
            return mcm;
        });

        template.helper('$common', function () {
            return common;
        })
    })
});

define("main", function(){});

/**
 * Created by wildeChen on 2016/11/21.
 */
define('page',['engine', 'template', 'config', 'tool'], function (mcm, template, config, tool) {
    /**
     * Creates a new Page
     * @description 创建一个页面对象
     * @constructor page
     * @param {String} url
     */
    var self = function (url) {

        this.exit = null;
        /**
         * @name page#url
         * @description 存储当前页面的url
         * @type {String}
         */
        this.url = url;

        /**
         * @private
         * @description 存储当前渲染父对象的ID
         * @type {String}
         */
        this._parentId = config[this.url] && config[this.url].renderer || null;

        /**
         * @private
         * @description 存储当前界面渲染父对象以原生DOM的形式
         * @type {HTMLElement}
         */
        this._parentNode = null;

        /**
         * @name page#parentNode
         * @description 存储当前界面渲染的父对象
         * @type {*|jQuery}
         */
        this.parentNode = null;

        /**
         * @name page#model
         * @description 存储当前页面的原始模板
         * @type {string}
         */
        this.model = mcm.page[url];

        /**
         * @name page#dom
         * @description 保存当前页面渲染后的页面字符串
         * @type {string}
         */
        this.dom = '';

        /**
         * @name page#data
         * @description 用来保存所有预加载请求返回的数据
         * @type {object}
         */
        this.data = {};

        /**
         * @name page#cache
         * @description 用来保存当前页面需要缓存的所有数据值,在{@link page#onExit}的时候会被清空
         * @type {object}
         */
        this.cache = {};

        /**
         * @name page#param
         * @description 用来对当前页面的DOM节点的显示text进行数据绑定
         * @type {object}
         */
        this.param = {};

        /**
         * @name page#input
         * @description 用来对当前页面的input节点进行双向数据绑定
         * @type {object}
         */
        this.input = {};

        /**
         * @description 当前页面
         * @type {function}
         * @private
         */
        this._initStatus = function () {
            return mcm.cache != undefined ? mcm.cache.getStatus() : null
        };

        /**
         * @description 前置的request事件是否等待通知后延迟请求
         * @type {boolean}
         * @private
         */
        this._delay = false;

        /**
         * @延迟请求的超时事件
         * @type {function}
         * @private
         */
        this._delayBackUp = null;

        /**
         * 延迟请求的超时时间
         * @type {null || Number}
         * @private
         */
        this._delayTimeOut = null;

        /**
         * @description 延迟的前置request用的延迟对象
         * @type {null}
         * @private
         */
        this._delayObj = null;

        /**
         * @name page#_super
         * @description 定义一个_super来保存父类,通过_super访问父类的方法
         * @type {Object|self}
         */
        this._super = proto;
    };

    var proto = self.prototype;

    //todo 定义一个捕捉查询字符串的事件

    /**
     *
     * @method page#init
     * @this page
     * @description 对页面模板进行渲染,并存储在{@link this.dom}中
     * @example
     * override
     * self.init = function(){
     *   this.dom = 'new String'
     * }
     * @example
     * extend
     * self.init = function(){
     *  self._super.init.call(self)
     *  do something like self.dom = self.dom.replace('','')
     * }
     * @author 2016/11/22 by wildeChen
     */
    proto.init = function () {
        this._parentNode = document.getElementById(this._parentId);
        this.parentNode = $('#' + this._parentId);
        this.dom = template.compile(this.model)(this);
        this.exit = $.Deferred();
    };

    /**
     * @description 绑定带有data-element标记的Dom节点到this对象上.
     * <br>
     * bind the dom Node who have attr data-element to Object this.
     * @function page#bindDomNode
     * @example
     * &lt;div data-element = "submitNode" &gt;submit&lt;/div&gt;
     * ...
     * then
     * use like this.submitNode , you can access the dom Node
     *
     * @author 2016/12/14 by rickyJiang
     */
    proto.bindDomNode = function (node) {
        var self = this;
        node = node || this._parentNode;
        var tags = Array.apply(null, node.querySelectorAll('[data-element]')),
            tagName;

        tags.forEach(function (element) {
            tagName = element.getAttribute('data-element');
            self[tagName] = $(element);
        });
    };

    /**
     * @description 绑定带有data-event标记的Dom节点事件到this对象的函数上
     * <br>
     * bind the dom Node who have attr data-event on Event with the value
     * @function page#bindEvents
     * @example
     * &lt;div data-event = "click:onClick;change:input" /div&gt;
     * ...
     * will work as below
     * dom.addEventListener('click',onClick.bind(self))
     * dom.addEventListener('change',input.bind(self))
     * etc
     * if there has attribute name data-bind
     * will work as below
     * dom.addEventListener('change',input.bind(self,data-bind))
     * @author 2016/12/14 by rickyJiang
     */
    proto.bindEvents = function (node) {
        var self = this;
        node = node || this._parentNode;
        var tags = Array.apply(null, node.querySelectorAll('[data-events]')),
            eventsGroup,
            eventName,
            fnName;

        tags.forEach(function (element) {
            eventsGroup = element.getAttribute('data-events').split(';');
            eventsGroup.forEach(function (event) {
                eventName = $.trim(event.split(':')[0]);
                fnName = $.trim(event.split(':')[1]);

                if (!eventName)
                    return;

                if (!self[fnName])
                    return console.dir(fnName + '方法不存在,请检查js代码', fnName);

                var bind = element.getAttribute('data-bind');
                if(bind){
                    element.addEventListener(eventName, self[fnName].bind(self,bind));
                }else{
                    element.addEventListener(eventName, self[fnName].bind(self));
                }
            })
        });

        //todo 实现原生标签拦截
        var a = Array.apply(null,node.querySelectorAll('a'));
        a.forEach(function (element) {
            var pop = element.getAttribute('pop');
            if(pop){
                element.addEventListener('click',function () {
                    mcm.route.popUp(pop);
                    return false;
                })
            }
        })
    };

    /**
     * @description 绑定view事件
     * 绑定 self.param中的参数到v-param标签上
     * 绑定 self.input中的参数到v-input标签上,并反馈v-input的输入值到self.input中
     * @function page#bindView
     * @example
     * self.param.login = '登录';
     * v-param="login"
     * then <div v-param="login">登录</div>
     * @author 2017/03/20 by Wilde
     */
    proto.bindView = function () {
        var self = this;
        if (this.param || typeof this.param === 'object') {
            Object.keys(this.param).forEach(function (key) {
                bindViewParam(self.param, key, self.param[key], self._parentNode);
            })
        }

        if (this.input || typeof this.input === 'object') {
            Object.keys(this.input).forEach(function (key) {
                bindViewInput(self.input, key, self.input[key], self._parentNode);
            })
        }

        this.spreadView();
    };

    /**
     * @description 强制推送view参数至视图
     * @function page#spreadView
     */
    proto.spreadView = function () {
        var self = this;
        if (this.param || typeof this.param === 'object') {
            Object.keys(this.param).forEach(function (key) {
                if (self.param[key] != null) {
                    var list = self._parentNode.querySelectorAll('[v-param=' + key + ']');
                    Array.apply(null, list).forEach(function (element) {
                        element.innerHTML = self.param[key];
                    });
                }
            })
        }

        if (this.input || typeof this.input === 'object') {
            Object.keys(this.input).forEach(function (key) {
                if (self.input[key] != null) {
                    var list = self._parentNode.querySelectorAll('[v-input=' + key + ']');
                    Array.apply(null, list).forEach(function (element) {
                        element.value = self.input[key];
                    });
                }
            })
        }
    };

    /**
     * @description 重置view下双向绑定的数据
     * @param {Array||String} [attributes] 传入key或者key的数组
     * @param {Array||String||Number} [value] 传入每个key对应要重置的值,或者将所有key重置成同一个值,若不传则默认重置为null
     */
    proto.resetView = function (attributes, value) {
        var self = this;
        var list = ['input', 'param'];
        if (arguments.length == 0) {
            Object.keys(self.input).forEach(function (key) {
                self.input[key] = null;
            });
            Object.keys(self.param).forEach(function (key) {
                self.param[key] = null;
            });
        } else {
            if (attributes instanceof Array == true) {
                attributes.forEach(function (attribute, index) {
                    if (list.contains(attribute))
                        Object.keys(self[attribute]).forEach(function (key) {
                            self[attribute][key] = value instanceof Array == true ? value[index] : value || null;
                        })
                })
            } else if (typeof attributes == 'string') {
                if (list.contains(attributes))
                    Object.keys(self[attributes]).forEach(function (key) {
                        self[attributes][key] = typeof value == 'string' || 'Number' ? value : null;
                    });
            } else {
                console.error('传入参数类型错误')
            }
        }
    };

    function bindViewInput(data, key, val, node) {
        var list = node.querySelectorAll('[v-input=' + key + ']');
        var nodeList = Array.apply(null, list);

        Object.defineProperty(data, key, {
            enumerable: true, //可枚举
            get: function () {
                return val;
            },
            set: function (value) {
                if (value === val)
                    return;
                val = value;
                nodeList.forEach(function (element) {
                    if (element.value != val)
                        element.value = val;
                });
            }
        });
        nodeList.forEach(function (element) {
            element.addEventListener('input', spread);
        });

        function spread(e) {
            var value = e.target.value;
            var max = e.target.getAttribute('v-max');
            var min = e.target.getAttribute('v-min');
            if((max || min) && (!isNaN(Number(max)) || !isNaN(Number(min)))){
                value = Number(value);
                if (val !== value && value >= min && value <= max) {
                    val = value;
                }else if(value < min){
                    val = min;
                }else if(value > max){
                    val = max;
                }
            }else if(val !== value){
                val = value;
            }
            nodeList.forEach(function (element) {
                if (element.value != val)
                    element.value = val;
            })
        }
    }

    function bindViewParam(data, key, val, node) {
        Object.defineProperty(data, key, {
            enumerable: true, //可枚举
            get: function () {
                return val;
            },
            set: function (value) {
                if (value === val)
                    return;
                val = value;
                var list = node.querySelectorAll('[v-param=' + key + ']');
                Array.apply(null, list).forEach(function (element) {
                    element.innerHTML = value;
                });
            }
        })
    }

    /**
     * @description 插入代码到节点
     * @function page#appendTemplate
     * @param  {String} template [html模板字符串]
     * @param  {String} node [插入的dom节点]
     */
    proto.appendTemplate = function (template, node) {
        tool.mergeContextTemplate(this, template, node);
    };

    /**
     * @function 从request函数中获取预先请求的数据队列，完成每个请求后插入到当前对象的data属性中
     * @method page#insertRequestData
     * @description 从request函数中获取预先请求的数据队列，完成每个请求后插入到当前对象的data属性中
     *
     * @author 2016/12/08 by rickyJiang
     * @return {Object} 返回Deferred异步回调
     */
    proto.insertRequestData = function () {
        var self = this;
        var requestQueue = this.request ? this.request() : false,
            dtd = $.Deferred(),
            count = 0,
            name;

        if (requestQueue) {

            requestQueue = requestQueue instanceof Array ? requestQueue : [requestQueue];
            if (!this._delay || (this._delay && (this._initStatus != null && !this._initStatus()))) {
                for (var i = 0; i < requestQueue.length; i++) {
                    name = requestQueue[i].app;
                    delete requestQueue[i].app;

                    mcm.net.send(requestQueue[i])
                        .then(function (key, result) {
                            this.data[key] = result;
                            count += 1;
                            if (count == requestQueue.length) dtd.resolve();
                        }.bind(this, name)).fail(function () {
                        dtd.reject();
                    });
                }
            } else {
                if (this._initStatus != null) {
                    if (mcm.schedule) {
                        this._delayObj = dtd;
                        this._delayBackUp = setTimeout(function () {
                            mcm.schedule.removeEventListener('loginDelay', self);
                            dtd.reject();
                        }, this._delayTimeOut || mcm.timeout || 5000);
                        mcm.schedule.addEventListener('loginDelay', this.delayRequestData, this);
                    } else {
                        console.warn('未挂载延迟加载所需的 mcm.schedule 组件');
                        dtd.reject();
                    }
                } else {
                    console.warn('未设置延迟加载所需的 _initStatus 方法');
                    dtd.reject();
                }
            }

        } else if (this._delay) {
            if (this._initStatus != null) {
                if (!this._initStatus()) {
                    dtd.resolve();
                } else {
                    if (mcm.schedule) {
                        this._delayObj = dtd;
                        this._delayBackUp = setTimeout(function () {
                            mcm.schedule.removeEventListener('loadingDelay', self);
                            dtd.reject();
                        }, this._delayTimeOut || mcm.timeout || 5000);
                        mcm.schedule.addEventListener('loadingDelay', this.delayLoading, this);
                    } else {
                        console.warn('未挂载延迟加载所需的 mcm.schedule 组件');
                        dtd.reject()
                    }
                }
            } else {
                console.warn('未设置延迟加载所需的 _initStatus 方法');
                dtd.reject()
            }

        } else {
            dtd.resolve();
        }

        return dtd.promise();
    };

    /**
     * 页面等待公共数据的延迟加载事件
     */
    proto.delayLoading = function () {
        if (!this._initStatus()) {
            clearTimeout(this._delayBackUp);
            mcm.schedule.removeEventListener('loadingDelay', this);
            this._delayObj.resolve();
        }
    };

    /**
     * @function 延迟处理的页面预加载事件,会等待用户数据都初始化完成再渲染页面
     * @method page#delayRequestData
     * @author 2017/04/24 by WildeChen
     */
    proto.delayRequestData = function () {
        var self = this;
        if (!this._initStatus()) {
            clearTimeout(this._delayBackUp);
            mcm.schedule.removeEventListener('loginDelay', this);
            var requestQueue = this.request(),
                count = 0,
                name;

            requestQueue = requestQueue instanceof Array ? requestQueue : [requestQueue];
            for (var i = 0; i < requestQueue.length; i++) {
                name = requestQueue[i].app;
                delete  requestQueue[i].app;

                mcm.net.send(requestQueue[i])
                    .then(function (key, result) {
                        this.data[key] = result;
                        count += 1;
                        if (count == requestQueue.length) this._delayObj.resolve();
                    }.bind(this, name)).fail(function () {
                    self._delayObj.reject();
                })
            }
        }
    };

    /**
     * @function page#request
     * @description 预加载方法,返回一个false,通信协议对象或通信协议对象数组
     * <br>
     *
     * @returns {boolean|object|Array} 无预加载时返回false|单个预加载返回一个对象|多个时返回对象数组
     * @example
     * ...
     * if it have not preload event, then you can
     *
     * return false
     *
     * or not do anything
     *
     * @example
     * ...
     * if it have a preload event ,then you can
     *
     * return {
     *  service:'what',
     *  functionName:'what',
     *  data:null
     * }
     * is up to agreement
     *
     * @example
     * ...
     * if it have multiple preload events, then you can
     *
     * return [
     *  {
     *      service:'what',
     *      functionName:'what',
     *      data:null
     *  },
     *  {
     *      service:'what',
     *      functionName:'what',
     *      data:null
     *  }
     * ]
     * as a Array
     */
    proto.request = function () {
        return false;
    };

    /**
     * @method page#onEnter
     * @description 当渲染到浏览器中后,执行的方法,该方法晚于绑定事件执行
     * <br> when the page renderer in to the browser, then will do this method
     * <br> this method will work after {@link page.bindDomNode} and {@link page.bindEvents}
     */
    proto.onEnter = function () {

    };

    /**
     * @method page#onExit
     * @description 当页面从浏览器中移除前,执行的方法
     * <br> when the page will move out of the browser, then will do this method
     * <br> the default method will set this.data
     * @example
     * below is default work;
     * ...
     * this.exit.resolve();
     * this.reset();
     * ...
     * @example
     * if you want do something more than that,you need override like below
     * ...
     * do something like
     *
     * domNode.addClass('show');
     * setTimeout(function(){
     *  self.exit.resolve()
     *  self.reset()
     * },3000)
     *
     * ...
     */
    proto.onExit = function () {
        this.exit.resolve();
        this.reset();
    };

    /**
     * @method page.reset
     * @description 重置所有页面缓存数据
     * @author 2016/12/7 by wildeChen
     */
    proto.reset = function () {
        var self = this;
        if (this.cache) {
            Object.keys(this.cache).forEach(function (value) {
                self.cache[value] = null;
            });
        }

        this.data = {};
        $(this.parentNode).off();
        this.dom = '';
    };

    /**
     * @method page.childNode
     * @description 传入一个父节点名,传入一个子节点名,返回在父节点下的子节点dom对象
     * <br>
     * 子节点为 data-child
     * @param {dom} parent
     * @param {dom||Array} child
     * @returns {*|{}}
     */
    proto.childNode = function (parent, child) {
        if (typeof (child) == 'string') {
            return this[parent].find('[data-child=' + child + ']');
        } else {
            var node = {};
            for (var i = 0, len = child.length; i < len; i++) {
                var key = child[i];
                node[key] = this[parent].find('[data-child=' + key + ']');
            }
            return node;
        }
    };

    /**
     * @method page.formVerify
     * @description 传入一个表单对象,和表单验证对象,返回验证结果,返回空字符串为验证通过,否则返回错误信息
     * @param form
     * @param Verify
     * @example
     *  form = {
     *      name:DOM,
     *      password:DOM
     *  }
     *
     *  Verify:{
     *      name:'nameVerify-姓名',
     *      password:'passVerify-密码'
     *  }
     *
     *  then will work like below
     *  self.nameVerify(form.name,'姓名')
     *
     * @returns {string}
     */
    proto.formVerify = function (form, Verify) {
        if (!form)
            return '传入表单错误';
        var keys = Object.keys(form);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            if (!Verify[key])
                continue;
            var split = Verify[key].split('-');
            var result = this[split[0]](form[key], split[1]);
            if (result != '')
                return result;
        }
        return '';
    };

    return self;
});
/**
 * Created by Ricky on 2017/3/17.
 * Modify by Wilde on 2017/5/17. add loop event after login,due to webSocket will disconnect every minute as non-request
 */
define('../js/page/page.header',['page', 'cookie'], function (page, cookie) {
    var self = new page('header');

    self.onEnter = function () {
        mcm.schedule.addEventListener('loginResponse', self.loginResponse, self);
        mcm.schedule.addEventListener('loginCallback', self.loginCallback, self);
        mcm.cache.getLogin();

        var navs = self.navNode.find('.switch');
        self.navNode.on('click', '.switch', function (e) {
            if ($(this).hasClass('active'))
                return;
            navs.not(this).removeClass('active');
            $(this).toggleClass('active');
        });

        mcm.schedule.addTicker(self.url, self.loop, self, 30000);
        self._super.onEnter.call(self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('loginResponse', self);
        mcm.schedule.removeEventListener('loginCallback', self);
        self._super.onExit.call(self);
    };

    self.menuClickCount = function(){
      mcm.net.send({
          service: 'platform',
          functionName: 'clickCount',
          data: {
              platform: mcm.platformId,
              device:'PC玩家',
              pageName:'首页',
              buttonName:'首页'
          }
      })
    }

    self.loginClickCount = function(){
        mcm.net.send({
            service: 'platform',
            functionName: 'clickCount',
            data: {
                platform: mcm.platformId,
                device:'PC玩家',
                pageName:'登录',
                buttonName:'登录'
            }
        })
    }

    self.registerClickCount = function(){
      mcm.net.send({
          service: 'platform',
          functionName: 'clickCount',
          data: {
              platform: mcm.platformId,
              device:'PC玩家',
              pageName:'注册',
              buttonName:'注册'
          }
      })
    }

    self.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            var token;
            var data = eventData['data'];

            if (eventData['token']) {
                //todo 登录行为
                token = eventData['token'];
                mcm.net.send({
                    service: 'player',
                    functionName: 'addClientSourceLog',
                    data: {
                        sourceUrl: document.referrer,
                        playerName: data.name,
                        clientType: "web",
                        accessType: "normal"
                    }
                }, true);
            }
            mcm.cache.setLogin(data, token);
        }
    };

    self.loginCallback = function (sender, eventData) {

        //todo 登录回调
        if (eventData) {
            self['loginNode'].show();
            self['unLoginNode'].hide();
        } else {
            self['unLoginNode'].show();
            self['loginNode'].hide();
            mcm.schedule.clearTicker(self.url);
        }

    };

    self.loop = function () {
        // if (cookie('token') != undefined) {
        mcm.net.load({
            service: 'partner',
            functionName: 'authenticate'
        }, 'null', true);
        // }
    };

    self.logout = function () {
        mcm.cache.setLogout();
        mcm.tool.browserInterceptor('home');
    };

    return self;
});

/**
 * Created by wildeChen on 2016/12/27.
 */
define('popup',['page'], function (page) {
    /**
     * @constructor
     * @augments page
     * @param url
     */
    function popUp(url) {
        page.call(this, url);

        this._super = proto;
    }

    popUp.prototype = Object.create(page.prototype);
    popUp.prototype.constructor = popUp;

    var proto = popUp.prototype;

    proto.onEnter = function () {
        var self = this;
        setTimeout(function () {
            self['popupViewNode'].addClass('fadeIn');
        }, 100);
    };

    proto.close = function () {
        var self = this;
        this['popupViewNode'].removeClass('fadeIn');
        setTimeout(function () {
            mcm.renderer.update_out(self.url);
        }, 600);
    };

    return popUp;

});
/**
 * Created by Ricky on 2017/3/22.
 */

define('../js/page/popup/popup.login',['popup', 'common'], function (popup, common) {
    var self = new popup('login');

    self.attempt = 0;

    self.input = {
        name: null,
        password: null,
        captcha: ''
    };
    self.request = function() {
        return {
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        };
    };

    self.onEnter = function () {
        mcm.validate(self['formNode'], {
            name: {
                error: '请输入用户名',
                check: function(s) {
                    return Boolean(s);
                }
            },
            password: 'password'
        }, function() {

            if(self.attempt > 3){
                var value = $.trim(self.input.captcha);
                var result =  value && /^\d{4}$/i.test(value);
                if(result != true)
                    return mcm.alert.sp(self.url,'您输入的验证码有误，请输入4位验证码','alert',[{name:'确定'}]);
            }

            mcm.net.load({
                service: 'player',
                functionName: 'login',
                data: self.input
            },'loginResponse')
        });

        if(self.attempt > 3){
            self.checkValidCode();
            self['captchaNode'].show();
        }

        mcm.schedule.addEventListener('loginResponse',self.loginResponse,self);
        self._super.onEnter.call(self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('loginResponse',self);
        self._super.onExit.call(self);
    };

    self.checkValidCode = function () {
        mcm.net.send({
            service: 'player',
            functionName: 'captcha'
        }, true).then(function (result) {
            var code = common.arrayBufferToBase64(result.data);
            self['validImg'].attr('src', 'data:image/png;base64,' + code);
        })
    };

    self.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            mcm.route.changeUrl('#home', true);
            mcm.alert.sp(self.url, '登录成功', 'normal', [{name: '确定'}], 2);
            mcm.renderer.update_out(self.url);
            self.attempt = 0;
            if (!mcm.tool.isOwnEmpty(history.state)) {
                var url = history.state.url;
                var search = history.state.search;
                history.replaceState({}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            }
        } else {
            mcm.alert.sp(self.url, eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}]);
            if (eventData['data'] && eventData['data']['noOfAttempt']){
                self.attempt = eventData['data']['noOfAttempt'];
                if(self.attempt > 3){
                    self.checkValidCode();
                    self['captchaNode'].show();
                }
            }
        }
    };

    self.openRegisterPopup = function () {
        mcm.route.popUp('register');
    };

    self.switchLoginByPhone = function() {
        mcm.route.popUp('loginbyphone');
    };

    self.openRestPasswordPopup = function() {
        mcm.route.popUp('resetpassword');
    };

    return self;
});

/**
 * Created by Ricky on 2017/5/9.
 */

define('../js/page/popup/popup.loginbyphone',['popup', 'common'], function (popup, common) {
    var self = new popup('loginbyphone');

    self.input = {
        phoneNumber: null
    };

    self.request = function() {
        return {
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        };
    };

    self.phoneValid = function (dom, name) {
        if (dom == '')
            return '请填写' + name;
        if (isNaN(dom) || dom.indexOf('.') != -1 || dom.length != 11)
            return name + '格式错误';
        return '';
    };

    self.openRegisterPopup = function () {
        mcm.route.popUp('register');
    };

    self.switchLoginByNormal = function () {
        mcm.route.popUp('login');
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);

        if (target.hasClass('disabled'))
            return;

        var result = self.phoneValid(self.input.phoneNumber,'手机号码');

        if (result != '')
            return mcm.alert.sp(self.url, result, 'alert', [{name: '确定'}]);

        mcm.net.send({
            service:'player',
            functionName:'getSMSCode',
            data: {
                phoneNumber:self.input.phoneNumber,
                platformId: mcm.platformId,
                purpose: "login"
            }
        }).then(function (result) {
            target.addClass('disabled');
            var html = target.find('div');
            var time = 120, now = 1;
            var loop = function () {
                if (now >= time) {
                    html.html('点击获取验证码');
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒后重新发送验证码';
                html.html(text);
                now++;
                setTimeout(function () {
                    loop();
                }, 1000);
            };
            setTimeout(function () {
                loop()
            }, 1000);
        })
    };

    self.onEnter = function() {
        mcm.validate(self.formNode, {
            phoneNumber: 'mobile',
            smsCode: {
                error: '您输入的验证码不正确',
                check: function (val, formData, rules) {
                    return rules.smscode(val);
                }
            }
        }, function(data) {
            mcm.net.load({
                service: 'player',
                functionName: 'loginPlayerPartnerWithSMS',
                data: data
            }, 'loginResponse');
        });

        mcm.schedule.addEventListener('loginResponse',self.loginResponse,self);
        self._super.onEnter.call(self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('loginResponse',self);
        self._super.onExit.call(self);
    };

    self.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            mcm.alert.sp(self.url, '登录成功', 'normal', [{name: '确定'}], 2);
            mcm.renderer.update_out(self.url);
            self.attempt = 0;
            if (!mcm.tool.isOwnEmpty(history.state)) {
                var url = history.state.url;
                var search = history.state.search;
                history.replaceState({}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            }
        } else {
            mcm.alert.sp(self.url, eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}]);
            if (eventData['data'] && eventData['data']['noOfAttempt']){
                self.attempt = eventData['data']['noOfAttempt'];
                if(self.attempt > 3){
                    self.checkValidCode();
                    self['captchaNode'].show();
                }
            }
        }
    };

    return self;
});

/**
 * Created by Ricky on 2017/3/22.
 *
 * Addition by Wilde on 2017/4/17.
 */

define('../js/page/popup/popup.register',['popup', 'common'], function (popup, common) {
    var self = new popup('register');

    self.input = {
        realName: null,
        phoneNumber: null,
        email: null,
        account: null,
        password: null,
        confirmPassword: null,
        recommend: null,
        validCode: null,
        smsCode: null
    };

    self.attempt = 0;

    self.Verify = {
        'realNameNode': 'chineseInput-真实姓名',
        'phoneNumberNode': 'phoneValid-手机号码',
        'accountNode': 'nonChineseInput-账户名',
        'passwordNode': 'nonChineseInput-密码',
        'confirmPassNode': 'confirmPass-确认密码',
        'validCodeNode': 'nonChineseInput-验证码',
        'smsCodeNode': 'nonChineseInput-手机验证码'
    };

    self.onEnter = function () {

        // self.checkValidCode();

        var key = mcm.tool.getSearch();
        if(key.r){
            var partner = $('#recommend');
            partner.attr('readonly', 'readonly');
            self.input.recommend = key.r;
        }

        mcm.validate(self['formNode'], {
            name: {
                check: function (s) {
                    // if(!/^[A-Za-z0-9]{6,19}$/.test(s) || /^[A-Za-z]+$/.test(s) || /^[0-9]+$/.test(s))
                    //     return '请输入6~19位英文和数字组合，不能全英文或全数字';
                    if(!/^[A-Za-z0-9]{6,19}$/.test(s))
                        return '请输入6~19位英文和数字组合';

                    mcm.net.send({
                        service: 'player',
                        functionName: 'isValidUsername',
                        data: {
                            name: s
                        }
                    });

                    return true;
                }
            },
            password:'password',
            confirmPassword:{
                check:function (s,form) {
                    if(s != form['password'])
                        return '两次输入的密码不同';
                    return true;
                }
            },
            realName:'isNotEmpty',
            email:'mail'
            // phoneNumber:'mobile',
            // smsCode:'smscode'

        },function () {
            var data = {
                name: self.input.account,
                password: self.input.password,
                realName: '', //self.input.realName,
                // phoneNumber: self.input.phoneNumber,
                email: self.input.email,
                smsCode: '0000', // self.input.validCode,
                domain: 'http://' + location.hostname,
                sourceUrl: document.referrer
            };

            var key = mcm.tool.getSearch();
            if (key && key.r){
                data['partnerName'] = key.r;
            }else{
                if (self.input.recommend)
                    data['referral'] = 'p' + self.input.recommend;
            }

            mcm.net.load({
                service: 'player',
                functionName: 'create',
                data: data
            }, 'loginResponse');
        });

        mcm.schedule.addEventListener('loginResponse',self.loginResponse,self);
        self._super.onEnter.call(self);
    };

    self.onExit = function () {
        self.resetView();
        mcm.schedule.removeEventListener('loginResponse',self);
        self._super.onExit.call(self);
    };

    self.checkValidCode = function () {
        mcm.net.send({
            service: 'player',
            functionName: 'captcha'
        }, true).then(function (result) {
            var code = common.arrayBufferToBase64(result.data);
            self['validImg'].attr('src', 'data:image/png;base64,' + code);
        })
    };

    self.phoneValid = function (dom, name) {
        if (dom == ''||dom == null)
            return '请填写' + name;
        if (isNaN(dom) || dom.indexOf('.') != -1 || dom.length != 11)
            return name + '格式错误';
        return '';
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);

        if (target.hasClass('disabled'))
            return;

        var result = self.phoneValid(self.input.phoneNumber, '手机号码');

        if (result != '')
            return mcm.alert.sp(self.url, result, 'alert', [{name: '确定'}]);


        mcm.net.send({
            service: 'player',
            functionName: 'getSMSCode',
            data: {
                phoneNumber: self.input.phoneNumber,
                name: self.input.account,
                purpose: "registration",
                platformId: mcm.platformId
            }
        }).then(function () {
            target.addClass('disabled');
            var html = target.find('div');
            var time = 120, now = 1;
            var loop = function () {
                if (now >= time) {
                    html.html('点击获取验证码');
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒后重新发送验证码';
                html.html(text);
                now++;
                setTimeout(function () {
                    loop();
                }, 1000);
            };
            setTimeout(function () {
                loop()
            }, 1000);
        })
    };

    self.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            // mcm.alert.sp(self.url, '<div style="text-align: left;">欢迎加入捕鱼皇<br>您的会员资料为：<br>会员账号：' + eventData.data.name + '<br>真实姓名：' + eventData.data.realName + '<br>手机号码：' + eventData.data.phoneNumber + '<br>邮箱地址：' + eventData.data.email + '</div>', 'normal', [{name: '确定', then: function () {
            //     window.open(location.origin);
            // }}]);
            mcm.alert.sp(self.url, '<div style="text-align: left;">欢迎加入捕鱼皇<br>您的会员资料为：<br>会员账号：' + eventData.data.name  + '<br>手机号码：' + eventData.data.phoneNumber + '<br>邮箱地址：' + eventData.data.email + '</div>', 'normal', [{name: '确定', then: function () {
                window.open(location.origin);
            }}]);
            mcm.net.load({
                service: 'player',
                functionName: 'addClientSourceLog',
                data: {
                    sourceUrl: document.referrer,
                    playerName: self.input.account,
                    clientType: 'web',
                    accessType: 'register'
                }
            }, 'none', true);
            self.resetView('input', '');

            mcm.renderer.update_out(self.url);
            self.attempt = 0;

            history.replaceState({}, '', '#wechatpay_manual?pid=transaction');
            mcm.route.changeUrl('wechatpay');
        } else {
            mcm.alert.sp(self.url, eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}]);
        }
    };

    return self;
});

/**
 * Created by Ricky on 2017/4/7.
 */

define('../js/page/popup/popup.headportrait',['popup'], function (popup) {
    var self = new popup('headportrait');

    self.resource = false;
    
    self.onEnter = function () {
        self._super.onEnter.call(self);
        var imgs = self.photosGroupNode.find('.photo-box');
        self.photosGroupNode.on('click', '.photo-box', function() {
            var node = $(this);
            var img = node.find('img');
            var src = img[0].src;

            imgs.removeClass('active');
            node.addClass('active');

            self.resource = src;
        });
    };

    self.onSubmit = function () {
        if (!self.resource)
            return alert('您还未选择头像');

        mcm.schedule.dispatchEvent('changePortrait', false, {imgUrl: self.resource});
        self.close();
    };

    return self;
});
/**
 * Created by Ricky on 2017/4/25.
 */

define('../js/page/popup/popup.contact',['popup', 'server'], function (popup, server) {
    var self = new popup('contact');
    self.data.csQQData = [];
    self.request = function() {
        return {
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        };
    };
    self.init = function () {
        self.data.csQQData = self.data.getPlatformDetails.csQQ.split(' ');
        self.data.firstQQ = self.data.csQQData[0] ? self.data.csQQData[0] : ' ';
        self._super.init.call(self);
    };
    self.getCode = function() {
        // phone callback link
        self.random = Math.random();
        return "https://www.phoneapichat.com/servlet/GetMaCode?random=" + self.random ;
    };

    self.changeCode = function(e) {
        e.target.src = self.getCode();
    };

    self.onEnter = function() {
        if (window.BizQQWPA && window.BizQQWPA.addCustom) {
            window.BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: self.data.getPlatformDetails.csQQ, selector: 'rightBar_qq'});
        } else {
            self.contactByQQNode.on('click', 'span, .icon',function() {
                var target = $(this);
                var number = target[0].getAttribute('qq');
                var url = 'http://wpd.b.qq.com/page/webchat.html?nameAccount=' + number;

                try {
                    window.open(url, '在线客服', 'resizable=0,width=653,height=663')
                } catch (e) {
                    console.log(e)
                }
            });
        }

        mcm.validate(self.formNode, {
            phone: 'mobile',
            captcha: 'smscode'
        }, function(data) {
            $.ajax({
                url: "https://www.phoneapichat.com/servlet/TelephoneApplication",
                dataType:"jsonp",
                type:"get",
                data:{
                    phone: data.phone,
                    captcha: data.captcha,
                    platform: "xbetbuyu",
                    random: self.random
                },
                success:function(e) {
                    var message;
                    message = e.code == "0" ? "正在呼叫，请等待..." : e.msg;
                    mcm.alert.sp(self.url, message, 'normal', [{name: '确定'}]);
                },
                error : function(e){
                    mcm.alert.sp(self.url, '网络异常,请稍后重试', 'normal', [{name: '确定'}]);
                }
            });
        });
        self._super.onEnter.call(self);
    };

    return self;
});

/**
 * Created by wildechen on 2017/5/16.
 */
define('../js/page/page.ptLogin',['page','common'], function (page,common) {
    var self = new page('ptLogin');

    self.input = {
        name:'',
        password:'',
        captcha:''
    };

    self.onEnter = function () {
        window.location='htcmd:pageloaded';
        mcm.validate(self['formNode'], {
            name: {
                error: '请输入用户名',
                check: function(s) {
                    return Boolean(s);
                }
            },
            password: 'password'
        }, function() {
            if(self.attempt > 3){
                var value = $.trim(self.input.captcha);
                var result =  value && /^\d{4}$/i.test(value);
                if(result != true)
                    return mcm.alert.sp(self.url,'您输入的验证码有误，请输入4位验证码','alert',[{name:'确定'}]);
            }

            mcm.net.send({
                service: 'player',
                functionName: 'loginPlayerPartner',
                data: self.input
            }).then(function (result) {
                mcm.net.send({
                    service:'game',
                    functionName:'getGamePassword',
                    data:{
                        username:result[0].name,
                        providerId:44
                    }
                },true).then(function (result) {
                    var href = 'htcmd:login?&username='+result['gameUsername']+'&password='+result['password'];
                    window.location = href;
                }).fail(function (result) {
                    if(result)
                        mcm.alert.sp(self.url,result['errorMessage'],'alert',[{name:'确定'}]);
                })
            })
        });
    };
    
    self.checkValidCode = function () {
        mcm.net.send({
            service: 'player',
            functionName: 'captcha'
        }, true).then(function (result) {
            var code = common.arrayBufferToBase64(result.data);
            self['validImg'].attr('src', 'data:image/png;base64,' + code);
        })
    };

    return self;
});
/**
 * Created by wildeChen on 2016/11/23.
 */
define('../js/page/page.home',['page', 'promoConfig'], function (page, config) {
    var self = new page('home');

    self.cache = {
        broadcast: null,
        broadcastLooping: null,
        broadcastTime: null,
        broadcastMaxTime: null,
        count: null
    };

    self.request = function () {
        return {
            app: 'game',
            service: 'game',
            functionName: 'getGameGroupInfo',
            data: {
                platformId: mcm.platformId,
                code: 2,
                startIndex: 0,
                requestCount: 999
            }
        }
    };

    self.init = function () {
        self.gameList = config.game;
        self.appLink = config.appLink;
        self._super.init.call(self);
    };

    self.onEnter = function () {
        self.cache.broadcast = [];
        self.cache.broadcastLooping = false;
        self.cache.broadcastTime = 0;
        self.cache.broadcastMaxTime = 15;
        self.cache.count = 0;
        self.polling();
        mcm.schedule.addEventListener('enterGame', self.enterGameResponse, self);
        mcm.schedule.addTicker(self.url, self.broadcastLoop, self, 1000);
        mcm.schedule.addTicker(self.url, self.polling, self, 180000);
    };

    self.onExit = function () {
        // mcm.schedule.removeEventListener('enterGame',self);
        mcm.schedule.clearTicker(self.url);
        self._super.onExit.call(self);
    };

    self.polling = function () {
        mcm.net.send({
            service: 'platform',
            functionName: 'getPlatformAnnouncements'
        }, true).then(function (result) {
            self.cache.broadcast = result;
        })
    };

    self.broadcastLoop = function () {
        if (!self.cache.broadcast || self.cache.broadcast.length == 0)
            return;

        if (self.cache.broadcastLooping) {
            self.cache.broadcastTime++;
            if (self.cache.broadcastTime >= self.cache.broadcastMaxTime) {
                self.cache.broadcastLooping = false;
                self.cache.broadcastTime = 0;
                self['broadcastNode'].empty();
            }
        } else {
            var obj = self.cache.broadcast.shift();
            self.cache.broadcastLooping = true;
            self.cache.broadcastTime = 0;
            self.cache.count++;
            self.cache.broadcast.push(obj);
            obj['domId'] = 'broadcast' + self.cache.count;

            self['broadcastNode'].append('<div id="' + obj['domId'] + '">' + obj['content'] + '</div>');
            var info = $('#' + obj['domId']);
            var width = info.pxToNum('width');
            var parentWidth = $('#broadcast-holder').pxToNum('width');
            var time = parseInt(width.div(40));
            self.cache.broadcastMaxTime = time;
            info.css({'transform': 'translate3d('+'-' + (width+parentWidth+10) +'px, 0, 0)', 'transition-duration': time + 's'});
            info.css({'-webkit-transform': 'translate3d('+'-' + (width+parentWidth+10) +'px, 0, 0)', 'transition-duration': time + 's'});
        }
    };

    self.openRegisterPopup = function () {
        mcm.route.popUp('register');
    };

    self.play = function (e) {
        var gameId = "F2EF9407-6BC0-4020-8144-069E151E024C";
        // var gameId = $(e.target).data('gameid');
        if (mcm.cache.isLogin()) {
            // mcm.tool.browserInterceptor('openGame','id='+gameId+'&type=play');
            self.gameTab = window.open();
            mcm.net.load({
                service: 'game',
                functionName: 'getLoginURL',
                data: {
                    clientType: 1,
                    gameId: gameId,
                    clientDomainName: document.location.origin
                }
            }, 'enterGame')
        } else {
            mcm.route.popUp('login');
        }
    };

    self.demo = function (e) {
        var gameId = $(e.target).data('gameid');
        // mcm.tool.browserInterceptor('openGame','id='+gameId+'&type=demo');
        if (mcm.cache.isLogin()) {
            mcm.net.load({
                service: 'game',
                functionName: 'getTestLoginURL',
                data: {
                    clientType: 1,
                    gameId: gameId,
                    clientDomainName: document.location.origin
                }
            }, 'enterGame')
        } else {
            mcm.net.load({
                service: 'game',
                functionName: 'getTestLoginURLWithOutUser',
                data: {
                    clientType: 1,
                    gameId: gameId,
                    clientDomainName: document.location.origin
                }
            }, 'enterGame');
        }
    };

    //todo 进入游戏响应
    self.enterGameResponse = function (sender, eventData) {

        if (!eventData)
            return;

        if (eventData['status'] == 200) {
            mcm.cache.loadOverage();
            var url = eventData['data']['gameURL'];
            self.playGame(url)
            // mcm.alert.sp('home', '是否进入游戏', 'normal', [{
            //      name: '确定', then: function () {
            //          window.open(url);
            //      }
            // }, {name: '取消'}]);

        } else if (eventData['status'] == 430) {
            mcm.alert.sp('home', '请登录后再进行游戏', 'alert', [{
                name: '确定', then: function () {
                    mcm.route.popUp('login');
                }
            }, {name: '取消'}])
        } else {
            mcm.alert.sp('home', eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}])
        }
    };

    self.playGame = function(url){
        self.gameTab.location.href= url;
    };

    return self;
});

/**
 * Created by wildechen on 2017/5/22.
 */
define('../js/page/page.openGame',["page"], function (page) {
    var self = new page('openGame');

    self.onEnter = function () {
        var key = mcm.tool.getSearch();
        var id = key['id'];
        var type = key['type'];
        if(type == 'play'){
                mcm.net.load({
                    service: 'game',
                    functionName: 'getLoginURL',
                    data: {
                        clientType: 1,
                        gameId: id,
                        clientDomainName: document.location.origin
                    }
                }, 'enterGame')
        }else if(type == 'demo'){
            if (mcm.cache.isLogin()) {
                mcm.net.load({
                    service: 'game',
                    functionName: 'getTestLoginURL',
                    data: {
                        clientType: 1,
                        gameId: id,
                        clientDomainName: document.location.origin
                    }
                }, 'enterGame')
            } else {
                mcm.net.load({
                    service: 'game',
                    functionName: 'getTestLoginURLWithOutUser',
                    data: {
                        clientType: 1,
                        gameId: id,
                        clientDomainName: document.location.origin
                    }
                }, 'enterGame');
            }
        }

        mcm.schedule.addEventListener('enterGame',self.enterGame,self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('enterGame',self);
        self._super.onExit.call(self);
    };

    self.enterGame = function (sender,eventData) {
        if (eventData['status'] == 200) {
            var url = eventData['data']['gameURL'];
            self['gameNode'].attr('src',url);
        } else if (eventData['status'] == 430) {
            mcm.alert.sp('home', '请登录后再进行游戏', 'alert', [{
                name: '确定', then: function () {
                    mcm.route.popUp('login');
                }
            }, {name: '取消'}])
        } else {
            mcm.alert.sp('home', eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}])
        }
    };

    return self;
});
/**
 * Created by Ricky on 2017/3/23.
 */

define('../js/page/page.transaction',['page'], function (page) {
    var self = new page('transaction');

    self.onEnter = function() {
        var links = this.navBarNode.find('a');
        links.on('click', function() {
            links.removeClass('active' );
            $(this).addClass('active');
        });
    };

    return self;
});
/**
 * Created by Ricky on 2017/3/23.
 */

define('../js/page/deposit/page.wechatpay',['page'], function (page) {
    var self = new page('wechatpay');

    self.input = {
        amount:''
    };

    self.request = function () {
        return {
            app: 'amountLimit',
            service: 'payment',
            functionName: 'getMerchantSingleLimits'
        };
    };

    self.onEnter = function () {
        mcm.validate(self.formNode, {
            amount: {
                error: '请输入存款金额',
                check: function(val) {
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 50) {
                        error = '存款金额不能小于50元'
                    } else if (val > self.data.amountLimit.singleLimitList.wechat) {
                        error = '存款金额不能大于' + self.data.amountLimit.singleLimitList.wechat + '元'
                    }
                    return error;
                }
            }
        }, function () {
            mcm.net.send({
                service: 'payment',
                functionName: 'createOnlineTopupProposal',
                data: {
                    topupType: 2,
                    amount: self.input.amount,
                    merchantUseType: 1,
                    clientType: 1
                }
            }).then(function (result) {
                var address = result['topupDetail']['paymentURL'];
                mcm.alert.sp(self.url, '是否立刻前往充值页面进行充值', 'normal', [{
                    name: '确定', then: function () {
                        window.open(address);
                    }
                }, {name: '取消'}])
            })
        });
    };

    return self;
});
/**
 * Created by Ricky on 2017/3/23.
 */

define('../js/page/deposit/page.wechatpay.manual',['page', 'business'], function (page, business) {
    var self = new page('wechatpay_manual');

    self.request = function() {
        // return [];
        return [{
            app: "wechatpayOrder",
            service: "payment",
            functionName: "getWechatTopupRequestList"
        }, {
            app: 'amountLimit',
            service: 'payment',
            functionName: 'getPlayerWechatPayStatus'
        }];
    };

    self.param = {
        proposalId: '',
        amount: '',
        status: '',
        validTime: '',
        createTime: '',
        weChatQRCode: '',
        weChatAccount: '',
        weChatName: '',
        wechatQRCode: '',
        wechatAccount: '',
        wechatName: '',
    };

    self.init = function() {
        var depositedOrderInfo = self.data.wechatpayOrder;
        if (self.data.wechatpayOrder) {
            mcm.tool.insertObject(self.param, {
                proposalId: depositedOrderInfo.proposalId,
                amount: depositedOrderInfo.data.amount,
                status: business.orderStatus[depositedOrderInfo.status],
                validTime: mcm.tool.formatDate(depositedOrderInfo.data.validTime, "m月d日 h:i"),
                createTime: mcm.tool.formatDate(depositedOrderInfo.createTime, "m月d日 h:i"),
                weChatQRCode: depositedOrderInfo.data.weChatQRCode || '',
                weChatAccount: depositedOrderInfo.data.weChatAccount || '',
                weChatName: depositedOrderInfo.data.weChatName || '',
                wechatQRCode: depositedOrderInfo.data.wechatQRCode || '',
                wechatAccount: depositedOrderInfo.data.wechatAccount || '',
                wechatName: depositedOrderInfo.data.wechatName || depositedOrderInfo.data.name
            });

        }

        self._super.init.call(self);
    };

    self.onEnter = function() {
        if (self.data.wechatpayOrder) {
            self.QRCodeNode[0].src = self.param.weChatQRCode;
            self.formNode.hide();
            self.resultNode.show();
        } else {
            self.formNode.show();
            self.resultNode.hide();
        }
        mcm.validate(self.formNode, {
            amount: {
                check: function(val) {
                    let maxDepositAmount = self.data.amountLimit.maxDepositAmount ? self.data.amountLimit.maxDepositAmount: 0;
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 10) {
                        error = '存款金额不能小于10元'
                    } else if (val > self.data.amountLimit.maxDepositAmount) {
                        error = '存款金额不能大于' + maxDepositAmount + '元'
                    }

                    return error;
                }
            },
            wechatName: {
                error: '请输入您的微信账号'
            }
        }, function(formData) {
            let postData = {}
            postData.amount = Number(formData.amount);
            postData.notUseQR = true;
            postData.clientType = 1;
            mcm.net.send({
                service: 'payment',
                functionName: 'requestWechatTopup',
                data: postData
            }).then(function(result) {
                mcm.alert.sp(self.url, '您的转账申请已经提交！', 'alert', [{
                    name: '确定',
                    then: function() {
                        mcm.tool.insertObject(self.param, {
                            proposalId: result.proposalId,
                            amount: result.result.amount,
                            status: business.orderStatus[result.status],
                            validTime: mcm.tool.formatDate(result.result.validTime, "m月d日 h:i"),
                            createTime: mcm.tool.formatDate(result.result.createTime, "m月d日 h:i"),
                            weChatQRCode: result.result.weChatQRCode || '',
                            weChatAccount: result.result.weChatAccount || '',
                            weChatName: result.result.weChatName || '',
                            wechatQRCode: result.result.wechatQRCode || '',
                            wechatAccount: result.result.wechatAccount || '',
                            wechatName: result.result.wechatName || result.result.name || ''
                        });
                        console.log(result);
                        self.QRCodeNode[0].src = result.result.weChatQRCode;
                        self.formNode.hide();
                        self.resultNode.show();

                    }
                }]);
            });
        });
    };

    self.cancelOrder = function() {
        mcm.alert.sp(self.url, '您确认要取消此次充值吗？', 'alert', [{
            name: "确定",
            then: function() {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelWechatTopup',
                    data: {
                        proposalId: self.param.proposalId
                    }
                }).then(function() {
                    mcm.alert.sp(self.url, '您的转账订单已取消!', 'alert', [{
                        name: "确定",
                        then: function() {
                            self.formNode[0].reset();
                            self.resultNode.hide();
                            self.formNode.show();
                        }
                    }]);
                });
            }
        }, {
            name: "取消"
        }]);
    };

    return self;
});

/**
 * Created by Ricky on 2017/3/23.
 */

define('../js/page/deposit/page.alipay.manual',['page', 'business'], function (page, business) {
    var self = new page('alipay_manual');

    self.request = function() {
        return [{
            app: "alipayOrder",
            service: "payment",
            functionName: "getAlipayTopupRequestList"
        }, {
            app: 'amountLimit',
            service: 'payment',
            functionName: 'getAlipaySingleLimit'
        }];
    };

    self.param = {
        proposalId: '',
        amount: '',
        status: '',
        validTime: '',
        createTime: '',
        alipayQRCode: '',
        alipayAccount: '',
        alipayName: ''
    };

    self.init = function() {
        var depositedOrderInfo = self.data.alipayOrder;
        if (self.data.alipayOrder) {
            mcm.tool.insertObject(self.param, {
                proposalId: depositedOrderInfo.proposalId,
                amount: depositedOrderInfo.data.amount,
                status: business.orderStatus[depositedOrderInfo.status],
                validTime: mcm.tool.formatDate(depositedOrderInfo.data.validTime, "m月d日 h:i"),
                createTime: mcm.tool.formatDate(depositedOrderInfo.createTime, "m月d日 h:i"),
                alipayQRCode: depositedOrderInfo.data.alipayQRCode,
                alipayAccount: depositedOrderInfo.data.alipayAccount,
                alipayName: depositedOrderInfo.data.alipayName
            });
        }

        self._super.init.call(self);
    };

    self.onEnter = function() {
        if (self.data.alipayOrder) {
            self.QRCodeNode[0].src = self.param.alipayQRCode;
            self.formNode.hide();
            self.resultNode.show();
        } else {
            self.formNode.show();
            self.resultNode.hide();
        }
        mcm.validate(self.formNode, {
            amount: {
                check: function(val) {
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 10) {
                        error = '存款金额不能小于10元'
                    } else if (val > self.data.amountLimit.singleLimit) {
                        error = '存款金额不能大于' + self.data.amountLimit.singleLimit + '元'
                    }

                    return error;
                }
            },
            alipayName: {
                error: '请输入您的支付宝账号'
            }
        }, function(formData) {
            mcm.net.send({
                service: 'payment',
                functionName: 'requestAlipayTopup',
                data: formData
            }).then(function(result) {
                mcm.alert.sp(self.url, '您的转账申请已经提交！', 'alert', [{
                    name: '确定',
                    then: function() {
                        mcm.tool.insertObject(self.param, {
                            proposalId: result.proposalId,
                            amount: result.result.amount,
                            status: business.orderStatus[result.status],
                            validTime: mcm.tool.formatDate(result.result.validTime, "m月d日 h:i"),
                            createTime: mcm.tool.formatDate(result.result.createTime, "m月d日 h:i"),
                            alipayQRCode: result.result.alipayQRCode,
                            alipayAccount: result.result.alipayAccount,
                            alipayName: result.result.alipayName
                        });
                        self.QRCodeNode[0].src = result.result.alipayQRCode || '';
                        self.formNode.hide();
                        self.resultNode.show();
                    }
                }]);
            });
        });
    };

    self.cancelOrder = function() {
        mcm.alert.sp(self.url, '您确认要取消此次充值吗？', 'alert', [{
            name: "确定",
            then: function() {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelAlipayTopup',
                    data: {
                        proposalId: self.param.proposalId
                    }
                }).then(function() {
                    mcm.alert.sp(self.url, '您的转账订单已取消!', 'alert', [{
                        name: "确定",
                        then: function() {
                            self.formNode[0].reset();
                            self.resultNode.hide();
                            self.formNode.show();
                        }
                    }]);
                });
            }
        }, {
            name: "取消"
        }]);
    };

    return self;
});

/**
 * Created by Ricky on 2017/3/23.
 */

define('../js/page/deposit/page.unionpay',['page'], function (page) {
    var self = new page('unionpay');

    self.input = {
        amount:''
    };

    self.onEnter = function () {
        mcm.validate('.submit-form', {
            amount: {
                error: '请输入存款金额',
                check: function(val) {
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 50) {
                        error = '存款金额不能小于50元'
                    }
                    return error;
                }
            }
        }, function () {
            mcm.net.send({
                service: 'payment',
                functionName: 'createOnlineTopupProposal',
                data: {
                    topupType: 8,
                    amount: self.input.amount,
                    merchantUseType: 1,
                    clientType: 1
                }
            }).then(function (result) {
                var address = result['topupDetail']['paymentURL'];
                mcm.alert.sp(self.url, '是否立刻前往充值页面进行充值', 'normal', [{
                    name: '确定', then: function () {
                        window.open(address);
                    }
                }, {name: '取消'}])
            })
        });
    };
    return self;
});

/**
 * Created by Mark on 2018/4/13.
 */

define('../js/page/deposit/page.onlinepay',['page'], function (page) {
    var self = new page('onlinepay');

    self.input = {
        amount:'',
        topupType:''
    };
    self.onlineTopupListTXT = '';
    self.request = function () {
        return {
          app: 'onlineTopupType',
          service: 'payment',
          functionName: 'getOnlineTopupType',
          data: {
              merchantUse: 1, // 1--普通充值， 2--开户充值
              clientType: 1 // 1--浏览器， 2--手机APP
          }
        };
    };

    // app: 'amountLimit',
    // service: 'payment',
    // functionName: 'getMerchantSingleLimits'

    self.init = function() {

        if (!self.data.onlineTopupType instanceof Array) {
          return;
        }

        for (var i = 0; i < self.data.onlineTopupType.length; i++) {
          switch (self.data.onlineTopupType[i].type) {
            case 1:
              self.data.onlineTopupType[i].name = "网银支付";
              self.data.onlineTopupType[i].icon = "icon-online";
              break;
            case 2:
              self.data.onlineTopupType[i].name = "微信扫码";
              self.data.onlineTopupType[i].icon = "icon icon-wechatPay";
              break;
            case 3:
              self.data.onlineTopupType[i].name = "支付宝扫码";
              self.data.onlineTopupType[i].icon = "icon icon-aliPay";
              break;
            case 4:
              self.data.onlineTopupType[i].name = "微信支付";
              self.data.onlineTopupType[i].icon = "icon icon-wechatPay";
              break;
            case 5:
              self.data.onlineTopupType[i].name = "支付宝支付";
              self.data.onlineTopupType[i].icon = "icon icon-aliPay";
              break;
            case 6:
              self.data.onlineTopupType[i].name = "快捷支付";
              self.data.onlineTopupType[i].icon = "icon icon-fastPay";
              break;
            case 7:
              self.data.onlineTopupType[i].name = "QQ扫码";
              self.data.onlineTopupType[i].icon = "icon icon-qqPay";
              break;
            case 8:
              self.data.onlineTopupType[i].name = "银联扫码";
              self.data.onlineTopupType[i].icon = "icon icon-netPay";
              break;
            case 9:
              self.data.onlineTopupType[i].name = "京东扫码";
              self.data.onlineTopupType[i].icon = "icon-jdPay";
              break;
            case 10:
              self.data.onlineTopupType[i].name = "微信wap";
              self.data.onlineTopupType[i].icon = "icon icon-wechatPay";
              break;
            case 11:
              self.data.onlineTopupType[i].name = "支付宝wap";
              self.data.onlineTopupType[i].icon = "icon icon-aliPay";
              break;
            case 12:
              self.data.onlineTopupType[i].name = "QQwap";
              self.data.onlineTopupType[i].icon = "icon icon-qqPay";
              break;
            case 13:
              self.data.onlineTopupType[i].name = "点卡(PCard)";
              self.data.onlineTopupType[i].icon = "";
              break;
            case 14:
              self.data.onlineTopupType[i].name = "京东wap";
              self.data.onlineTopupType[i].icon = "icon-jdPay";
              break;
          }
        }
        self.getOnlineTopupLimit();
        self._super.init.call(self);
    };

    self.getOnlineTopupLimit = function(){
        self.onlineTopupList = {};
        var data = self.data.onlineTopupType;
        if(data.length > 0){
            self.onlineTopupListTXT = '单笔充值限额最低10元，';
            data.forEach(function(topup){
                self.onlineTopupList[topup.maxDepositAmount] = self.onlineTopupList[topup.maxDepositAmount] || {merchantName:[], value:0};
                self.onlineTopupList[topup.maxDepositAmount].value = topup.maxDepositAmount;
                self.onlineTopupList[topup.maxDepositAmount].merchantName.push(topup['name']);
            })
        }

        var topupList = [];
        if(Object.keys(self.onlineTopupList).length > 0){

            topupList = Object.keys(self.onlineTopupList);
            topupList = topupList.sort();
            topupList.forEach(function(topupData, index){
                var name = self.onlineTopupList[topupData].merchantName.join('、');
                var maxDepositAmount = self.onlineTopupList[topupData].value || 0;

                if(maxDepositAmount > 0){
                    self.onlineTopupListTXT += name +'单笔充值上限最高'+maxDepositAmount+'元';
                    if(topupList.length != (index +1)){
                      self.onlineTopupListTXT += '，';
                    }else{
                      self.onlineTopupListTXT += '。';
                    }
                }
            })
        }

    }

    self.choosetopup = function(e){
        var id = $(e.currentTarget).data('id');
        self.input.topupType = id;
        $('.btn-submit-online').removeClass('select-topup');
        $(e.currentTarget).addClass('select-topup');
    }

    self.onEnter = function () {
        mcm.validate(self.formNode, {
            amount: {
                error: '请输入存款金额',
                check: function(val) {
                    console.log(self.formNode);
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 10) {
                        error = '存款金额不能小于10元'
                    }

                    if(!self.input.topupType){
                        error = '请先选择在线充值方式';
                    }
                    // else if (val > self.data.amountLimit.singleLimitList.wechat) {
                    //     error = '存款金额不能大于' + self.data.amountLimit.singleLimitList.wechat + '元'
                    // }
                    return error;
                }
            }
        }, function () {
            console.log(self.input.topupType);
            mcm.net.send({
                service: 'payment',
                functionName: 'createOnlineTopupProposal',
                data: {
                    topupType: self.input.topupType,
                    amount: self.input.amount,
                    merchantUseType: 1,
                    clientType: 1
                }
            }).then(function (result) {
                var address = result['topupDetail']['paymentURL'];
                console.log(address);
                mcm.alert.sp(self.url, '是否立刻前往充值页面进行充值', 'normal', [{
                    name: '确定', then: function () {
                        window.open(address);
                    }
                }, {name: '取消'}])
            })
        });
    };

    return self;
});

/**
 * Created by Ricky on 2017/4/19.
 */

define('address',[],function() {
    var main = function (parentNode, options) {
        var self = this;

        self.parentNode = $(parentNode);

        self._province = {
            dom: self.parentNode.find(options.province.dom),
            requestUrl: {
                service: 'payment',
                functionName: 'getProvinceList'
            },
            requestKey: 'provinceId',
            defaultOption: options.province.defaultOption
        };
        self._city = {
            dom: self.parentNode.find(options.city.dom),
            requestUrl: {
                service: 'payment',
                functionName: 'getCityList'
            },
            requestKey: 'cityId',
            defaultOption: options.city.defaultOption
        };
        self._area = {
            dom: self.parentNode.find(options.area.dom),
            requestUrl: {
                service: 'payment',
                functionName: 'getDistrictList'
            },
            defaultOption: options.area.defaultOption
        };

        if (!options.province.defaultOption)
            self._province.dom[0].options.add(new Option('选择城市', ''));

        self.initProvinceOptions();

        self._province.dom.change({
            next: self._city,
            current: self._province
        }, self.onChange.bind(self));
        self._city.dom.change({
            next: self._area,
            current: self._city
        }, self.onChange.bind(self));
        self._area.dom.change({
            current: self._area
        }, self.onChange.bind(self));
    };

    var proto = main.prototype;

    proto.initProvinceOptions = function() {
        var self = this;
        self.requestAddressList({
            dom: self._province.dom,
            requestUrl: self._province.requestUrl
        }, function() {
            if (self._province.defaultOption)
                self._province.dom.val(self._province.defaultOption).trigger('change');

            // 删除大陆之外的城市名称
            var val, i,
                indexGroup = [],
                original = self._province.dom[0];

            for (i = 0; i < original.options.length; i++) {
                val = Number(original.options[i].value);

                if (val > 650000)
                    indexGroup.push(original.options[i].index);
            }

            for (i = 0; i < indexGroup.length; i++) {
                original.options.remove(indexGroup[0]);
            }
        });
    };

    proto.onChange = function(e, parentKey) {
        var val = e.target.value;
        var param = e.data;
        var self = this;
        var requestData;

        if (parentKey && parentKey.ignore) // 如果是由validate插件触发的change事件 会加入ignore的key，此时忽略掉change事件避免重复发送请求
            return;

        if (param.next) {
            param.next.postData = param.next.postData || {};
            requestData = param.next.postData;

            requestData[param.current.requestKey] = val;

            $.extend(requestData, parentKey);

            self.requestAddressList(param.next, function() {
                if (param.next)
                    param.next.dom.trigger('change', [requestData]);
            }.bind(self, param));
        }
    };

    proto.requestAddressList = function(data, cb) {
        var self = this;
        var defaultOption = data.defaultOption;
        var cleanOptions = data.cleanOptions;

        mcm.net.send({
            service: data.requestUrl.service,
            functionName: data.requestUrl.functionName,
            data: data.postData
        }, true).then(function(result) {
            if (data.postData)
                data.dom[0].options.length = 0; // 清空选项

            addOptions(data.dom, result, defaultOption);
            cb && cb();
        }, function(code, error) {
            mcm.alert.sp('addressRequest', error, 'alert', [{name:'确定'}]);
        });
    };

    function addOptions(dom, data, defaultId) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = new Option(data[i].name, data[i].id);
            dom[0].options.add(option);
        }
        dom.val(defaultId);
    }

    return function(parentNode, options) {
        new main(parentNode, options);
    };
});
/**
 * Created by Ricky on 2017/3/23.
 */

define('../js/page/deposit/page.bankpay',['page', 'address', 'business'], function (page, address, business) {
    var self = new page('bankpay');

    self.param = {
        proposalId: '',
        createTime: '',
        amount: '',
        validTime: '',
        status: '',
        payeeName: '',
        payeeBankType: '',
        payeeCardNo: ''
    };
    self.data.bankListData = [];
    self._resetOrder = false;

    self.request = function () {
        return [
            {
                app: 'bankList',
                service: 'payment',
                functionName: 'getBankTypeList'
            },
            {
                app: 'topupRequest',
                service: 'payment',
                functionName: 'getManualTopupRequestList'
            },
            {
                app: 'payment',
                service: 'payment',
                functionName: 'getOnlineTopupType',
                data: {
                    merchantUse: 2, // 1--普通充值， 2--开户充值
                    clientType: 1 // 1--浏览器， 2--手机APP
                }
            },
            {
                app: 'bankName',
                service: 'payment',
                functionName: 'requestBankTypeByUserName',
                data: {
                    clientType: 1 // 1--浏览器， 2--手机APP
                }
            }
        ];
    };

    self.init = function() {
        if (self.data.topupRequest) {
            var data = self.data.topupRequest;
            var now = new Date();
            var limitTime = new Date(data.data.validTime);
            var validTime, payeeBankType;
            for (var i = 0; i < self.data.bankList.length; i++) {
                if (self.data.bankList[i].id == data.data.bankTypeId)
                    payeeBankType = self.data.bankList[i].name;
            }

            if (limitTime > now) {
                validTime = mcm.tool.formatDate(data.data.validTime, "m月d日 h:i");
            } else {
                validTime = '已超时';
            }

            mcm.tool.insertObject(self.param, {
                proposalId: data.proposalId,
                createTime: mcm.tool.formatDate(data.createTime, "m月d日 h:i"),
                amount: data.data.amount,
                validTime: validTime,
                status: business.orderStatus[data.status],
                payeeName: data.data.cardOwner,
                payeeCardNo: data.data.bankCardNo,
                payeeBankType: payeeBankType
            });

            self._resetOrder = true;
        }

        self.loadBankList();
        self.loadFilter();
        self._super.init.call(self);
    };

    self.loadBankList = function(){
      self.data.bankListData = [];
    };

    self.loadFilter = function(e){

        let event = $(e)[0] ? $(e)[0] : null ;
        if (event) {
            let depositMethod = event.currentTarget.value || '';
            console.log(self.data.bankName);
            let bankTypeResult = self.data.bankName.data.filter(item=>{
                if(item.depositMethod == depositMethod){
                    return item
                }
            })

            let bankResult = '<option value=""></option>';
            if(bankTypeResult.length > 0 && bankTypeResult[0].data){
              bankTypeResult[0].data.forEach(item=>{
                  bankResult += '<option value="'+item.id+'">'+item.name+'</option>'
              })
            }
            $('#bankAccountType').html(bankResult);
            if(depositMethod == 4 || depositMethod == 5){
                $('#bankAccountTypeDiv').hide();
            }else{
                $('#bankAccountTypeDiv').show();
            }
        }
    }
    self.onEnter = function () {
        self.initModules();
        if (!self.data.topupRequest) {
            self.resultNode.hide();
            self.formNode.show();
        } else {
            self.resultNode.show();
            self.formNode.hide();
        }
    };

    self.initModules = function () {
        mcm.validate(self.formNode, {
            depositMethod: {
                error: '请选择付款方式'
            },
            bankTypeId: {
                error: '请选择收款银行',
                check: function(val, formData, rules){
                    var result = true;
                    if(formData.depositMethod!='4' && formData.depositMethod !='5' && !val){
                        result = false;
                    }
                    return result;
                }
            },
            lastBankcardNo: {
                error: '请输入账号后三位',
                check: function (val) {
                    return /\d{3}/.test(val);
                }
            },
            realName: {
                error: '请输入开户姓名'
            },
            provinceId: {
                error: '请选择省会'
            },
            amount: {
                error: '请输入存款金额',
                check: function (val) {
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 100) {
                        error = '您好，手工存款单笔最低存款金额100元，单日存款金额无上限。如果存款金额低于100元，将无法提交存款提案，还请您留意。'
                    }

                    return error;
                }
            }
        }, function (data) {

            data.amount = Number(data.amount);
            var requestData = {service: 'payment', data: data};
            var successTips = '';
            if (self._resetOrder) {
                requestData.functionName = 'modifyManualTopupRequest';
                delete requestData.data.depositMethod;
                requestData.data.proposalId = self.param.proposalId;
                successTips = '修改手工存款申请成功';
            } else {
                requestData.functionName = 'requestManualTopup';
                successTips = '提交手工存款申请成功';
            }

            mcm.net.send(requestData).then(function (result) {
                var payeeBankType;
                if (self._resetOrder) {
                    mcm.tool.insertObject(self.param, {
                        proposalId: result.proposalId,
                        amount: data.amount
                    });
                } else {
                    for (var i = 0; i < self.data.bankList.length; i++) {
                        if (self.data.bankList[i].id == result.result.bankTypeId) {
                            payeeBankType = self.data.bankList[i].name;
                        }
                    }
                    var amount = data.amount;
                    if(data.depositMethod == 4 || data.depositMethod == 5){
                        amount = result.result.changeAmount || '';
                    }
                    var createData = {
                        proposalId: result.proposalId,
                        createTime: mcm.tool.formatDate(result.result.createTime, "m月d日 h:i"),
                        amount: amount,
                        validTime: mcm.tool.formatDate(result.result.validTime, "m月d日 h:i"),
                        status: business.orderStatus[result.status],
                        payeeName: result.result.cardOwner,
                        payeeCardNo: result.result.bankCardNo,
                    }
                    if(payeeBankType){
                        createData.payeeBankType = payeeBankType
                    }
                    mcm.tool.insertObject(self.param, createData);
                }
                mcm.alert.sp('bankpay', successTips, 'normal', [{
                    name: '确定',
                    then: function () {
                        self.formNode.hide();
                        self.resultNode.show();
                    }
                }]);
            });
        });

        address(self.addressNode, {
            province: {
                dom: '#province',
                defaultOption: self.data.topupRequest ? self.data.topupRequest.data.provinceId : false
            },
            city: {
                dom: '#city',
                defaultOption: self.data.topupRequest ? self.data.topupRequest.data.cityId : false
            },
            area: {
                dom: '#area',
                defaultOption: self.data.topupRequest ? self.data.topupRequest.data.districtId : false
            }
        });
    };

    self.cancelOrder = function() {
        mcm.alert.sp(self.url, '您确定要取消申请吗?', 'normal', [{
            name: "确定",
            then: function() {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelManualTopupRequest',
                    data: {
                        proposalId: self.param.proposalId
                    }
                }).then(function() {
                    self._resetOrder = false;
                    mcm.alert.sp(self.url, '您的手工存款申请已取消', 'normal', [{
                        name: '确定',
                        then: function() {
                            mcm.renderer.refresh(self);
                        }
                    }, {
                        name: '取消'
                    }]);
                });
            }
        }, {
            name: "取消"
        }]);
    };

    self.applyCheckAgain = function() {
        self._resetOrder = true;
        self.resultNode.hide();
        self.formNode.show();
        self.formNode.find('#depositMode').prop('disabled', 'true');
    };

    return self;
});

/**
 * Created by Ricky on 2017/3/28.
 */

define('../js/page/deposit/page.alipay',['page'], function (page) {
    var self = new page('alipay');

    self.input = {
        amount:''
    };

    self.request = function () {
        return {
            app: 'amountLimit',
            service: 'payment',
            functionName: 'getMerchantSingleLimits'
        };
    };

    self.onEnter = function () {
        mcm.validate(self.formNode, {
            amount: {
                error: '请输入存款金额',
                check: function(val) {
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 50) {
                        error = '存款金额不能小于50元';
                    } else if (val > self.data.amountLimit.singleLimitList.alipay) {
                        error = '存款金额不能大于' + self.data.amountLimit.singleLimitList.alipay + '元'
                    }
                    return error;
                }
            }
        }, function () {
            mcm.net.send({
                service: 'payment',
                functionName: 'createOnlineTopupProposal',
                data: {
                    topupType: 3,
                    amount: self.input.amount,
                    merchantUseType: 1,
                    clientType: 1
                }
            }).then(function (result) {
                var address = result['topupDetail']['paymentURL'];
                mcm.alert.sp(self.url, '是否立刻前往充值页面进行充值', 'normal', [{
                    name: '确定', then: function () {
                        window.open(address);
                    }
                }, {name: '取消'}])
            })
        });
    };

    return self;
});

/**
 * Created by Ricky on 2017/4/6.
 */

define('progress',['template'], function(template) {
    var progress = function(param) {
        var self = this;

        //DOM容器
        self.container = $(param.container);

        //锚点数组
        self.anchors = param.anchors;

        //当前数值
        self.currentVal = param.current;

        //是否显示圆形节点
        self.isRoundAnchor = param.isRoundAnchor;

        //模板文件
        self.model = mcm.page['progress'];

        self.container.html(template.compile(self.model)(self));
        self.progressNode = self.container.find('.progressNode');

        var pointer = self.count();

        setTimeout(function(val) {
            self.progressNode.css('width', val + '%');
        }.bind(this, [pointer]), 200);
    };

    progress.prototype.count = function() {
        var jLen, rank, lv, pointer, nextLevel, thisLevel;
        if (this.currentVal >= this.anchors[0] && this.anchors[1] != 0 && this.anchors[2] != 0) {
            jLen = this.anchors.length;
            rank = 100 / (jLen - 1);
            lv = jLen + 1;
            for (var j = jLen; j > 0; j--){
                if(this.currentVal < this.anchors[j])
                    lv = j + 1;
            }
            if(lv == 1){
                nextLevel = this.anchors[1];
                pointer = 0;
            }else if(lv > jLen){
                pointer = lv * rank;
            }else{
                nextLevel = this.anchors[lv - 1];
                thisLevel = this.anchors[lv - 2];
                pointer = (lv - 2) * rank;
                pointer += (this.currentVal - thisLevel) / ((nextLevel - thisLevel) / rank);
            }
        } else {
            pointer = 0;
        }
        return pointer;
    };

    return progress;
});

/**
 * Created by Ricky on 2017/3/28.
 */

define('../js/page/page.withdrawals',['page', 'progress', 'common'], function (page, progress, common) {
    var self = new page('withdrawals');

    self._delay = true;

    self.input = {
        amount: ''
    };

    self.param = {
        overage: null
    };

    self.request = function () {
        return [{
            app: 'reward',
            service: 'reward',
            functionName: 'getRewardTask',
            data: {
                playerId: mcm.cache.getPlayerId()
            }
        }, {
            app: 'bankList',
            service: 'payment',
            functionName: 'getBankTypeList'
        }];
    };

    self.onEnter = function () {
        //todo 获取用户余额
        mcm.cache.loadOverage();

        if (!mcm.cache.getUserInfoFromCache().bankAccount) {
            mcm.alert.sp(self.url, '请前往【基本资料】页面修改绑定银行卡！', 'alert', [{name: '确定', then: function() {
                mcm.route.changeUrl('personal');
            }}]);
        } else {
            mcm.validate(self['formNode'], {
                amount: {
                    check: function (s) {
                        var error = true;
                        var balance = mcm.cache.getOverage();

                        if (s == '') {
                            error = '请输入提现金额';
                        } else if (isNaN(s)) {
                            error = '请输入数字';
                        } else if (s > balance) {
                            error = '提款金额不能超过账户余额';
                        } else if (s < 100) {
                            error = '提款金额必须大于100元';
                        }
                        return error;
                    }
                }
            }, function () {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'applyBonus',
                    data: {
                        bonusId: 1,
                        amount: Number(self.input.amount),
                        honoreeDetail: ' '
                    }
                }).then(function (result) {

                    mcm.alert.sp(self.url, '申请成功', 'normal', [{name: '确定'}]);
                    self.input.amount = '';
                    mcm.cache.loadOverage();
                })
            });
        }

        if (self.data['reward'])
            new progress({
                container: self.progressNode,
                anchors: [0, self.data['reward']['requiredUnlockAmount'].div(2), self.data['reward']['requiredUnlockAmount']],
                current: self.data['reward']['unlockedAmount'],
                isRoundAnchor: false
            });

        mcm.net.send({
            service: 'player',
            functionName: 'getCreditDetail'
        }).then(function (result) {
            if(result && result.gameCreditList) {
                for(var x = 0; result.gameCreditList.length > x; x++)
                {
                    var gameCredit = parseInt(result.gameCreditList[x].validCredit);
                    if(!isNaN(gameCredit) && gameCredit > 0) {
                        var isLast = result.gameCreditList.length - 1 === x ? true : false;
                        var data = {};
                        data.credit = gameCredit
                        data.playerId = mcm.cache.getUserInfoFromCache().playerId;
                        data.providerId = result.gameCreditList[x].providerId;
                        transferFromGame(data, isLast);
                    }
                }
            }
        });

        mcm.schedule.addEventListener('getOverage', self.updateOverage, self);
    };

    var transferFromGame = function (data, isLast) {
        if (!data.credit) {
            return;
        }

        mcm.net.send({
            service: 'game',
            functionName: 'transferFromProvider',
            data: data
        }).then(function() {
            if(isLast) {
                mcm.renderer.refresh(self);
            }
        });
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('getOverage', self);
        self._super.onExit.call(self);
    };

    //todo 更新用户余额回调
    self.updateOverage = function (sender, eventData) {
        var promo = mcm.cache.getLockCredit();
        self.param.overage = common.formatCurrency(promo >= 0 ? eventData + promo : eventData);
    };

    return self;
});

/**
 * Created by Ricky on 2017/3/31.
 */

define('../js/page/page.promotions',['page', 'activity', 'promoConfig'], function (page, activity, promoConfig) {
    var self = new page('promotions');

    self.init = function () {
        self.data.promotion = activity;
        self.data.promoConfig = promoConfig;
        self.data.rewardStatus = {
          '0':'未达成',
          '1':'可领取',
          '2':'已领取'
        }
        self.data.week = {}
        self.convertSignInfo();
        self._super.init.call(self);
    };

    self.request = function () {
        return [{
            app: 'rewardList',
            service: 'reward',
            functionName: 'getRewardList'
        }]
    };

    self.onEnter = function () {
        self._articles = self.parentNode.find('.promotion-article-wrapper');
        var banners = self.parentNode.find('.promotion-banner');
        var slideDownBtns = self.parentNode.find('.btn-prime');

        self.checkAvailablePromotions();
        self.checkIfLogin();

        slideDownBtns.on('click', function() {
            var index = slideDownBtns.index(this);
            self.switchArticle(index);
        });

        banners.on('click', function() {
            var index = banners.index(this);
            self.switchArticle(index);
        });

        self._super.onEnter.call(self);
    };

    self.checkAvailablePromotions = function () {
        var keywords = Object.keys(self.data.promotion);

        for (var i = 0; i < keywords.length; i++) {
            for (var j = 0; j < self.data.rewardList.length; j++) {
                if (keywords[i] == self.data.rewardList[j].code){
                  self._articles.eq(i).find('.btn-submit').css('display', 'block');
                }else if(keywords[i] == 'vip'){
                  self._articles.eq(i).find('.btn-submit').css('display', 'block');
                }
            }
        }
    };

    self.checkIfLogin = function() {
        if (mcm.cache.isLogin()) {
            self._articles.find('.btn-survey').css('display', 'block');
        }
    }

    self.switchArticle = function(index) {
        var article = self._articles.eq(index);

        self._articles.not(article).removeClass('slideDown');
        article.toggleClass('slideDown');

        article.find('#day1').html(self.data.week[0]);
        article.find('#day2').html(self.data.week[1]);
        article.find('#day3').html(self.data.week[2]);
        article.find('#day4').html(self.data.week[3]);
        article.find('#day5').html(self.data.week[4]);
        article.find('#day6').html(self.data.week[5]);
        article.find('#day7').html(self.data.week[6]);
    };
    self.convertSignInfo = function(){
        var keywords = Object.keys(self.data.promotion);

        if(keywords.indexOf('qrlb') != -1){
            mcm.net.send({
                service: 'reward',
                functionName: 'getSignInfo',
                data: {
                    code: 'qrlb',
                    platformId: mcm.platformId
                }
            }).then(function (data) {
                if(data.list && data.list.length > 0){
                  data.list.forEach(function(sign, index){
                      self.data.week[index] = self.data.rewardStatus[sign.status];
                  })
                }
            },function(err){
                console.log(err);
            });
        }
    }

    self.applyCZTHA = function(e) {

        if (mcm.cache.isLogin()) {
            var code = 'chtha';
            var topUpData = { code: code };
            var promoConfig = self.data.promoConfig.activity || {};
            self.applyRewardWithTopup(code);
        } else {
            mcm.alert.sp(self.url, '请登陆后再尝试申请', 'alert', [{name: '确定', then: function () {
                mcm.route.popUp('login');
            }}]);
        }
    };

    self.applyCZTHB = function(e) {

        if (mcm.cache.isLogin()) {
            var code = 'chthb';
            var topUpData = { code: code };
            var promoConfig = self.data.promoConfig.activity || {};
            self.applyRewardWithTopup(code);
        } else {
            mcm.alert.sp(self.url, '请登陆后再尝试申请', 'alert', [{name: '确定', then: function () {
                mcm.route.popUp('login');
            }}]);
        }
    };

    self.applyPromotion = function(e) {
        var target = $(e.target);
        var functionName = target.data('functionname');

        if (mcm.cache.isLogin()) {
            var index = self.parentNode.find('li').index(target.parents('li'));
            var keywords = Object.keys(self.data.promotion);
            var code = keywords[index];
            var topUpData = { code: code };
            // if(code == "czth" || code == "firstdeposit"){
            var promoConfig = self.data.promoConfig.activity || {};
            if(promoConfig[code].type == 'PlayerTopUpReward'){
                //存送进
                self.applyRewardWithTopup(code);
            }else{
                if (functionName)
                    return self[functionName](code);
                self.applyRewardAPI(topUpData);
            }
        } else {
            mcm.alert.sp(self.url, '请登陆后再尝试申请', 'alert', [{name: '确定', then: function () {
                mcm.route.popUp('login');
            }}]);
        }
    };

    self.applyRewardWithTopup = function(code){

        mcm.net.send({
            service: 'reward',
            functionName: 'getSlotInfo',
            data: {
                code: code,
                platformId: mcm.platformId
            }
        }).then(function (data) {
            if(data){
                var topUpRecordId = data.topUpRecordId;
                var topUpData = { code: code };
                if(topUpRecordId){
                    topUpData.data = {
                        topUpRecordId: topUpRecordId
                    }
                }
                self.applyRewardAPI(topUpData);
            }
        },function(err){
            console.log(err);
        });
    };
    self.applyRewardAPI = function(topUpData){
        mcm.net.send({
            service: 'reward',
            functionName: 'applyRewardEvent',
            data: topUpData
        }).then(function () {
            mcm.alert.sp(self.url, '提交申请成功！', 'alert', [{name: '确定'}]);
        },function(err){
            console.log(err);
        });
    }

    self.applyUpgrade = function(){
          mcm.net.send({
              service: 'playerLevel',
              functionName: 'upgrade',
              data: {}
          }).then(function () {
            mcm.alert.sp(self.url, '提交优惠申请成功！', 'alert', [{name: "确定"}]);
      });
    };
    self.applyMbcsPromotion = function (code) {
        mcm.schedule.removeEventListener('topupRecordsResponse', self);
        mcm.schedule.addEventListener('topupRecordsResponse', function(e, data) {
            mcm.net.send({
                service: 'reward',
                functionName: 'applyRewardEvent',
                data: {
                    code: code,
                    data: {
                        topUpRecordId: data[0]
                    }
                }
            }).then(function () {
               mcm.alert.sp(self.url, '提交优惠申请成功！', 'alert', [{name: "确定"}]);
            });
        }, self);

        mcm.route.popUp('record', {
            multipleChoice: false
        });
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('topupRecordsResponse', self);
        self._super.onExit.call(self);
    };

    return self;
});

/**
 * Created by Ricky on 2017/4/3.
 */

define('../js/page/page.proxy',['page'], function (page) {
    var self = new page('proxy');

    self.onClick = function() {
        var user = mcm.cache.getUserInfoFromCache();

        if (user) {
            mcm.route.changeUrl('fastsearch');
            mcm.tool.browserInterceptor('fastsearch', 'pid=4', 0);
        } else {
            mcm.alert.sp(self.url, '请登陆后再尝试！', 'normal', [{
                name: '确定',
                then: function () {
                    mcm.route.popUp('login');
                }
            }, {
                name: '取消'
            }]);
        }
    };

    return self;
});

/**
 * Created by Ricky on 2017/4/3.
 */

define('../js/page/page.mobile',['page'], function (page) {
    var self = new page('mobile');

    self.onEnter = function() {
        self.parentNode.addClass('removeStyle');
    };

    self.onExit = function() {
        self._super.onExit.call(self);
        self.parentNode.removeClass('removeStyle');
    };

    return self;
});
/**
 * Created by Ricky on 2017/4/4.
 */

define('../js/page/page.account',['page'], function (page) {
    var self = new page('account');

    self._delay = true;

    self.param = {
        name: ''
    };

    self.onEnter = function () {
        var links = self['navNode'].find('.nav');
        self['navNode'].on('click', '.nav', function () {
            var target = $(this);
            if(target.hasClass('active'))
                return;
            links.not(this).removeClass('active');
            target.toggleClass('active');
            if(target.id == 'mail')
                target.removeClass('notice');

        });

        //todo 获取用户名
        self.param.name = mcm.cache.getUserAccount();

        mcm.schedule.addEventListener('changePortrait', self.changePortrait, self);
        mcm.schedule.addEventListener('updateUserName', self.updateUserName, self);
        mcm.schedule.addEventListener('notifyNewMail',self.mailNotice,self);
    };

    self.organMenu = function (e) {
        $(e.target).toggleClass('show');
    };

    self.openPortraitPopup = function () {
        mcm.route.popUp('headportrait');
    };

    /**
     * 新邮件通知
     * 服务器主动推送
     */
    self.mailNotice = function (sender,eventData) {
        if(!eventData)
            return;

        if(eventData['status'] == 200){
            $('#mail').addClass('notice');
        }
    };

    self.changePortrait = function (e, data) {
        self['portraitNode'][0].src = data.imgUrl;
        var photoUrl = data.imgUrl.match(/\/(\d+.jpg)/)[1];

        mcm.net.send({
            service: 'player',
            functionName: 'updatePhotoUrl',
            data: {
                photoUrl: photoUrl
            }
        }, true);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('changePortrait');
        mcm.schedule.removeEventListener('updateUserName');
        self._super.onExit.call(self);
    };

    self.updateUserName = function (sender, data) {
        if (!data)
            return;

        self.param.name = data;
    };

    return self;
});

/**
 * Created by Ricky on 2017/4/4.
 */

define('../js/page/account/page.overview',['page', 'progress'], function (page, progress) {
    var self = new page('overview');

    self.param = {
        totalCredit: 0,
        overage: null,
        totalOverage: null
    };

    self.request = function () {
        var request = [];
        var providerList = mcm.cache.getProviderList();
        if (providerList.length == 0) {
            request.push({
                app: 'providerList',
                service: 'game',
                functionName: 'getProviderList',
                data: {
                    platformId: mcm.platformId,
                    playerId: mcm.cache.getPlayerId()
                }
            });
        } else {
            self.data.providerList = providerList;
        }

        var endDay = mcm.tool.getOneDateBeforeToday(0, 2);
        var startDay = mcm.tool.getOneDateBeforeToday(60, 1);
        if (startDay && endDay)
            request.push({
                app: 'withdraw',
                service: 'payment',
                functionName: 'getBonusRequestList',
                data: {
                    startTime: startDay,
                    endTime: endDay,
                    startIndex: 0,
                    requestCount: 10,
                    sort: false,
                    proposalStatus: ''
                }
            });

        //todo 获取存款提交
        request.push({
            app: 'saving',
            service: 'payment',
            functionName: 'getManualTopupRequestList'
        });

        //todo 获取活动进度
        request.push({
            app: 'reward',
            service: 'reward',
            functionName: 'getRewardTask',
            data: {
                playerId: mcm.cache.getPlayerId()
            }
        });

        request.push({
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        });

        mcm.net.send({
            service: 'player',
            functionName: 'getCreditDetail',
            data: {}
        }).then(function (data) {
            self.param.totalCredit = 0;
            if (data) {
                var creditDetail = data;
                var validCredit = Number(creditDetail.credit);
                var gameCredit = 0;
                var groupCredit = 0;
                if (creditDetail.gameCreditList && creditDetail.gameCreditList.length > 0) {
                    creditDetail.gameCreditList.map(function (game) {
                        if (game.validCredit && game.validCredit !== "unknown") {
                            gameCredit += Number(game.validCredit);
                        }
                    });
                }

                if (creditDetail.lockedCreditList && creditDetail.lockedCreditList.length > 0) {
                    creditDetail.lockedCreditList.map(function (group) {
                        if (group.validCredit && group.validCredit !== "unknown") {
                            groupCredit += Number(group.validCredit);
                        }
                    })
                }

                self.param.totalCredit = validCredit + gameCredit + groupCredit;
                self.param.totalCredit = mcm.tool.formatCurrency(self.param.totalCredit);
            }

        });

        if (request.length > 0)
            return request;
    };

    self.init = function () {
        self.data.providerList.forEach(function (provider) {
            self.param[provider['name']] = '加载中';
        });

        self._super.init.call(self);
    };

    self.onEnter = function () {
        var providerList = mcm.cache.getProviderList();
        if (providerList.length == 0) {
            self.data.providerList.forEach(function (provider) {
                mcm.cache.addProvider({
                    providerId: provider['providerId'],
                    name: provider['name'],
                    nickName: provider['nickName'],
                    status: provider['status'],
                    credit: null
                })
            });
        }

        //todo 请求游戏大厅余额
        mcm.cache.getProviderList().forEach(function (provider) {
            mcm.net.send({
                service: 'game',
                functionName: 'getGameProviderCredit',
                data: {
                    providerId: provider['providerId']
                }
            }, true).then(function (result) {
                self.param[provider['name']] = mcm.tool.formatCurrency(result.credit);
            }).fail(function () {
                self.param[provider['name']] = '维护中';
            })
        });

        //todo 获取用户余额
        mcm.cache.loadOverage();

        //todo 活动进度条
        if (self.data['reward'])
            new progress({
                container: self.progressNode,
                anchors: [0, self.data['reward']['requiredUnlockAmount'].div(2), self.data['reward']['requiredUnlockAmount']],
                current: self.data['reward']['unlockedAmount'],
                isRoundAnchor: false
            });

        mcm.schedule.addEventListener('getOverage', self.updateOverage, self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('getOverage', self);
        self._super.onExit.call(self);
    };

    //todo 更新用户余额回调
    self.updateOverage = function (sender, eventData) {
        var promo = mcm.cache.getLockCredit();
        self.param.overage = mcm.tool.formatCurrency(promo >= 0 ? eventData + promo : eventData);
        if (self.data['reward']){
            self.param.totalOverage = mcm.tool.formatCurrency(eventData.add(self.data['reward']['currentAmount']));
        }
    };

    //todo 取消提款提案
    self.cancelWithdraw = function (e) {
        var id = $(e.currentTarget).data('id');
        mcm.alert.sp(self.url, '是否取消该笔提款申请', 'normal', [{
            name: '确定', then: function () {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelBonusRequest',
                    data: {
                        proposalId: id
                    }
                }).then(function () {
                    mcm.renderer.refresh(self);
                    mcm.alert.sp(self.url, '取消提案成功' || '未知错误', 'normal', [{name: '确定'}]);
                })
            }
        }, {name: '取消'}])
    };

    //todo 取消存款提案
    self.cancelSaving = function (e) {
        var id = $(e.currentTarget).data('id');
        mcm.alert.sp(self.url, '是否取消该笔存款申请', 'normal', [{
            name: '确定', then: function () {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelManualTopupRequest',
                    data: {
                        proposalId: id
                    }
                }).then(function () {
                    mcm.renderer.refresh(self);
                    mcm.alert.sp(self.url, '取消提案成功' || '未知错误', 'normal', [{name: '确定'}]);
                })
            }
        }, {name: '取消'}])
    };

    return self;
});
/**
 * Created by Ricky on 2017/5/22.
 */

define('../js/page/account/page.transfer',['page', 'progress'], function (page, progress) {
    var self = new page('transfer');

    self.param = {
        overage:''
    };

    self._delay = true;

    self.request = function () {
        return [{
            app: 'gamesInfo',
            service: 'game',
            functionName: 'getProviderList',
            data: {
                platformId: mcm.platformId,
                playerId: mcm.cache.getUserInfoFromCache().playerId
            }
        }, {
            app: 'getReward',
            service: 'reward',
            functionName: 'getRewardTask',
            data: {
                playerId: mcm.cache.getUserInfoFromCache().playerId
            }
        }]
    };

    self.onEnter = function () {
        self.param.overage = mcm.cache.getOverage();
        self.param.overage = self.param.overage.toFixed(2);
        self.getBalanceFromPlatform();

        self.formNode.on('click', 'tr', function () {
            var currentDom = $(this);
            var status = Number(currentDom.data('status'));

            if (!status)
                return mcm.alert.sp(self.url, '正在维护中 请稍后重试！', 'alert', [{name: '确定'}]);

            currentDom.addClass('active').siblings().removeClass('active');

            currentDom.find('input').prop('checked', true);
        });

        if (self.data['getReward'])
            new progress({
                container: self.progressNode,
                anchors: [0, self.data['getReward']['requiredUnlockAmount'].div(2), self.data['getReward']['requiredUnlockAmount']],
                current: self.data['getReward']['unlockedAmount'],
                isRoundAnchor: false
            });

        mcm.schedule.addEventListener('getOverage',self.updateOverage,self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('getOverage',self);
        self._super.onExit.call(self)
    }

    self.getBalanceFromPlatform = function () {
        var gameInfo;
        self.data.GameProviderCredit = {};

        for (var i = 0; i < self.data.gamesInfo.length; i++) {
            gameInfo = self.data.gamesInfo[i];
            mcm.net.send({
                service: 'game',
                functionName: 'getGameProviderCredit',
                data: {
                    providerId: gameInfo.providerId
                }
            }, true).then(function(result) {
                var credit = result.credit.toFixed(2);
                var providerId = result.providerId;

                self.data.GameProviderCredit[providerId] = credit; // 缓存游戏余额到 this.data.GameProviderCredit

                self.formNode.find('#game-balance-' + providerId).html(credit + '元');
            }, function(providerId) {
                self.formNode.find('#game-balance-' + providerId).html('无法获取');
            }.bind(this, gameInfo.providerId));
        }
    };

    self.onSubmit = function (e) {
        e.preventDefault();
        var data = mcm.tool.formToObject(e.target);
        // hardcore the game providerId , so user wont forget to choose
        data.providerId = 69;
        var operation = data.operation;
        delete data.operation;
        data.playerId = mcm.cache.getUserInfoFromCache().playerId;

        if (!data.providerId)
            return mcm.alert.sp(self.url, '请选择要操作的游戏大厅!', 'alert',[{name: '确定'}]);

        if (operation == 1) { //转出到本地
            self.transferFromGame(data);
        } else if(operation == 0) { //转入到游戏
            self.transferFromLocal(data);
        }
    };

    self.transferFromGame = function (data) {
        mcm.net.send({
            service: 'game',
            functionName: 'transferFromProvider',
            data: data
        }).then(function() {
            self.formNode.find('.active').find('[id~="game-balance-"]').html('0元');

            mcm.cache.updateUserInfo();
            mcm.alert.sp(self.url, '已完成转账 请查收', 'alert',[{name: '确定'}]);
            mcm.renderer.refresh(self);
        });
    };

    self.transferFromLocal = function (data) {
        mcm.net.send({
            service: 'game',
            functionName: 'transferToProvider',
            data: data
        }).then(function() {
            mcm.cache.updateUserInfo();
            mcm.alert.sp(self.url, '已完成转账 请查收', 'alert',[{name: '确定'}]);
            mcm.renderer.refresh(self);
        });
    };

    self.updateOverage=function (sender,value) {
        if(value)
            self.param.overage = value;
            self.param.overage = self.param.overage.toFixed(2);

    };

    return self;
});

/**

 @Name : layDate v1.1 日期控件
 @Author: 贤心
 @Date: 2014-06-25
 @QQ群：176047195
 @Site：http://sentsin.com/layui/laydate

 */

;!function (a) {
    var b = {
        path: "css/",
        defSkin: "default",
        format: "YYYY-MM-DD",
        min: "1900-01-01 00:00:00",
        max: "2099-12-31 23:59:59",
        isv: !1
    }, c = {}, d = document, e = "createElement", f = "getElementById", g = "getElementsByTagName", h = ["laydate_box", "laydate_void", "laydate_click", "LayDateSkin", "skins/", "/laydate.css"];
    a.laydate = function (b) {
        b = b || {};
        try {
            h.event = a.event ? a.event : laydate.caller.arguments[0]
        } catch (d) {
        }
        return c.run(b), laydate
    }, laydate.v = "1.1", c.getPath = function () {
        var a = document.scripts, c = a[a.length - 1].src;
        return b.path ? b.path : c.substring(0, c.lastIndexOf("/") + 1)
    }(), c.use = function (a, b) {
        var f = d[e]("link");
        f.type = "text/css", f.rel = "stylesheet", f.href = c.getPath + a + h[5], b && (f.id = b), d[g]("head")[0].appendChild(f), f = null
    }, c.trim = function (a) {
        return a = a || "", a.replace(/^\s|\s$/g, "").replace(/\s+/g, " ")
    }, c.digit = function (a) {
        return 10 > a ? "0" + (0 | a) : a
    }, c.stopmp = function (b) {
        return b = b || a.event, b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0, this
    }, c.each = function (a, b) {
        for (var c = 0, d = a.length; d > c && b(c, a[c]) !== !1; c++);
    }, c.hasClass = function (a, b) {
        return a = a || {}, new RegExp("\\b" + b + "\\b").test(a.className)
    }, c.addClass = function (a, b) {
        return a = a || {}, c.hasClass(a, b) || (a.className += " " + b), a.className = c.trim(a.className), this
    }, c.removeClass = function (a, b) {
        if (a = a || {}, c.hasClass(a, b)) {
            var d = new RegExp("\\b" + b + "\\b");
            a.className = a.className.replace(d, "")
        }
        return this
    }, c.removeCssAttr = function (a, b) {
        var c = a.style;
        c.removeProperty ? c.removeProperty(b) : c.removeAttribute(b)
    }, c.shde = function (a, b) {
        a.style.display = b ? "none" : "block"
    }, c.query = function (a) {
        var e, b, h, i, j;
        return a = c.trim(a).split(" "), b = d[f](a[0].substr(1)), b ? a[1] ? /^\./.test(a[1]) ? (i = a[1].substr(1), j = new RegExp("\\b" + i + "\\b"), e = [], h = d.getElementsByClassName ? b.getElementsByClassName(i) : b[g]("*"), c.each(h, function (a, b) {
            j.test(b.className) && e.push(b)
        }), e[0] ? e : "") : (e = b[g](a[1]), e[0] ? b[g](a[1]) : "") : b : void 0
    }, c.on = function (b, d, e) {
        return b.attachEvent ? b.attachEvent("on" + d, function () {
            e.call(b, a.even)
        }) : b.addEventListener(d, e, !1), c
    }, c.stopMosup = function (a, b) {
        "mouseup" !== a && c.on(b, "mouseup", function (a) {
            c.stopmp(a)
        })
    }, c.run = function (a) {
        var d, e, g, b = c.query, f = h.event;
        try {
            g = f.target || f.srcElement || {}
        } catch (i) {
            g = {}
        }
        if (d = a.elem ? b(a.elem) : g, f && g.tagName) {
            if (!d || d === c.elem)return;
            c.stopMosup(f.type, d), c.stopmp(f), c.view(d, a), c.reshow()
        } else e = a.event || "click", c.each((0 | d.length) > 0 ? d : [d], function (b, d) {
            c.stopMosup(e, d), c.on(d, e, function (b) {
                c.stopmp(b), d !== c.elem && (c.view(d, a), c.reshow())
            })
        })
    }, c.scroll = function (a) {
        return a = a ? "scrollLeft" : "scrollTop", d.body[a] | d.documentElement[a]
    }, c.winarea = function (a) {
        return document.documentElement[a ? "clientWidth" : "clientHeight"]
    }, c.isleap = function (a) {
        return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
    }, c.checkVoid = function (a, b, d) {
        var e = [];
        return a = 0 | a, b = 0 | b, d = 0 | d, a < c.mins[0] ? e = ["y"] : a > c.maxs[0] ? e = ["y", 1] : a >= c.mins[0] && a <= c.maxs[0] && (a == c.mins[0] && (b < c.mins[1] ? e = ["m"] : b == c.mins[1] && d < c.mins[2] && (e = ["d"])), a == c.maxs[0] && (b > c.maxs[1] ? e = ["m", 1] : b == c.maxs[1] && d > c.maxs[2] && (e = ["d", 1]))), e
    }, c.timeVoid = function (a, b) {
        if (c.ymd[1] + 1 == c.mins[1] && c.ymd[2] == c.mins[2]) {
            if (0 === b && a < c.mins[3])return 1;
            if (1 === b && a < c.mins[4])return 1;
            if (2 === b && a < c.mins[5])return 1
        } else if (c.ymd[1] + 1 == c.maxs[1] && c.ymd[2] == c.maxs[2]) {
            if (0 === b && a > c.maxs[3])return 1;
            if (1 === b && a > c.maxs[4])return 1;
            if (2 === b && a > c.maxs[5])return 1
        }
        return a > (b ? 59 : 23) ? 1 : void 0
    }, c.check = function () {
        var a = c.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g, "\\d+\\").replace(/\\$/g, ""), b = new RegExp(a), d = c.elem[h.elemv], e = d.match(/\d+/g) || [], f = c.checkVoid(e[0], e[1], e[2]);
        if ("" !== d.replace(/\s/g, "")) {
            if (!b.test(d))return c.elem[h.elemv] = "", c.msg("日期不符合格式，请重新选择。"), 1;
            if (f[0])return c.elem[h.elemv] = "", c.msg("日期不在有效期内，请重新选择。"), 1;
            f.value = c.elem[h.elemv].match(b).join(), e = f.value.match(/\d+/g), e[1] < 1 ? (e[1] = 1, f.auto = 1) : e[1] > 12 ? (e[1] = 12, f.auto = 1) : e[1].length < 2 && (f.auto = 1), e[2] < 1 ? (e[2] = 1, f.auto = 1) : e[2] > c.months[(0 | e[1]) - 1] ? (e[2] = 31, f.auto = 1) : e[2].length < 2 && (f.auto = 1), e.length > 3 && (c.timeVoid(e[3], 0) && (f.auto = 1), c.timeVoid(e[4], 1) && (f.auto = 1), c.timeVoid(e[5], 2) && (f.auto = 1)), f.auto ? c.creation([e[0], 0 | e[1], 0 | e[2]], 1) : f.value !== c.elem[h.elemv] && (c.elem[h.elemv] = f.value)
        }
    }, c.months = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], c.viewDate = function (a, b, d) {
        var f = (c.query, {}), g = new Date;
        a < (0 | c.mins[0]) && (a = 0 | c.mins[0]), a > (0 | c.maxs[0]) && (a = 0 | c.maxs[0]), g.setFullYear(a, b, d), f.ymd = [g.getFullYear(), g.getMonth(), g.getDate()], c.months[1] = c.isleap(f.ymd[0]) ? 29 : 28, g.setFullYear(f.ymd[0], f.ymd[1], 1), f.FDay = g.getDay(), f.PDay = c.months[0 === b ? 11 : b - 1] - f.FDay + 1, f.NDay = 1, c.each(h.tds, function (a, b) {
            var g, d = f.ymd[0], e = f.ymd[1] + 1;
            b.className = "", a < f.FDay ? (b.innerHTML = g = a + f.PDay, c.addClass(b, "laydate_nothis"), 1 === e && (d -= 1), e = 1 === e ? 12 : e - 1) : a >= f.FDay && a < f.FDay + c.months[f.ymd[1]] ? (b.innerHTML = g = a - f.FDay + 1, a - f.FDay + 1 === f.ymd[2] && (c.addClass(b, h[2]), f.thisDay = b)) : (b.innerHTML = g = f.NDay++, c.addClass(b, "laydate_nothis"), 12 === e && (d += 1), e = 12 === e ? 1 : e + 1), c.checkVoid(d, e, g)[0] && c.addClass(b, h[1]), c.options.festival && c.festival(b, e + "." + g), b.setAttribute("y", d), b.setAttribute("m", e), b.setAttribute("d", g), d = e = g = null
        }), c.valid = !c.hasClass(f.thisDay, h[1]), c.ymd = f.ymd, h.year.value = c.ymd[0] + "年", h.month.value = c.digit(c.ymd[1] + 1) + "月", c.each(h.mms, function (a, b) {
            var d = c.checkVoid(c.ymd[0], (0 | b.getAttribute("m")) + 1);
            "y" === d[0] || "m" === d[0] ? c.addClass(b, h[1]) : c.removeClass(b, h[1]), c.removeClass(b, h[2]), d = null
        }), c.addClass(h.mms[c.ymd[1]], h[2]), f.times = [0 | c.inymd[3] || 0, 0 | c.inymd[4] || 0, 0 | c.inymd[5] || 0], c.each(new Array(3), function (a) {
            c.hmsin[a].value = c.digit(c.timeVoid(f.times[a], a) ? 0 | c.mins[a + 3] : 0 | f.times[a])
        }), c[c.valid ? "removeClass" : "addClass"](h.ok, h[1])
    }, c.festival = function (a, b) {
        var c;
        switch (b) {
            case"1.1":
                c = "元旦";
                break;
            case"3.8":
                c = "妇女";
                break;
            case"4.5":
                c = "清明";
                break;
            case"5.1":
                c = "劳动";
                break;
            case"6.1":
                c = "儿童";
                break;
            case"9.10":
                c = "教师";
                break;
            case"10.1":
                c = "国庆"
        }
        c && (a.innerHTML = c), c = null
    }, c.viewYears = function (a) {
        var b = c.query, d = "";
        c.each(new Array(14), function (b) {
            d += 7 === b ? "<li " + (parseInt(h.year.value) === a ? 'class="' + h[2] + '"' : "") + ' y="' + a + '">' + a + "年</li>" : '<li y="' + (a - 7 + b) + '">' + (a - 7 + b) + "年</li>"
        }), b("#laydate_ys").innerHTML = d, c.each(b("#laydate_ys li"), function (a, b) {
            "y" === c.checkVoid(b.getAttribute("y"))[0] ? c.addClass(b, h[1]) : c.on(b, "click", function (a) {
                c.stopmp(a).reshow(), c.viewDate(0 | this.getAttribute("y"), c.ymd[1], c.ymd[2])
            })
        })
    }, c.initDate = function () {
        var d = (c.query, new Date), e = c.elem[h.elemv].match(/\d+/g) || [];
        e.length < 3 && (e = c.options.start.match(/\d+/g) || [], e.length < 3 && (e = [d.getFullYear(), d.getMonth() + 1, d.getDate()])), c.inymd = e, c.viewDate(e[0], e[1] - 1, e[2])
    }, c.iswrite = function () {
        var a = c.query, b = {time: a("#laydate_hms")};
        c.shde(b.time, !c.options.istime), c.shde(h.oclear, !("isclear" in c.options ? c.options.isclear : 1)), c.shde(h.otoday, !("istoday" in c.options ? c.options.istoday : 1)), c.shde(h.ok, !("issure" in c.options ? c.options.issure : 1))
    }, c.orien = function (a, b) {
        var d, e = c.elem.getBoundingClientRect();
        a.style.left = e.left + (b ? 0 : c.scroll(1)) + "px", d = e.bottom + a.offsetHeight / 1.5 <= c.winarea() ? e.bottom - 1 : e.top > a.offsetHeight / 1.5 ? e.top - a.offsetHeight + 1 : c.winarea() - a.offsetHeight, a.style.top = d + (b ? 0 : c.scroll()) + "px"
    }, c.follow = function (a) {
        c.options.fixed ? (a.style.position = "fixed", c.orien(a, 1)) : (a.style.position = "absolute", c.orien(a))
    }, c.viewtb = function () {
        var a, b = [], f = ["日", "一", "二", "三", "四", "五", "六"], h = {}, i = d[e]("table"), j = d[e]("thead");
        return j.appendChild(d[e]("tr")), h.creath = function (a) {
            var b = d[e]("th");
            b.innerHTML = f[a], j[g]("tr")[0].appendChild(b), b = null
        }, c.each(new Array(6), function (d) {
            b.push([]), a = i.insertRow(0), c.each(new Array(7), function (c) {
                b[d][c] = 0, 0 === d && h.creath(c), a.insertCell(c)
            })
        }), i.insertBefore(j, i.children[0]), i.id = i.className = "laydate_table", a = b = null, i.outerHTML.toLowerCase()
    }(), c.view = function (a, f) {
        var i, g = c.query, j = {};
        f = f || a, c.elem = a, c.options = f, c.options.format || (c.options.format = b.format), c.options.start = c.options.start || "", c.mm = j.mm = [c.options.min || b.min, c.options.max || b.max], c.mins = j.mm[0].match(/\d+/g), c.maxs = j.mm[1].match(/\d+/g), h.elemv = /textarea|input/.test(c.elem.tagName.toLocaleLowerCase()) ? "value" : "innerHTML", c.box ? c.shde(c.box) : (i = d[e]("div"), i.id = h[0], i.className = h[0], i.style.cssText = "position: absolute;", i.setAttribute("name", "laydate-v" + laydate.v), i.innerHTML = j.html = '<div class="laydate_top"><div class="laydate_ym laydate_y" id="laydate_YY"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_y" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms"><a class="laydate_tab laydate_chtop"><cite></cite></a><ul id="laydate_ys"></ul><a class="laydate_tab laydate_chdown"><cite></cite></a></div></div><div class="laydate_ym laydate_m" id="laydate_MM"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_m" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms" id="laydate_ms">' + function () {
                var a = "";
                return c.each(new Array(12), function (b) {
                    a += '<span m="' + b + '">' + c.digit(b + 1) + "月</span>"
                }), a
            }() + "</div>" + "</div>" + "</div>" + c.viewtb + '<div class="laydate_bottom">' + '<ul id="laydate_hms">' + '<li class="laydate_sj">时间</li>' + "<li><input readonly>:</li>" + "<li><input readonly>:</li>" + "<li><input readonly></li>" + "</ul>" + '<div class="laydate_time" id="laydate_time"></div>' + '<div class="laydate_btn">' + '<a id="laydate_clear">清空</a>' + '<a id="laydate_today">今天</a>' + '<a id="laydate_ok">确认</a>' + "</div>" + (b.isv ? '<a href="http://sentsin.com/layui/laydate/" class="laydate_v" target="_blank">laydate-v' + laydate.v + "</a>" : "") + "</div>", d.body.appendChild(i), c.box = g("#" + h[0]), c.events(), i = null), c.follow(c.box), f.zIndex ? c.box.style.zIndex = f.zIndex : c.removeCssAttr(c.box, "z-index"), c.stopMosup("click", c.box), c.initDate(), c.iswrite(), c.check()
    }, c.reshow = function () {
        return c.each(c.query("#" + h[0] + " .laydate_show"), function (a, b) {
            c.removeClass(b, "laydate_show")
        }), this
    }, c.close = function () {
        c.reshow(), c.shde(c.query("#" + h[0]), 1), c.elem = null
    }, c.parse = function (a, d, e) {
        return a = a.concat(d), e = e || (c.options ? c.options.format : b.format), e.replace(/YYYY|MM|DD|hh|mm|ss/g, function () {
            return a.index = 0 | ++a.index, c.digit(a[a.index])
        })
    }, c.creation = function (a, b) {
        var e = (c.query, c.hmsin), f = c.parse(a, [e[0].value, e[1].value, e[2].value]);
        c.elem[h.elemv] = f, b || (c.close(), "function" == typeof c.options.choose && c.options.choose(f))
    }, c.events = function () {
        var b = c.query, e = {box: "#" + h[0]};
        c.addClass(d.body, "laydate_body"), h.tds = b("#laydate_table td"), h.mms = b("#laydate_ms span"), h.year = b("#laydate_y"), h.month = b("#laydate_m"), c.each(b(e.box + " .laydate_ym"), function (a, b) {
            c.on(b, "click", function (b) {
                c.stopmp(b).reshow(), c.addClass(this[g]("div")[0], "laydate_show"), a || (e.YY = parseInt(h.year.value), c.viewYears(e.YY))
            })
        }), c.on(b(e.box), "click", function () {
            c.reshow()
        }), e.tabYear = function (a) {
            0 === a ? c.ymd[0]-- : 1 === a ? c.ymd[0]++ : 2 === a ? e.YY -= 14 : e.YY += 14, 2 > a ? (c.viewDate(c.ymd[0], c.ymd[1], c.ymd[2]), c.reshow()) : c.viewYears(e.YY)
        }, c.each(b("#laydate_YY .laydate_tab"), function (a, b) {
            c.on(b, "click", function (b) {
                c.stopmp(b), e.tabYear(a)
            })
        }), e.tabMonth = function (a) {
            a ? (c.ymd[1]++, 12 === c.ymd[1] && (c.ymd[0]++, c.ymd[1] = 0)) : (c.ymd[1]--, -1 === c.ymd[1] && (c.ymd[0]--, c.ymd[1] = 11)), c.viewDate(c.ymd[0], c.ymd[1], c.ymd[2])
        }, c.each(b("#laydate_MM .laydate_tab"), function (a, b) {
            c.on(b, "click", function (b) {
                c.stopmp(b).reshow(), e.tabMonth(a)
            })
        }), c.each(b("#laydate_ms span"), function (a, b) {
            c.on(b, "click", function (a) {
                c.stopmp(a).reshow(), c.hasClass(this, h[1]) || c.viewDate(c.ymd[0], 0 | this.getAttribute("m"), c.ymd[2])
            })
        }), c.each(b("#laydate_table td"), function (a, b) {
            c.on(b, "click", function (a) {
                c.hasClass(this, h[1]) || (c.stopmp(a), c.creation([0 | this.getAttribute("y"), 0 | this.getAttribute("m"), 0 | this.getAttribute("d")]))
            })
        }), h.oclear = b("#laydate_clear"), c.on(h.oclear, "click", function () {
            c.elem[h.elemv] = "", c.close()
        }), h.otoday = b("#laydate_today"), c.on(h.otoday, "click", function () {
            c.elem[h.elemv] = laydate.now(0, c.options.format), c.close()
        }), h.ok = b("#laydate_ok"), c.on(h.ok, "click", function () {
            c.valid && c.creation([c.ymd[0], c.ymd[1] + 1, c.ymd[2]])
        }), e.times = b("#laydate_time"), c.hmsin = e.hmsin = b("#laydate_hms input"), e.hmss = ["小时", "分钟", "秒数"], e.hmsarr = [], c.msg = function (a, d) {
            var f = '<div class="laydte_hsmtex">' + (d || "提示") + "<span>×</span></div>";
            "string" == typeof a ? (f += "<p>" + a + "</p>", c.shde(b("#" + h[0])), c.removeClass(e.times, "laydate_time1").addClass(e.times, "laydate_msg")) : (e.hmsarr[a] ? f = e.hmsarr[a] : (f += '<div id="laydate_hmsno" class="laydate_hmsno">', c.each(new Array(0 === a ? 24 : 60), function (a) {
                f += "<span>" + a + "</span>"
            }), f += "</div>", e.hmsarr[a] = f), c.removeClass(e.times, "laydate_msg"), c[0 === a ? "removeClass" : "addClass"](e.times, "laydate_time1")), c.addClass(e.times, "laydate_show"), e.times.innerHTML = f
        }, e.hmson = function (a, d) {
            var e = b("#laydate_hmsno span"), f = c.valid ? null : 1;
            c.each(e, function (b, e) {
                f ? c.addClass(e, h[1]) : c.timeVoid(b, d) ? c.addClass(e, h[1]) : c.on(e, "click", function () {
                    c.hasClass(this, h[1]) || (a.value = c.digit(0 | this.innerHTML))
                })
            }), c.addClass(e[0 | a.value], "laydate_click")
        }, c.each(e.hmsin, function (a, b) {
            c.on(b, "click", function (b) {
                c.stopmp(b).reshow(), c.msg(a, e.hmss[a]), e.hmson(this, a)
            })
        }), c.on(d, "mouseup", function () {
            var a = b("#" + h[0]);
            a && "none" !== a.style.display && (c.check() || c.close())
        }).on(d, "keydown", function (b) {
            b = b || a.event;
            var d = b.keyCode;
            13 === d && c.creation([c.ymd[0], c.ymd[1] + 1, c.ymd[2]])
        })
    }, c.init = function () {
        // c.use("need"), c.use(h[4] + b.defSkin, h[3]), c.skinLink = c.query("#" + h[3])
    }(), laydate.reset = function () {
        c.box && c.elem && c.follow(c.box)
    }, laydate.now = function (a, b) {
        var d = new Date(0 | a ? function (a) {
            return 864e5 > a ? +new Date + 864e5 * a : a
        }(parseInt(a)) : +new Date);
        return c.parse([d.getFullYear(), d.getMonth() + 1, d.getDate()], [d.getHours(), d.getMinutes(), d.getSeconds()], b)
    }, laydate.skin = function (a) {
        c.skinLink.href = c.getPath + h[4] + a + h[5]
    }
}(window);
define("layDate", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.laydate;
    };
}(this)));

/**
 * Created by wildeChen on 2017/4/10.
 */

define('../js/page/account/page.report',['page', 'template', 'layDate'], function (page, template) {
    var self = new page('report');

    self.input = {
        lobby: '',
        type: '2',
        status:'',
        page: 1
    };

    self.param = {
        betAmount: ''
    };

    self.subModel = template.compile(mcm.page['reportController']);

    self.controller = template.compile(mcm.page['pageController']);

    self.cache = {
        model: null
    };

    self.topupStatus = {
      1:'手工存款',
      2:'在线支付',
      3:'支付宝充值',
      4:'个人微信'
    }

    self.request = function () {
        var request = [];
        var providerList = mcm.cache.getProviderList();
        if (providerList.length == 0) {
            request.push({
                app: 'providerList',
                service: 'game',
                functionName: 'getProviderList',
                data: {
                    platformId: mcm.platformId,
                    playerId: mcm.cache.getPlayerId()
                }
            });
        } else {
            self.data.providerList = providerList;
        }

        if (request.length > 0)
            return request;
    };

    self.init = function () {
        self.cache.model = self.subModel({type: 'bet', data: self.data});
        self._super.init.call(self);
    };

    self.switch = function (e) {
        var target = $(e.target);
        if (target.hasClass('active'))
            return;

        target.siblings().removeClass('active');
        target.addClass('active');

        self.appendTemplate(self.subModel({type: target.data('type'), data: self.data}), '.reportArea');
        self.bindView();
        self.spreadView();
    };

    self.date = function (e) {

        let minDateString = self.getMinDate();
        let maxDateString = self.getDateFormat();

        laydate({
            format: 'YYYY-MM-DD hh:mm',
            isclear: false,
            istime: true,
            min: minDateString,
            max: maxDateString
        });
    };

    self.getMinDate = function(){

        // limited user can search data within 14 day
        let maxDate =  new Date().getTime();
        let day14 = 14 * 24 * 60 * 60 * 1000;
        let timestamp = maxDate - day14;

        let minDateData = new Date(timestamp);
        let minDate = self.getDateFormat(minDateData);
        return minDate;
    }

    self.getDateFormat = function(dateData){

        if(!dateData){
            dateData = new Date();
        }
        let yy = dateData.getFullYear();
        let mm = dateData.getMonth() + 1;
        let dd = dateData.getDate();

        let minDate = yy + '-' + self.setDateZero(mm) + '-' + self.setDateZero(dd);
        return minDate;
    }

    self.setDateZero = function (date) {
        return date < 10 ? '0' + date : date;
    }

    self.betRecord = function () {

        mcm.net.send({
            service: 'consumption',
            functionName: 'search',
            data: {
                providerId: self.input.lobby,
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val()
            }
        }).then(function (result) {
            self.param.betAmount = mcm.tool.formatCurrency(result['stats']['totalAmount']);
        })
    };

    self.savingRecord = function (value) {
        var record = mcm.page['rechargeRecord'];
        var every = 10;
        mcm.net.send({
            service: 'payment',
            functionName: 'getTopupHistory',
            data: {
                topUpType: self.input.type,
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * every),
                requestCount: every,
                sort: false
            }
        }).then(function (result) {
            var records = result['records'];
            var stats = result['stats'];
            $('.rechargeTable').html(template.compile(record)({list: records, stats: stats, topupStatus: self.topupStatus}));
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'savingRecord'
            }), '.page-controller');
            self.bindView();
        })
    };

    self.withdrawRecord = function (value) {
        var record = mcm.page['withdrawRecord'];
        var every = 10;
        mcm.net.send({
            service: 'payment',
            functionName: 'getBonusRequestList',
            data: {
                status: self.input.status,
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * every),
                requestCount: every,
                sort: false
            }
        }).then(function (result) {
            var records = result['records'];
            var stats = result['stats'];
            self.appendTemplate(template.compile(record)({list: records, stats: stats}),'.withdrawTable');
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'withdrawRecord'
            }), '.page-controller');
            self.bindView();
        })
    };

    self.promotionRecord = function (value) {
        var record = mcm.page['promotionRecord'];
        var every = 10;
        mcm.net.send({
            service: 'reward',
            functionName: 'getPlayerRewardList',
            data: {
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * every),
                requestCount: every,
                sort: false
            }
        }).then(function (result) {
            var records = result['records'];
            var stats = result['stats'];
            self.appendTemplate(template.compile(record)({list: records, stats: stats}),'.promotionTable');
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'promotionRecord'
            }), '.page-controller');
            self.bindView();
        })
    };

    /**
     * 取消提款提案
     * @param e
     */
    self.cancelWithdraw = function (e) {
        var id = $(e.currentTarget).data('id');
        mcm.alert.sp(self.url, '是否取消该笔提款申请', 'normal', [{
            name: '确定', then: function () {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelBonusRequest',
                    data: {
                        proposalId: id
                    }
                }).then(function () {
                    mcm.renderer.refresh(self);
                    mcm.alert.sp(self.url, '取消提案成功' || '未知错误', 'normal', [{name: '确定'}]);
                })
            }
        }, {name: '取消'}])
    };

    /**
     * 取消优惠活动申请
     * @param e
     */
    self.cancelPromotion = function (e) {

    };

    return self;
});

/**
 * Created by Ricky on 2017/4/10.
 */

define('../js/page/account/page.mailbox',['page'], function (page) {
    var self = new page('mailbox');

    var readMail = function (index, elem) {
        if (!self.data.mail[index].hasBeenRead) {
            var sendData = {mailObjId: ""};

            if (self.data.mail && self.data.mail[index] && self.data.mail[index]._id) {
                sendData.mailObjId = self.data.mail[index]._id;
            }

            mcm.net.send({
                service: 'player',
                functionName: 'readMail',
                data: sendData
            }).then(
                function(data) {
                    self.data.mail[index] = data;
                    var parentElem = elem.querySelector('div.message-title.row');
                    var dotElem = elem.querySelector('div > i');
                    parentElem.removeChild(dotElem);
                }, function(error) {

                }
            );
        }
    };
    var deleteMail = function (index) {
        var sendData = {mailObjId: ""};
  
        if (self.data.mail && self.data.mail[index] && self.data.mail[index]._id) {
          sendData.mailObjId = self.data.mail[index]._id;
        }
        mcm.net.send({
            service: 'player',
            functionName: 'deleteMail',
            data: sendData
        }).then(
            function(data) {
                if (data) {
                    self.data.mail.splice(index, 1);
                    var mailElem = self['listNode'].find('.slide[index="'+index+'"]')[0];
                    var parentElem = mailElem.parentElement;
                    parentElem.removeChild(mailElem);
                }
            }, function(error) {

            }
        );
    };

    self.request = function () {
        return {
            app:'mail',
            service:'player',
            functionName:'getMailList'
        }
    };

    self.onEnter = function() {
        var dom = self['listNode'].find('.slide');
        self['listNode'].on('click', '.slide', function () {
            var target = $(this);
            dom.not(this).removeClass('show');
            target.toggleClass('show');

            var index = target[0].getAttribute('index');
            var unread = target[0].className.indexOf('show') > -1 && self.data.mail[index].hasBeenRead !== true
                            ? true : false;
            if(unread) {
                readMail(index, target[0]);
            }
        });

        self['listNode'].on('click', '.slide .message-delete', function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            var target = $(this);
            var index = target[0].getAttribute('index');
            deleteMail(index, target[0]);
        });
    };
    return self;
});
/**
 * Created by Ricky on 2017/4/11.
 */

define('../js/page/account/page.personal',['page', 'progress', 'address'], function (page, progress, address) {
    var self = new page('personal');

    self._delay = true;

    self.request = function() {
        return [{
            app: 'bankList',
            service: 'payment',
            functionName: 'getBankTypeList'
        },{
            app: 'smsSettings',
            service: 'platform',
            functionName: 'getPlatformSmsGroups',
            data: {'platformObjId': mcm.cache.getUserInfoFromCache().playerLevel.platform}
        }]
    };

    self.onEnter = function() {
        if (!mcm.cache.getUserInfoFromCache().bankAccount) {
            mcm.validate(self.bankFormNode, {
                bankAccountName: {
                    error: '请输入收款人姓名'
                },
                bankAccount: 'bankcard',
                bankName: {
                    error: '请选择开户行'
                },
                bankAccountType: {
                    error: '请选择账户性质'
                },
                bankAccountProvince: {
                    error: '请选择开户城市'
                },
                bankAddress: {
                    error: '请输入开户银行地址'
                }
            }, function(data) {
                data.playerId = mcm.cache.getUserInfoFromCache().playerId;

                mcm.tool.insertObject(self.param, data);

                mcm.net.send({
                    service: 'partner',
                    functionName: 'updatePaymentInfo',
                    data: data
                },true);

                mcm.net.send({
                    service: 'player',
                    functionName: 'updatePaymentInfo',
                    data: data
                }).then(function(result) {
                    mcm.cache.updateUserInfo();
                    mcm.renderer.refresh(self);
                    mcm.alert.sp(self.url, '银行资料修改成功!','normal', [{name: '确定'}]);
                });
            });

            address(self.addressNode, {
                province: {
                    dom: '#province'
                },
                city: {
                    dom: '#city'
                },
                area: {
                    dom: '#area'
                }
            });
        }
    };

    self.openModifyPasswordPopup = function() {
        mcm.route.popUp('modifypassword');
    };

    self.openModifyBankPopup = function() {
        mcm.route.popUp('modifybank');
    };

    self.requestSMSCode = function() {
        mcm.net.send({
            service: 'player',
            functionName: 'sendSMSCodeToPlayer',
            data: {
                purpose: "updateBankInfoFirst",
                platformId: mcm.platformId
            }
        }).then(function () {
            var target = $("#requestSMSCodeForBank")
            target.addClass('disabled');
            target.attr('disabled', true);
            var time = 120, now = 1;
            var loop = function () {
                if (now >= time) {
                    target.html('获取验证码');
                    target.attr('disabled', false);
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒';
                target.html(text);
                now++;
                setTimeout(function () {
                    loop();
                }, 1000);
            };
            setTimeout(function () {
                loop()
            }, 1000);
        })
    }

    self.smsSettingSubmit = function(e) {
        e.preventDefault();
        var sendData = {};
        var data = mcm.tool.formToObject(e.target);
        for (var i in self.data.smsSettings) {
            if(data.hasOwnProperty(i)) {
                self.data.smsSettings[i].list.forEach(v => {
                    sendData[v] = true;
                })
            } else {
                self.data.smsSettings[i].list.forEach(v => {
                    sendData[v] = false;
                })
            }
        }
        mcm.net.send({
            service: 'player',
            functionName: 'updateSmsSetting',
            data: sendData
        }).then(function () {
            mcm.alert.sp(self.url, '您的短信设置已经生效', 'normal', [{name: '确定'}]);
        });
    };

    return self;
});

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
(function () {
    'use strict';
    var $;

    /*===========================
    Swiper
    ===========================*/
    var Swiper = function (container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);
    

        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            // autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            // Free mode
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            flip: {
                slideShadows : true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            // Parallax
            parallax: false,
            // Zoom
            zoom: false,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: true,
            // Scrollbar
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            // Keyboard Mousewheel
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: 'container',
            // Hash Navigation
            hashnav: false,
            hashnavWatchState: false,
            // History
            history: false,
            // Commong Nav State
            replaceState: false,
            // Breakpoints
            breakpoints: undefined,
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Pagination
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Next/prev buttons
            nextButton: null,
            prevButton: null,
            // Progress
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Lazy Loading
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            // Control
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            normalizeSlideIndex: true,
            // Swiping/no swiping
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            // Passive Listeners
            passiveListeners: true,
            // NS
            containerModifierClass: 'swiper-container-', // NEW
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationCurrentClass: 'swiper-pagination-current',
            paginationTotalClass: 'swiper-pagination-total',
            paginationHiddenClass: 'swiper-pagination-hidden',
            paginationProgressbarClass: 'swiper-pagination-progressbar',
            paginationClickableClass: 'swiper-pagination-clickable', // NEW
            paginationModifierClass: 'swiper-pagination-', // NEW
            lazyLoadingClass: 'swiper-lazy',
            lazyStatusLoadingClass: 'swiper-lazy-loading',
            lazyStatusLoadedClass: 'swiper-lazy-loaded',
            lazyPreloaderClass: 'swiper-lazy-preloader',
            notificationClass: 'swiper-notification',
            preloaderClass: 'preloader',
            zoomContainerClass: 'swiper-zoom-container',
        
            // Observer
            observer: false,
            observeParents: false,
            // Accessibility
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // Callbacks
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onBeforeResize: function (swiper)
            onAfterResize: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            onKeyPress: function (swiper, keyCode)
            */
        
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        
        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            }
            else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        
        // Swiper
        var s = this;
        
        // Params
        s.params = params;
        s.originalParams = originalParams;
        
        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            }
            else {
                $ = Dom7;
            }
            if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;
        
        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function () {
            //Get breakpoint for window width
            if (!s.params.breakpoints) return false;
            var breakpoint = false;
            var points = [], point;
            for ( point in s.params.breakpoints ) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function (a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        };
        s.setBreakpoint = function () {
            //Set breakpoint for window width and update parameters
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
                for ( var param in breakPointsParams ) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
                if(needsReLoop && s.destroyLoop) {
                    s.reLoop(true);
                }
            }
        };
        // Set breakpoint on load
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }
        
        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            var swipers = [];
            s.container.each(function () {
                var container = this;
                swipers.push(new Swiper(this, params));
            });
            return swipers;
        }
        
        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        
        s.classNames.push(s.params.containerModifierClass + s.params.direction);
        
        if (s.params.freeMode) {
            s.classNames.push(s.params.containerModifierClass + 'free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push(s.params.containerModifierClass + 'autoheight');
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        // Max resistance when touchReleaseOnEdges
        if (s.params.touchReleaseOnEdges) {
            s.params.resistanceRatio = 0;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push(s.params.containerModifierClass + '3d');
            }
            else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push(s.params.containerModifierClass + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        
        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        
        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        
        // Pagination
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);
            }
        
            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
            }
            else {
                s.params.paginationClickable = false;
            }
            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
        }
        // Next/Prev Buttons
        if (s.params.nextButton || s.params.prevButton) {
            if (s.params.nextButton) {
                s.nextButton = $(s.params.nextButton);
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);
                }
            }
            if (s.params.prevButton) {
                s.prevButton = $(s.params.prevButton);
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);
                }
            }
        }
        
        // Is Horizontal
        s.isHorizontal = function () {
            return s.params.direction === 'horizontal';
        };
        // s.isH = isH;
        
        // RTL
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push(s.params.containerModifierClass + 'rtl');
        }
        
        // Wrong RTL support
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        
        // Columns
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push(s.params.containerModifierClass + 'multirow');
        }
        
        // Check for Android
        if (s.device.android) {
            s.classNames.push(s.params.containerModifierClass + 'android');
        }
        
        // Add classes
        s.container.addClass(s.classNames.join(' '));
        
        // Translate
        s.translate = 0;
        
        // Progress
        s.progress = 0;
        
        // Velocity
        s.velocity = 0;
        
        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
            if (s.params.grabCursor) s.unsetGrabCursor();
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
            if (s.params.grabCursor) s.setGrabCursor();
        };
        
        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        s.setGrabCursor = function(moving) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            s.container[0].style.cursor = moving ? 'grabbing': 'grab';
        };
        s.unsetGrabCursor = function () {
            s.container[0].style.cursor = '';
        };
        if (s.params.grabCursor) {
            s.setGrabCursor();
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        
        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
            var image;
            function onReady () {
                if (callback) callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (sizes) {
                        image.sizes = sizes;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
        
            } else {//image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null || !s) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
            }
        };
        
        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            var autoplayDelay = s.params.autoplay;
            var activeSlide = s.slides.eq(s.activeIndex);
            if (activeSlide.attr('data-swiper-autoplay')) {
                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
            }
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                    s.emit('onAutoplay', s);
                }
                else {
                    if (!s.isEnd) {
                        s._slideNext();
                        s.emit('onAutoplay', s);
                    }
                    else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                            s.emit('onAutoplay', s);
                        }
                        else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, autoplayDelay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            }
            else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    }
                    else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return (-s.snapGrid[0]);
        };
        s.maxTranslate = function () {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function () {
            var activeSlides = [];
            var newHeight = 0;
            var i;
        
            // Find slides currently in view
            if(s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
                    var index = s.activeIndex + i;
                    if(index > s.slides.length) break;
                    activeSlides.push(s.slides.eq(index)[0]);
                }
            } else {
                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
            }
        
            // Find new height from heighest slide in view
            for (i = 0; i < activeSlides.length; i++) {
                if (typeof activeSlides[i] !== 'undefined') {
                    var height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
            }
        
            // Update Height
            if (newHeight) s.wrapper.css('height', newHeight + 'px');
        };
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            }
            else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            }
            else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                return;
            }
        
            //Subtract paddings
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
        
            // Store values
            s.width = width;
            s.height = height;
            s.size = s.isHorizontal() ? s.width : s.height;
        };
        
        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
        
            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof s.size === 'undefined') return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
        
            s.virtualSize = -spaceBetween;
            // reset margins
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
            else s.slides.css({marginRight: '', marginBottom: ''});
        
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                }
                else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }
        
            // Calc slides
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    // Set slides order
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide
                            .css({
                                '-webkit-box-ordinal-group': newSlideOrderIndex,
                                '-moz-box-ordinal-group': newSlideOrderIndex,
                                '-ms-flex-order': newSlideOrderIndex,
                                '-webkit-order': newSlideOrderIndex,
                                'order': newSlideOrderIndex
                            });
                    }
                    else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide
                        .css(
                            'margin-' + (s.isHorizontal() ? 'top' : 'left'),
                            (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                        )
                        .attr('data-swiper-column', column)
                        .attr('data-swiper-row', row);
        
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                }
                else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);
        
                    if (s.isHorizontal()) {
                        s.slides[i].style.width = slideSize + 'px';
                    }
                    else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
        
        
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if(prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                }
                else {
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
        
                s.virtualSize += slideSize + spaceBetween;
        
                prevSlideSize = slideSize;
        
                index ++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;
        
            if (
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
            }
        
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
        
            // Remove last grid elements depending on width
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];
        
            if (s.params.spaceBetween !== 0) {
                if (s.isHorizontal()) {
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                    else s.slides.css({marginRight: spaceBetween + 'px'});
                }
                else s.slides.css({marginBottom: spaceBetween + 'px'});
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };
        
        /*=========================
          Dynamic Slides Per View
          ===========================*/
        s.currentSlidesPerView = function () {
            var spv = 1, i, j;
            if (s.params.centeredSlides) {
                var size = s.slides[s.activeIndex].swiperSlideSize;
                var breakLoop;
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slides[i] && !breakLoop) {
                        size += s.slides[i].swiperSlideSize;
                        spv ++;
                        if (size > s.size) breakLoop = true;
                    }
                }
                for (j = s.activeIndex - 1; j >= 0; j--) {
                    if (s.slides[j] && !breakLoop) {
                        size += s.slides[j].swiperSlideSize;
                        spv ++;
                        if (size > s.size) breakLoop = true;
                    }
                }
            }
            else {
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
                        spv++;
                    }
                }
            }
            return spv;
        };
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
        
            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;
        
            // Visible Slides
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible =
                        (slideBefore >= 0 && slideBefore < s.size) ||
                        (slideAfter > 0 && slideAfter <= s.size) ||
                        (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            }
            else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
        
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i ++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    }
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                }
                else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            // Normalize slideIndex
            if(s.params.normalizeSlideIndex){
                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            }
            // for (i = 0; i < s.slidesGrid.length; i++) {
                // if (- translate >= s.slidesGrid[i]) {
                    // newActiveIndex = i;
                // }
            // }
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
        
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
            s.updateRealIndex();
        };
        s.updateRealIndex = function(){
            s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
        };
        
        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            // Active classes
            activeSlide.addClass(s.params.slideActiveClass);
            if (params.loop) {
                // Duplicate to all looped slides
                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
            }
            // Next Slide
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            if (s.params.loop && nextSlide.length === 0) {
                nextSlide = s.slides.eq(0);
                nextSlide.addClass(s.params.slideNextClass);
            }
            // Prev Slide
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
            if (s.params.loop && prevSlide.length === 0) {
                prevSlide = s.slides.eq(-1);
                prevSlide.addClass(s.params.slidePrevClass);
            }
            if (params.loop) {
                // Duplicate to all looped slides
                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
            }
        
            // Pagination
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                // Current/Total
                var current,
                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {
                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                        current = current - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (current > total - 1) current = current - total;
                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
                }
                else {
                    if (typeof s.snapIndex !== 'undefined') {
                        current = s.snapIndex;
                    }
                    else {
                        current = s.activeIndex || 0;
                    }
                }
                // Types
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                    s.bullets.removeClass(s.params.bulletActiveClass);
                    if (s.paginationContainer.length > 1) {
                        s.bullets.each(function () {
                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                        });
                    }
                    else {
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                }
                if (s.params.paginationType === 'progress') {
                    var scale = (current + 1) / total,
                        scaleX = scale,
                        scaleY = 1;
                    if (!s.isHorizontal()) {
                        scaleY = scale;
                        scaleX = 1;
                    }
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        
            // Next/active buttons
            if (!s.params.loop) {
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    if (s.isBeginning) {
                        s.prevButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                    }
                    else {
                        s.prevButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                    }
                }
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    if (s.isEnd) {
                        s.nextButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                    }
                    else {
                        s.nextButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                    }
                }
            }
        };
        
        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var paginationHTML = '';
                if (s.params.paginationType === 'bullets') {
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {
                        if (s.params.paginationBulletRender) {
                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
                        }
                        else {
                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }
                    }
                    s.paginationContainer.html(paginationHTML);
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                        s.a11y.initPagination();
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    if (s.params.paginationFractionRender) {
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    }
                    else {
                        paginationHTML =
                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + s.params.paginationTotalClass+'"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType === 'progress') {
                    if (s.params.paginationProgressRender) {
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                    }
                    else {
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType !== 'custom') {
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            if (!s) return;
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            var newTranslate;
            function forceSetTranslate() {
                var translate = s.rtl ? -s.translate : s.translate;
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                }
                else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    }
                    else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            }
            else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        };
        
        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            if (s.params.onBeforeResize) s.params.onBeforeResize(s);
            //Breakpoints
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }
        
            // Disable locks on resize
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
        
            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            var slideChangedBySlideTo = false;
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
        
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            }
            else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                }
                else {
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                s.lazy.load();
            }
            // Return locks after resize
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
            if (s.params.onAfterResize) s.params.onAfterResize(s);
        };
        
        /*=========================
          Events
          ===========================*/
        
        //Define Touch Events
        s.touchEventsDesktop = {start: 'mousedown', move: 'mousemove', end: 'mouseup'};
        if (window.navigator.pointerEnabled) s.touchEventsDesktop = {start: 'pointerdown', move: 'pointermove', end: 'pointerup'};
        else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = {start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp'};
        s.touchEvents = {
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : s.touchEventsDesktop.start,
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
        };
        
        
        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        
        // Attach/detach events
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
        
            var moveCapture = s.params.nested ? true : false;
        
            //Touch Events
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            }
            else {
                if (s.support.touch) {
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !s.device.ios && !s.device.android) || (params.simulateTouch && !s.support.touch && s.device.ios)) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
        
            // Next, Prev, Index
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                s.nextButton[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                s.prevButton[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
        
            // Prevent Links Clicks
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function () {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };
        
        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        // Clicks
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };
        
        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                }
                else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;
                    else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }
        
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            }
            else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex,
                    duplicatedSlides,
                    slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
                if (s.params.loop) {
                    if (s.animating) return;
                    realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
                    if (s.params.centeredSlides) {
                        if ((slideToIndex < s.loopedSlides - slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + slidesPerView/2)) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                    else {
                        if (slideToIndex > s.slides.length - slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                }
                else {
                    s.slideTo(slideToIndex);
                }
            }
        };
        
        var isTouched,
            isMoved,
            allowTouchCallbacks,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,
            // Form elements to match
            formElements = 'input, select, textarea, button, video',
            // Last click time
            lastClickTime = Date.now(), clickTimeout,
            //Velocities
            velocities = [],
            allowMomentumBounce;
        
        // Animating Flag
        s.animating = false;
        
        // Touches information
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        
        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }
        
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        
            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
        
            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };
        
        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) {
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                return;
            }
            if (s.params.onlyExternal) {
                // isMoved = true;
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
                if (!s.isHorizontal()) {
                    // Vertical
                    if (
                        (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate()) ||
                        (s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate())
                        ) {
                        return;
                    }
                }
                else {
                    if (
                        (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate()) ||
                        (s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate())
                        ) {
                        return;
                    }
                }
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;
        
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
            if (typeof isScrolling === 'undefined') {
                var touchAngle;
                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
                    isScrolling = false;
                }
                else {
                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
                }
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined') {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling)  {
                isTouched = false;
                return;
            }
            if (!startMoving) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
        
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    }
                    else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                //Grab Cursor
                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                    s.setGrabCursor(true);
                }
            }
            isMoved = true;
        
            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
        
            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;
        
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
        
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
        
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
        
        
            // Threshold
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                }
                else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
        
            if (!s.params.followFinger) return;
        
            // Update active index in free mode
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                //Velocity
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            // Update progress
            s.updateProgress(currentTranslate);
            // Update translate
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched) return;
            //Return Grab Cursor
            if (s.params.grabCursor && isMoved && isTouched  && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                s.setGrabCursor(false);
            }
        
            // Time diff
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
        
            // Tap, doubleTap, Click
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
        
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
        
            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);
        
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
        
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            }
            else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    }
                    else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
        
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
        
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
        
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
        
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = - newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.maxTranslate();
                        }
                    }
                    else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.minTranslate();
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
        
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = - newPosition;
                    }
                    //Fix duration
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        }
                        else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
        
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);
        
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
        
                    } else {
                        s.updateProgress(newPosition);
                    }
        
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
        
            // Find current slide
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                }
                else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
        
            // Find current slide size
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
        
            if (timeDiff > s.params.longSwipesMs) {
                // Long touches
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
        
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
            }
            else {
                // Short swipes
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
        
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
        
            var translate = - s.snapGrid[s.snapIndex];
            // Stop autoplay
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                }
                else {
                    s.stopAutoplay();
                }
            }
            // Update progress
            s.updateProgress(translate);
        
            // Normalize slideIndex
            if(s.params.normalizeSlideIndex){
                for (var i = 0; i < s.slidesGrid.length; i++) {
                    if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                        slideIndex = i;
                    }
                }
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex ) return false;
            }
        
            // Update Index
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
            s.updateRealIndex();
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                // Update Height
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
        
            if (speed === 0 || s.browser.lteIE9) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            }
            else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
        
            }
        
            return true;
        };
        
        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    }
                    else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
        
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    }
                    else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.history && s.history) {
                s.history.setHistory(s.params.history, s.activeIndex);
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };
        
        s.disableTouchControl = function () {
            s.params.onlyExternal = true;
            return true;
        };
        s.enableTouchControl = function () {
            s.params.onlyExternal = false;
            return true;
        };
        
        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0, y = 0, z = 0;
            if (s.isHorizontal()) {
                x = s.rtl ? -translate : translate;
            }
            else {
                y = translate;
            }
        
            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }
        
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
        
            s.translate = s.isHorizontal() ? x : y;
        
            // Check if we need to update progress
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            }
            else {
                progress = (translate - s.minTranslate()) / (translatesDiff);
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }
        
            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };
        
        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
        
            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
        
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
        
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a){
                        return a.replace(',','.');
                    }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
        
            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = s.isHorizontal() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };
        
        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            // create an observer instance
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });
        
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
        
            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
        
            // Observe container
            initObserver(s.container[0], {childList: false});
        
            // Observe wrapper
            initObserver(s.wrapper[0], {attributes: false});
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function () {
            // Remove duplicated slides
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        
            var slides = s.wrapper.children('.' + s.params.slideClass);
        
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
        
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
        
            var prependSlides = [], appendSlides = [], i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.reLoop = function (updatePosition) {
            var oldIndex = s.activeIndex - s.loopedSlides;
            s.destroyLoop();
            s.createLoop();
            s.updateSlidesSize();
            if (updatePosition) {
                s.slideTo(oldIndex + s.loopedSlides, 0, false);
            }
        
        };
        s.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            //Fix For Positive Oversliding
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            }
            else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            }
            else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
        
            if (s.params.loop) {
                s.createLoop();
            }
        
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            }
            else {
                s.slideTo(newActiveIndex, 0, false);
            }
        
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };
        

        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ?
                                Math.max(1 - Math.abs(slide[0].progress), 0) :
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide
                            .css({
                                opacity: slideOpacity
                            })
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
        
                    }
        
                },
                setTransition: function (duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            flip: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var progress = slide[0].progress;
                        if (s.params.flip.limitRotation) {
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        }
                        var offset = slide[0].swiperSlideOffset;
                        var rotate = -180 * progress,
                            rotateY = rotate,
                            rotateX = 0,
                            tx = -offset,
                            ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (s.rtl) {
                            rotateY = -rotateY;
                        }
        
                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
        
                        if (s.params.flip.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
        
                        slide
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.eq(s.activeIndex).transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function () {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({height: s.width + 'px'});
                        }
                        else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0, ty = 0, tz = 0;
                        if (i % 4 === 0) {
                            tx = - round * 4 * s.size;
                            tz = 0;
                        }
                        else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = - round * 4 * s.size;
                        }
                        else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        }
                        else if ((i - 3) % 4 === 0) {
                            tx = - s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
        
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
        
                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
        
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }
                        else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function () {
                    var transform = s.translate;
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    //Each slide offset from center
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
        
                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
        
                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
        
                        //Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
        
                    //Set correct perspective for IE10
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };
        

        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function (index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;
        
                var slide = s.slides.eq(index);
                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0) return;
        
                img.each(function () {
                    var _img = $(this);
                    _img.addClass(s.params.lazyStatusLoadingClass);
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src'),
                        srcset = _img.attr('data-srcset'),
                        sizes = _img.attr('data-sizes');
                    s.loadImage(_img[0], (src || background), srcset, sizes, false, function () {
                        if (typeof s === 'undefined' || s === null || !s) return;
                        if (background) {
                            _img.css('background-image', 'url("' + background + '")');
                            _img.removeAttr('data-background');
                        }
                        else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (sizes) {
                                _img.attr('sizes', sizes);
                                _img.removeAttr('data-sizes');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
        
                        }
        
                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            }
                            else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
        
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
        
            },
            load: function () {
                var i;
                var slidesPerView = s.params.slidesPerView;
                if (slidesPerView === 'auto') {
                    slidesPerView = 0;
                }
                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                }
                else {
                    if (slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;
                        var spv = slidesPerView;
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                        // Next Slides
                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        // Prev Slides
                        for (i = minIndex; i < s.activeIndex ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
        
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function () {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function () {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        

        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function (e) {
                var sb = s.scrollbar;
                var x = 0, y = 0;
                var translate;
                var pointerPosition = s.isHorizontal() ?
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                }
                else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function (e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
        
                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);
        
                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function () {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
        
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            draggableEvents: (function () {
                if ((s.params.simulateTouch === false && !s.support.touch)) return s.touchEventsDesktop;
                else return s.touchEvents;
            })(),
            enableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
                $(target).on(sb.draggableEvents.move, sb.dragMove);
                $(target).on(sb.draggableEvents.end, sb.dragEnd);
            },
            disableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
                $(target).off(sb.draggableEvents.move, sb.dragMove);
                $(target).off(sb.draggableEvents.end, sb.dragEnd);
            },
            set: function () {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);
                }
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
        
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
        
                if (s.isHorizontal()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                }
                else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
        
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                }
                else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function () {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
        
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && s.isHorizontal()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    }
                    else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                }
                else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    }
                    else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (s.isHorizontal()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    }
                    else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                }
                else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    }
                    else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function (duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };
        

        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function (x, y) {
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    };
                })();
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1, i3;
                var l = this.x.length;
        
                this.interpolate = function (x2) {
                    if (!x2) return 0;
        
                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
        
                    // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
            },
            //xxx: for now i will just save one spline function to to
            getInterpolateFunction: function(c){
                if(!s.controller.spline) s.controller.spline = s.params.loop ?
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function (translate, byController) {
               var controlled = s.params.control;
               var multiplier, controlledTranslate;
               function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
        
                    if(!controlledTranslate || s.params.controlBy === 'container'){
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
        
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
               }
               if (Array.isArray(controlled)) {
                   for (var i = 0; i < controlled.length; i++) {
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                           setControlledTranslate(controlled[i]);
                       }
                   }
               }
               else if (controlled instanceof Swiper && byController !== controlled) {
        
                   setControlledTranslate(controlled);
               }
            },
            setTransition: function (duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function(){
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
        
                        });
                    }
                }
                if (Array.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                }
                else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };
        

        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            onHashCange: function (e, a) {
                var newHash = document.location.hash.replace('#', '');
                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
                if (newHash !== activeSlideHash) {
                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
                }
            },
            attachEvents: function (detach) {
                var action = detach ? 'off' : 'on';
                $(window)[action]('hashchange', s.hashnav.onHashCange);
            },
            setHash: function () {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                if (s.params.replaceState && window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
                } else {
                    var slide = s.slides.eq(s.activeIndex);
                    var hash = slide.attr('data-hash') || slide.attr('data-history');
                    document.location.hash = hash || '';
                }
            },
            init: function () {
                if (!s.params.hashnav || s.params.history) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (hash) {
                    var speed = 0;
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                        if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                        }
                    }
                }
                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
            },
            destroy: function () {
                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
            }
        };
        

        /*=========================
          History Api with fallback to Hashnav
          ===========================*/
        s.history = {
            init: function () {
                if (!s.params.history) return;
                if (!window.history || !window.history.pushState) {
                    s.params.history = false;
                    s.params.hashnav = true;
                    return;
                }
                s.history.initialized = true;
                this.paths = this.getPathValues();
                if (!this.paths.key && !this.paths.value) return;
                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
                if (!s.params.replaceState) {
                    window.addEventListener('popstate', this.setHistoryPopState);
                }
            },
            setHistoryPopState: function() {
                s.history.paths = s.history.getPathValues();
                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
            },
            getPathValues: function() {
                var pathArray = window.location.pathname.slice(1).split('/');
                var total = pathArray.length;
                var key = pathArray[total - 2];
                var value = pathArray[total - 1];
                return { key: key, value: value };
            },
            setHistory: function (key, index) {
                if (!s.history.initialized || !s.params.history) return;
                var slide = s.slides.eq(index);
                var value = this.slugify(slide.attr('data-history'));
                if (!window.location.pathname.includes(key)) {
                    value = key + '/' + value;
                }
                if (s.params.replaceState) {
                    window.history.replaceState(null, null, value);
                } else {
                    window.history.pushState(null, null, value);
                }
            },
            slugify: function(text) {
                return text.toString().toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
            },
            scrollToSlide: function(speed, value, runCallbacks) {
                if (value) {
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHistory = this.slugify(slide.attr('data-history'));
                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, runCallbacks);
                        }
                    }
                } else {
                    s.slideTo(0, speed, runCallbacks);
                }
            }
        };
        

        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + s.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + s.height],
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
                ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
        
                }
                if (!inView) return;
            }
            if (s.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
            }
            else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
            s.emit('onKeyPress', s, kc);
        }
        s.disableKeyboardControl = function () {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        };
        

        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        function isEventSupported() {
            var eventName = 'onwheel';
            var isSupported = eventName in document;
        
            if (!isSupported) {
                var element = document.createElement('div');
                element.setAttribute(eventName, 'return;');
                isSupported = typeof element[eventName] === 'function';
            }
        
            if (!isSupported &&
                document.implementation &&
                document.implementation.hasFeature &&
                    // always returns true in newer browsers as per the standard.
                    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
                document.implementation.hasFeature('', '') !== true ) {
                // This is the only way to test support for the `wheel` event in IE9+.
                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
            }
        
            return isSupported;
        }
        /**
         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
         * complicated, thus this doc is long and (hopefully) detailed enough to answer
         * your questions.
         *
         * If you need to react to the mouse wheel in a predictable way, this code is
         * like your bestest friend. * hugs *
         *
         * As of today, there are 4 DOM event types you can listen to:
         *
         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
         *
         * So what to do?  The is the best:
         *
         *   normalizeWheel.getEventType();
         *
         * In your event callback, use this code to get sane interpretation of the
         * deltas.  This code will return an object with properties:
         *
         *   spinX   -- normalized spin speed (use for zoom) - x plane
         *   spinY   -- " - y plane
         *   pixelX  -- normalized distance (to pixels) - x plane
         *   pixelY  -- " - y plane
         *
         * Wheel values are provided by the browser assuming you are using the wheel to
         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
         * significantly on different platforms and browsers, forgetting that you can
         * scroll at different speeds.  Some devices (like trackpads) emit more events
         * at smaller increments with fine granularity, and some emit massive jumps with
         * linear speed or acceleration.
         *
         * This code does its best to normalize the deltas for you:
         *
         *   - spin is trying to normalize how far the wheel was spun (or trackpad
         *     dragged).  This is super useful for zoom support where you want to
         *     throw away the chunky scroll steps on the PC and make those equal to
         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
         *     resolve a single slow step on a wheel to 1.
         *
         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
         *     get the crazy differences between browsers, but at least it'll be in
         *     pixels!
         *
         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
         *     should translate to positive value zooming IN, negative zooming OUT.
         *     This matches the newer 'wheel' event.
         *
         * Why are there spinX, spinY (or pixels)?
         *
         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
         *     with a mouse.  It results in side-scrolling in the browser by default.
         *
         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
         *
         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
         *     probably is by browsers in conjunction with fancy 3D controllers .. but
         *     you know.
         *
         * Implementation info:
         *
         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
         * average mouse:
         *
         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
         *
         * On the trackpad:
         *
         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
         *
         * On other/older browsers.. it's more complicated as there can be multiple and
         * also missing delta values.
         *
         * The 'wheel' event is more standard:
         *
         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
         *
         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
         * backward compatibility with older events.  Those other values help us
         * better normalize spin speed.  Example of what the browsers provide:
         *
         *                          | event.wheelDelta | event.detail
         *        ------------------+------------------+--------------
         *          Safari v5/OS X  |       -120       |       0
         *          Safari v5/Win7  |       -120       |       0
         *         Chrome v17/OS X  |       -120       |       0
         *         Chrome v17/Win7  |       -120       |       0
         *                IE9/Win7  |       -120       |   undefined
         *         Firefox v4/OS X  |     undefined    |       1
         *         Firefox v4/Win7  |     undefined    |       3
         *
         */
        function normalizeWheel( /*object*/ event ) /*object*/ {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
        
            var sX = 0, sY = 0,       // spinX, spinY
                pX = 0, pY = 0;       // pixelX, pixelY
        
            // Legacy
            if( 'detail' in event ) {
                sY = event.detail;
            }
            if( 'wheelDelta' in event ) {
                sY = -event.wheelDelta / 120;
            }
            if( 'wheelDeltaY' in event ) {
                sY = -event.wheelDeltaY / 120;
            }
            if( 'wheelDeltaX' in event ) {
                sX = -event.wheelDeltaX / 120;
            }
        
            // side scrolling on FF with DOMMouseScroll
            if( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
                sX = sY;
                sY = 0;
            }
        
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
        
            if( 'deltaY' in event ) {
                pY = event.deltaY;
            }
            if( 'deltaX' in event ) {
                pX = event.deltaX;
            }
        
            if( (pX || pY) && event.deltaMode ) {
                if( event.deltaMode === 1 ) {          // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {                             // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }
        
            // Fall-back if spin cannot be determined
            if( pX && !sX ) {
                sX = (pX < 1) ? -1 : 1;
            }
            if( pY && !sY ) {
                sY = (pY < 1) ? -1 : 1;
            }
        
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }
        if (s.params.mousewheelControl) {
            /**
             * The best combination if you prefer spinX + spinY normalization.  It favors
             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
             * 'wheel' event, making spin speed determination impossible.
             */
            s.mousewheel.event = (navigator.userAgent.indexOf('firefox') > -1) ?
                'DOMMouseScroll' :
                isEventSupported() ?
                    'wheel' : 'mousewheel';
        }
        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;
        
            var data = normalizeWheel( e );
        
            if (s.params.mousewheelForceToAxis) {
                if (s.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
                    else return;
                }
                else {
                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
                    else return;
                }
            }
            else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? - data.pixelX * rtlFactor : - data.pixelY;
            }
        
            if (delta === 0) return;
        
            if (s.params.mousewheelInvert) delta = -delta;
        
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) {
                            s.slideNext();
                            s.emit('onScroll', s, e);
                        }
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                    else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
                            s.slidePrev();
                            s.emit('onScroll', s, e);
                        }
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
        
            }
            else {
                //Freemode or scrollContainer:
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning,
                    wasEnd = s.isEnd;
        
                if (position >= s.minTranslate()) position = s.minTranslate();
                if (position <= s.maxTranslate()) position = s.maxTranslate();
        
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
        
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }
        
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                }
                else {
                    if (s.params.lazyLoading && s.lazy) {
                        s.lazy.load();
                    }
                }
                // Emit event
                s.emit('onScroll', s, e);
        
                // Stop autoplay
                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
        
                // Return page scroll on edge positions
                if (position === 0 || position === s.maxTranslate()) return;
            }
        
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.off(s.mousewheel.event, handleMousewheel);
            s.params.mousewheelControl = false;
            return true;
        };
        
        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.on(s.mousewheel.event, handleMousewheel);
            s.params.mousewheelControl = true;
            return true;
        };
        

        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;
        
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            }
            else {
                if (s.isHorizontal()) {
                    pX = p;
                    pY = '0';
                }
                else {
                    pY = p;
                    pX = '0';
                }
            }
        
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            }
            else {
                pX = pX * progress * rtlFactor + 'px' ;
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            }
            else {
                pY = pY * progress + 'px' ;
            }
        
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function () {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);
        
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function (duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        

        /*=========================
          Zoom
          ===========================*/
        s.zoom = {
            // "Global" Props
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
                slide: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                image: undefined,
                imageWrap: undefined,
                zoomMax: s.params.zoomMax
            },
            image: {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {}
            },
            velocity: {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined
            },
            // Calc Scale From Multi-touches
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var x1 = e.targetTouches[0].pageX,
                    y1 = e.targetTouches[0].pageY,
                    x2 = e.targetTouches[1].pageX,
                    y2 = e.targetTouches[1].pageY;
                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                return distance;
            },
            // Events
            onGestureStart: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.slide || !z.gesture.slide.length) {
                    z.gesture.slide = $(this);
                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax ;
                    if (z.gesture.imageWrap.length === 0) {
                        z.gesture.image = undefined;
                        return;
                    }
                }
                z.gesture.image.transition(0);
                z.isScaling = true;
            },
            onGestureChange: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (s.support.gestures) {
                    z.scale = e.scale * z.currentScale;
                }
                else {
                    z.scale = (z.gesture.scaleMove / z.gesture.scaleStart) * z.currentScale;
                }
                if (z.scale > z.gesture.zoomMax) {
                    z.scale = z.gesture.zoomMax - 1 + Math.pow((z.scale - z.gesture.zoomMax + 1), 0.5);
                }
                if (z.scale < s.params.zoomMin) {
                    z.scale =  s.params.zoomMin + 1 - Math.pow((s.params.zoomMin - z.scale + 1), 0.5);
                }
                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
            },
            onGestureEnd: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
                        return;
                    }
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                z.currentScale = z.scale;
                z.isScaling = false;
                if (z.scale === 1) z.gesture.slide = undefined;
            },
            onTouchStart: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (z.image.isTouched) return;
                if (s.device.os === 'android') e.preventDefault();
                z.image.isTouched = true;
                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            },
            onTouchMove: function (e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                s.allowClick = false;
                if (!z.image.isTouched || !z.gesture.slide) return;
        
                if (!z.image.isMoved) {
                    z.image.width = z.gesture.image[0].offsetWidth;
                    z.image.height = z.gesture.image[0].offsetHeight;
                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
                    z.gesture.imageWrap.transition(0);
                    if (s.rtl) z.image.startX = -z.image.startX;
                    if (s.rtl) z.image.startY = -z.image.startY;
                }
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
        
                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
        
                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
                z.image.maxY = -z.image.minY;
        
                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
                if (!z.image.isMoved && !z.isScaling) {
                    if (s.isHorizontal() &&
                        (Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x) ||
                        (Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x)
                        ) {
                        z.image.isTouched = false;
                        return;
                    }
                    else if (!s.isHorizontal() &&
                        (Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y) ||
                        (Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y)
                        ) {
                        z.image.isTouched = false;
                        return;
                    }
                }
                e.preventDefault();
                e.stopPropagation();
        
                z.image.isMoved = true;
                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
        
                if (z.image.currentX < z.image.minX) {
                    z.image.currentX =  z.image.minX + 1 - Math.pow((z.image.minX - z.image.currentX + 1), 0.8);
                }
                if (z.image.currentX > z.image.maxX) {
                    z.image.currentX = z.image.maxX - 1 + Math.pow((z.image.currentX - z.image.maxX + 1), 0.8);
                }
        
                if (z.image.currentY < z.image.minY) {
                    z.image.currentY =  z.image.minY + 1 - Math.pow((z.image.minY - z.image.currentY + 1), 0.8);
                }
                if (z.image.currentY > z.image.maxY) {
                    z.image.currentY = z.image.maxY - 1 + Math.pow((z.image.currentY - z.image.maxY + 1), 0.8);
                }
        
                //Velocity
                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
                z.velocity.prevPositionX = z.image.touchesCurrent.x;
                z.velocity.prevPositionY = z.image.touchesCurrent.y;
                z.velocity.prevTime = Date.now();
        
                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTouchEnd: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (!z.image.isTouched || !z.image.isMoved) {
                    z.image.isTouched = false;
                    z.image.isMoved = false;
                    return;
                }
                z.image.isTouched = false;
                z.image.isMoved = false;
                var momentumDurationX = 300;
                var momentumDurationY = 300;
                var momentumDistanceX = z.velocity.x * momentumDurationX;
                var newPositionX = z.image.currentX + momentumDistanceX;
                var momentumDistanceY = z.velocity.y * momentumDurationY;
                var newPositionY = z.image.currentY + momentumDistanceY;
        
                //Fix duration
                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        
                z.image.currentX = newPositionX;
                z.image.currentY = newPositionY;
        
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
                z.image.maxY = -z.image.minY;
                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
        
                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTransitionEnd: function (s) {
                var z = s.zoom;
                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
                    z.scale = z.currentScale = 1;
                }
            },
            // Toggle Zoom
            toggleZoom: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.slide) {
                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
        
                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
        
                if (typeof z.image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                }
                else {
                    touchX = z.image.touchesStart.x;
                    touchY = z.image.touchesStart.y;
                }
        
                if (z.scale && z.scale !== 1) {
                    // Zoom Out
                    z.scale = z.currentScale = 1;
                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
                    z.gesture.slide = undefined;
                }
                else {
                    // Zoom In
                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
                    if (e) {
                        slideWidth = z.gesture.slide[0].offsetWidth;
                        slideHeight = z.gesture.slide[0].offsetHeight;
                        offsetX = z.gesture.slide.offset().left;
                        offsetY = z.gesture.slide.offset().top;
                        diffX = offsetX + slideWidth/2 - touchX;
                        diffY = offsetY + slideHeight/2 - touchY;
        
                        imageWidth = z.gesture.image[0].offsetWidth;
                        imageHeight = z.gesture.image[0].offsetHeight;
                        scaledWidth = imageWidth * z.scale;
                        scaledHeight = imageHeight * z.scale;
        
                        translateMinX = Math.min((slideWidth / 2 - scaledWidth / 2), 0);
                        translateMinY = Math.min((slideHeight / 2 - scaledHeight / 2), 0);
                        translateMaxX = -translateMinX;
                        translateMaxY = -translateMinY;
        
                        translateX = diffX * z.scale;
                        translateY = diffY * z.scale;
        
                        if (translateX < translateMinX) {
                            translateX =  translateMinX;
                        }
                        if (translateX > translateMaxX) {
                            translateX = translateMaxX;
                        }
        
                        if (translateY < translateMinY) {
                            translateY =  translateMinY;
                        }
                        if (translateY > translateMaxY) {
                            translateY = translateMaxY;
                        }
                    }
                    else {
                        translateX = 0;
                        translateY = 0;
                    }
                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                }
            },
            // Attach/Detach Events
            attachEvents: function (detach) {
                var action = detach ? 'off' : 'on';
        
                if (s.params.zoom) {
                    var target = s.slides;
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                    // Scale image
                    if (s.support.gestures) {
                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
                    }
                    else if (s.touchEvents.start === 'touchstart') {
                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
                    }
        
                    // Move image
                    s[action]('touchStart', s.zoom.onTouchStart);
                    s.slides.each(function (index, slide){
                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
                        }
                    });
                    s[action]('touchEnd', s.zoom.onTouchEnd);
        
                    // Scale Out
                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
                    if (s.params.zoomToggle) {
                        s.on('doubleTap', s.zoom.toggleZoom);
                    }
                }
            },
            init: function () {
                s.zoom.attachEvents();
            },
            destroy: function () {
                s.zoom.attachEvents(true);
            }
        };
        

        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };
        

        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName (eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                }
                else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {
        
        };
        s.emit = function (eventName) {
            // Trigger callbacks
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            // Trigger events
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            // Trigger plugins
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                // Remove all handlers for such event
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function () {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };
        

        // Accessibility tools
        s.a11y = {
            makeFocusable: function ($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function ($el, role) {
                $el.attr('role', role);
                return $el;
            },
        
            addLabel: function ($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
        
            disable: function ($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
        
            enable: function ($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
        
            onEnterKey: function (event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                }
                else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
        
            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
        
            notify: function (message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function () {
                // Setup accessibility
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    s.a11y.makeFocusable(s.nextButton);
                    s.a11y.addRole(s.nextButton, 'button');
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    s.a11y.makeFocusable(s.prevButton);
                    s.a11y.addRole(s.prevButton, 'button');
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                }
        
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function () {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function () {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };
        

        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            }
            else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.zoom && s.zoom) {
                s.zoom.init();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
            if (s.params.hashnavReplaceState) {
                s.params.replaceState = s.params.hashnavReplaceState;
            }
            if (s.params.history) {
                if (s.history) s.history.init();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };
        
        // Cleanup dynamic styles
        s.cleanupStyles = function () {
            // Container
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
        
            // Wrapper
            s.wrapper.removeAttr('style');
        
            // Slides
            if (s.slides && s.slides.length) {
                s.slides
                    .removeClass([
                      s.params.slideVisibleClass,
                      s.params.slideActiveClass,
                      s.params.slideNextClass,
                      s.params.slidePrevClass
                    ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }
        
            // Pagination/Bullets
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
        
            // Buttons
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
        
            // Scrollbar
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };
        
        // Destroy
        s.destroy = function (deleteInstance, cleanupStyles) {
            // Detach evebts
            s.detachEvents();
            // Stop autoplay
            s.stopAutoplay();
            // Disable draggable
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            // Destroy loop
            if (s.params.loop) {
                s.destroyLoop();
            }
            // Cleanup styles
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            // Disconnect observer
            s.disconnectObservers();
        
            // Destroy zoom
            if (s.params.zoom && s.zoom) {
                s.zoom.destroy();
            }
            // Disable keyboard/mousewheel
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            // Disable a11y
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            // Delete history popstate
            if (s.params.history && !s.params.replaceState) {
                window.removeEventListener('popstate', s.history.setHistoryPopState);
            }
            if (s.params.hashnav && s.hashnav)  {
                s.hashnav.destroy();
            }
            // Destroy callback
            s.emit('onDestroy');
            // Delete instance
            if (deleteInstance !== false) s = null;
        };
        
        s.init();
        

    
        // Return swiper instance
        return s;
    };
    

    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: (function () {
            var ua = window.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function (arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
            lteIE9: (function() {
                // create temporary DIV
                var div = document.createElement('div');
                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
                // return true / false value based on what will browser render
                return div.getElementsByTagName('i').length === 1;
            })()
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function () {
            var ua = window.navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),
    
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),
    
            flexbox: (function () {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            })(),
    
            observer: (function () {
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
            })(),
    
            passiveListener: (function () {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('testPassiveListener', null, opts);
                } catch (e) {}
                return supportsPassive;
            })(),
    
            gestures: (function () {
                return 'ongesturestart' in window;
            })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };
    

    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
    	if (window[swiperDomPlugins[i]]) {
    		addLibraryPlugin(window[swiperDomPlugins[i]]);
    	}
    }
    // Required DOM Plugins
    var domLib;
    if (typeof Dom7 === 'undefined') {
    	domLib = window.Dom7 || window.Zepto || window.jQuery;
    }
    else {
    	domLib = Dom7;
    }
    

    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }
    
    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
        if (!('outerWidth' in domLib.fn)) {
            domLib.fn.outerWidth = function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else
                        return this[0].offsetWidth;
                }
                else return null;
            };
        }
    }
    

    window.Swiper = Swiper;
})();

/*===========================
Swiper AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
    define('swiper',[], function () {
        'use strict';
        return window.Swiper;
    });
}

//# sourceMappingURL=maps/swiper.jquery.js.map
;
/*!
 * clipboard.js v1.6.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define('clipboard',[],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n?n:e)},s,s.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){function o(e,t){for(;e&&e.nodeType!==i;){if(e.matches(t))return e;e=e.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=o},{}],2:[function(e,t,n){function o(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}var r=e("./closest");t.exports=o},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function o(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return i(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=o},{"./is":3,delegate:2}],5:[function(e,t,n){function o(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}t.exports=o},{}],6:[function(e,t,n){function o(){}o.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function o(){i.off(e,o),t.apply(n,arguments)}var i=this;return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var r=0,a=o.length;r<a;r++)o[r].fn!==t&&o[r].fn._!==t&&i.push(o[r]);return i.length?n[e]=i:delete n[e],this}},t.exports=o},{}],7:[function(t,n,o){!function(i,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof o)r(n,t("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(t){o(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,o){!function(i,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(e,t,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var u=i(t),s=i(n),f=i(o),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=function(e){function t(e,n){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof t?[t]:t,o=!!document.queryCommandSupported;return n.forEach(function(e){o=o&&!!document.queryCommandSupported(e)}),o}}]),t}(s.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
/**
 * Created by Ricky on 2017/4/11.
 */

define('../js/page/account/page.fastsearch',['page', 'swiper', 'common', 'clipboard'], function (page, swiper, common, clipboard) {
    var self = new page('fastsearch');

    self._delay = true;

    self.request = function() {
        return [{
            app: 'getDomainList',
            service: 'partner',
            functionName: 'getDomainList'
        }];
    };

    self.param = {
        monthTopUp:null,
        monthGetBonus:null,
        monthBonus:null,
        monthPlayerWin:null,
        monthActivePlayers:null,
        monthNewPlayers:null,
        monthTimeLeft:null,
        totalNewPlayers:null,
        totalTopUpPlayers:null,
        totalValidPlayers:null,
        commissionValue:null
    };

    self.onEnter = function() {
        //开启复制功能
        new clipboard(self.copyMenuNode.get(0));

        new swiper('#amountDataSwipeNode', {
            pagination: '#amountDataSwipeNode .swiper-navbar',
            paginationClickable: true,
            loop: true,
            autoplay: 3000
        });

        new swiper('#clientDataSwipeNode', {
            pagination: '#clientDataSwipeNode .swiper-navbar',
            paginationClickable: true,
            loop: true,
            autoplay: 3000
        });

        new swiper('#extraDataSwipeNode', {
            pagination: '#extraDataSwipeNode .swiper-navbar',
            paginationClickable: true,
            loop: true,
            autoplay: 3000
        });

        mcm.net.send({
            service: 'partner',
            functionName: 'getStatistics',
            data: {
                queryType: 'month'
            }
        },true).then(function (result) {
            self.param.monthTopUp = common.formatCurrency(result['topup']);
            self.param.monthGetBonus = common.formatCurrency(result['getBonus']);
            self.param.monthBonus = common.formatCurrency(result['bonus']);
            self.param.monthPlayerWin = common.formatCurrency(result['playerWin']);
            self.param.monthActivePlayers = result['activePlayers'];
            self.param.monthNewPlayers = result['newPlayers'];
        }).fail(function (result) {
            self.param.monthTopUp = '维护中';
            self.param.monthGetBonus = '维护中';
            self.param.monthBonus = '维护中';
            self.param.monthPlayerWin = '维护中';
            self.param.monthActivePlayers = '维护中';
            self.param.monthNewPlayers = '维护中';
        });

        var startTime = new Date();
        startTime.setDate(1);
        startTime.setHours(0);
        startTime.setMinutes(0);
        var endTime = new Date();
        mcm.net.send({
            service: 'partner',
            functionName: 'getPartnerPlayerRegistrationStats',
            data: {
                startTime: mcm.tool.formatDate(startTime, 'y-m-d h:i'),
                endTime: mcm.tool.formatDate(endTime, 'y-m-d h:i')
            }
        }, true).then(function (result) {
            self.param.totalNewPlayers = result.totalNewPlayers;
            self.param.totalTopUpPlayers = result.totalTopUpPlayers;
            self.param.totalValidPlayers = result.totalValidPlayers;
        }).fail(function (result) {
            self.param.totalNewPlayers = '维护中';
            self.param.totalTopUpPlayers = '维护中';
            self.param.totalValidPlayers = '维护中';
        });

        mcm.net.send({
            service:'partner',
            functionName:'getPartnerCommissionValue'
        }, true).then(function (result) {
            self.param.commissionValue = result.amount;
        }).fail(function (result) {
            self.param.commissionValue = '维护中';
        });

        var monthTimeLeftTimer = setInterval(function() {
            var now = new Date();
            var nextMonth= new Date();

            nextMonth.setMonth(nextMonth.getMonth() + 1);
            nextMonth.setDate(0);
            nextMonth.setHours(0);
            nextMonth.setMinutes(0);
            nextMonth.setSeconds(0);

            var difference = new Date(nextMonth - now);
            var days = difference.getDate();
            var hours = 23 - now.getHours();
            var minutes = 59 - now.getMinutes();

            self.param.monthTimeLeft = days + '天' + hours + '时' + minutes + '分';
        }, 1000);
    };

    self.openPopupOfRegister = function() {
        mcm.route.popUp('registersubuser');
    };

    self.openPopupOfWithdrawal = function() {
        mcm.route.popUp('withdrawal');
    };

    self.giveTips= function() {
        mcm.alert.sp('register', '暂未开放，敬请期待！！', 'normal', [{name: '确定'}]);
    };

    return self;
});
/**
 * Created by Ricky on 2017/4/17.
 */

define('../js/page/account/page.created.records',['page', 'swiper', 'template', 'layDate'], function (page, swiper, template) {
    var self = new page('created_records');

    self.input = {
        every:5
    };

    self.controller = template.compile(mcm.page['pageController']);

    self.onEnter = function () {
        new swiper(self.swiperNode, {
            scrollbar: self.scrollbarNode,
            freeMode: true,
            slidesPerView: 'auto',
            scrollbarHide: false
        });
    };

    self.date = function (e) {
        laydate({
            format: 'YYYY-MM-DD hh:mm',
            isclear: false,
            istime: true
        });
    };

    self.submit = function (value) {
        var record = mcm.page['createdRecord'];
        if (self['startNode'].val() == '')
            return mcm.alert.sp('finance', '请选择开始时间', 'alert', [{name: '确定'}]);
        if (self['endNode'].val() == '')
            return mcm.alert.sp('finance', '请选择结束时间', 'alert', [{name: '确定'}]);

        mcm.net.send({
            service: 'partner',
            functionName: 'getPartnerPlayerRegistrationReport',
            data: {
                partnerId: mcm.cache.getPartnerId(),
                domain: self['domain'].val() || null,
                playerName: self['playerName'].val() || null,
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * self.input.every),
                requestCount: self.input.every
            }
        }).then(function (result) {
            //接入会员列表
            self.cache.result = result;
            var stats = result['stats'];
            self.appendTemplate(template.compile(record)(result), '.createReport');
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'submit'
            }), '.page-controller');
            self.bindView();
            // Object.keys(self.param).forEach(function (key) {
            //     self.param[key] = result['total'][key].toFixed(2)
            // })
        })
    };

    return self;
});
/**
 * Created by Ricky on 2017/4/17.
 */

define('../js/page/account/page.commission',['page', 'swiper', 'template', 'layDate'], function (page, swiper, template) {
    var self = new page('commission');

    self.input = {
        every:5
    };

    self.controller = template.compile(mcm.page['pageController']);

    self.onEnter = function () {
        new swiper(self.swiperNode, {
            scrollbar: self.scrollbarNode,
            freeMode: true,
            slidesPerView: 'auto',
            scrollbarHide: false
        });
    };

    self.date = function (e) {
        laydate({
            format: 'YYYY-MM-DD hh:mm',
            isclear: false,
            istime: true
        });
    };

    self.submit = function (value) {
        var record = mcm.page['commissionRecord'];
        if (self['startNode'].val() == '')
            return mcm.alert.sp('finance', '请选择开始时间', 'alert', [{name: '确定'}]);
        if (self['endNode'].val() == '')
            return mcm.alert.sp('finance', '请选择结束时间', 'alert', [{name: '确定'}]);

        mcm.net.send({
            service: 'partner',
            functionName: 'getPartnerCommission',
            data: {
                partnerId: mcm.cache.getPartnerId(),
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * self.input.every),
                requestCount: self.input.every
            }
        }).then(function (result) {
            //接入会员列表
            self.cache.result = result;
            var stats = result['stats'];
            self.appendTemplate(template.compile(record)(result), '.commissionReport');
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'submit'
            }), '.page-controller');
            self.bindView();
            // Object.keys(self.param).forEach(function (key) {
            //     self.param[key] = result['total'][key].toFixed(2)
            // })
        })
    };

    return self;
});
/**
 * Created by Ricky on 2017/4/24.
 */

define('../js/page/popup/popup.modifypassword',['popup'], function (popup) {
    var self = new popup('modifypassword');

    self._delay = true;

    self.onEnter = function() {

        mcm.validate(self.formNode, {
            oldPassword: {
                error: '请输入旧密码'
            },
            newPassword: {
                error: '密码格式不正确请重新输入',
                check: function (val, formData, rules) {
                    return rules.password(val);
                }
            },
            rePassword: {
                error: '两次输入的密码不一致',
                check: function (val, formData) {
                    return val == formData.newPassword;
                }
            },
            smsCode: {
                error: '您输入的验证码不正确',
                check: function (val, formData, rules) {
                    return rules.smscode(val);
                }
            }
        }, function(data) {
            delete data.rePassword;
            delete data.phoneNumber;
            data.playerId = mcm.cache.getPlayerId();
            // data.partnerId = mcm.cache.getPartnerId();

            mcm.net.send({
                service: 'player',
                functionName: 'updatePassword',
                data: data
            }).then(function() {
                self.close();

                mcm.cache.setLogout();
                mcm.route.changeUrl('home');
                history.pushState(null, {}, '#home');
                return mcm.alert.sp(self.url, '尊敬的会员您好，您的密码已经修改完成，请使用新的用户密码进行登录!', {name: '确定', then: function() {
                    mcm.route.popUp('login');
                }});
            });
        });

        self._super.onEnter.call(self);
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);
        var phoneNum = mcm.cache.getUserInfoFromCache().phoneNumber;

        if (target.hasClass('disabled'))
            return;

        mcm.net.send({
            service:'player',
            functionName:'sendSMSCodeToPlayer',
            data: {
                platformId: mcm.platformId,
                purpose: "updatePassword"
            }
        }).then(function (result) {
            target.addClass('disabled');
            var time = 60, now = 1;
            var loop = function () {
                if (now >= time) {
                    target.html('获取验证码');
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒后重新发送验证码';
                target.html(text);
                now++;
                setTimeout(function () {
                    loop();
                }, 1000);
            };
            setTimeout(function () {
                loop()
            }, 1000);
        })
    };

    return self;
});
/**
 * Created by Ricky on 2017/4/24.
 */

define('../js/page/popup/popup.modifybank',['popup', 'address'], function (popup, address) {
    var self = new popup('modifybank');

    self._delay = true;

    self.request = function() {
        return [{
            app: 'bankList',
            service: 'payment',
            functionName: 'getBankTypeList'
        },{
            app: 'smsSettings',
            service: 'platform',
            functionName: 'getPlatformSmsGroups',
            data: {'platformObjId': mcm.cache.getUserInfoFromCache().playerLevel.platform}
        }]
    };
    self.onEnter = function() {

      // if (!mcm.cache.getUserInfoFromCache().bankAccount) {
          mcm.validate(self.formNode, {
              bankAccountName: {
                  error: '请输入收款人姓名'
              },
              bankName: {
                  error: '请选择开户行'
              },
              bankAccountType: {
                  error: '请选择账户性质'
              },
              bankAccountProvince: {
                  error: '请选择开户城市'
              },
              bankAddress: {
                  error: '请输入开户银行地址'
              }
          }, function(data) {
              data.playerId = mcm.cache.getUserInfoFromCache().playerId;
              mcm.tool.insertObject(self.param, data);
              if(data.bankAccount === ''){
                  delete data.bankAccount;
              }
              mcm.net.send({
                  service: 'partner',
                  functionName: 'updatePaymentInfo',
                  data: data
              },true);

              mcm.net.send({
                  service: 'player',
                  functionName: 'updatePaymentInfo',
                  data: data
              }).then(function(result) {
                  mcm.cache.updateUserInfo();
                  mcm.alert.sp(self.url, '银行资料修改成功!','normal', [{name: '确定'}]);
                  mcm.renderer.refresh(self);
              });
          });

        var userBank = mcm.cache.getUserInfoFromCache();
        address(self.addressNode, {
            province: {
                dom: '#province',
                defaultOption:userBank.bankAccountProvinceId || ''
            },
            city: {
                dom: '#city',
                defaultOption:userBank.bankAccountCityId || ''
            },
            area: {
                dom: '#area',
                defaultOption:userBank.bankAccountDistrictId || ''
            }
        });

        self._super.onEnter.call(self);
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);
        var phoneNum = mcm.cache.getUserInfoFromCache().phoneNumber;

        if (target.hasClass('disabled'))
            return;

        mcm.net.send({
            service:'player',
            functionName:'sendSMSCodeToPlayer',
            data: {
                platformId: mcm.platformId,
                purpose: "updateBankInfo"
            }
        }).then(function (result) {
            target.addClass('disabled');
            var time = 60, now = 1;
            var loop = function () {
                if (now >= time) {
                    target.html('获取验证码');
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒后重新发送验证码';
                target.html(text);
                now++;
                setTimeout(function () {
                    loop();
                }, 1000);
            };
            setTimeout(function () {
                loop()
            }, 1000);
        })
    };

    return self;
});

/**
 * Created by Ricky on 2017/7/20.
 */

define('../js/page/popup/popup.resetpassword',['popup'], function (popup) {
    var self = new popup('resetpassword');

    self.request = function() {
        return {
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        };
    };

    self.onEnter = function() {

        mcm.validate(self.formNode, {
            password: {
                error: '密码格式不正确请重新输入',
                check: function (val, formData, rules) {
                    return rules.password(val);
                }
            },
            smsCode: 'smscode',
            phoneNumber: 'mobile'
        }, function(data) {
            mcm.net.send({
                service: 'player',
                functionName: 'resetPasswordViaPhone',
                data: data
            }).then(function() {
                mcm.alert.sp(self.url, '尊敬的会员您好，您的密码已经修改完成，请使用新的密码进行登录!', 'alert',[{name: '确定', then: function() {
                    mcm.route.popUp('login');
                }}]);
            });
        });

        self._super.onEnter.call(self);
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);
        var phoneNum = mcm.tool.formToObject(self.formNode)['phoneNumber'];

        if (!/^1[3587][0-9]{9}$/.test(phoneNum))
            return mcm.alert.sp(self.url, '您输入的手机号码不正确', 'alert', [{name: '确定'}]);

        if (target.hasClass('disabled'))
            return;

        mcm.net.send({
            service:'player',
            functionName:'getSMSCode',
            data: {
                phoneNumber: phoneNum,
                platformId: mcm.platformId,
                purpose: "resetPassword"
            }
        }).then(function (result) {
            target.addClass('disabled');
            var time = 60, now = 1;
            var loop = function () {
                if (now >= time) {
                    target.html('获取验证码');
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒后重新发送验证码';
                target.html(text);
                now++;
                setTimeout(function () {
                    loop();
                }, 1000);
            };
            setTimeout(function () {
                loop()
            }, 1000);
        })
    };

    return self;
});
/**
 * Created by Ricky on 2017/5/3.
 */

define('../js/page/popup/popup.register.subuser',['popup', 'common'], function (popup, common) {
    var self = new popup('registersubuser');

    self.onEnter = function () {
        self.checkValidCode();

        mcm.validate(self.formNode, {
            name: {
                error: '请输入用户名',
                check: function(s) {
                    return Boolean(s);
                }
            },
            password: 'password',
            repassword: {
                error: '两次输入的密码不一致',
                check: function(s, formData) {
                    return s == formData.password;
                }
            },
            realName: {
                error: '请输入真实姓名'
            },
            email: {
                check: function(s, formData, rules) {
                    var error = true;

                    if (s == '') {
                        error = '请输入您的邮箱地址'
                    } else if (!rules.mail(s)) {
                        error = '您输入的邮箱地址有误，请重新输入'
                    }
                    return error;
                }
            },
            phoneNumber: 'mobile',
            captcha: 'smscode'
        }, function(data) {
            delete data.repassword;
            data.domain = location.hostname;
            data.partnerName = mcm.cache.getUserInfoFromCache()['name'];

            mcm.net.send({
                service: 'player',
                functionName: 'createPlayerPartner',
                data: data
            }).then(function() {
                self.close();
                mcm.alert.sp('register', '<div style="text-align: left;">您的会员资料为：<br>会员账号：' + data.name + '<br>真实姓名：' + data.realName + '<br>手机号码：' + data.phoneNumber + '<br>邮箱地址：' + data.email + '</div>', 'normal', [{name: '确定'}]);
            });
        });

        self._super.onEnter.call(self);
    };

    self.checkValidCode = function () {
        mcm.net.send({
            service: 'player',
            functionName: 'captcha'
        }, true).then(function (result) {
            var code = common.arrayBufferToBase64(result.data);
            self['validImg'].attr('src', 'data:image/png;base64,' + code);
        });
    };

    return self;
});

/**
 * Created by Ricky on 2017/6/1.
 */

define('../js/page/popup/popup.withdrawal',['popup', 'common'], function (popup, common) {
    var self = new popup('withdrawal');

    self.request = function () {
        return [{
            app: 'partner',
            service: 'partner',
            functionName: 'get'
        }];
    };

    self.onEnter = function () {
        mcm.validate(self.formNode, {
            amount: {
                check: function (val, formData) {
                    var error = true;

                    if (val == '') {
                        error = '请输入充值金额';
                    } else if (isNaN(val)) {
                        error = '请输入数字';
                    } else if (val == '0') {
                        error = '提款金额不能为零';
                    } else if (val > self.data.partner.credits) {
                        error = '提款金额不能大于可用余额';
                    }

                    return error;
                }
            }
        }, function (formData) {
            mcm.net.send({
                service:'partner',
                functionName:'applyBonus',
                data:{
                    bonusId:'001',
                    amount: Number(formData.amount),
                    honoreeDetail:{
                        mobile:110
                    }
                }
            }).then(function (result) {
                mcm.alert.sp(self.url, '申请提款成功', 'normal', [{name: '确定'}]);
            });
        });

        self._super.onEnter.call(self);
    };

    return self;
});

/**
 * Created by Ricky on 2017/6/19.
 */

define('../js/page/popup/popup.record',['popup', 'common', 'template'], function (popup, common, template) {
    var self = new popup('record');

    self._delay = true;

    self._pageCount = 3;

    self._pageBeginningFigure = 0;

    self._proposalIdGroup = [];

    self.request = function () {
        return {
            app: 'recordList',
            service: 'payment',
            functionName: 'getValidTopUpReturnRecordList',
            data: {
                requestCount: self._pageCount,
                startIndex: self._pageBeginningFigure,
                sort: false
            }
        };
    };

    self.onEnter = function () {
        if (!self.data.recordList.stats.totalCount) {
            self._super.onEnter.call(self);
            return self.hasNoRecords();
        }

        self.innerNode[0].innerHTML = template.compile(mcm.page["topupRecord"])(self);

        self.innerNode.on('change', 'input', function (e) {
            var target = $(e.target);
            var state = target.prop('checked');
            var value = target.val();

            //如果不开启多选则
            if (!self.data.reference.multipleChoice && self._proposalIdGroup.length) {
                self._proposalIdGroup.length = 0;
                self._proposalIdGroup.push(value);
            } else {
                if (state) {
                    self.insertChoiceToArray(value);
                } else {
                    self.deleteCanceledChoseFromArray(value);
                }
            }
        });

        self._super.onEnter.call(self);
    };

    self.previousPage = function () {
        if (self._pageBeginningFigure == 0) return;
        self._pageBeginningFigure -= self._pageCount;

        self.insertDataToHTML();
    };

    self.nextPage = function () {
        if (self.data.recordList.stats.totalCount - self._pageCount < self._pageBeginningFigure) return;
        self._pageBeginningFigure += self._pageCount;

        self.insertDataToHTML();
    };

    self.insertDataToHTML = function() {
        mcm.net.send({
            service: 'payment',
            functionName: 'getValidTopUpReturnRecordList',
            data: {
                requestCount: self._pageCount,
                startIndex: self._pageBeginningFigure,
                sort: false
            }
        }, true).then(function (result) {

            self.data.recordList = result;
            self.innerNode[0].innerHTML = template.compile(mcm.page["topupRecord"])(self);

            self.activateChoseNode(result);
        });
    };

    self.insertChoiceToArray = function (id) {
        var index;

        if (!self.data.reference.multipleChoice && self._proposalIdGroup.length)
            return self._proposalIdGroup;

        index = self._proposalIdGroup.indexOf(id);
        if (index < 0)
            self._proposalIdGroup.push(id);

        return self._proposalIdGroup;
    };

    self.deleteCanceledChoseFromArray = function (id) {
        var index = self._proposalIdGroup.indexOf(id);
        if (index >= 0)
            self._proposalIdGroup.splice(index, 1);
    };

    self.activateChoseNode = function (result) {
        for (var i = 0; i < result.records.length; i++) {
            if (self._proposalIdGroup.indexOf(result.records[i].proposalId) >= 0)
                self.innerNode.find('label').eq(i).click();
        }
    };

    self.onSubmit = function () {
        if (self._proposalIdGroup.length == 0)
            return mcm.alert.sp(self.url, '请选择一条记录后再提交！', 'alert', [{name: '确定'}]);

        self.close();

        mcm.schedule.dispatchEvent('topupRecordsResponse', false, self._proposalIdGroup);
    };

    self.hasNoRecords = function () {
        mcm.alert.sp(self.url, '您未存款。点击直接跳转到入款页面，入款成功的客户点击即可选择申请。', 'alert', [{name: '确定', then: function () {
            window.location.href = '/#alipay_manual';
            self.close();
        }}]);
    };

    return self;
});
