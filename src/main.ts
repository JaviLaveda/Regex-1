import "./style.css";

// function increase() {
//   const turnElement = (document.getElementById("turn") as HTMLInputElement).innerText;
//   if (turnElement !== null && turnElement !== undefined) {
//     const turn = parseInt(turnElement) + 1;
//     turnElement.innerText = turn.toString().padStart(2, "0");
//   }
// }

// NEXT BUTTON
function next() {
  //get value
  const turnValue = (document.getElementById("turn") as HTMLDivElement)
    .innerText;
  //operate
  const turnNext = parseInt(turnValue) + 1;
  //show
  const turnElement = document.getElementById("turn");
  if (turnElement !== null && turnElement !== undefined) {
    turnElement.innerHTML = turnNext.toString().padStart(2, "0");
  }
}
const btnIncrease = document.getElementById("next");

if (
  btnIncrease !== null &&
  btnIncrease !== undefined &&
  btnIncrease instanceof HTMLButtonElement
) {
  btnIncrease.addEventListener("click", next);
}

// BACK BUTTON

function back() {
  //get value
  const turnValue = (document.getElementById("turn") as HTMLDivElement)
    .innerText;
  //operate
  const turnBack = parseInt(turnValue) - 1;
  //show
  const turnElement = document.getElementById("turn");
  if (turnBack >= 0 && turnElement !== null && turnElement !== undefined) {
    turnElement.innerHTML = turnBack.toString().padStart(2, "0");
  }
}

const btnBack = document.getElementById("back");

if (
  btnBack !== null &&
  btnBack !== undefined &&
  btnBack instanceof HTMLButtonElement
) {
  btnBack.addEventListener("click", back);
}

// RESET BUTTON

function reset() {
  //get value
  const turnValue = (document.getElementById("turn") as HTMLDivElement)
    .innerText;
  //operate
  const turnReset = parseInt(turnValue) * 0;
  //show
  const turnElement = document.getElementById("turn");
  if (turnElement !== null && turnElement !== undefined) {
    turnElement.innerHTML = turnReset.toString().padStart(2, "0");
  }
}

const btnReset = document.getElementById("reset");

if (
  btnReset !== null &&
  btnReset !== undefined &&
  btnReset instanceof HTMLButtonElement
) {
  btnReset.addEventListener("click", reset);
}

// INPUT BUTTON

function input() {
  //get value
  const inputValue = (document.getElementById("input") as HTMLInputElement)
    .value;
  //operate
  const turnInput = parseInt(inputValue);
  //show
  const inputElement = document.getElementById("turn");
  if (turnInput >= 0 && inputElement !== null && inputElement !== undefined) {
    inputElement.innerHTML = turnInput.toString().padStart(2, "0");
  }
}

const btnInput = document.getElementById("okInput");

if (
  btnInput !== null &&
  btnInput !== undefined &&
  btnInput instanceof HTMLButtonElement
) {
  btnInput.addEventListener("click", input);
}
