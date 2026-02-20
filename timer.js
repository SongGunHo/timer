let seconds = 0;
let timer = null;

// 요소 쿼리
const display = document.querySelector("#display");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

// 화면 업데이트 담당
function update() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  display.textContent = `${hrs}:${mins}:${secs}`;
}

// 시작 담당
function startTimer() {
  if (timer !== null) return; // 중복 실행 방지

  timer = setInterval(() => { // 1초 마다 실행 
    seconds++;  // 시간 증가 
    update();
  }, 1000);
}

// 정지 담당
function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// 초기화 담당
function resetTimer() {
  stopTimer(); // 먼저 멈추고 
  seconds = 0; // 시간은 0으로 
  update(); // 화면 갱신
}

// 버튼 클릭 이벤트
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// 처음 화면 세팅
update();