function eleitor() {
    let nom = window.prompt ('qual o nome do eleitor?')
    let idad = window.prompt ('qual a idade do eleitor?');

    if (idad >= 18){
        document.getElementById('situation').innerHTML = `<p> Nome: ${nom}</br> idade: ${idad} <br> situação: apto a votar</p>`;
    }else {
        document.getElementById('situation').innerHTML = `<p> Nome: ${nom}</br> idade: ${idad} <br> situação: não esta apto a votar</p>`;   
    }
}