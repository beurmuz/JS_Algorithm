// ----------------------------------------------------------------------
/**
 * 🔍 직각 삼각형 DP | O | 25.01.13 🔍
 */
const N = 4;
const arr = [[4], [6, 2], [3, 7, 9], [3, 4, 9, 9]];

const dp = Array.from({ length: N }, () => Array(N).fill(0));

// 초기화
dp[0][0] = arr[0][0];

// 세로 줄 초기화
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i - 1][0] + arr[i][0];
}

// 대각선 줄 초기화
for (let i = 1; i < N; i++) {
  dp[i][i] = dp[i - 1][i - 1] + arr[i][i];
}

// 남은 dp 채우기
for (let i = 2; i < N; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + arr[i][j];
  }
}
console.log(Math.max(...dp[N - 1]));

// ----------------------------------------------------------------------
/**
 * 🔍 정수 사각형 최대 합 | O | 25.01.13 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(inputs[i].split(" ").map(Number));
}

const dp = Array.from({ length: N }, () => Array(N).fill(0));

// 1. 초기값 세팅
dp[0][0] = arr[0][0];

//   1) dp[r][0] 채우기
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i - 1][0] + arr[i][0];
}
//   2) dp[0][c] 채우기
for (let i = 1; i < N; i++) {
  dp[0][i] = dp[0][i - 1] + arr[0][i];
}

// 2. 점화식을 바탕으로 dp 채우기
for (let i = 1; i < N; i++) {
  for (let j = 1; j < N; j++) {
    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + arr[i][j]; // 점화식
  }
}
console.log(dp[N - 1][N - 1]);
