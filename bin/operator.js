"use strict";

const nodeUtilities = require("./utilities/node");

const { nodeAsString } = nodeUtilities;

class Operator {
  constructor(expressionNode, type) {
    this.expressionNode = expressionNode;
    this.type = type;
  }

  getExpressionNode() {
    return this.expressionNode;
  }

  getType() {
    return this.type;
  }

  asString() {
    let string;

    const expressionString = nodeAsString(this.expressionNode);

    if (this.type === undefined) {
      string = `${expressionString}`;
    } else {
      const noSuperType = true,
            typeString = this.type.asString(noSuperType);

      string = `${expressionString}:${typeString}`;
    }

    return string;
  }

  static fromExpressionNodeAndType(expressionNode, type) {
    const operator = new Operator(expressionNode, type);

    return operator;
  }
}

module.exports = Operator;
