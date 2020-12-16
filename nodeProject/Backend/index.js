const { readFile, readFileSync } = require('fs');
const myTxt = readFileSync('../Frontend/hello.txt', 'utf8');


readFile('../Frontend/hello.txt', 
        'utf8', 
        (err, txt) => { console.log(txt)}
);

console.log('do this one first...');