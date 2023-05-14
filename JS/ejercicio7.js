const btnVerifica = document.getElementById("Verifica");
btnVerifica.addEventListener("click", function() {
	const number_1 = parseInt(document.getElementById("number_1").value);
	const number_2 = parseInt(document.getElementById("number_2").value);
    
    if (isNaN(number_1) || !Number.isInteger(number_1) || number_1 <= 0 ||
		isNaN(number_2) || !Number.isInteger(number_2) || number_2 <= 0) {
		document.getElementById("Resultado").textContent = "Debe ingresar números enteros positivos";
	} else {
		if (number_1 % number_2 === 0) {
			document.getElementById("Resultado").textContent = `El número ${number_1} es divisible entre el número ${number_2}.`;
		} else {
			document.getElementById("Resultado").textContent = `El número ${number_1} no es divisible entre el número ${number_2}.`;
		}
	}
});

const btnRegresar = document.getElementById("Regresar");
btnRegresar.addEventListener("click", function() {
	window.location.href = "index_Taller.html";
});