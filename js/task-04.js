let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector('#value');

const updateCounter = () => {
  counterRef.textContent = counterValue;
};

const decreaseCounter = () => {
  counterValue -= 1;
  updateCounter();
};

const increaseCounter = () => {
  counterValue += 1;
  updateCounter();
};

decrementBtnRef.addEventListener('click', decreaseCounter);
incrementBtnRef.addEventListener('click', increaseCounter);
