document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de toggle
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    // Adiciona evento de clique a cada botão
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Pega o ID da seção relacionada ao botão
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            
            // Alterna a classe 'show' na seção
            section.classList.toggle('show');
            
            // Muda o texto do botão conforme o estado
            if (section.classList.contains('show')) {
                this.textContent = this.textContent.replace('Mostrar', 'Esconder');
            } else {
                this.textContent = this.textContent.replace('Esconder', 'Mostrar');
            }
        });
    });
});