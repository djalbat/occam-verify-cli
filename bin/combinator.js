"use strict";

const { nodeAsString } = require("./utilities/node");

class Combinator {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  asString() {
    let string;

    const statementString = nodeAsString(this.statementNode);

    string = `${statementString}`;

    return string;
  }

  static fromStatementNode(statementNode) {
    const combinator = new Combinator(statementNode);

    return combinator;
  }
}

module.exports = Combinator;
