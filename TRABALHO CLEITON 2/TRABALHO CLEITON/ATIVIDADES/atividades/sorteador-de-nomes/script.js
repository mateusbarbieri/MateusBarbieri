document.addEventListener('DOMContentLoaded', function() {
    const nomesInput = document.getElementById('nomesInput');
    const sortearBtn = document.getElementById('sortearBtn');
    const resultadoDiv = document.getElementById('resultado');
    
    sortearBtn.addEventListener('click', function() {
        const texto = nomesInput.value.trim();
        
        if (!texto) {
            resultadoDiv.textContent = 'Por favor, insira alguns nomes.';
            return;
        }

        let nomes = [];
        
        if (texto.includes('\n')) {
            nomes = texto.split('\n')
                .map(nome => nome.trim())
                .filter(nome => nome.length > 0);
        } else {
            nomes = texto.split(',')
                .map(nome => nome.trim())
                .filter(nome => nome.length > 0);
        }
        
        if (nomes.length === 0) {
            resultadoDiv.textContent = 'Nenhum nome válido encontrado.';
            return;
        }
        
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        const nomeSorteado = nomes[indiceSorteado];

        resultadoDiv.textContent = nomeSorteado;
        
        resultadoDiv.style.animation = 'none';
        void resultadoDiv.offsetWidth; 
        resultadoDiv.style.animation = 'destaque 0.5s';
    });
});