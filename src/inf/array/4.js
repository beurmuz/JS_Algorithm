'use strict';

function solution(arr){     
    let answer = 0;    
    let cnt = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            cnt++;
            answer += cnt;
            // console.log("정답_cnt: "+ cnt + ", answer: " + answer);
        } else {
            cnt = 0;
            // console.log("오답: "+ cnt + ", answer: " + answer);
        }
    }
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));