"use strict";

export default class Variable {
  constructor(type, name, termNode) {
    this.type = type;
    this.name = name;
    this.termNode = termNode;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getTermNode() {
    return this.termNode;
  }

  setTermNode(termNode) {
    this.termNode = termNode;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  isEqualTo(variable) {
    let equalTo = false;

    if (variable === this) {
      equalTo = true;
    } else {
      const termNode = variable.getTermNode();

      if (termNode === this.termNode) {
        equalTo = true;
      }
    }

    return equalTo;
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
    const termNode = null,
          variable = new Variable(type, name, termNode);

    return variable;
  }
}
