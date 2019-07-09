'use strict';

class Variable {
  constructor(name, typeName) {
    this.name = name;
    this.typeName = typeName;
  }

  getName() {
    return this.name;
  }

  getTypeName() {
    return this.typeName;
  }

  matchName(name) {
    return (this.name === name);
  }

  asString() {
    const string = (this.typeName === undefined) ?
                    `${this.name}` :
                      `${this.name}:${this.typeName}`;

    return string;
  }

  static fromName(name) {
    const typeName = undefined,
          variable = new Variable(name, typeName);

    return variable;
  }

  static fromNameAndTypeName(name, typeName) {
    const variable = new Variable(name, typeName);

    return variable;
  }
}

module.exports = Variable;
