class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim)
    victim.stoned = true;
    this.statues.length > 3 ? this.statues.shift() : this.statues;
  }
}

module.exports = Medusa;