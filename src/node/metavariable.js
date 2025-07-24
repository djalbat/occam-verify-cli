"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class MetavariableNode extends NonTerminalNode {
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
