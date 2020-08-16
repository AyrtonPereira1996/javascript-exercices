var btn = document.querySelector("#btn");
var resultado = document.querySelector("#resultado");


btn.addEventListener("click", parImpar);

function parImpar() {
    let n = document.querySelector("#txtNumber").value;
   
    if (n % 2 == 0) {
        resultado.innerHTML = "PAR";
    } else {
        resultado.innerHTML = "IMPAR";
    }
}

