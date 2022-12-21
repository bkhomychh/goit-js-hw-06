const loginFormRef = document.querySelector('.login-form');

const submitForm = event => {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value.trim() === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('WARNING! Each field must be filled');
    return;
  }

  console.log({
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  });

  event.currentTarget.reset();
};

loginFormRef.addEventListener('submit', submitForm);
