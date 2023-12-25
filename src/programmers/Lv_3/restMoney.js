/**
 * [dp, 동적프로그래밍 문제]
 * - 점화식을 찾는게 많이 어려워, 풀이를 검색해보았다.
 */

function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)];

  for (let i = 0; i < money.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= money[i]) dp[j] += dp[j - money[i]] & 1000000007;
    }
  }

  return dp[n];
}
