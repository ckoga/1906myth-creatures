class Wizard {
  constructor(obj) {
    this.name = obj.name;
    this.bearded = true;
    this.isRested = true;
    this.spells = 0;
    if (obj.bearder === false) {
      this.bearder = obj.bearded
    }

  }
  
  incantation(spell) {
    return spell.toUpperCase()
  }

  cast() {
    this.spells++
    if (this.spells >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    }
    return 'MAGIC BULLET'
  }
}

module.exports = Wizard;