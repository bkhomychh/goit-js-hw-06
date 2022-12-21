function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValueRef = document.querySelector('.color');
const changeColorBtnRef = document.querySelector('.change-color');

const changeColor = () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  colorValueRef.textContent = newColor;
};

changeColorBtnRef.addEventListener('click', changeColor);
