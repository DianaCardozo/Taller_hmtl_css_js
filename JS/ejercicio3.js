const btnIdentifica = document.getElementById("Identifica");
btnIdentifica.addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad < 0 || edad > 200) {
        document.getElementById("Resultado").textContent = "La edad ingresada no es valida.";
    } else {
        let mensaje = "";
        if (edad >= 18) {
            mensaje = " Hola "+nombre+", eres mayor de edad";
        } else {
            mensaje = " Hola "+nombre+", no eres mayor de edad";
        }   
        document.getElementById("Resultado").textContent = mensaje;
        }
    });

const btnRegresar = document.getElementById("Regresar");
btnRegresar.addEventListener("click", function ()
 {
    window.location.href = "index_Taller.html";
 });