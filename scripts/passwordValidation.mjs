const passwordValidation = () => {
	const password = document.querySelector('#fpassword').value;
	const message = document.querySelector('#message');

	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;

	if (regex.test(password)) {
		message.innerHTML = 'Contraseña válida';
		message.style.color = 'green';
		showMessageWarning(false);
	} else {
		message.innerHTML = 'La contraseña no cumple con los requisitos';
		message.style.color = 'red';
		showMessageWarning(true);
	}
};

function showMessageWarning(messageDisplayed) {
	const button = document.querySelector('#button');
	const warningTitle = document.querySelector('#warning-title');

	if (messageDisplayed === true) {
		warningTitle.style.display = 'block';
		warningTitle.textContent = `La contraseña debe tener almenos menos debe tener 1 mayúscula, al
				menos 1 minúscula, al menos 1 dígito numérico, longitud entre 8 y 16
				caracteres`;
		button.disabled = true;
	} else {
		warningTitle.style.display = 'none';
		button.disabled = false;
	}
}
