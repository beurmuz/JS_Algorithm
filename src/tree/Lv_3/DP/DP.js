// ----------------------------------------------------------------------
/**
 * 🔍 직각 삼각형 | O | 24.09.14 🔍
 * - 격자 안에서 한 칸씩 전진하는 DP
 * - arr[i][j]에서 arr[i + 1][j] or arr[i + 1][j + 1]로만 이동이 가능할 때 최대합 구하기
 */
let N = 5;
let arr = [[12], [10, 11], [13, 12, 11], [8, 7, 10, 11], [12, 11, 11, 10, 9]];
let dp = Array.from({ length: N }, () => Array(N).fill(0));

// 첫번째 열은 무조건 아래로만 이동이 가능하다.
dp[0][0] = arr[0][0];
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i - 1][0] + arr[i][0];
}

// 행과 열의 위치가 동일한 대각선에 대해서는 전부 대각선 방향으로 밖에 올 수 없다.
for (let i = 1; i < N; i++) {
  dp[i][i] = dp[i - 1][i - 1] + arr[i][i];
}

// 남은 칸들을 채워준다.
for (let i = 2; i < N; i++) {
  for (let j = 1; j < N; j++) {
    if (dp[i][j] > 0) continue;
    if (j > i) continue;
    dp[i][j] = Math.max(dp[i - 1][j] + arr[i][j], dp[i - 1][j - 1] + arr[i][j]);
  }
}
console.log(dp);

// ----------------------------------------------------------------------
/**
 * 🔍 삼각형 | O | 24.09.14 🔍
 * - 격자 안에서 한 칸씩 전진하는 DP
 * - arr[i][j]에서 arr[i + 1][j] or arr[i][j + 1]로만 이동이 가능할 때 최대합 구하기
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const N = arr.length;
const dp = Array.from({ length: N }, () => Array(N).fill(0));

// 첫 행은 무조건 dp[0][i] = dp[0][i-1] + arr[0][i]이다.
dp[0][0] = arr[0][0];
for (let i = 1; i < N; i++) {
  dp[0][i] = dp[0][i - 1] + arr[0][i];
}

// 첫 열도 무조건 dp[i][0] = dp[i-1][0] + arr[i][0]이다.
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i - 1][0] + arr[i][0];
}

for (let i = 1; i < N; i++) {
  for (let j = 1; j < N; j++) {
    dp[i][j] = Math.max(dp[i - 1][j] + arr[i][j], dp[i][j - 1] + arr[i][j]);
  }
}

console.log(dp[N - 1][N - 1]);

// ----------------------------------------------------------------------
/**
 * 🔍 가장 긴 증가하는 부분 수열 | O | 24.09.15 🔍
 * - 조건에 맞게 선택적으로 전진하는 DP
 */
const arr = [20, 80, 10, 50, 55, 20, 60, 70, 5, 90];
const N = arr.length;
const dp = Array.from({ length: N }, () => 0);

for (let i = 0; i < N; i++) {
  let maxValue = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) maxValue = Math.max(maxValue, dp[j]);
  }
  dp[i] = maxValue + 1;
}
console.log(Math.max(...dp));

// ----------------------------------------------------------------------
/**
 * 🔍 가장 긴 감소하는 부분 수열 | O | 24.09.15 🔍
 * - 조건에 맞게 선택적으로 전진하는 DP
 */
const arr = [60, 65, 50, 70, 63, 55, 45, 51, 45, 48, 54, 70, 61];
const N = arr.length;
const dp = Array.from({ length: N }, () => 0);

for (let i = 0; i < N; i++) {
  let maxValue = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i]) maxValue = Math.max(maxValue, dp[j]);
  }
  dp[i] = maxValue + 1;
}
ß;
console.log(Math.max(...dp));

// ----------------------------------------------------------------------
/**
 * 🔍 은행 | O | 24.09.16 🔍
 * - 아이템을 적절히 고르는 문제
 * - 1, 4, 5, 9원의 동전으로 거스름돈 21원을 거슬러 주기 위해 필요한 최소 동전의 수 구하기
 */
const coins = [1, 4, 5, 9];
const N = 21;
const dp = Array.from({ length: N + 1 }, () => N);
dp[0] = 0;

