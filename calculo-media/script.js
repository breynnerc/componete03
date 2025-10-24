function media() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt('qual foi a primeira nota do aluno?'))
    let n2 = Number(window.prompt('qual foi a segunda nota do aluno?'))

    var med = (n1 + n2) / 2

    let res = document.getElementById('situacao')

    res.innerHTML = `<p>Calculando a media de ${nom}</p>`

    res.innerHTML += `<p>As notas obtidas foram: ${n1} e ${n2}</p>`

    res.innerHTML += `<p> a media sera: ${med}`

    let msg

    if (med >= 6) {
        msg = 'aproved'
        res.innerHTML += `<p>Situação: <strong style='color:green'> ${msg}</strong></p>`
    } else {
        msg = 'REPROVED'
        res.innerHTML += `<p>Situação: <strong style='color:red'> ${msg}</strong></p>`
    }
}