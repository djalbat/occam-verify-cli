"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../node/nonTerminal";

import { TERM_RULE_NAME } from "../ruleNames";

const { first, last } = arrayUtilities;

export default class EqualityNode extends NonTerminalNode {
  getTermNodes() {
    const ruleName = TERM_RULE_NAME,
          termNodes = this.getNodesByRuleName(ruleName);

    return termNodes;
  }

  getLeftTermNode() {
    const termNodes = this.getTermNodes(),
          firstTermNode = first(termNodes),
          leftTermNode = firstTermNode; ///

    return leftTermNode;
  }

  getRightTermNode() {
    const termNodes = this.getTermNodes(),
          firstTermNode = last(termNodes),
          rightTermNode = firstTermNode; ///

    return rightTermNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(EqualityNode, ruleName, childNodes, opacity, precedence); }
}
