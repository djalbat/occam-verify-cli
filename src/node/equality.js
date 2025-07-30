"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class EqualityNode extends NonTerminalNode {
  getLeftTermNode() {
    let leftTermNode;

    this.someChildNode((childNode, index) => {
      if (index === 0) {
        leftTermNode = childNode; ///

        return true;
      }
    });

    return leftTermNode;
  }

  getRightTermNode() {
    let rightTermNode;

    this.someChildNode((childNode, index) => {
      if (index === 2) {
        rightTermNode = childNode; ///

        return true;
      }
    });

    return rightTermNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(EqualityNode, ruleName, childNodes, opacity, precedence); }
}
