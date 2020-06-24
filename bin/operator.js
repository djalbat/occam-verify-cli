"use strict";

const nodeUtilities = require("./utilities/node");

const { nodeAsString } = nodeUtilities;

class Operator {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  asString() {
    const statementString = nodeAsString(this.statementNode),
          string = `${statementString}`;

    return string;
  }

  static fromStatementNode(statementNode) {
    const constructor = new Operator(statementNode);

    return constructor;
  }
}

module.exports = Operator;
