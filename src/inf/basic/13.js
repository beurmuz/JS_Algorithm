'use strict';

function solution(s){  
    let answer="";
    for(let i in s) {
        if(s[i]===s[i].toUpperCase()) {
            answer += s[i].toLowerCase();
        } else {
            answer += s[i].toUpperCase();
        }
    }
    return answer;
}

console.log(solution("StuDy"));