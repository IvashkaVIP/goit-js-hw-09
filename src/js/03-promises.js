import Notiflix from 'notiflix';

const ref = {
  inputDelay: document.querySelector('[name=delay]'),
  inputStep: document.querySelector('[name=step]'),
  inputAmount: document.querySelector('[name=amount]'),
  formSubmit: document.querySelector('.form'),
};

ref.formSubmit.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  let currentDelay = +ref.inputDelay.value;

  for (let i = 1; i <= +ref.inputAmount.value; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    currentDelay += +ref.inputStep.value;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
