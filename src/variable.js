"use strict";

export default class Variable {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  asString(tokens) {
    const typeName = this.type.getName(),
          string = `${this.name}:${typeName}`;

    return string;
  }

  static fromTypeAndName(type, name) {
    const variable = new Variable(type, name);

    return variable;
  }
}
