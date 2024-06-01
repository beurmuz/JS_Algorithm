// ----------------------------------------------------------------------
/**
 * 🔍 방향에 맞춰 이동 | △ | 24.06.01 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 * - 좌표를 90도 회전해서 2차원 배열로 생각하려면, 각 방향을 그에 맞게 90도씩 돌려주어야 한다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);

const pos = {
  // 북 = 동[0, 1] | 동 = 남[1, 0] | 남 = 서[0, -1] | 서 = 북[-1, 0]
  W: [-1, 0],
  S: [0, -1],
  N: [0, 1],
  E: [1, 0],
};

let x = 0;
let y = 0;
for (let i = 1; i <= N; i++) {
  let [d, c] = inputs[i].split(" ");
  c = +c;
  x = x + pos[d][0] * c;
  y = y + pos[d][1] * c;
}

console.log(x, y);
