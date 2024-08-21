import iziToast from 'izitoast';

import ApiService from '../../../swagger-api';
import { updateButtonText, useLoading, validateEmail } from './operations';

const form = document.getElementById('form-footer');
const modalText = document.querySelector('.modal-text');
const modalDescription = document.querySelector('.modal-description');
const modal = document.querySelector('.modal-overlay');
const emailInput = document.querySelector('#email');
const commentInput = document.querySelector('#comment');
const closeButton = document.querySelector('.close-modal');
const button = document.querySelector('.submit-btn-footer');
const [isLoading, setLoading] = useLoading();

form.addEventListener('submit', async event => {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  const comment = formData.get('comments');
  const data = {
    email: email,
    comment: comment,
  };

  let isValid = true;

  emailInput.style.borderColor = '';
  commentInput.style.borderColor = '';

  if (!validateEmail(email)) {
    emailInput.style.borderColor = 'var(--accent)';
    isValid = false;
  }

  if (!comment.trim()) {
    commentInput.style.borderColor = 'var(--accent)';
    isValid = false;
  }

  if (!isValid) {
    setTimeout(() => {
      emailInput.style.borderColor = 'rgba(250, 250, 250, 0.2)';
      commentInput.style.borderColor = 'rgba(250, 250, 250, 0.2)';
    }, 2000);

    return;
  }

  try {
    setLoading(true);
    updateButtonText(button, isLoading());
    const response = await ApiService.sendEmail(data);
    form.reset();
    modalText.textContent = response.title;
    modalDescription.textContent = response.message;
    modal.style.visibility = 'visible';
    modal.classList.add('visible');
  } catch (error) {
    iziToast.error({
      position: 'topCenter',
      title: 'Error',
      message: 'Error while sending email, please try later.',
    });
  } finally {
    setLoading(false);
    updateButtonText(button, isLoading());
  }
});

function hideModal() {
  modal.classList.remove('visible');

  setTimeout(() => {
    modal.style.visibility = 'hidden';
  }, 500);
}

closeButton.addEventListener('click', hideModal);

document.addEventListener('click', e => {
  if (e.target === modal) {
    hideModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    hideModal();
  }
});
