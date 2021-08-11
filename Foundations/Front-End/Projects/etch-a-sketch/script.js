const grid = document.querySelector(".container");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

// create 16x16 grid of square divs
createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );

    grid.style.setProperty("grid-template-rows",
    `repeat(${userInput.value}, 2fr)`);

    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    console.log(userInput.value);
};

// hover effect
const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");
});

// update grid with user input
userInput.addEventListener("change", updateGrid);


createGrid();