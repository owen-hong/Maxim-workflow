var Qcloud = require('../index.js');

var tools = new Qcloud();

var config = {
    localPath : 'H:\\qcloud-tools',
    destPath : 'H:\\qcloud-tools-dest'
};

tools.copyFiles(['H:\\qcloud-tools\\a.dll','H:\\qcloud-tools\\b.exe'],config,function(ret){
    //ret��һ��������飬ÿһ������һ�����󣬱��棺�ļ������������״̬��1���ɹ���0��ʧ�ܣ�
    console.log(ret);
});