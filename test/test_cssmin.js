var Qcloud = require('../index.js');

var tools = new Qcloud();
var config = {
    localPath : 'H:\\open_proj\\',
    destPath : 'H:\\qcloud-tools-dest',
    spriteNameSwitch : 'true',
    spriteName : '12314234234'
};
var fs = require('fs');
var os = require('os');
/*
tools.miniCsses(['H:\\open_proj\\iot_public_device_2\\css\\video.css'],config, function (data) {
    console.log(data);
});
    */
tools.miniCsses(['H:\\open_proj\\open-hardware\\css\\test.css'],config, function (data) {
    console.log(data);
    //console.log(os.hostname());
});