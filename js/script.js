const form = document.querySelector('.newsletter form')
const input = document.querySelector('.newsletter .email')
const btn = document.querySelector('.newsletter .btn')

const verifyEmail = function (e) {
  e.preventDefault();
  if (!input.value || !input.checkValidity()) {
    form.classList.add('invalid')
    input.classList.add('invalid')
  } else {
    input.value = '';
    form.classList.remove('invalid')
    input.classList.remove('invalid')
  }
}

btn.addEventListener('click', verifyEmail)