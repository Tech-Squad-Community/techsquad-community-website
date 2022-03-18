
const password_toggle = document.querySelector("#password-toggle")
const password_input = document.querySelector("input[type=password]")

password_toggle.addEventListener('click', ()=> {
	if(password_input.type === 'text'){
		password_input.type = "password";
		password_toggle.classList.remove("fa-eye")
		password_toggle.classList.add("fa-eye-slash")
	}
	else{
		password_input.type = "text";
		password_toggle.classList.add("fa-eye")
		password_toggle.classList.remove("fa-eye-slash")
	}
})