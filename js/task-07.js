const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const updateFontSize = ({ currentTarget }) => {
  textRef.style.fontSize = `${currentTarget.value}px`;
};

fontSizeControlRef.addEventListener('input', updateFontSize);
