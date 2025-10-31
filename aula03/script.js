function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += '<h2>contando de 1 ate 10...</h2>'

    let cont = 10

    saida.innerHTML += `o valor de cont agora é: ${cont}`

    while (cont >= 1) {

        saida.innerHTML +=  `${cont} &#x1F449;`

        cont -- 

    }

    saida.innerHTML += `&#x1F3C1`
}