document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const movesDisplay = document.getElementById('moves');
    const pairsFoundDisplay = document.getElementById('pairsFound');
    const resetButton = document.getElementById('resetButton');
    
    let cards = [];
    let flippedCards = [];
    let moves = 0;
    let pairsFound = 0;
    let canFlip = true;
    
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    
    function initGame() {
        gameBoard.innerHTML = '';
        moves = 0;
        pairsFound = 0;
        flippedCards = [];
        canFlip = true;
        updateStats();
        
        cards = [...emojis, ...emojis];
        shuffleArray(cards);
        
        cards.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = index;
            card.dataset.value = emoji;
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function flipCard() {
        if (!canFlip || this.classList.contains('flipped') || this.classList.contains('matched')) {
            return;
        }
        
        this.classList.add('flipped');
        this.textContent = this.dataset.value;
        flippedCards.push(this);
        
        if (flippedCards.length === 2) {
            canFlip = false;
            moves++;
            updateStats();
            checkForMatch();
        }
    }
    
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        
        if (card1.dataset.value === card2.dataset.value) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            flippedCards = [];
            canFlip = true;
            pairsFound++;
            updateStats();
            
            if (pairsFound === emojis.length) {
                setTimeout(() => {
                    alert(`Parabéns! Você completou o jogo em ${moves} jogadas.`);
                }, 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.textContent = '';
                card2.textContent = '';
                flippedCards = [];
                canFlip = true;
            }, 1000);
        }
    }
    
    function updateStats() {
        movesDisplay.textContent = moves;
        pairsFoundDisplay.textContent = `${pairsFound}/${emojis.length}`;
    }
    
    resetButton.addEventListener('click', initGame);
    
    initGame();
});