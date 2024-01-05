import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
form.elements.email.value = savedData.email || '';
form.elements.message.value = savedData.message || '';

const saveFormData = () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

const throttledSaveFormData = throttle(saveFormData, 500);

const checkFormInputs = () => {
  if (!form.elements.email.value || !form.elements.message.value) {
    alert('Proszę wypełnić oba pola formularza!');
    return false;
  }
  return true;
};

form.addEventListener('input', throttledSaveFormData);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (checkFormInputs()) {
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
