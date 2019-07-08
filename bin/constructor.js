'use strict';

class Constructor {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  matchConstructorName(constructorName) {
    return (this.name === constructorName);
  }

  asString() {
    const string = `${this.name}`;

    return string;
  }

  static fromConstructorName(constructorName) {
    const name = constructorName,  ///
          type = new Constructor(name);

    return type;
  }
}

module.exports = Constructor;