for (let fee = 1; fee < N; fee++) {
  let minCount = fee;
  for (let coin of coins) {
    // 현재 금액 fee - 사용한 동전 값 coin이 양수값인 경우
    if (fee - coin >= 0) minCount = Math.min(minCount, dp[fee - coin]); // 기존의 동전 개수와 coin을 사용했을 때의 개수를 비교한다.
  }
  dp[fee] = minCount + 1; // 더 작은 값에서 동전 1개를 더 사용한 경우가 되므로 +1을 해준다.
}
console.log(dp);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️⭐️ Knapsack 1, 2 ⭐️⭐️ | O | 24.09.16-17 🔍
 * - 아이템을 적절히 고르는 문제
 * - dp[i][j]는 i번째 보석까지 고려했고, 지금까지 선택한 보석 무게의 총 합이 j였을 때, 가능한 보석 가치의 최대 합
 *
 * -> 점화식은 결국 i번째 보석까지 고민한 경우이므로
 *    i번째 보석을 가방에 넣었는지/넣지 않았는지 여부로 나눠 점화식을 세울 수 있음
 *     1) i번째 보석을 가방에 넣었다면 dp[i-1][j-i[무게]] + i[가치]
 *     2) i번째 보석을 가방에 넣지 않았다면 이전의 보석들로 정확히 무게 j를 이용해 최대 가치를 얻었어야 함 => dp[i-1][j]
 *   => 이렇게 1번과 2번의 식 중 최댓값을 골라 dp[i][j]에 넣으면 됨
 */
const weight = [2, 6, 2, 3, 4, 5, 4, 6, 7, 10]; // i별 무게
const price = [3, 5, 4, 2, 3, 3, 2, 6, 9, 8]; // i별 가격
const N = 20;
const M = weight.length;
const dp = Array.from({ length: M }, () => Array(N + 1).fill(-1));

dp[0][0] = 0;
dp[0][weight[0]] = price[0];

for (let i = 1; i < M; i++) {
  for (let j = 0; j <= N; j++) {
    // j는 무게
    if (j - weight[i] >= 0 && dp[i - 1][j - weight[i]] !== -1) {
      // j - weight[i]가 양수값이고, dp[i-1][j-weight[i]] 칸이 -1이 아니라면 값을 갱신한다
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + price[i]);
    } else {
      // 음수거나 -1이라면 이전 조합이 최선인 것
      dp[i][j] = dp[i - 1][j];
    }
  }
}

for (let i = 0; i < M; i++) {
  console.log(...dp[i]);
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️ 표절 검사 ⭐️ | O | 24.09.18 🔍
 * - 문자열끼리 매칭
 * - LCS (Longest Common Subsequence, 최장 공통 부분 수열)
 *   - 부분 수열이란 순서대로 뽑아서 나올 수 있는 수열
 * - 점화식은 2가지 상황을 고려해 세우면 된다.
 *   1) A의 i번째 문자와 B의 j번째 문자가 다른 경우
 *      DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1])
 *   2) A의 i번째 문자와 B의 j번째 문자가 같은 경우
 *      DP[i][j] = DP[i - 1][j - 1] + 1
 */
const A = "ACAYKP";
const B = "CAPCAK";
const N = A.length;
const M = B.length;
const dp = Array.from({ length: N }, () => Array(M).fill(-1));

if (A[0] === B[0]) dp[0][0] = 1;
else dp[0][0] = 0;

// 첫번째 행& 열 처리하기
for (let i = 1; i < M; i++) {
  if (A[0] === B[i]) dp[0][i] = 1;
  else dp[0][i] = dp[0][i - 1];
}

for (let i = 1; i < N; i++) {
  if (B[0] === A[i]) dp[i][0] = 1;
  else dp[i][0] = dp[i - 1][0];
}

