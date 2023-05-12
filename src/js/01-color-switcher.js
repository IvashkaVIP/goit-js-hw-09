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
  ref.startBtn.disabled = true;
  ref.stopBtn.disabled = false;
}

function clickStopBtn() {
  clearInterval(intervalId);
  ref.stopBtn.disabled = true;
  ref.startBtn.disabled = false;
}
//console.log(ref.startBtn, '  ', ref.stopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
