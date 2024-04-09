let currentPlayer = 'X';
const cells = document.querySelectorAll('td');
let movesMade = 0;

function mark(cell) {
    if (cell.innerHTML === 'X' || cell.innerHTML === 'O') {
        // Αν το κελί έχει ήδη σημαδευτεί, αγνοείται η ενέργεια
        return;
    }
    cell.innerHTML = currentPlayer;
    movesMade++;
    if (checkForWinner()) {
        alert('Νικητής ' + currentPlayer + '!!');
        return;
    }
    if (movesMade === 9) {
        alert('Ισοπαλία !!!');
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML;
    });
}