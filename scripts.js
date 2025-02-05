function gridBuilder(sqrDim){
    
    if(isNaN(Number(sqrDim)) || sqrDim > 100 || sqrDim < 1){
        alert("There must have been an error. Make sure you only wrote a number(1,22,33,87) and that it isnt higher than 100")
        return gridBuilder(16)
    }
    
    const gridContainer = document.querySelector(".grid-container");
    const gridOfSquares = [];

    gridContainer.replaceChildren();

    for (let i = 0;i < sqrDim * sqrDim; ++i){
        gridOfSquares[i] = document.createElement("div");;
        gridContainer.appendChild(gridOfSquares[i]);    
    }
    
    const gridContData = getComputedStyle(gridContainer);
    const gridContHeight = gridContData.getPropertyValue("height");
    const gridContWidth = gridContData.getPropertyValue("width");

    const innerSqrDim = Number(gridContHeight.replace("px","")) / sqrDim +"px";
    gridOfSquares.forEach((sqr) => sqr.setAttribute("style",
        `height: ${innerSqrDim}; width: ${innerSqrDim};`))
    };

gridBuilder(16);

const gridDensity = document.querySelector(".grid-density");
gridDensity.addEventListener("click", () => {
    const userGridChange = prompt("Write a number that will determine the amount of squares that will be created within the grid in a height * width calculation. Don't go over 100 or below 1!");
    gridBuilder(userGridChange);
        }
    );