document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('[data-board]');
    const cells = document.querySelectorAll('[data-cell]');
    const winningMessage = document.querySelector('[data-winning-message]');
    const winningMessageText = document.querySelector('[data-winning-message-text]');
    const restartButton = document.querySelector('[data-restart-button]');
    
    let isOTurn = false;
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const startGame = () => {
        isOTurn = false;
        cells.forEach(cell => {
            cell.classList.remove('X', 'O');
            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once: true });
        });
        setBoardHoverClass();
        winningMessage.classList.remove('show');
    };

    const handleClick = (e) => {
        const cell = e.target;
        const currentClass = isOTurn ? 'O' : 'X';
        placeMark(cell, currentClass);
        
        if (checkWin(currentClass)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
            setBoardHoverClass();
        }
    };

    const placeMark = (cell, currentClass) => {
        cell.classList.add(currentClass);
    };

    const swapTurns = () => {
        isOTurn = !isOTurn;
    };

    const setBoardHoverClass = () => {
        board.classList.remove('X', 'O');
        board.classList.add(isOTurn ? 'O' : 'X');
    };

    const checkWin = (currentClass) => {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cells[index].classList.contains(currentClass);
            });
        });
    };

    const isDraw = () => {
        return [...cells].every(cell => {
            return cell.classList.contains('X') || cell.classList.contains('O');
        });
    };

    const endGame = (draw) => {
        if (draw) {
            winningMessageText.innerText = 'Empate!';
        } else {
            winningMessageText.innerText = `${isOTurn ? 'O' : 'X'} Venceu!`;
        }
        winningMessage.classList.add('show');
    };

    restartButton.addEventListener('click', startGame);

    startGame();
});