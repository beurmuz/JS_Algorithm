'use strict';

function solution(arr){
    answer = arr;
    let sum = arr.reduce((a,b) => (a+b),0); // sum, index
    // console.log(sum);
    for(let i = 0; i <8; i++) {
        for(let j=i+1; j < 9; j++) {
            if(sum-(arr[i]+arr[j]) === 100) {
                console.log(arr[i], arr[j]);
                arr.splice(j,1);
                arr.splice(i,1);
            }
            //console.log(arr[i], arr[j]);
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));