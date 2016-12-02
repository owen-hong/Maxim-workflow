var Maxim = require('../lib/spriteMedias.js');
var config = {
    localPath : 'D:\\Code-src',
    destPath : 'D:\\Code-dest',
    spriteNameSwitch : false,
    spriteName : '12314234234',
    cssNameSwitch:"false",
    cssName:"123",
    resourceSyncSwitch:"false",
    imgSyncSwitch:"false",
    imgSyncName:"12314234234"
};

/*
var media = new Media('D:\\Work\\Code\\css_demos\\media.css',config,function (data) {
    console.log(data);
});

media.init();
*/

var maxim  = new Maxim();
maxim.go(['D:\\Code-src\\css\\documentation.css'],config,function (data) {
   console.log(data);
});

