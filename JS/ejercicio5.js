const btnVerifica = document.getElementById("Verifica");
btnVerifica.addEventListener("click", function () {

    const num = parseInt(document.getElementById("number").value);
    if (num == "" || num < 0 || num % 1 != 0) {
        document.getElementById("Resultado").innerHTML = "Ingrese un numero entero positivo para poder verificarlo";
      }
      else if (num % 2 == 0) {
        document.getElementById("Resultado").innerHTML = " El numero " + num + " es par";
      }
      else {
        document.getElementById("Resultado").innerHTML = " El numero " + num + " es impar";
      }
    });

const btnRegresar = document.getElementById("Regresar");
btnRegresar.addEventListener("click", function () {
    window.location.href = "index_Taller.html";
});