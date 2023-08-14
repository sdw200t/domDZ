export class Hole {
  constructor(element) {
    this._element = element;
    this.holeAll = element.querySelectorAll(".hole");
    this.place = 1;
    this.newPlace = 1;
  }

  moveOrc() {
    while (this.newPlace == this.place) {
      this.newPlace = Math.floor(1 + Math.random() * 16);
    }

    this._element
      .querySelector(".hole_has-mole")
      .classList.remove("hole_has-mole");
    this.holeAll[this.newPlace - 1].classList.add("hole_has-mole");
    this.place = this.newPlace;
  }

  boomOrc() {}
}
