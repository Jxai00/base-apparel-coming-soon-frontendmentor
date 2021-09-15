const banner = document.querySelector('.banner');
const contentBanner = document.querySelector('.content__banner');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.querySelector('.error-alert');
const input = document.querySelector('.input-field');

form.addEventListener('submit', (e) => {
  var mail_format = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let message = [];

  if (email.value === '' || email.value === null) {
    message.push('Please enter a valid email address');
  }

  if (!mail_format.test(email.value)) {
    message.push('Please enter a valid email address');
  }

  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = message.join(', ');
    errorElement.style.display = 'flex';
    input.style.cssText = `border-color: hsl(0, 93%, 68%)`;
  }

});

window.addEventListener('DOMContentLoaded', e => {
  if (window.innerWidth < 425) {
    banner.style.display = 'none';
    contentBanner.style.display = 'flex';
  }
});