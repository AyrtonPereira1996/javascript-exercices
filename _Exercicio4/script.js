var elementoImagem = document.createElement("img")
var resultado = document.querySelector("#resultado")
var button = document.querySelector("#btn")

button.addEventListener("click", onClickAction)

function onClickAction() {
    resultado.appendChild(elementoImagem)
}

elementoImagem.setAttribute("id", "imagem")
elementoImagem.setAttribute("src", "watercolor.png")


