/**
 * Created by owenhong on 2016/2/3.
 */
var fs = require("fs");
var os = require("os");
var path = require('path');
var Imagemin = require('imagemin');
var imageminPngquant = require('imagemin-pngquant');
var Common = require('./common.js');


function imagemin(){}
imagemin.prototype.compressor = function(imgs,config,globalConfig,callback){
    var myImgs = imgs;
    myImgs.forEach(function(imgFile,index){
        if(path.extname(imgFile) == '.svg' || path.extname(imgFile) == '.gif'){
            myImgs.splice(index,1);
        }
    });
    var imgsLength = myImgs.length;
    var index = imgsLength;
    var results = [];

    new Imagemin()
        .src(imgs)
        .use(imageminPngquant({quality: '65-85', speed: 4}))
        .use(Imagemin.jpegtran({progressive: true}))
        .use(Imagemin.svgo())
        .use(Imagemin.gifsicle({interlaced: true}))
        .run(function(err,files){
            if(err){
                imgs.forEach(function(imgFile){
                    results.push({
                        fName: imgFile.replace(config.destPath, '').replace(config.localPath, '').replace(/\\/g, '\/'),
                        status: false,
                        message: err.message
                    })
                });

                index--;
                if (index <= 0) {
                    callback(results);
                }
                return;
            }

            files.forEach(function(result){
                //判断文件是否存在，不存在创建文件夹
                if(os.type() == "Windows_NT"){
                    var filePath = result.path.replace(/\//g, '\\');
                }else{
                    var filePath = result.path;
                }

                if(filePath.indexOf(config.destPath) >= 0){
                    var newName = filePath;
                }else{
                    var newName = filePath.replace(config.localPath,config.destPath);
                }

                var f_name = path.basename(newName);
                var destFile = newName.replace(f_name,'');
                Common.createPath(destFile,fs);

                var $fName = filePath.replace(config.destPath, '').replace(config.localPath, '').replace(/\\/g, '\/');

                fs.writeFile(newName, result.contents, function(err) {
                    if(err){
                        results.push({
                            fName: $fName,
                            status: false,
                            message: "图片压缩失败"
                        });

                        index--;
                        if (index <= 0) {
                            callback(results);
                        }
                    }

                    results.push({
                        fName: $fName,
                        status: true,
                        message: "图片压缩成功"
                    });

                    index--;
                    if (index <= 0) {
                        callback(results);
                    }
                });
            });
        });
}

module.exports = imagemin;