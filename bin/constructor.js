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
    const termString = nodeAsString(this.termNode),
          typeString = this.type.asString(),
          string = `${termString}:${typeString}`;

    return string;
  }

  static fromTermNodeAndType(termNode, type) {
    const constructor = new Constructor(termNode, type);

    return constructor;
  }
}

module.exports = Constructor;
