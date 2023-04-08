const screenDiv = document.querySelector(".screen");

function createGrid(numSquares) {
  const totalSquares = numSquares * numSquares;
  screenDiv.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  screenDiv.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
  for (let i = 0; i < totalSquares; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    screenDiv.appendChild(gridDiv);
  }
}

createGrid(16);

// Select all the grid divs and add event listeners
const gridDivs = document.querySelectorAll(".grid-div");
gridDivs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    if (div.style.backgroundColor !== "black") {
      div.style.backgroundColor = "gray";
    }
  });
  div.addEventListener("mouseleave", () => {
    if (div.style.backgroundColor !== "black") {
      div.style.backgroundColor = "white";
    }
  });
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black";
  });
});

const newGridBtn = document.getElementById("new-grid-btn");
newGridBtn.addEventListener("click", () => {
  let numSquares = prompt(
    "Enter the number of squares per side (maximum 100):"
  );
  //parse the string back into an int
  numSquares = parseInt(numSquares);

  if (isNaN(numSquares) || numSquares < 1 || numSquares > 100) {
    alert("Invalid input! Please enter a number between 1 and 100.");
    //return if invalid
    return;
  }

  //clear old grid and callback create grid for entered amount of squares
  screenDiv.innerHTML = "";
  createGrid(numSquares);

  //enalrge screen for amount of grid squares added, account 20px for each
  screenDiv.style.width = `${numSquares * 20}px`;
  screenDiv.style.height = `${numSquares * 20}px`;

  //get screen container and enlarge in conjunction with the grid itself plus 20 px buffer
  const screenContainer = document.querySelector(".screen-container");
  screenContainer.style.width = `${numSquares * 20 + 20}px`;
  screenContainer.style.height = `${numSquares * 20 + 20}px`;

  // Select all the grid divs and add event listeners
  const gridDivs = document.querySelectorAll(".grid-div");
  gridDivs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      if (div.style.backgroundColor !== "black") {
        div.style.backgroundColor = "gray";
      }
    });
    div.addEventListener("mouseleave", () => {
      if (div.style.backgroundColor !== "black") {
        div.style.backgroundColor = "white";
      }
    });
    div.addEventListener("click", () => {
      div.style.backgroundColor = "black";
    });
  });
});

//VERSION 1

// const container = document.getElementById('container')
// const eraserBtn = document.getElementById('Eraser')
// const blackBtn = document.getElementById('black')

// for(i = 0; i < 64; i++){
//     const newDiv = document.createElement('div')
//     newDiv.classList.add('cubics')
//     container.append(newDiv)

//     newDiv.addEventListener('mouseover', () => {
//         newDiv.style.backgroundColor = 'red'
//     })

//     blackBtn.addEventListener('click', () => {
//         newDiv.addEventListener('mouseover', () => {
//             newDiv.style.backgroundColor = 'black'
//         })
//     })

//     eraserBtn.addEventListener('click', () => {
//         newDiv.addEventListener('mouseover', () => {
//             newDiv.style.backgroundColor = 'white'
//         })
//     })
// }
