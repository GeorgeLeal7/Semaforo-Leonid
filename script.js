const semaforo = document.getElementById("semaforo")
let idInterval
let intervalVerde
let intervalVermelho
let intervalAmarelo

function semaforoVerde() {
    return semaforo.src.includes("verde")
}

function semaforoAmarelo() {
    return semaforo.src.includes("amarelo")
}

function semaforoVermelho() {
    return semaforo.src.includes("vermelho")
}

function semaforoDesligado() {
    return semaforo.src.includes("img/desligado.png")
}

function verde() {
    
    const cor = document.getElementById("verde")
    if (cor.textContent == "Verde") {
        semaforo.src = "img/verde.png"
        intervalVerde = setInterval(semaforoVerde, 0)
        cor.textContent = "Parar"
    } else {
        pararVerde()
        cor.textContent = "Verde"
    }
}

function amarelo() {

    const cor = document.getElementById("amarelo")
    if (cor.textContent == "Amarelo") {
        semaforo.src = "img/amarelo.png"
        intervalAmarelo = setInterval(semaforoAmarelo, 0)
        cor.textContent = "Parar"
    } else {
        pararAmarelo()
        cor.textContent = "Amarelo"
    }
}

function vermelho() {

    const cor = document.getElementById("vermelho")
    if (cor.textContent == "Vermelho") {
        semaforo.src = "img/vermelho.png"
        intervalVermelho = setInterval(semaforoVermelho, 0)
        cor.textContent = "Parar"
    } else {
        pararAmarelo()
        cor.textContent = "Vermelho"
    }
}

function trocarImagem() {

    if (semaforoDesligado()) {
        vermelho()
    } else if (semaforoVermelho()) {
        amarelo()
    } else if (semaforoAmarelo()) {
        verde()
    } else {
        vermelho()
    }
}

function pararAmarelo() {
    clearInterval(intervalAmarelo)
    semaforo.src = "img/desligado.png"
}

function pararVermelho() {
    clearInterval(intervalVermelho)
    semaforo.src = "img/desligado.png"
}

function pararVerde() {
    clearInterval(intervalVerde)
    semaforo.src = "img/desligado.png"
}

function pararAutomatico() {
    clearInterval(idInterval)
    semaforo.src = "img/desligado.png"
}

function semaforoAutomatico() {

    const automatizado = document.getElementById("automatico")
    if (automatizado.textContent == "Automático") {
        idInterval = setInterval(trocarImagem, 1000)
        automatizado.textContent = "Parar"
    } else {
        pararAutomatico()
        automatizado.textContent = "Automático"
    }
}

//Eventos para os botões
document.getElementById("verde")
    .addEventListener("click",verde)
document.getElementById("amarelo")
    .addEventListener("click",amarelo)
document.getElementById("vermelho")
    .addEventListener("click",vermelho)
document.getElementById("automatico")
    .addEventListener("click",semaforoAutomatico)
