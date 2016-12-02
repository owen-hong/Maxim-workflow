var Qcloud = require('../index');

var tools = new Qcloud();

//��������
/*
var files = [
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\css\\starplan.css',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\load.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\bg2.jpg',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\coverbg.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\css\\sprite\\starplan@2x.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ico-land.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\c2.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\word1.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\word2.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\0001.jpg',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\earth-name.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\earth.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\satellite.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\moon.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\moon-name.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\connect-name.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\connect-tip.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\mars.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\mars-name.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\qlippie-name.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\tu.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\saturn-name.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\jupiter.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\jupiter-name.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\sun.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\sun-name.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\sun-tip.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\sun-select.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\earth-select.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\mars-select.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\moon-select.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\tu-select.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\jupiter-select.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\guide-i.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\guide-a.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\share.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\pop-bg.jpg',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ico-notice.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\star-list.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\lock-tip.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\music-open.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\lock-open.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\lock-close.png',
    'H:\\qcloud-tools-dest\\qq-controller-event\\starplan-over\\img\\ball\\qq.png'
];
*/
var files = [

];

var Config = {
    "localPath": "D:\\Work\\Code\\front-end\\App\\HNA-app\\webapp\\",
    "destPath":"D:\\Work\\Code\\front-end\\App\\HNA-app\\webapp\\",
    "releasePath": "",
    "testPath": "",
    "ftpHost": "",
    "ftpPort": "22",
    "ftpRemotePath": "",
    "ftpUser": "",
    "ftpPassword": "",
    "ftpType":'sftp'
};
var old_time = Date.now();

tools.ftpUtil(files, Config,
    function (output) {
        console.log(output);
        var new_time = Date.now();
        console.log('time spends : ' + (new_time - old_time)/1000 + 's');
    }
);