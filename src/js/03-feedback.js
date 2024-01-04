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

form.addEventListener('input', throttledSaveFormData);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
