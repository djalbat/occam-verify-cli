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

  isUndefined() {
    return (this.termNode === null);
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
    const termNode = null,
          variable = new Variable(type, name, termNode);

    return variable;
  }

  static fromTypeNameAndTermNode(type, name, termNode) {
    const variable = new Variable(type, name, termNode);

    return variable;
  }
}
