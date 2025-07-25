"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeTermNode } from "../utilities/node";

export default class MetavariableNode extends NonTerminalNode {
  getTermNode() {
    const termNode = this.findChildNode((childNode) => {
      const childNodeTermNode = isNodeTermNode(childNode);

      if (childNodeTermNode) {
        return true;
      }
    }) || null;

    return termNode;
  }

  getMetavariableName() {
    let metaVariableName;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
               content = terminalNode.getContent();

        metaVariableName = content; ///

        return true;
      }
    });

    return metaVariableName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(MetavariableNode, ruleName, childNodes, opacity, precedence); }
}
