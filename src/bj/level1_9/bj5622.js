'use strict';

let input = require('fs').readFileSync('./5622.txt').toString().split('');

function dialledFunction(input) {
    let time = 0;
    for(let i = 0; i < input.length; i++) {
        // let changeToNum = input[i].charCodeAt();
        // console.log(changeToNum);
        switch (input[i]) {
            case "A":
            case "B":
            case "C":
              time += 2;
              break;
            case "D":
            case "E":
            case "F":
              time += 3;
              break;
            case "G":
            case "H":
            case "I":
              time += 4;
              break;
            case "J":
            case "K":
            case "L":
              time += 5;
              break;
            case "M":
            case "N":
            case "O":
              time += 6;
              break;
            case "P":
            case "Q":
            case "R":
            case "S":
              time += 7;
              break;
            case "T":
            case "U":
            case "V":
              time += 8;
              break;
            case "W":
            case "X":
            case "Y":
            case "Z":
              time += 9;
              break;
          }
        time += 1;
    }
    console.log(time);
}

dialledFunction(input);