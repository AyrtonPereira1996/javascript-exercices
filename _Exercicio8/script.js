var btn = document.querySelector("#btn");
var resultado = document.querySelector("#resultado");

// AO CLICAR IRA CHAMAR A FUNCAO
btn.addEventListener("click", imparPar);

// FUNCAO QUE IRA DETERMINAR SE O NUMERO E IMPAR OU PAR
function imparPar() {
    let txtNumber = Number(document.querySelector("#txtNumber").value);

    if (txtNumber % 2 == 0) {
        resultado.innerHTML = "O número é PAR";
    } else {
        resultado.innerHTML = "O número é IMPAR";
    }
}
