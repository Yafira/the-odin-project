// 16x16 grid of square divs
function createGrid(x, y, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;

    let squares = new DocumentFragment();

    for (let i = 0; i < x * y; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        squares.appendChild(square);
    }

    gridElement.appendChild(squares);
}

createGrid(16, 16, 40,  document.querySelector(".grid"));