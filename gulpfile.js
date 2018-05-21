/**
 * Created by wildeChen on 2016/11/23.
 */
var gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    sprite = require('sprity'),
    through = require('through2'),
    fs = require("fs"),
    crypto = require('crypto'),
    rjs = require('requirejs'),
    sequence = require('run-sequence'),
    less = require('gulp-less'),
    lessAutoprefix = require('less-plugin-autoprefix'),
    browserSync = require("browser-sync").create(),
    png = require('upng'),
    autoprefix = new lessAutoprefix({browsers: ['last 2 versions']}),
    reload = browserSync.reload,
    imagemin = require('gulp-imagemin'),
    imagesinfo = require('imageinfo'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

var devPath = './publish/';

gulp.task('test', function () {
    console.log('test');
});

gulp.task('help', function () {
    console.log('输出帮助文件')
});

gulp.task('sprites', function () {
    return sprite.src({
        src: './images/icon/*.*',
        style: '../less/icon.less',
        template: 'less/less.hbs'
    }).pipe(gulpIf('*.png', gulp.dest('./images/'), gulp.dest('./less/')))
});

gulp.task('release', ['promo'], function () {

    deleteFolderRecursive('./publish');

    var obj;

    var container = [];

    function define() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == "function") {
                obj = arguments[i]();
                break;
            }
        }
    }

    var content = fs.readFileSync('./js/config.js', 'UTF-8');

    eval(content);

    var page = {};

    var keys = Object.keys(obj);
    var len = keys.length, index = len;
    for (var i = 0; i < len; i++) {
        var address = obj[keys[i]]['address'];
        if (obj[keys[i]]['js'])
            container.push(obj[keys[i]]['js']);
        (function (x) {
            page[x] = fs.readFileSync(x, 'UTF-8');
            page[x] = page[x].replace(/src\=("|')([^"']+)("|')/g, function () {
                var name = arguments[2];
                if(fs.existsSync(name)){
                    var image = fs.readFileSync(name);
                    return 'src="'+name+'?v='+md5(image.toString())+'"';
                }
                return arguments[0];
            });
        })(address);
    }

    fs.unlinkSync('./js/app.js');
    console.log('app.js deleted succeed');
    var model = 'define(function () {return ' + JSON.stringify(page) + ';})';
    fs.writeFileSync('./js/app.js', model);
    rjs.optimize({
        baseUrl: './js',

        optimize: 'uglify',

        uglify: {
            warnings: false,            // 是否显示警告。
            inSourceMap: null,          // 输入的源映射。[1]
            outSourceMap: false,        // 输出源映射。[1]
            mangle: {},                 // 不重命名的变量列表。如 {'except': ['$']   }。
            mangleProperties: false,    // 不重命名属性。
            parse: {
                strict: false,          // 解析时默认启用严格模式。
                filename: null,         // 设置解析的文档名，主要用于调试。[1]
                toplevel: null         // 解析所属的顶层语法树节点。
            },
            compress: {
                sequences: true,        // 将连续语句转为逗号表达式。如 a = 1; return a; → return a=1, a; 。
                properties: true,       // 将常量属性名转为点表达式。如 a["foo"] → a.foo。
                dead_code: true,        // 删除永远无法执行的代码。如 if(false) {...} 中的代码。[1]
                drop_debugger: true,    // 删除 “debugger” 语句。[1]
                drop_console: true,     // 删除 console.xx 语句。[1]
                unsafe: false,          // 允许不安全的优化(建议关闭)。如 new Object() → {}。具体见 [不安全代码](https://github.com/mishoo/UglifyJS2#the-unsafe-option)
                conditionals: true,     // 优化常量条件表达式。
                comparisons: true,      // 优化比较运算。如 !(a <= b) → a > b (仅当 unsafe 为 true 时优化)和 a = !b && !c && !d && !e → a=!(b||c||d||e)。
                evaluate: true,         // 尝试执行常量表达式。具体见 [条件编译](https://github.com/mishoo/UglifyJS2#conditional-compilation)
                booleans: true,         // 优化布尔运算。如 !!a ? b : c → a ? b : c。
                loops: true,            // 优化常量循环。如 while(true) → while(1)
                unused: true,           // 删除未引用的局部变量和函数。
                hoist_funs: true,       // 提升函数定义到函数顶部。
                hoist_vars: false,      // 提升变量声明到函数顶部。(由于提升会可能导致代码量增加，因此默认为 false。)
                if_return: true,        // 优化 return/continue 语句后的 if 语句。
                join_vars: true,        // 合并多个变量声明为同一个 var 语句。
                cascade: true,          // 尝试简化逗号表达式。如 x, x → x 和 x = something(), x → x = something()。
                side_effects: true,     // 删除无外部影响的函数调用。如 console.log() 删除后不会影响其它逻辑。
                pure_getters: false,    // 将所有属性和字段都作为无影响的函数处理。
                warnings: false,        // 压缩删除代码时是否显示警告。
                pure_funcs: null,       // 指定无影响的函数列表。如 ["Math.floor"],
                keep_fargs: true,       // 保留未使用的函数参数。如果设为 false，会导致依赖 Function.prototype.length 的代码出错。
                keep_fnames: false,     // 保留函数名。如果设为 false，会导致依赖 Function.prototype.name 的代码出错。
                global_defs: {          // 预设全局常量。[1]
                    DEBUG: false,
                    RELEASE: true
                },
                screw_ie8: false       // 不保留 IE8 兼容代码。
            },
            output: {
                beautify: false,        // 是否格式化代码。
                indent_level: 4,        // 缩进字符数。(仅当格式化代码时有效)
                indent_start: 0,        // 每行缩进数。(仅当格式化代码时有效)
                quote_keys: false,      // 使用引号定义 JSON 对象的键。
                quote_style: 0,         // 引号风格。0：优先使用双引号。1：全部使用单引号。2：全部使用双引号。3：保留原引号。
                space_colon: true,      // 在冒号后天添加一个空格。
                ascii_only: false,      // 编码特殊 Unicode 字符。
                inline_script: false,   // 编码 "</script"。
                width: 80,              // 允许最大列数。(仅当格式化代码时有效)
                max_line_len: 32000,    // 允许最大行号。(仅当压缩代码时有效)
                screw_ie8: false,       // 不保留 IE8 兼容代码。
                source_map: null,       // 是否输出源映射。
                bracketize: false,      // 为单行语句追加使用花括号。
                preamble: null,         // 在最终源码前追加的文本(一般是一段注释)。
                comments: /^!|@preserve|@license|@cc_on/i,      // 输出注释。true：保留所有注释；false: 删除所有注释；函数：自定义保留逻辑；正则：匹配则保留[1]
                semicolons: true       // 使用分号分割语句（否则使用换行）。
            },
            semicolons: true // 使用分号分割语句（否则使用换行）。
        },

        removeCombined: true,

        mainConfigFile: './js/main.js',

        findNestedDependencies: true,

        out: devPath + 'main.js',

        name: 'main',

        include: container,
        exclude: ['server', 'activity', 'promoConfig']
    }, function () {
        rjs.optimize({
            cssIn: 'css/combo.css',
            optimizeCss: 'standard',
            out: devPath + 'css/combo.css'
        }, function () {
            publish();
        })
    });

    gulp.src(['activity.js', 'config.js', 'server.js', 'js/lib/require.js'])
        .pipe(gulp.dest(devPath));
});