for (let i = 1; i < N; i++) {
  for (let j = 1; j < M; j++) {
    if (A[i] !== B[j]) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    } else dp[i][j] = dp[i - 1][j - 1] + 1;
  }
}
console.log(dp);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️ 두 문자열의 편집 거리 구하기 1 ⭐️ | X | 24.09.19-21 🔍
 * - 문자열끼리 매칭
 * - 편집거리란 문자열 A를 문자열 B로 바꾸기 위해 필요한 최소 연산 횟수를 의미함
 *   -> 사용가능한 연산은 총 3가지
 *      1) 하나의 문자를 원하는 위치에 삽입
 *      2) 특정 문자를 삭제
 *      3) 특정 문자를 다른 문자로 바꿈
 *
 * - 문자열 A의 i번째까지, 문자열 B의 j번째까지만 고려했을 때, dp[i][j]는 이 둘 사이의 편집거리라고 가정
 *   -> ✅ 이때 점화식은 2가지 경우를 고려해 세울 수 있다. ✅
 *      (i는 문자열 A의 i번째 글자이고, j는 문자열 B의 j번째 글자를 의미한다.)
 *       1) A의 i번째 글자 !== B의 j번째 글자
 *          - 문자열이 매칭되지 않았으므로 삽입 or 삭제 or 교환 중 하나가 일어나고, 이때 편집거리가 1 늘어남
 *             a. A의 i번째 문자를 삭제하면 편집거리는 dp[i-1][j] + 1
 *                & B에 새로 삽입할 경우, 삽입된 문자를 A와 B 모두에서 제외해준다면 dp[i-][j] + 1
 *             b. A에서 삽입 or B의 j를 삭제할 경우 dp[i][j-1] + 1
 *             c. A의 i번째 글자를 B의 j번째 글자로 변경 시 dp[i-1][j-1] + 1
 *            => ✅ 즉, dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
 *       2) A의 i번째 글자 === B의 j번째 글자
 *          - 편집거리가 증가하지 않아 이전 값과 같다.
 *            => ✅ dp[i][j] = dp[i-1][j-1]
 */
const A = "ABBBDAAA";
const B = "BADABBDBA";
// 0을 포함해야하므로 각 길이에 + 1씩 해서 만들어준다.
const dp = Array.from({ length: A.length + 1 }, () =>
  Array(B.length + 1).fill(0)
);

// dp[0][~]와 dp[~][0]을 초기화한다.
for (let n = 1; n <= A.length; n++) {
  dp[n][0] = n;
}
for (let m = 1; m <= B.length; m++) {
  dp[0][m] = m;
}

for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i] === B[j]) dp[i][j] = dp[i - 1][j - 1];
    else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
  }
}

// 출력
// for (let i = 0; i <= A.length; i++) {
//   console.log(...dp[i]);
// }

console.log(dp[A.length][B.length]); // 이게 정답

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️ 두 문자열의 편집 거리 구하기 2 ⭐️ | X | 24.09.21 🔍
 * - 편집거리란 문자열 A를 문자열 B로 바꾸기 위해 필요한 최소 연산 횟수를 의미함
 *   -> 사용가능한 연산은 총 2가지
 *      1) 하나의 문자를 원하는 위치에 삽입
 *      2) 특정 문자를 삭제
 *
 * - 문자열 A의 i번째까지, 문자열 B의 j번째까지만 고려했을 때, dp[i][j]는 이 둘 사이의 편집거리라고 가정
 *   -> ✅ 이때 점화식은 2가지 경우를 고려해 세울 수 있다. ✅
 *      (i는 문자열 A의 i번째 글자이고, j는 문자열 B의 j번째 글자를 의미한다.)
 *       1) A의 i번째 글자 !== B의 j번째 글자
 *          - 문자열이 매칭되지 않았으므로 삽입 or 삭제 중 하나가 일어나고, 이때 편집거리가 1 늘어남
 *             a. A의 i번째 문자를 삭제하면 편집거리는 dp[i-1][j] + 1
 *                & B에 새로 삽입할 경우, 삽입된 문자를 A와 B 모두에서 제외해준다면 dp[i-][j] + 1
 *             b. A에서 삽입 or B의 j를 삭제할 경우 dp[i][j-1] + 1
 *            => ✅ 즉, dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + 1
 *       2) A의 i번째 글자 === B의 j번째 글자
 *          - 편집거리가 증가하지 않아 이전 값과 같다.
 *            => ✅ dp[i][j] = dp[i-1][j-1]
 */
const A = "ABBBDAAA";
const B = "BADABBDBA";
// 0을 포함해야하므로 각 길이에 + 1씩 해서 만들어준다.
const dp = Array.from({ length: A.length + 1 }, () =>
  Array(B.length + 1).fill(0)
);

// dp[0][~]와 dp[~][0]을 초기화한다.
for (let n = 1; n <= A.length; n++) {
  dp[n][0] = n;
}
for (let m = 1; m <= B.length; m++) {
  dp[0][m] = m;
}

for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i] === B[j]) dp[i][j] = dp[i - 1][j - 1];
    else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
  }
}

// 출력
// for (let i = 0; i <= A.length; i++) {
//   console.log(...dp[i]);
// }

console.log(dp[A.length][B.length]); // 이게 정답
