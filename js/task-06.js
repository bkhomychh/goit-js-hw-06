const inputRef = document.querySelector('#validation-input');

const checkInput = ({ currentTarget }) => {
  if (currentTarget.value.length === +currentTarget.dataset.length) {
    currentTarget.classList.add('valid');
    currentTarget.classList.remove('invalid');
  } else {
    currentTarget.classList.add('invalid');
    currentTarget.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', checkInput);
