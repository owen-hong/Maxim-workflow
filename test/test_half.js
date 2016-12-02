var Qcloud = require('../index.js');

var tools = new Qcloud();
var config = {
    destPath : 'H:\\qcloud-tools-dest',
    ratio : 0.5
};
var fs = require('fs');

tools.halfImg(['H:\\qcloud-tools\\half\\css\\img\\slice\\icon-haspic@2x.png','H:\\qcloud-tools\\half\\css\\img\\slice\\icon-message@2x.png','H:\\qcloud-tools\\half\\css\\img\\slice\\icon-star@2x.png'],config,(data) => {
    console.log(data);
});