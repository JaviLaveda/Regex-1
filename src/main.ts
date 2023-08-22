import "./style.css";

// INITIAL VALUE
let turnNumber: number = 0;

// FUNCTIONS

const increase = () => turnNumber++;

const decrease = () => turnNumber--;

const toZero = () => (turnNumber = 0);

const readInput = () => {
  const inputValue = document.getElementById("input");
  if (inputValue && inputValue instanceof HTMLInputElement) {
    turnNumber = parseInt(inputValue.value);
  }
};

const updateUI = () => {
  const turnValue = document.getElementById("turn");
  if (turnValue && turnValue instanceof HTMLHeadingElement) {
    turnValue.textContent = turnNumber.toString().padStart(2, "0");
  }
};

const next = () => {
  increase();
  updateUI();
};

const back = () => {
  if (turnNumber > 0) {
    decrease();
  }
  updateUI();
};

const reset = () => {
  toZero();
  updateUI();
};

const input = () => {
  readInput();
  updateUI();
};

// BUTTONS

const events = () => {
  // NEXT BUTTON
  const btnIncrease = document.getElementById("next");

  if (btnIncrease && btnIncrease instanceof HTMLButtonElement) {
    btnIncrease.addEventListener("click", next);
  }

  // BACK BUTTON

  const btnBack = document.getElementById("back");

  if (btnBack && btnBack instanceof HTMLButtonElement) {
    btnBack.addEventListener("click", back);
  }

  // RESET BUTTON

  const btnReset = document.getElementById("reset");

  if (btnReset && btnReset instanceof HTMLButtonElement) {
    btnReset.addEventListener("click", reset);
  }

  // INPUT BUTTON

  const btnInput = document.getElementById("okInput");

  if (btnInput && btnInput instanceof HTMLButtonElement) {
    btnInput.addEventListener("click", input);
  }
};

document.addEventListener("DOMContentLoaded", events);
