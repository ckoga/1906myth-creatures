class Hobbit {
  constructor(name, disposition) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.isShort = true;
    this.hasRing = false;
    if (this.name === 'Frodo') {
      this.hasRing = true;
    }
  }

  celebrateBirthday() {
    this.age++;
    if (this.age >= 33) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }

}

module.exports = Hobbit;