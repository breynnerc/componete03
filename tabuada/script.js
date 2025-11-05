function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2>tabuada de ${n}</h2>`

    let cont = 1

    while (cont <= 10) {

        saida.innerHTML += `${n} X ${cont} = ${n * cont}<br>`

        cont ++

    }
}