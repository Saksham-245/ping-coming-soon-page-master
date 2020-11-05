const email = document.getElementById('email');
const error = document.getElementById('input-error');
const button = document.querySelector('button');
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


button.addEventListener('click', function() {
    if (email.value.match(regex)) {
        error.textContent = ''
        error.style.color = 'hsl(223, 100%, 88%)'
        email.style.borderColor = 'transparent'
    } else if (email.value === '') {
        error.textContent = 'Whoops! It looks like you forgot to add your email'
        borderColor();
    } else {
        error.textContent = 'Please provide a valid email address to submit';
        borderColor();
    }
});

function borderColor() {
    error.style.color = 'rgb(255, 82, 99)'
    email.style.borderColor = 'rgb(255, 82, 99)'
}