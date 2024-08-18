import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('form-footer');
const modal = document.getElementById('modal-window');
const span = document.getElementsByClassName('close-footer')[0];
const emailInput = form.querySelector('input[name="email"]');
const emailMessage= document.getElementById("input-message-footer")

// перевіркa електронної пошти
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  const data = {
    email: email,
    comments: formData.get('comments')
  };

  
  if (validateEmail(email)) {
    // Успішна валідація
    emailInput.style.borderBottom = '2px solid green';
      emailMessage.style.color = "green";
      emailMessage.textContent = "Succes!";


    axios.post('https://github.com/Subx1s0o/portfolio-js-project-api', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Success:', response.data);
        form.reset();
        emailMessage.textContent = "";
    })
    .catch(error => {
      alert('There was a problem with your submission: ' + error.message);
    });
  } else {
    // Невдала валідація
    emailInput.style.borderBottom = '2px solid red';
      emailMessage.style.color = "red";
      emailMessage.textContent="Invalid email,try again"
  }
});

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modal.style.display = "none";
  }
});