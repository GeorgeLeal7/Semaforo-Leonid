const semaforo = document.getElementById("semaforo")
let idInterval

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
    semaforo.src = "img/verde.png"
}

function amarelo() {
    semaforo.src = "img/amarelo.png"
}

function vermelho() {
    semaforo.src = "img/vermelho.png"
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
