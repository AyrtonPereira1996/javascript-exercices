var lista = document.querySelector("#lista-automatica")
var btn = document.querySelector("#btn")
var cont = 0
btn.addEventListener("click", addElements)

function addElements() { 
    while (cont <= 5) {
        lista.innerHTML += `Na contagem ${cont} <br/>`
        cont++
        if (cont == 5) break
    }
}