"use strict";

const { nodeAsString } = require("./utilities/node");

class Combinator {
  constructor(statementNode, type) {
    this.statementNode = statementNode;
    this.type = type;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getType() {
    return this.type;
  }

  asString() {
    let string;

    const statementString = nodeAsString(this.statementNode);

    if (this.type === undefined) {
      string = `${statementString}`;
    } else {
      const noSuperType = true,
            typeString = this.type.asString(noSuperType);

      string = `${statementString}:${typeString}`;
    }

    return string;
  }

  static fromStatementNodeAndType(statementNode, type) {
    const combinator = new Combinator(statementNode, type);

    return combinator;
  }
}

module.exports = Combinator;
