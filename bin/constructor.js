'use strict';

const nodeUtilities = require('./utilities/node');

const { nodeAsString } = nodeUtilities;

class Constructor {
  constructor(termNode, type) {
    this.termNode = termNode;
    this.type = type;
  }

  getTermNode() {
    return this.termNode;
  }

  getType() {
    return this.type;
  }

  asString() {
    const termNodeString = nodeAsString(this.termNode),
          typeString = this.type.asString(),
          string = `${termNodeString}:${typeString}`;

    return string;
  }

  matchConstructorString(constructorString) {
    const string = this.asString(),
          matchesConstructorString = (string === constructorString);

    return matchesConstructorString;
  }

  static fromTermNodeAndTypeName(termNode, type) {
    const constructor = new Constructor(termNode, type);

    return constructor;
  }
}

module.exports = Constructor;
