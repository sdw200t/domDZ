import { Hole } from "./mole-game/mole-game.js";

document.addEventListener("DOMContentLoaded", () => {
  const time = 800;
  const hole = new Hole(document.querySelector(".hole-game"));

  setInterval(() => {
    hole.moveOrc();
  }, time);
});
