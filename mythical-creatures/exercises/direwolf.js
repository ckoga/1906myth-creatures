class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location) {
    this.starksToProtect.push(stark)
    stark.safe = true;
    }
    if (this.starksToProtect.length > 2) {
      this.starksToProtect.shift();
    }
    if (this.starksToProtect.length === 0) {
      this.huntsWhiteWalkers = true;
    } else {
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    this.starksToProtect.shift(stark)
    stark.safe = false;
  }
}


module.exports = Direwolf;