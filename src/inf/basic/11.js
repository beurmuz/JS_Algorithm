'use strict';

function solution(s){         
    let answer=0;
    for(let i in s) {
        if (s[i] === s[i].toUpperCase()) {
            answer += 1;
        }
    }
    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));