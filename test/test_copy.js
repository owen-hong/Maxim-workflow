var Qcloud = require('../index.js');

var tools = new Qcloud();

var config = {
    localPath : 'H:\\qcloud-tools',
    destPath : 'H:\\qcloud-tools-dest'
};

tools.copyFiles(['H:\\qcloud-tools\\a.dll','H:\\qcloud-tools\\b.exe'],config,function(ret){
    //ret是一个结果数组，每一个都是一个对象，保存：文件名、操作结果状态（1、成功；0、失败）
    console.log(ret);
});