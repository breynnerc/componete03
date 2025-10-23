function media() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = window.prompt('qual foi a primeira nota do aluno?')
    let n2 = window.prompt('qual foi a segunda nota do aluno?')

    var med = (n1 + n2) / 2

    let res = document.getElementById('situacao')

    res.innerHTML = `<p>Calculando a media do aluno</p>`
}