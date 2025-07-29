"use strict";

import { NonTerminalNode } from "occam-parsers";

import { UNDEFINED } from "../../constants";
import { isNodeTermNode, isNodeFrameNode } from "../../utilities/node";

export default class DefinedAssertionNode extends NonTerminalNode {
  isNegated() {
    let negated = false;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              content = terminalNode.getContent(),
              contentUndefined = (content === UNDEFINED);

        if (contentUndefined) {
          negated = true;

          return true;
        }
      }
    });

    return negated;
  }

  getTermNode() {
    const termNode = this.findChildNode((childNode) => {
      const childNodeTermNode = isNodeTermNode(childNode);

      if (childNodeTermNode) {
        return true;
      }
    }) || null;

    return termNode;
  }

  getFrameNode() {
    const frameNode = this.findChildNode((childNode) => {
      const childNodeFrameNode = isNodeFrameNode(childNode);

      if (childNodeFrameNode) {
        return true;
      }
    }) || null;

    return frameNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DefinedAssertionNode, ruleName, childNodes, opacity, precedence); }
}
