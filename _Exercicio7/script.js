var btn = document.querySelector("#btn");
var tip = document.querySelector("#tip");

// FUNCAO QUE IRA ENVIAR OS VALORES A FUNCAO DE RETORNO E DE SEGUIDA EXIBIR O RESULTADO
function envioValores() {
    var x = Number(window.prompt("Digite o valor de x"));
    var y = Number(window.prompt("Digite o valor de y"));
    var resultadoRetorno = soma(x, y);
    tip.innerHTML = "<marquee>Por favor entre na console do navegador clicando <strong>[Ctrl+Shift+I]</strong></marquee>";
    window.setTimeout(function () {
        console.log(resultadoRetorno)
    }, 8*1000);

}

// FUNCAO QUE IRA CALCULAR DOIS VALORES ENVIADOS PARA FUNCAO POR PARAMETRO
function soma(a, b) {
    var resultado = a + b;
    return resultado;
}


