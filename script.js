// INPUTS
const dayInp = document.getElementById('day');
const monthInp = document.getElementById('month');
const yearInp = document.getElementById('year');

// OUTPUTS
const dayOutp = document.getElementById('DD');
const monthOutp = document.getElementById('MM');
const yearOutp = document.getElementById('YY');

// Form
const form = document.querySelector('form');

// Adding submit event listener to form
form.addEventListener('submit', handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 39, 31];

function validate() {
  const inputs = document.querySelectorAll('input');
  let validator = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (!input.value) {
      input.style.borderColor = 'red';
      parent.querySelector('small').innerText = 'This field is required.';
      validator = false;
    } else if (monthInp.value > 12) {
      input.style.borderColor = 'red';
      parent.querySelector('small').innerText = 'Must be a valid month.';
      validator = false;
    } else if (dayInp.value > 31) {
      input.style.borderColor = 'red';
      parent.querySelector('small').innerText = 'Must be a valid day.';
      validator = false;
    } else {
      input.style.borderColor = 'black';
      parent.querySelector('small').innerText = '';
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOutp.innerHTML = d;
    monthOutp.innerHTML = m;
    yearOutp.innerHTML = y;
  }
}
