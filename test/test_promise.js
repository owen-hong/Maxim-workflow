"use strict";
var fs = require('fs'),
    path = require('path');

var files = ['H:\\open_proj\\open-hardware\\css\\global.css','H:\\open_proj\\open-hardware\\css\\wiki.css'];

var count = files.length;
var index = count;

for(let i = 0 ; i < count ; i++){
    readFile(i);
}

function readFile(m){
    let p = new Promise((resolve,reject) => {
        let file = fs.readFile(files[m],(err,data) =>{
            if(err){
                reject(new Error('file read error'));
            }else{
                resolve(data);
            }
        });
    }).then((data) => {
            index--;
            console.log(data);
            if(index <= 0){
                console.log('files read completly');
            }
     });
}