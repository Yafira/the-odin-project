// 16x16 grid of square divs
function createGrid(rows, cols, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;

    let squares = new DocumentFragment();

    for (let i = 0; i < rows * cols; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        squares.appendChild(square);

        // hover effect
        gridElement.addEventListener('mouseover', e =>
        e.target.classList.add('square-color')
)
    }

    gridElement.appendChild(squares);
}

createGrid(16, 16, 40,  document.querySelector(".grid"));