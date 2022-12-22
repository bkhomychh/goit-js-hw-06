const inputRef = document.querySelector('#validation-input');

const switchClasses = (targetRef, addedClass, removedClass) => {
  targetRef.classList.add(addedClass);
  targetRef.classList.remove(removedClass);
};

const checkInput = ({ currentTarget }) => {
  if (currentTarget.value.length === +currentTarget.dataset.length) {
    switchClasses(currentTarget, 'valid', 'invalid');
  } else {
    switchClasses(currentTarget, 'invalid', 'valid');
  }
};

inputRef.addEventListener('blur', checkInput);
