function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector('#controls');
const counterRef = controlsRef.querySelector('input');
const createBtn = controlsRef.querySelector('[data-create]');
const destroyBtn = controlsRef.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

const manageBoxesMarkup = () => {
  let boxSize = 30;

  const createBoxes = () => {
    const boxesMarkup = [];

    for (let i = 0; i < counterRef.value; i += 1) {
      let newColor = getRandomHexColor();
      if (newColor.length < 7) {
        do {
          newColor += 0;
        } while (newColor.length < 7);
      }

      boxesMarkup.push(
        `<div style='width: ${boxSize}px; height: ${boxSize}px; background-color: ${newColor}'></div>`,
      );

      boxSize += 10;
    }

    boxesRef.insertAdjacentHTML('beforeend', boxesMarkup.join(''));
    counterRef.value = 0;

    return function () {
      boxesRef.innerHTML = '';
      boxSize = 30;
    };
  };

  return createBoxes;
};

const createBoxes = manageBoxesMarkup();
const destroyBoxes = createBoxes();

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
