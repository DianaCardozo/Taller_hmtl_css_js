const btnIdentifica = document.getElementById("Identifica");
btnIdentifica.addEventListener("click", function ()
 {
    const valor = document.getElementById("dato").value;
    let tipo = "";
        if (!isNaN(valor)) {
        tipo = "numero";
       } else {
        tipo = "texto";
          }

    document.getElementById("Resultado").textContent = `El valor ingresado es de tipo ${tipo}.`;
 });

const btnRegresar = document.getElementById("Regresar");
btnRegresar.addEventListener("click", function () 
{
    window.location.href ="index_Taller.html";
});