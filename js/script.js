let answer = [0, 0];
let effect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let typeListJa = ["", "ノーマル", "ほのお", "みず", "でんき", "くさ", "こおり", "かくとう", "どく", "じめん", "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー"];
let typeListEng = ["", "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
// prettier-ignore
let typeMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0],
  [0, 0, -1, 1, 0, -1, -1, 0, 0, 1, 0, 0, -1, 1, 0, 0, 0, -1, -1],
  [0, 0, -1, -1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
  [0, 0, 0, 0, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, -1, 0],
  [0, 0, 1, -1, -1, -1, 1, 0, 1, -1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, -1, -1, 0, 0, -1, 0, 1],
  [0, 0, 0, 0, 0, -1, 0, -1, -1, 1, 0, 1, -1, 0, 0, 0, 0, 0, -1],
  [0, 0, 0, 1, -10, 1, 1, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, -1, 1, -1, 0, -10, 0, 0, -1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, -1, 0, -1, 0, -1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, -1, -1, 1, 0, 1, 0, 1, -1, 1, -1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, -10, 0, 0, 0, 0, 0, -10, -1, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0],
  [0, 0, -1, -1, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -10, 1, 0, -1, 0, -1, 0, 1],
  [0, -1, 1, 0, 0, -1, -1, 1, -10, 1, -1, -1, -1, -1, 0, -1, 0, -1, -1],
  [0, 0, 0, 0, 0, 0, 0, -1, 1, 0, 0, 0, -1, 0, 0, -10, -1, 1, 0]
];

window.onload = initializepage();

// 初期処理
function initializepage() {
  // 正解のタイプを決める
  answer[0] = Math.floor(Math.random() * 18 + 1);
  answer[1] = Math.floor(Math.random() * 19);
  if (answer[0] === answer[1]) {
    answer[1] = 0;
  } else if (answer[0] > answer[1]) {
    let tmp = answer[0];
    answer[0] = answer[1];
    answer[1] = tmp;
  }
  for (let i = 1; i < typeListEng.length; i++) {
    // 相性メッセージの初期化
    document.getElementById(`${typeListEng[i]}-msg`).textContent = "？";
    // 相性の計算
    effect[i] = typeMatrix[answer[0]][i] + typeMatrix[answer[1]][i];
  }
  // 正解メッセージの初期化
  document.getElementById("answer-msg").textContent = "";
}

// タイプのボタンが押されたときの処理
for (let i = 1; i < typeListEng.length; i++) {
  document.getElementById(`${typeListEng[i]}-btn`).addEventListener("click", function () {
    if (effect[i] < -3) {
      document.getElementById(`${typeListEng[i]}-msg`).textContent = "こうかなし";
    } else if (effect[i] < 0) {
      document.getElementById(`${typeListEng[i]}-msg`).textContent = "いまひとつ";
    } else if (effect[i] > 0) {
      document.getElementById(`${typeListEng[i]}-msg`).textContent = "ばつぐん";
    } else {
      document.getElementById(`${typeListEng[i]}-msg`).textContent = "ふつう";
    }
  });
}

// 答えを見るボタンが押されたときの処理
document.getElementById("answer-btn").addEventListener("click", function () {
  document.getElementById("answer-msg").textContent = "正解は　" + typeListJa[answer[0]] + "　" + typeListJa[answer[1]];
});

// リトライボタンが押されたときの処理
document.getElementById("retry-btn").addEventListener("click", initializepage);
