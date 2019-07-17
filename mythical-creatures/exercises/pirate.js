class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.crimes = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.crimes++
    if (this.crimes >= 3) {
      this.cursed = true;
    }
  }  
  
  robShip() {
    this.booty = 100;
    return "YAARRR!";
  }
}

module.exports = Pirate;