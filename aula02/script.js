function mFuncao() {
    var x = document.getElementById("paragrafo");

    x.innerHTML = "Vá embora!";
}

function trocaImagem() {
    var elemento = document.getElementById("myimage");

    if (elemento.src.match("desligada")) {
        elemento.src="ligada.png";
    } else {
        elemento.src="desligada.png";
    }
}