function publish() {
    sequence('image','upng',function () {
        var css = fs.readFileSync(devPath + 'css/combo.css', 'UTF-8');
        css = css.replace(/url\(('|")\.\.\/([^\(\)]+)('|")\)/g,function () {
            var name = arguments[2];
            name = name.replace('../','');
            if(fs.existsSync(name)){
                var image = fs.readFileSync(name);
                return 'url("../'+name+'?v='+md5(image.toString())+'")';
            }
            return name;
        });
        fs.unlinkSync(devPath + 'css/combo.css');
        fs.writeFileSync(devPath + 'css/combo.css',css);

        var index = fs.readFileSync('index.html', 'UTF-8');

        index = index.replace(/data-main="(.*?)"/g, function () {
            var data = fs.readFileSync(devPath + 'main.js');
            return 'data-main="main.js?v=' + md5(data) + '"';
        });

        index = index.replace(/href="(.*?)"/g, function (a) {
            var url = arguments[1], data;
            if (url.indexOf('?v=') != -1) {
                url = url.split('?v=');
                data = fs.readFileSync(devPath + url[0]);
                if (md5(data) === url[1])
                    return arguments[0];
                else
                    return 'href="' + url[0] + '?v=' + md5(data) + '"';
            } else {
                data = fs.readFileSync(devPath + url);
                return 'href="' + url + '?v=' + md5(data) + '"';
            }
        });
        index = index.replace("js/lib/require.js", 'require.js');
        fs.writeFile(devPath + 'index.html', index);
    });
}

gulp.task('promo', function () {
    var obj;

    function define() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == "function") {
                obj = arguments[i]();
                break;
            }
        }
    }

    var content = fs.readFileSync('./config.js', 'UTF-8');

    eval(content);

    var page = {};

    Object.keys(obj.activity).forEach(function (key) {
        var url = obj.activity[key]['html'];
        page[key] = fs.readFileSync(url, 'UTF-8');
    });

    content = loopObjectMd5(obj.activity, content, 'img');
    content = loopObjectMd5(obj.game, content, 'img');

    fs.writeFileSync('./config.js', content);

    //todo 生成活动的html文件
    fs.unlinkSync('./activity.js');
    console.log('activity.js deleted succeed');
    var model = 'define(function () {return ' + JSON.stringify(page) + ';})';
    fs.writeFileSync('./activity.js', model);
});

