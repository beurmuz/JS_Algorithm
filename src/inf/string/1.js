'use strict';

function solution(s){
    let answer = "YES";
    let lowerStr = s.toLowerCase();
    let reverseStr = (lowerStr.split("").reverse());
    
    for(let i = 0; i < s.length; i++) {
        if(lowerStr[i]===reverseStr[i]) {
        } else {
            answer = "NO";
        }
    } 

    // // [방법1]
    // s=s.toLowerCase();
    // if(s.split('').reverse().join('')!==s) {
    //     answer = "NO";
    // }

    // // [방법2] reverse 없이 해결하는 방법
    // s = s.toLowerCase();
    // let len = s.length;
    // for(let i = 0; i < Math.floor(len/2); i++) {
    //     if(s[i]!==s[len-i-1]){
    //         answer = "NO";
    //     }
    //     // console.log("s[i]와 s[len-i-1]은 " + s[i] + " "+s[len-i-1]);
    // }
    return answer;
}
let str="gooG";
console.log(solution(str));