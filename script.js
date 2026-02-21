const display = document.querySelector("#timerDisplay");

const startBtn = document.querySelector("#startTimer");
const stopBtn = document.querySelector("#stopTimer");
const resetBtn = document.querySelector("#resetTimer");

let seconds = 0;
let intervalId = null;

function formatTime(totalSeconds) {
  const i = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const u = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${i}:${u}:${s}`;
}

function render() {
  display.textContent = formatTime(seconds);
}

startBtn.addEventListener("click", () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    seconds++;
    render(); // ⭐ 함수 호출
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  render(); // ⭐ 함수 호출
});

// 처음 표시
render();