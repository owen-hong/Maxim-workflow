/**
 * Created by owenhong on 2015/10/13.
 */
var https = require('https');
var http = require('http');
var request = require('request');
var fs = require("fs");

//var $request = request.defaults({'proxy':'http://proxy.tencent.com:8080'})


var TinyImg = function() {
    this.request = function(file, opt, cb) {
        var self = this;

        var options = opt || "";

        var token = new Buffer('api:' + options.tinyApi).toString('base64');

        return {
            file: file,

            upload: function(cb) {
                var file = this.file;

                request.post({
                    url: 'https://api.tinypng.com/shrink',
                    proxy: options.proxy,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + token
                    },
                    strictSSL: false,

                    body: file
                }, function(err, res, body) {

                    var data,
                        info = {
                            url: false,
                            count: res.headers['compression-count'] || 0
                        };

                    if(err) {
                        err = new Error('Upload failed for ' + file.relative + ' with error: ' + err.message);
                    } else if(body) {
                        try {
                            data = JSON.parse(body);
                        } catch(e) {
                            err = new Error('Upload response JSON parse failed, invalid data returned from API. Failed with message: ' + e.message);
                        }

                        if(!err) {
                            if(data.error) err = this.handler(data); else if(data.output.url) {
                                info.url = data.output.url;
                            } else err = new Error('Invalid TinyPNG response object returned for ' + file.relative);
                        }
                    } else {
                        err = new Error('No content returned from TinyPNG API for' + file.relative);
                    }

                    cb(err, info);

                }.bind(this));
            },

            download: function(url, cb) {
                request.get({
                    url: url,
                    proxy: options.proxy,
                    encoding: null
                }, function(err, res, body) {
                    err = err ? new Error('Download failed for ' + url + ' with error: ' + err.message) : false;
                    cb(err, new Buffer(body));
                });
            },

            handler: function(data) {
                var errs = {
                    Unauthorized: 'The request was not authorized with a valid API key',
                    InputMissing: 'The file that was uploaded is empty or no data was posted',
                    BadSignature: 'The file was not recognized as a PNG or JPEG file. It may be corrupted or it is a different file type',
                    UnsupportedFile: 'The file was recognized as a PNG or JPEG file, but is not supported',
                    DecodeError: 'The file had a valid PNG or JPEG signature, but could not be decoded, most likely corrupt',
                    TooManyRequests: 'Your monthly upload limit has been exceeded',
                    InternalServerError: 'An internal error occurred during compression'
                };

                return new Error(data.error + ': ' + ((data.error in errs) ? errs[data.error] : data.message || 'unknown') + ' for ' + file.relative);
            },

            get: function(cb) {
                var self = this,
                    file = this.file;

                self.upload(function(err, data) {
                    if(err) return cb(err, file);

                    self.download(data.url, function(err, data) {
                        if(err) return cb(err, file);

                        var tinyFile =  data;
                        cb(false, tinyFile);
                    });
                });

                return this;
            }
        };
    };
}

var TinyPng = new TinyImg();

var config = {
    tinyApi:'Rgr5e2Ag_LVDh0t70l2OcuxnbabctO9z1',
    proxy:'http://proxy.tencent.com:8080'
}


fs.readFile('1.png',function(err,file) {
    if(err){
        console.log('error!!!');
    }

    TinyPng.request(file,config).get(function(err, tinyFile) {
        if(err){
            console.log(err);
        }else{
            //console.log(tinyFile);
            fs.writeFile('test.png', tinyFile, function (err) {
                if(err){
                    console.log('error3!!!');
                }

                console.log('success@@@');

            });
        }
    });
});









//var options = {};
//options.method = "GET";
//options.uri = "https://api.tinify.com";
//options.rejectUnauthorized = false;
//options.proxy = "http://proxy.tencent.com:8080";


//request.get(options, function (error, response, body) {
//
//    console.log(response);
//
//    if (!error && response.statusCode == 200) {
//
//        console.log(response) // Show the HTML for the Google homepage.
//
//    }else{
//        console.log("error:::");
//        console.log(error);
//    }
//})





//var options = {
//    hostname: '127.0.0.1',
//    port: 8888,
//    path: 'api.tinify.com:443',
//    headers: {
//        'User-Agent': 'Node.js/0.6.6',
//        'Proxy-Connections': 'keep-alive',
//        'Host': 'api.tinify.com'
//    },
//    method: 'GET'
//};
//
//var req = https.request(options, function(res) {
//    console.log("statusCode: ", res.statusCode);
//    console.log("headers: ", res.headers);
//
//    res.on('data', function(d) {
//        process.stdout.write(d);
//    });
//});
//req.end();
//
//req.on('error', function(e) {
//    console.error(e);
//});


//var options = {
//    hostname: '127.0.0.1',
//    port: 8888,
//    path: 'api.tinify.com:443',
//    headers: {
//        'User-Agent': 'Node.js/0.6.6',
//        'Proxy-Connections': 'keep-alive',
//        'Host': 'api.tinify.com'
//    },
//    //method: 'CONNECT'
//    method: 'get'
//};
//
//var req = http.request(options, function (res) {
//    console.log('statusCode: ', res.statusCode);
//    console.log('headers: ', res.headers);
//
//    res.on('data', function (chunk) {
//        process.stdout.write(chunk);
//    });
//}).on('error', function (e) {
//    console.error(e);
//}).end();






