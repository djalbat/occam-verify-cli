"use strict";

class Variable {
  constructor(name, value, type) {
    this.name = name;
    this.value = value;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  getType() {
    return this.type;
  }

  setValue(value) {
    this.value = value;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  asString() {
    const typeName = this.type.getName(),
		      string = `${this.name}:${typeName}`;

    return string;
  }

  static fromNameAndType(name, type) {
    const value = undefined,
          variable = new Variable(name, value, type);

    return variable;
  }
}

module.exports = Variable;
