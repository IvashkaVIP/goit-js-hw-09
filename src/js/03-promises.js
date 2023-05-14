import Notiflix from 'notiflix';

const ref = {
  inputDelay: document.querySelector('[name=delay]'),
  inputStep: document.querySelector('[name=step]'),
  inputAmount: document.querySelector('[name=amount]'),
  formSubmit: document.querySelector('.form'),
};

// console.log(ref.inputStep);
// console.log(ref.inputAmount);
// console.log(ref.formSubmit);

ref.formSubmit.addEventListener('submit', onFormSubmit);


// const p = createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function onFormSubmit(evt) {
   
   evt.preventDefault();
   console.log(ref.inputDelay.value);
   console.log(ref.inputStep.value);
   console.log(ref.inputAmount.value);

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
