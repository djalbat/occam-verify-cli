"use strict";

export default class Metavariable {
  constructor(name, metaType) {
    this.name = name;
    this.metaType = metaType;
  }

  getName() {
    return this.name;
  }

  getMetaType() {
    return this.metaType;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  asString(tokens) {
    const metaTypeName = this.metaType.getName(),
          string = `${this.name}:${metaTypeName}`;

    return string;
  }

  static fromNameAndMetaType(name, metaType) {
    const metavariable = new Metavariable(name, metaType);

    return metavariable;
  }
}
