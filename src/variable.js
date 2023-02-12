"use strict";

export default class Variable {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
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

  static fromJSONAndFileContext(json, fileContext) {
    debugger
  }

  static fromNameAndType(name, type) {
    const variable = new Variable(name, type);

    return variable;
  }
}
