const display = document.querySelector("#timerDisplay");


const startBtn = document.querySelector("startTimer");
const stopBtn = document.querySelector("stopTimer");
const resetBtn = document.querySelector("resetTimer");

let seconds = 0;
let intervalld = null;

function formatTime(totalSeconds) {
    const i = String(Math.floor(totalSeconds/3600)).padStart(2, "0");
    const u = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    return `${i}:${u}:${s}`;
}