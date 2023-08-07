const passwordValidation = () => {
	const password = document.querySelector('#fpassword').value;

	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;

	if (regex.test(password)) {
		document.getElementById('message').innerHTML = 'Contraseña válida';
		document.getElementById('message').style.color = 'green';
		showMessageWarning(false);
	} else {
		document.getElementById('message').innerHTML =
			'La contraseña no cumple con los requisitos';
		document.getElementById('message').style.color = 'red';
		showMessageWarning(true);
	}
};

function showMessageWarning(messageDisplayed) {
	const button = document.querySelector('#button');

	if (messageDisplayed === true) {
		document.getElementById('warning-title').style.display = 'block';
		document.getElementById(
			'warning-title'
		).textContent = ` La contraseña debe tener almenos menos debe tener 1 mayúscula, al
				menos 1 minúscula, al menos 1 dígito numérico, longitud entre 8 y 16
				caracteres`;
		button.disabled = true;
	} else {
		document.getElementById('warning-title').style.display = 'none';
		button.disabled = false;
	}
}
