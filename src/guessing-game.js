class GuessingGame {
    constructor() {
      this.try = 0;
      this.min = 0;
      this.max = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.try = Math.round(this.min + (this.max-this.min)/2);
      return this.try;
    }

    lower() {
      this.max = this.try;
    }

    greater() {
      this.min = this.try;
      
    }
}

module.exports = GuessingGame;
