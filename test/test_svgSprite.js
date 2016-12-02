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
//���봫��destĿ¼�Ҹ�����������һ����
//var svgSpriteDest = 'D:\\diao\\node_modules\\Maxim-workflow\\test\\svgSpriteDest\\sprite.svg';
var svgSpriteDest = __dirname + '\\svgSpriteDest\\sprite.svg';

testSprite.init(filesArray,svgSpriteDest,function(data){

    console.log(data.status); //�ɹ���ʧ�ܷ��ص�״̬
    console.log(data.svgSpriteDest); //�ɹ��ϲ����svgsprite��ַ
    console.log(data.svgSpritePngDest); //�ɹ��ϲ����svgsprite png��ַ
    console.log(data.svgSpriteData); //����������������

});



















