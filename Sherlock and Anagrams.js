'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    var count = 0;
    var arr = [];
    for(var i = 1; i<s.length ; i++){
        for(var k =0; k<s.length; k++){
            arr.push(s.substring(k,k+i));
        }
        console.log("Arr "+ arr);
        count = count + compareArray(arr);
        
        arr = [];
    }
        return count;
}
    
function compareArray(arr){
    var count = 0;
    for(var x=0; x<arr.length; x++){
        for(var y = x+1; y<arr.length; y++){
            if(isAnagrams(arr[x], arr[y])) count++;
        }
     }
    return count;
}

function isAnagrams(s1, s2){
    if(s1.length != s2.length) return false;
    console.log(s1 + '/' + s2)
    for(var i=0; i<s1.length; i++){
        var replaceStr = s1[i]+'';
        s2= s2.replace(replaceStr, '');
        console.log('s2 '+ s2)
    }
    if(s2.length == 0) return true;
    return false;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
