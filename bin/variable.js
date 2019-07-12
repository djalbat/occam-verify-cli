'use strict';

class Variable {
  constructor(name, value, typeName) {
    this.name = name;
    this.value = value;
    this.typeName = typeName;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  getTypeName() {
    return this.typeName;
  }

  setValue(value) {
    this.value = value;
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

  static fromNameAndTypeName(name, typeName) {
    const value = undefined,
          variable = new Variable(name, value, typeName);

    return variable;
  }
}

module.exports = Variable;
