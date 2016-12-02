/**
 * Created by owenhong on 2016/1/29.
 */
'use strict';

/**
 * Requires
 */
var postcss = require('postcss');
var extend = require('extend');
var path = require('path');
var fs = require('fs');

/**
 * Px regular expression
 * @type {RegExp}
 */
var pxRegEx = /(\d*\.?\d+)px/ig;

/**
 * Defaults
 * @type {Object}
 */
var defaults = {
    /**
     * Root value
     * @type {Number}
     */
    rootValue: 75,

    /**
     * Unit precision
     * @type {Number}
     */
    unitPrecision: 5,

    /**
     * Property black list
     * @type {Array}
     */
    propertyBlackList: [],

    /**
     * Property white list
     * @type {Array}
     */
    propertyWhiteList: [],

    /**
     * Replace
     * @type {Boolean}
     */
    replace: false,

    /**
     * Media query
     * @type {Boolean}
     */
    mediaQuery: false,

    /**
     * Min pixel
     * @type {Number}
     */
    minPx: 1,
};

/**
 * To pixel
 * @param  {String} value
 * @return {Number|Boolean}
 */
function toPx(value) {
    var parts = /^(\d+\.?\d*)([a-zA-Z%]*)$/.exec(value);
    var number = parts[1];
    var unit = parts[2];

    if (unit === 'px' || unit === '') {
        return parseFloat(number);
    } else if (unit === 'em' || unit === 'rem') {
        return parseFloat(number) * 16;
    } else if (unit === '%') {
        return (parseFloat(number) / 100) * 16;
    }

    return false;
}

/**
 * To fixed
 * @param  {Number} number
 * @param  {Integer} precision
 * @return {Number}
 */
function toFixed(number, precision) {
    var multiplier = Math.pow(10, precision + 1);
    var wholeNumber = Math.floor(number * multiplier);

    return Math.round(wholeNumber / 10) * 10 / multiplier;
}

/**
 * Px replace
 * @param  {String} $1
 * @return {Number}
 */
function pxReplace($1) {
    $1 = parseFloat($1);
    if (defaults.minPx >= $1) {
        return $1 + 'px';
    }

    return toFixed($1 / toPx(defaults.rootValue), defaults.unitPrecision) + 'rem';
}

/**
 * Equals
 * @param  {Object} decls
 * @param  {String} prop
 * @param  {String} value
 * @return {Boolean}
 */
function equals(decls, prop, value) {
    return decls.some(function(decl) {
        return (decl.prop === prop && decl.value === value);
    });
}

/**
 * Pixel to rem
 * @param {Object} options
 */
function Px2Rem(options) {
    if (options) {
        defaults = extend(true, {}, defaults, options);
    }
}

/**
 * Process
 * @param  {String} css
 * @param  {Object} options
 * @return {Object}
 */
Px2Rem.prototype.process = function(css, options) {
    return postcss(this.postCss).process(css, options).css;
};

/**
 * Post css
 * @param {String} css
 */
Px2Rem.prototype.postCss = function(css) {
    css.walkDecls(function(decl, i) {
        if (defaults.propertyBlackList.indexOf(decl.prop) !== -1) {
            return;
        }

        if (defaults.propertyWhiteList.length > 0 &&
            defaults.propertyWhiteList.indexOf(decl.prop) === -1) {
            return;
        }

        var rule = decl.parent;
        var value = decl.value;

        if (value.indexOf('px') !== -1) {
            value = value.replace(pxRegEx, pxReplace);

            if (equals(rule.nodes, decl.prop, value)) {
                return;
            }

            if (defaults.replace) {
                decl.value = value;
            } else {
                rule.insertAfter(i, decl.clone({
                    value: value,
                }));
            }
        }
    });

    if (defaults.mediaQuery) {
        css.each(function(rule) {
            if (rule.type !== 'atrule' && rule.name !== 'media') {
                return;
            }

            if (rule.params.indexOf('px') !== -1) {
                rule.params = rule.params.replace(pxRegEx, pxReplace);
            }
        });
    }
};

/**
 * Pixel to rem
 * @param  {Object} options
 * @return {Object}
 */
var px2rem = function(options) {
    return new Px2Rem(options);
};

/**
 * Process
 * @param  {String} css
 * @param  {Object} options
 * @param  {Object} postCssOptions
 * @return {Object}
 */
px2rem.process = function(css, options, postCssOptions) {
    return new Px2Rem(options).process(css, postCssOptions);
};


var Px2rem = function(files,config,callback){
    var filesLength = files.length;
    var index = filesLength;
    var results = [];

    //处理config中路径的配置如果不以\结尾，则要加上
    var $sep = path.sep;
    config.localPath = config.localPath[config.localPath.length-1] === $sep ? config.localPath : config.localPath + $sep;
    config.destPath = config.destPath[config.destPath.length-1] === $sep ? config.destPath : config.destPath + $sep;


    files.forEach(function(cssFile){
        //将源文件的根目录替换为目标目录的根目录
        if(cssFile.indexOf(config.destPath) >= 0){
            var target_path = cssFile;
        }else{
            var target_path = config.destPath + cssFile;
        }

        fs.readFile(target_path, function(error, fileData) {

            if (error) {
                results.push({
                    fName: target_path.replace(config.localPath, '').replace(/\\/g, '\/'),
                    status: false,
                    message: error
                });

                index--;
                if (index <= 0) {
                    callback(results);
                }
            }

            var $newData = px2rem.process(fileData, {
                mediaQuery: false,
                replace:true,
                rootValue: config.rootValue,
                propertyBlackList:config.propertyBlackList || []
            });

            fs.writeFile(target_path, $newData, function(error) {
                if (error) {
                    results.push({
                        fName: target_path.replace(config.destPath, '').replace(/\\/g, '\/'),
                        status: false,
                        message: error
                    });

                    index--;
                    if (index <= 0) {
                        callback(results);
                    }
                }

                results.push({
                    fName: target_path.replace(config.destPath, '').replace(/\\/g, '\/'),
                    status: true,
                    message: "rem转换成功"
                });

                index--;
                if (index <= 0) {
                    callback(results);
                }

            });
        });
    });

}

module.exports = Px2rem;
