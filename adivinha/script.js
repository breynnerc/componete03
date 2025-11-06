let res = document.querySelector('section#result')

let computador = 0;

let jogador = 0

function sortear(){
    let max = 100
    let min = 1
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {

    jogador = Number(window.prompt('qual é o seu palpite?'))

    if (jogador < computador) {
    res.innerHTML += `<p>voce falou ${jogador}.meu numero é maior</p>`
    }else if (jogador > computador){
        res.innerHTML += `<p> Voce falou ${jogador}. Meu numero é menor</p>`
    }else{
        res.innerHTML += `<p> voce acertou! o numero é ${computador}</p>`
        document.getElementById('adivinhar').style.visibility = 'hidden'
    }

}
