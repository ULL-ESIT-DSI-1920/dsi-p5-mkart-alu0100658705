import players from "../assets/images/kart-*.png";
import {
  KartPlayer
} from "./KartPlayer.js";

const startButton = document.querySelector(".start");
const restartButton = document.querySelector(".restart");
const road = document.querySelector(".road");
const karts = [];
let timer = null;
let incremento = 0;

for (const [name, image] of Object.entries(players)) {
  const config = {
    image: image,
    y: (karts.length = incremento)
  };
  const kart = new KartPlayer(name, config);
  kart.addToRoad(road);
  karts.push(kart);
  incremento += 75;
}

const startRace = () => {
  timer = setInterval(() => startIteration(), 1000 / 2);
  startButton.disabled = true;
  restartButton.disabled = true;
};

const endRace = () => {
  clearInterval(timer);
  karts.forEach(kart => (kart.isWinner() ? kart.win() : kart.lose()));
  restartButton.disabled = false;
};

const restartRace = () => {
  karts.forEach(kart => kart.restart());
  startButton.disabled = false;
};

const startIteration = () => {
  karts.forEach(kart => kart.inc());
  if (karts.some(kart => kart.isWinner())) endRace();
};

startButton.onclick = () => startRace();
restartButton.onclick = () => restartRace();