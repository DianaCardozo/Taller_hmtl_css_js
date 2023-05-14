const btnEncontrar = document.getElementById("btnEncontrar");

btnEncontrar.addEventListener("click", function() {
	const Texto = document.getElementById("Texto").value;
	const Buscar = document.getElementById("Buscar").value;

	if (Texto.trim() === "" || Buscar.trim() === "") {
		document.getElementById("Resultado").textContent = "Complete todos los campos para continuar con la busqueda";
	} else {
		const regis = new RegExp(Buscar, "gi");
		const Resultado = Texto.replace(regis, "<span class='highlight'>$&</span>");
		document.getElementById("Resultado").innerHTML = Resultado;
	}
});

const btnRegresar = document.getElementById("Regresar");
btnRegresar.addEventListener("click", function ()
{
    window.location.href = "index_Taller.html";
});
