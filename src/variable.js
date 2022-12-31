"use strict";

export default class Variable {
  constructor(type, name, value) {
    this.type = type;
    this.name = name;
    this.value = value;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  isDefined() {
    const defined = (this.value !== undefined);

    return defined;
  }

  setValue(value) {
    this.value = value;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  asString() {
    let string;

    if (this.type === null) {
      string = this.name;
    } else {
      const typeName = this.type.getName();

      string = `${this.name}:${typeName}`;
    }

    return string;
  }

  static fromTypeAndName(type, name) {
    const value = undefined,
          variable = new Variable(type, name, value);

    return variable;
  }
}
