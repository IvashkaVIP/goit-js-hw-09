import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      console.log(options.defaultDate);
      if (options.defaultDate >= selectedDates[0]) {
          startBtn.disabled = true;
          window.alert('Please choose a date in the future');
          return;          
      }
      selectedTime = selectedDates[0].getTime();
      startBtn.disabled = false;
  },
};

// const targetTime = flatpickr('#datetime-picker', options);
let selectedTime = null;

const ref = {
  itemDays: document.querySelector('[data-days]'),
  itemHours: document.querySelector('[data-hours]'),
  itemMins: document.querySelector('[data-minutes]'),
  itemSecs: document.querySelector('[data-seconds]'),
};

//console.log(ref.itemDays);


const dataInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
dataInput.value = (new Date()).toLocaleString();
startBtn.setAttribute('disabled', true);

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', onStartBtn);

function onStartBtn() {
    
    setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(selectedTime - Date.now());
        
        ref.itemSecs.textContent = addLeadingZero(seconds);
        ref.itemMins.textContent = addLeadingZero(minutes);
        ref.itemHours.textContent = addLeadingZero(hours);
        ref.itemDays.textContent = addLeadingZero(days);
        //console.log(ref.itemSecs.textContent); 
        //console.log(deltaTime);
    },1000)
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
    return value.toString().padStart(2,"0");

}



