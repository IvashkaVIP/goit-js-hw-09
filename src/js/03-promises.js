import Notiflix from 'notiflix';



const p = createPromise(2, 1500)
  .then(({ position, delay }) => {
    //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

console.log(p);

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
