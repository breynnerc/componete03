function maior() {
    let n1 = Number(window.prompt('digite um number'))
    
    let n2 = Number(window.prompt('digite outro number'))

    let n3 = Number(window.prompt('digite outro number'))

    let res = document.querySelector('section#saida')

    if (n1 < n2 && n1 < n3) {

        res.innerHTML = `o numero ${n1} é memor`

    } else if (n2 < n1 && n2 < n3) {

        res.innerHTML = `o numero ${n2} é menor`

        } else if (n3 < n1 && n3 < n2) {

        res.innerHTML = `o numero ${n3} é menor`

    } else {

        res.innerHTML = `os numbers sao iguais`
    }
}