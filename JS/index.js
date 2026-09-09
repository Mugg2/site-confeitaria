// Declaração de variáveis
let indice = 0
let imagens = [
    "IMG/Bolo de Abacaxi.jpg",
    "IMG/Bolo de Chocolate.jpg",
    "IMG/Bolo de Maracuja.jpg",
    "IMG/Bolo de Morango.jpg"
]

// Função para trocar a imagem
function trocar () {
    let img = document.getElementById("img")
    img.src = imagens[indice]
}

setInterval(function(){
    trocar()
    indice++

    if (indice >= imagens.length) {
     indice = 0
    }
}, 5000)

//trocar()