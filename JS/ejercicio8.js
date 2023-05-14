const btnVerifica = document.getElementById("Verifica");
btnVerifica.addEventListener("click", function () {
 
    const number = document.getElementById("number").value;
    const numberArr = number.split(",").map(num => parseInt(num.trim()));
    const resultadoLista = document.getElementById("Resultado");
    resultadoLista.innerHTML = "";
    numberArr.forEach(number => {
        const Resultado = number % 2 === 0 ? "es número par" : "es número impar";
        const li = document.createElement("li");
        li.textContent = `${number} ${Resultado}`;
        resultadoLista.appendChild(li);
    });
});

const btnRegresar = document.getElementById("Regresar");
btnRegresar.addEventListener("click", function () {
    window.location.href = "index_Taller.html";
});