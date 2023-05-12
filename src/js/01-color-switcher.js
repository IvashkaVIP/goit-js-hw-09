const ref = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

ref.startBtn.addEventListener('click', clickStartBtn);
ref.stopBtn.addEventListener('click', clickStopBtn);
let intervalId = null;

function clickStartBtn() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  disableStartBtn();
  enableStopBtn();
}

function clickStopBtn() {
  clearInterval(intervalId);
  enableStartBtn();
  disableStopBtn();
}

const enableStartBtn = () => {
  ref.startBtn.disabled = false;
};
const disableStartBtn = () => {
  ref.startBtn.disabled = true;
};
const enableStopBtn = () => {
  ref.stopBtn.disabled = false;
};
const disableStopBtn = () => {
  ref.stopBtn.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
