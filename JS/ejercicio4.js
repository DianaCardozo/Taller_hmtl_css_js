const btnVerifica = document.getElementById("Verifica");
const btnRegresar = document.getElementById("Regresar");

btnVerifica.addEventListener("click", function() {
	const nombre = document.getElementById("nombre").value;
	const materia = document.getElementById("materia").value;
	const nota1 = parseFloat(document.getElementById("nota1").value);
	const nota2 = parseFloat(document.getElementById("nota2").value);
	const nota3 = parseFloat(document.getElementById("nota3").value);


	const promedio = (nota1 + nota2 + nota3) / 3;
	if (promedio >= 3.0) {
		document.getElementById("Resultado").style.color = "green";
		document.getElementById("Resultado").textContent = 'Felicitaciones '+nombre+', tu nota final es '+promedio.toFixed(2)+' pasaste la materia de '+ '"'+ materia + '"';
	} else {
		// Se perdió la materia
		document.getElementById("Resultado").style.color = "red";
		document.getElementById("Resultado").textContent = 'Lo sentimos '+nombre+', tu nota final es '+promedio.toFixed(2)+', perdiste la materia '+materia;
	}
    });

btnRegresar.addEventListener("click", function() {
  window.location.href = "index_Taller.html"; 
});