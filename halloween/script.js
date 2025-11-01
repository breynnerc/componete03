const btnLuz = document.getElementById('btn-luz');
const body = document.body;
const audioSusto = document.getElementById('audio-susto');
const audioRisada = document.getElementById('audio-risada');
const titulo = document.getElementById('titulo');

btnLuz.addEventListener('click', () => {
    if (body.classList.contains('light-on')) {
        body.classList.remove('light-on');
        body.classList.add('light-off');
        btnLuz.textContent = ' 💡 LIGAR AS LUZES';
        titulo.textContent = 'BOOOOHHH 👻';

        audioSusto.play();
        audioRisada.play();
    }else{
        body.classList.remove('light-off');
        body.classList.add('light-on');
        btnLuz.textContent = '💡 LIGAR AS LUZES';
        titulo.textContent = 'não apague as luzes !💡';
    }
})