// ----------------------------------------------------------------------
/**
 * 🔍 순 간 이 동 | O | 24.08.27
 */
const [a, b, x, y] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = Number.MAX_SAFE_INTEGER;

// 1. a -> b
answer = Math.min(answer, Math.abs(a - b));

// 2. a -> x -> y -> b
answer = Math.min(answer, Math.abs(a - x) + Math.abs(y - b));

// 3. a -> y -> x -> b
answer = Math.min(answer, Math.abs(a - y) + Math.abs(x - b));
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️연속된 숫자 만들기 2⭐️ | X | 24.08.28
 * - 너무 어렵게만 생각하지 말자. 몇몇 케이스를 떠올려보면 전략을 추려낼 수 있다.
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = Number.MAX_SAFE_INTEGER;

// 1. 세 사람의 위치가 전부 연속한 경우
// -> 1씩 차이나면 됨
if (arr[0] + 1 === arr[1] && arr[1] + 1 === arr[2]) console.log(0);
// 2. 조건1을 만족하지 못하면서, 셋 중 두명의 차가 2인 경우
// -> 나머지 숫자를 2차이가 나는 2개의 숫자 사이에 넣으면 연속하게 됨
// => 이동 횟수는 1
else if (arr[0] + 2 === arr[1] || arr[1] + 2 === arr[2]) console.log(1);
// 3. 조건1과 2모두 만족하지 않는 경우
// -> 항상 2번에 걸쳐 연속한 수를 만들 수 있음
// -> 양쪽 끝 중 하나를 가운데 숫자와 거리가 2가 되도록 옮긴 후, 나머지 숫자를 다시 가운데에 넣으면 됨
// => 이동 횟수는 2. 항상 2번에 걸쳐 연속한 수를 만들 수 있음
else console.log(2);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️독서실의 거리두기 3⭐️ | △ | 24.08.28
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const seats = inputs[1].split("").map(Number);

// 1. 가장 먼 1사이의 쌍 찾기
let maxDist = 0;
let [maxI, maxJ] = [-1, -1];
for (let i = 0; i < N; i++) {
  if (seats[i] === 1) {
    for (let j = i + 1; j < N; j++) {
      if (seats[j] === 1) {
        // i도 1, j도 1일때 두 좌석간의 거리가 최대 거리인지 계산한다.
        if (j - i > maxDist) {
          maxDist = j - i;
          [maxI, maxJ] = [i, j];
        }
        break; // i(1)로부터 가장 가까이에 있는 j(1)를 찾았으므로 빠져나온다.
      }
    }
  }
}

// 2. 쌍 가운데에 1 놓기
const mid = maxI + Math.floor(maxDist / 2); // 쌍 사이의 중간 위치를 찾고
seats[mid] = 1; // 의자를 놓는다.

// 3. 가장 가까운 1간의 쌍 찾기
let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  if (seats[i] === 1) {
    for (let j = i + 1; j < N; j++) {
      if (seats[j] === 1) {
        answer = Math.min(answer, j - i);
        break; // i와 가장 가까운 j를 찾았으므로 반복문을 탈출한다.
      }
    }
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 개발자의 가위바위보 | O | 24.08.28
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const games = inputs.slice(1).map((line) => line.split(" ").map(Number));

let answer = 0;

function doGame(s, r, p) {
  // 가위, 바위, 보 순서로 받아옴
  let user1 = 0;
  let user2 = 0;

  for (let i = 0; i < N; i++) {
    let [u1, u2] = games[i];
    if (u1 === u2) continue;

    // 왼쪽이 이기는 경우
    if (
      (u1 === r && u2 === s) ||
      (u1 === p && u2 === r) ||
      (u1 === s && u2 === p)
    ) {
      user1 += 1;
    } else user2 += 1;
  }
  // 둘중 큰 값을 보낼 수 있는 이유는 가위/바위/보와 가위/보/바위에서 각 플레이어의 승률이 반대이기 때문이다.
  // 만약 가위/바위/보에서 승리 횟수가 user1: 2 & user2: 1이면,
  // 가위/보/바위의 승리 횟수는 user1: 1 & user2 : 2가 된다.
  return Math.max(user1, user2);
}

// 1. 123이 가위, 바위, 보 | 가위, 보, 바위
answer = Math.max(answer, doGame(1, 2, 3));

// 2. 123이 바위, 가위, 보 | 바위, 보, 가위
answer = Math.max(answer, doGame(2, 1, 3));

// 3. 123이 보, 가위, 바위 | 보, 바위, 가위
answer = Math.max(answer, doGame(2, 3, 1));

console.log(answer);

// ✅ 또 다른 풀이법
//   - 가위바위보는 서로 꼬리에 꼬리를 무는 관계
//   - 승패는 1이 2를 이기고, 2가 3을 이기고, 3이 1을 이기는 경우이거나
//   - 1이 3을 이기고, 3이 2를 이기고, 2가 1을 이기는 경우밖에 존재하지 않는다.
//     => 사실 위에 있는 내 풀이랑 비교해보면 꼬리에 꼬리를 무는 관계가 사실임을 알 수 있다.
// 개발자 번호가 순서대로 (1, 3), (3, 2), (2, 1)인 경우
// -> 1이 2을 이기고, 3이 2를 이기고, 2가 1을 이기는 경우이므로 u1이 이기는 경우
let [user1, user2] = [0, 0];
for (let i = 0; i < N; i++) {
  let [u1, u2] = games[i];
  if (u1 === u2) continue;
  if (
    (u1 === 1 && u2 === 3) ||
    (u1 === 3 && u2 === 2) ||
    (u1 === 2 && u2 === 1)
  )
    user1 += 1;
  else user2 += 1;
}

// 어차피 (1, 2), (2, 3), (3, 1)인 경우에는 [user1, user2] = [user2, user1]이기 때문에, 둘 중 큰 값을 answer에 넣으면 된다.
answer = Math.max(user1, user2);
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️연속된 숫자 만들기 3⭐️ | △ | 24.08.29
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = Number.MIN_SAFE_INTEGER;
// 두 수의 차가 짧은 쪽이 먼 쪽으로 들어가는 것이 더 비효율적이므로,
// 두 수 중 거리가 더 먼 쪽을 선택(Math.max(diff1, diff2)하고, 그 값에서 1을 빼주면 정답이 나온다. (차가 작은 쪽을 움직인 것)
let diff1 = arr[1] - arr[0];
let diff2 = arr[2] - arr[1];
console.log(Math.max(diff1, diff2) - 1);
