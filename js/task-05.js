const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const updateOutput = () => {
  if (nameInputRef.value.trim()) {
    nameOutputRef.textContent = nameInputRef.value;
  } else {
    nameOutputRef.textContent = 'Anonymous';
  }
};

nameInputRef.addEventListener('input', updateOutput);
