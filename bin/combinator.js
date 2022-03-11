"use strict";

const { nodeAsString } = require("./utilities/node");

class Combinator {
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
    const combinator = new Combinator(expressionNode, type);

    return combinator;
  }
}

module.exports = Combinator;
