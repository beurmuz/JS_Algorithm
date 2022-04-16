'use strict';

function solution(s, t){
    let answer=[];
    let p=1000;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === t) {
            p = 0;
        } else {
            p++;
        }
        answer.push(p);
    }
    let p2 = 1000;
    console.log("왼쪽에 있는 0으로부터의 거리: ",answer);
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] === t) {
            p2 = 0;
            if(p2 < answer[i]) {
                answer[i] = p2;
            }
        } else {
            p2++;
            if(p2 < answer[i]) {
                answer[i] = p2;
            }
        }
    }
    console.log("오른쪽에 있는 0으로부터의 거리: ");

    // 또 다른 반복문으로 풀어보기
    // for(let x of s) {
    //     if(x===t) {
    //         p=0;
    //         answer.push(p);
    //     } else {
    //         p++;
    //         answer.push(p);
    //     }
    // }
    // // 오른쪽-> 왼쪽으로 배열 탐색시에는 인덱스가 있는 반복문을 써야 함
    // for(let i = s.length -1; i >=0; i--) {
    //     if(s[i]===t) {
    //         p=0;
    //     } else {
    //         p++;
    //         answer[i] = Math.min(answer[i], p);
    //     }
    // }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));