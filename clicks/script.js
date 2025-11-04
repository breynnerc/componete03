let contador = 0;

const botao = document.getElementById('clique');
const contagem = document.getElementById('contagem')

function clicks () {
    contador++;
    contagem.textContent = contador;
}

function resetarContador(){
    contador = 0;

    const resetarContador = document.querySelector("span");contagem.textContent = + contador
}
