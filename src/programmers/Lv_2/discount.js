"use strict";

// 1. 처음 내가 생각한 풀이
/*
    반복문으로 범위를 10씩 잡아서 매번 새 Map에 값 추가하고, 비교하고를 반복하려했음
    근데 슬라이딩 윈도우로 풀면 된다는 사실을 알게되어 이를 이용하고자 함
*/
function solution(want, number, discount) {
  let answer = 0;
  let shoppingMap = new Map();

  // compare the tmpMap and want&numbe
  function checker(tmpMap) {
    for (let i = 0; i < want.length; i++) {
      if (tmpMap.get(want[i]) !== number[i]) return;
    }
    answer++;
  }

  // With sliding window
  for (let i = 0; i < 10; i++) {
    if (shoppingMap.has(discount[i]))
      shoppingMap.set(discount[i], shoppingMap.get(discount[i]) + 1);
    else shoppingMap.set(discount[i], 1);
  }

  checker(shoppingMap);
  for (let i = 10; i < discount.length; i++) {
    shoppingMap.set(discount[i - 10], shoppingMap.get(discount[i - 10]) - 1); // 맨 앞 제거
    if (shoppingMap.has(discount[i]))
      shoppingMap.set(discount[i], shoppingMap.get(discount[i]) + 1);
    else shoppingMap.set(discount[i], 1);
    checker(shoppingMap);
  }
  return answer;
}

console.log(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);

console.log(
  ["apple"],
  [10],
  [
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
  ]
);
