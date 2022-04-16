'use strict';

function solution(s){
    let answer=s; // 문자열을 주소 값이 참조되는 게 아닌, 값이 복사됨(얕은 복사가 안됨)
    // 방법1
    /*answer = answer.replace(/A/g, "#"); // g는 global을 의미함 */
    
    for(let i of answer) {
        if(i ==="A")
        answer = answer.replace("A", "#");
    
    // 방법2
    /*    if(i==="A") {
            answer +='#'
        } else {
            answer += i;
        }*/
    }
    return answer;
}
let str="BANANA";
console.log(solution(str));