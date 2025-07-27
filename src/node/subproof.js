"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeStepNode } from "../utilities/node";

export default class SubproofNode extends NonTerminalNode {
  getStepNode() {
    const stepNode = this.findChildNode((childNode) => {
      const childNodeStepNode = isNodeStepNode(childNode);

      if (childNodeStepNode) {
        return true;
      }
    }) || null;

    return stepNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SubproofNode, ruleName, childNodes, opacity, precedence); }
}
