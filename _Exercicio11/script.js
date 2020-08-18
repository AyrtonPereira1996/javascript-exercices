
var btn = document.querySelector("#btn");
var resultado = document.querySelector("#resultado");

btn.addEventListener("click", calcFactorial);

function calcFactorial() {
    let input = Number(document.querySelector("#txtNumero").value);
    let fatorial = 1;
  
    for (let cont = input; cont > 1; cont--) {
        fatorial *= cont;
    }
    resultado.innerHTML = fatorial;
}


