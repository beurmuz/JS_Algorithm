'use strict';

function solution(arr){     
    let answer = 1;
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
            answer++;
        }
    }
    return answer;
}

let arr=[130, 150, 155, 157, 145, 150, 150, 159];
console.log(solution(arr));