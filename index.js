var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaEsquerda.style = "display:flex"
    setaDireita.style = "display:none; margin-top:20%"
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top:20%"
    setaEsquerda.style = "display:none"
}