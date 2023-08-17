import "./style.css";

// btn increase turn

function increase() {
  // get value
  const value = (document.getElementById("turn") as HTMLInputElement).value;
  // increase value
  const turn = parseInt(value) + 1;
  // show new turn
  const turnElement = document.getElementById("turn");

  if (turnElement !== null && turnElement !== undefined) {
    turnElement.innerHTML = turn.toString().padStart(2, "0");
  }
}

const btnIncrease = document.getElementById("increase");

if (btnIncrease !== null && btnIncrease !== undefined) {
  btnIncrease.addEventListener("click", increase);
}

// btn decrease turn

function decrease() {
  // get value
  const value = (document.getElementById("turn") as HTMLInputElement).value;
  // decrease value
  const turn = parseInt(value) - 1;
  // show new turn
  const turnElement = document.getElementById("turn");

  if (turnElement !== null && turnElement !== undefined) {
    turnElement.innerHTML = turn.toString().padStart(2, "0");
  }
}

const btnDecrease = document.getElementById("decrease");

if (btnDecrease !== null && btnDecrease !== undefined) {
  btnDecrease.addEventListener("click", decrease);
}

// btn reset turn

function reset() {
  // get value
  const value = (document.getElementById("turn") as HTMLInputElement).value;
  // decrease value
  const turn = parseInt(value) - parseInt(value);
  // show new turn
  const turnElement = document.getElementById("turn");

  if (turnElement !== null && turnElement !== undefined) {
    turnElement.innerHTML = turn.toString().padStart(2, "0");
  }
}

const btnReset = document.getElementById("reset");

if (btnReset !== null && btnReset !== undefined) {
  btnReset.addEventListener("click", reset);
}
