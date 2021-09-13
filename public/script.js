const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const user_name = document.getElementById('user_name');
const email = document.getElementById('email');
const password_1 = document.getElementById('password_1');
const password_2 = document.getElementById('password_2');
const number = document.getElementById('number');

const form = document.getElementById('form');

const errorElement = document.getElementById('error');

// console.log(first_name.getAttribute('placeholder') + ' is required!');


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the form from submission
    
    checkInputs();
})


function checkInputs() {
	// trim to remove the whitespaces
	const firstValue = first_name.value.trim();
	const lastValue = last_name.value.trim();
	const usernameValue = user_name.value.trim();
	const emailValue = email.value.trim();
	const password1Value = password_1.value.trim();
	const password2Value = password_2.value.trim();
    const numberValue = number.value.trim();
	
	if(firstValue === '') {
		setErrorFor(first_name, 'First name cannot be blank');
	} else {
		setSuccessFor(first_name);
	}
	if(lastValue === '') {
		setErrorFor(last_name, 'First name cannot be blank');
	} else {
		setSuccessFor(last_name);
	}
	if(usernameValue === '') {
		setErrorFor(user_name, 'Username cannot be blank');
	} else {
		setSuccessFor(user_name);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(password1Value === '') {
		setErrorFor(password_1, 'Password cannot be blank');
	} else {
		setSuccessFor(password_1);
	}
	
	if(password2Value === '') {
		setErrorFor(password_2, 'Password2 cannot be blank');
	} else if(password2Value !== password2Value) {
		setErrorFor(password_2, 'Passwords does not match');
	} else{
		setSuccessFor(password_2);
	}
	
	if(numberValue === '') {
		setErrorFor(number, 'Password cannot be blank');
	} else {
		setSuccessFor(number);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = `${input.getAttribute('id')} form-control error`;
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = `${input.getAttribute('id')} form-control success`;
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
