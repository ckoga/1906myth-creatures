class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.action = 0;
    this.layingDown = false;
  }

  shoot() {
    this.action++;
    this.checkTired();
    if (this.cranky === true || this.layingDown === true) {
      return "NO!";
    } else return "Twang!!!";
  }

  run() {
    this.action++;
    this.checkTired();
    if (this.layingDown === false) {
      return "Clop clop clop clop!!!";
    } else return "NO!";
  }
  checkTired() {
    if (this.action >= 3) {
      this.cranky = true;
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  sleep() {
    if (this.standing === true) {
      return "NO!";
    } else this.action = 0;
    this.cranky = false;
    return "ZZZZ";
  }

  drinkPotion() {
    if (this.layingDown === true) {
      return "Not while I'm laying down!";
    } else if (this.cranky === false) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }
}

module.exports = Centaur;
