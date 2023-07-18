//import "./style.css";

// console.log("Hello Typescript!");

interface Group {
  name: string;
  year: number;
  active: boolean;
  genre: string;
}

const nameStyle = "background-color: green; font-size: 18px; font-style: bold;";

const rock = "🎸Rock";
const popRock = "🎵 Pop Rock";
const heavy = "🤘 Hard Rock";
const classic = "🎼 Clásica";

const grupoA: Group = {
  name: "The Beatles",
  year: 1960,
  active: true,
  genre: `${popRock}`,
};

const grupoB: Group = {
  name: "Queen",
  year: 1970,
  active: false,
  genre: `${rock}`,
};

const grupoC: Group = {
  name: "AC DC",
  year: 1960,
  active: true,
  genre: `${heavy}`,
};

const grupoD: Group = {
  name: "Ludwig van Beethoven",
  year: 1770,
  active: false,
  genre: `${classic}`,
};

const grupoE: Group = {
  name: "The Rolling Stones",
  year: 1962,
  active: true,
  genre: `${rock}`,
};

console.log(grupoA, grupoB, grupoC, grupoD, grupoE);
