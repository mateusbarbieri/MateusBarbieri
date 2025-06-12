const startBtn = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timerDisplay');
const mensagemFinal = document.getElementById('mensagemFinal');

let intervalo;

startBtn.addEventListener('click', () => {
    let minutos = parseInt(document.getElementById('minutos').value) || 0;
    let segundos = parseInt(document.getElementById('segundos').value) || 0;

    let totalSegundos = minutos * 60 + segundos;

    if (totalSegundos <= 0) {
        alert('Informe um tempo válido!');
        return;
    }

    clearInterval(intervalo); // Evita múltiplos intervalos

    intervalo = setInterval(() => {
        let min = Math.floor(totalSegundos / 60);
        let seg = totalSegundos % 60;

        timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;

        if (totalSegundos <= 0) {
            clearInterval(intervalo);
            mensagemFinal.textContent = 'Tempo esgotado!';
        }

        totalSegundos--;
    }, 1000);

    mensagemFinal.textContent = ''; // Limpa mensagem anterior
});
