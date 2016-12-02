var Qcloud = require('../index.js');

var tools = new Qcloud();
var config = {
    localPath : 'D:\\diao\\node_modules\\Maxim-workflow\\test\\css_demos',
    destPath : __dirname + '\\css_demos\\dest',
    spriteNameSwitch : 'false',
    spriteName : '12314234234',
    "cssNameSwitch":"false",
    "cssName":"123",
    "resourceSyncSwitch":"true",
    "imgSyncSwitch":"false",
    "imgSyncName":"12314234234"
};
var fs = require('fs');
var os = require('os');


var svgSpriteDest = __dirname + '\\css_demos\\media.css';

tools.sprite([svgSpriteDest],config, function (data) {


    //console.log(data);
    //console.log(data);
    //console.log(os.hostname());
});
 /*
tools.sprite(['H:\\open_proj\\pr oj-hardware\\index-new.css'],config, function (data) {
    console.log(data);
    //console.log(os.hostname());
}); */