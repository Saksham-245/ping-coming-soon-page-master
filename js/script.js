const email = document.getElementById('email');
const error = document.getElementById('input-error');
const button = document.querySelector('button');
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


button.addEventListener('mouseover', function() {
    if (email.value.match(regex)) {
        error.textContent = ''
        error.style.color = 'hsl(223, 100%, 88%)'
        email.style.borderColor = 'transparent'
    } else if (email.value === '') {
        error.textContent = 'The input field can not be blank'
        borderColor();
    } else {
        error.textContent = 'Please enter valid email address'
        borderColor();
    }
});

function borderColor() {
    error.style.color = 'rgb(255, 82, 99)'
    email.style.borderColor = 'rgb(255, 82, 99)'
}