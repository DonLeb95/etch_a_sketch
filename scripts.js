const squareDiv = document.createElement("div");

let gridOfSquares = [];
const gridContainer = document.querySelector(".grid-container");

for (let i = 0;i < 16 * 16; ++i){
    gridOfSquares[i] = squareDiv;
    gridContainer.appendChild(gridOfSquares[i]);
}


