const texto = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const btnRegresar = document.getElementById("regresar");

texto.addEventListener('input', function(){
  const longitudTexto = texto.value.length;
  contador.textContent = `${longitudTexto} caracteres`;

});

btnRegresar.addEventListener("click", function(){
  window.location.href = "index_Taller.html";
});