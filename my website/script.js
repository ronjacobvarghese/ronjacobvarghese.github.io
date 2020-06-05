const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {	
	Warnings(e);
});
//function for setting condition if condition is not meet sets error else checks it

function Warnings(e) {
	const name = username.value;
	const mail = email.value;
	const pass = password.value;
	const pass2 = password2.value;
	
	if(name === '') {                                                   
		e.preventDefault();
		setwarnings(username, 'Username cannot be blank');
	} else {
		exitwarning(username);
	}
	
	if(mail === '') {
		e.preventDefault();
		setwarnings(email, 'Email cannot be blank');
	}
	else 
	{
		exitwarning(email);
	}
	
	if(pass === '') {
		e.preventDefault();
		setwarnings(password, 'Password cannot be blank');
	} else if(pass.length <= 6){
		e.preventDefault();
		setwarnings(password,"Password must contain more than 6 characters");
	} else if(pass.length >=20){
		e.preventDefault();
		setwarnings(password,"Password must contain less than 20 characters");

	}else {
		exitwarning(password);
	}
	
	if(pass2 === '') {
		e.preventDefault();
		setwarnings(password2, 'Password2 cannot be blank');
	} else if(pass !==  pass2) {
		e.preventDefault();
		setwarnings(password2, 'Passwords does not match');
	} else{
		exitwarning(password2);
	}
}
//function for errors
function setwarnings(input, message) {
	const logwrapper = input.parentElement;//gets hold of log-wrapper
	const small = logwrapper.querySelector('small');
	logwrapper.className = 'log-wrapper fail';
	small.innerText = message;
}
//function if correct
function exitwarning(input) {
	const logwrapper = input.parentElement;
	logwrapper.className = 'log-wrapper success';
}
