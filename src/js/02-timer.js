import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // console.log(options.defaultDate);
    if (options.defaultDate >= selectedDates[0]) {
      ref.startBtn.disabled = true;
      window.alert('Please choose a date in the future');
      return;
    }
    selectedTime = selectedDates[0].getTime();
      ref.startBtn.disabled = false;
  },
};

// const targetTime = flatpickr('#datetime-picker', options);
let selectedTime = null;
let isActiveTimer = false;
let timerId = null;

const ref = {
  itemDays: document.querySelector('[data-days]'),
  itemHours: document.querySelector('[data-hours]'),
  itemMins: document.querySelector('[data-minutes]'),
  itemSecs: document.querySelector('[data-seconds]'),
  dataInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
};


 ref.startBtn.disabled = true;
//  ref.dataInput.disabled = true;


flatpickr('#datetime-picker', options);

ref.startBtn.addEventListener('click', onStartBtn);

function onStartBtn() {
    
    isActiveTimer = true;
    ref.dataInput.disabled = true;
    ref.startBtn.disabled = true;


    timerId = setInterval(() => {
        let deltaTime = selectedTime - Date.now();
        if (deltaTime <= 0) {
          isActiveTimer = false;
        //   ref.startBtn.disabled = false;
            ref.dataInput.disabled = false;
            clearInterval(timerId);
            return;
        }

        
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    ref.itemSecs.textContent = addLeadingZero(seconds);
    ref.itemMins.textContent = addLeadingZero(minutes);
    ref.itemHours.textContent = addLeadingZero(hours);
    ref.itemDays.textContent = addLeadingZero(days);
    
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
