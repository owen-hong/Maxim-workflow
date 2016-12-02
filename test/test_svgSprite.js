var svgSprites = require('../lib/svgSprites.js');


var testSprite  = new svgSprites();

var filesArray = [
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-clear.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-clear-night.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-few-clouds.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-few-clouds-night.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-overcast.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-severe-alert.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-showers.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-showers-scattered.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-snow.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-storm.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-storm-hover.svg',
    'D:\\diao\\node_modules\\Maxim-workflow\\test\\svg\\weather-test.svg'
]
//必须传入dest目录且附加命名规则一起传输
//var svgSpriteDest = 'D:\\diao\\node_modules\\Maxim-workflow\\test\\svgSpriteDest\\sprite.svg';
var svgSpriteDest = __dirname + '\\svgSpriteDest\\sprite.svg';

testSprite.init(filesArray,svgSpriteDest,function(data){

    console.log(data.status); //成功或失败返回的状态
    console.log(data.svgSpriteDest); //成功合并后的svgsprite地址
    console.log(data.svgSpritePngDest); //成功合并后的svgsprite png地址
    console.log(data.svgSpriteData); //返回坐标所有数据

});



















