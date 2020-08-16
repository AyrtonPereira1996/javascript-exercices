var numbersArray = [];
var resultado = document.querySelector("#resultado");
var btn = document.querySelector("#btn");
var resultado2 = document.querySelector("#resultado2");

btn.addEventListener("click", adicionarElementos);

// Funcao que ira permitir criar e mostrar o vetor
function adicionarElementos() {

    for (let cont = 0; cont <= 4; cont++) {
        var resp = Number(window.prompt("Introduz 00 para sair! Tens 5 tentativas"));
        if (resp == 00) {
            alert("Acabou de sair! Volte sempre");
            break;
        }
        if (cont == 5) {
            alert("Suas tentativas expiraram");
        }

        numbersArray.push(resp);
        resultado.innerHTML += `Valor de posicao [${cont}]: ${numbersArray[cont]} <br/>`;
        
    }
    
    resultado2.innerHTML = `O vetor que acabou de preecher tem ${numbersArray.length} indices`;

}

