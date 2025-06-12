document.addEventListener('DOMContentLoaded', function() {
    const btnSacar = document.getElementById('btnSacar');
    const valorSaque = document.getElementById('valorSaque');
    const resultadoDiv = document.getElementById('resultado');
    const feedbackDiv = document.getElementById('feedback');
    const notasContainer = document.getElementById('notas-container');

    btnSacar.addEventListener('click', calcularNotas);
    valorSaque.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcularNotas();
        }
    });

    function calcularNotas() {
        hideFeedback();
        hideResultado();

        const valor = parseInt(valorSaque.value);
        
        if (isNaN(valor) || valor <= 0) {
            showFeedback('Por favor, digite um valor válido maior que zero.', 'error');
            return;
        }
        
        const notas = [100, 50, 20, 10, 5, 2, 1];
        let restante = valor;
        const quantidadeNotas = {};

        for (const nota of notas) {
            if (restante >= nota) {
                quantidadeNotas[nota] = Math.floor(restante / nota);
                restante = restante % nota;
            }
        }

        if (restante === 0) {
            showFeedback(`Saque de R$ ${valor.toFixed(2).replace('.', ',')} realizado com sucesso!`, 'success');
            mostrarResultado(valor, quantidadeNotas);
        } else {
            showFeedback('Não foi possível processar o saque. Por favor, tente outro valor.', 'error');
        }
    }

    function mostrarResultado(valor, quantidadeNotas) {
        notasContainer.innerHTML = '';
        
        const notasOrdenadas = Object.keys(quantidadeNotas)
            .map(Number)
            .sort((a, b) => b - a);
        
        notasOrdenadas.forEach((nota, index) => {
            setTimeout(() => {
                const notaItem = document.createElement('div');
                notaItem.className = 'nota-item';
                notaItem.innerHTML = `
                    <span>Nota de R$ ${nota.toFixed(2).replace('.', ',')}</span>
                    <span class="nota-quantidade">${quantidadeNotas[nota]} unidade(s)</span>
                `;
                notasContainer.appendChild(notaItem);
            }, index * 100);
        });

        showResultado();
    }

    function showFeedback(message, type) {
        feedbackDiv.textContent = message;
        feedbackDiv.className = `feedback-show feedback-${type}`;
        
        setTimeout(hideFeedback, 5000);
    }

    function hideFeedback() {
        feedbackDiv.className = 'feedback-hidden';
    }

    function showResultado() {
        resultadoDiv.className = 'resultado-show';
    }

    function hideResultado() {
        resultadoDiv.className = 'resultado-hidden';
        notasContainer.innerHTML = '';
    }
});