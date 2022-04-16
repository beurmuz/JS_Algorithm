'use strict';

function solution(s){  
    let answer;
    const set = new Set(s);
    answer = [...set];

    // 방법 1 - indexOf이용하기
    /*console.log(s.indexOf("time"));
    answer = s.filter(function(value, i){
        // console.log(value, i); // 값, 인덱스번호
        if(s.indexOf(value)===i) {
            return true; // filter는 참인 요소들만 따로 모아서 배열을 만든 후, answer에 넣어줌
            // 사실 if문을 쓰지 않고 바로 return s.indexOf(value)===i; 해줘도 됨
        }
    });*/

    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));