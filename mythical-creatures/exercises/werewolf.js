class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.isHungry = false;
  }

  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    if (this.wolf === true) {
      this.isHungry = true;
    }
  }

  eat(victim) {
    if (this.human === true) {
      return;
    } else {
      this.isHungry = false;
      this.wolf = false;
      victim.alive = false;
    }
  }
}

module.exports = Werewolf;