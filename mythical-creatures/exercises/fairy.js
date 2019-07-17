class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWard= [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++) {
    this.clothes.dresses.push(flowers[i]);
    }
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition !== 'Vengeful'){      
      } else {
      infant.disposition = 'Malicious' 
      this.humanWard.push(infant)
      }
      return infant;
  }
}

module.exports = Fairy;