gulp.task('image',function () {
    return gulp.src(['images/**/*.*', '!images/**/*.png','!images/icon/*.*'])
        .pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest(devPath + 'images/'));
});

gulp.task('upng',function () {
    return gulp.src(['images/**/*.png','!images/icon/*.*'])
        .pipe(through.obj(function (chunk, enc, cb) {
            var info = imagesinfo(chunk.contents);
            if (info.format != 'PNG')
                return cb(null, chunk);
            var img = toArrayBuffer(chunk.contents);
            img = png.decode(img);
            var rgba = png.toRGBA8(img).buffer;
            var images = png.encode(rgba, img.width, img.height, 2048);
            chunk.contents = new Buffer(images);
            var name = chunk.relative;
            console.log('%s save succeed', name);
            cb(null, chunk);
        })).pipe(gulp.dest(devPath + 'images/'));
});

function loopObjectMd5(list, content, key) {
    Object.keys(list).forEach(function (value) {
        var url = list[value][key];
        if (!url)
            return;
        if (url.indexOf('?v=') != -1) {
            url = url.split('?v=');
            var data = fs.readFileSync(url[0]);
            if (md5(data.toString()) !== url[1])
                content = content.replace(new RegExp(url[1], 'gm'), md5(data.toString()));
        } else if (content.substr(content.indexOf(url) + url.length, 1) != '?') {
            data = fs.readFileSync(url);
            content = content.replace(new RegExp(url, 'gm'), url + '?v=' + md5(data.toString()));
        }
    });
    return content;
}

function loopMd5(list, content, key) {
    for (var i = 0, len = list.length; i < len; i++) {
        var url = list[i][key];
        if (url.indexOf('?v=') != -1) {
            url = url.split('?v=');
            var data = fs.readFileSync(url[0]);
            if (md5(data.toString()) !== url[1])
                content = content.replace(new RegExp(url[1], 'gm'), md5(data.toString()));
        } else if (content.substr(content.indexOf(url) + url.length, 1) != '?') {
            data = fs.readFileSync(url);
            content = content.replace(new RegExp(url, 'gm'), url + '?v=' + md5(data.toString()));
        }
    }
    return content;
}

function imgMd5(url, content) {
    if (url.indexOf('?v=') != -1) {
        url = url.split('?v=');
        var data = fs.readFileSync(url[0]);
        if (md5(data.toString()) !== url[1])
            content = content.replace(new RegExp(url[1], 'gm'), md5(data.toString()));
    } else if (content.substr(content.indexOf(url) + url.length, 1) != '?') {
        data = fs.readFileSync(url);
        content = content.replace(new RegExp(url, 'gm'), url + '?v=' + md5(data.toString()));
    }
    return content;
}

function md5(buf) {
    return crypto.createHash('md5').update(buf).digest('hex').slice(0, 10);
}

function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}

function deleteFolderRecursive(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

gulp.task('less', function () {
    return gulp.src('css/combo.less')
        .pipe(plumber({errorHandler:notify.onError('Error:<%=error.message%>')}))
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('server', function () {
    return browserSync.init({
        server: './',
        port: 81
    });
});

gulp.task('default', ['server'], function () {
    gulp.watch(['js/**/*.js', 'server.js'], reload);

    gulp.watch(['config.js', 'js/model/promotions/*.html'], function () {
        sequence('promo', reload);
    });

    gulp.watch(['js/model/**/*.html', '!js/model/promotions/*.html'], reload);

    gulp.watch(['images/**/*.*', '!images/icon/*.*'], reload);

    gulp.watch('images/icon/*.*', ['sprites']);

    gulp.watch(['less/**/*.less', 'css/**/*.less'], function () {
        sequence('less', reload);
    });
});
