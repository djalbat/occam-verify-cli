'use strict';

class Constructor {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  addPart(part) {
    this.parts.push(part);
  }

  asString() {
    debugger
  }

  static fromNothing() {
    const parts = [],
          constructor = new Constructor(parts);

    return constructor;
  }
}

module.exports = Constructor;
