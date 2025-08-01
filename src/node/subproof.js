"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { SUPPOSITION_RULE_NAME, SUB_DERIVATION_RULE_NAME } from "../ruleNames";

export default class SubproofNode extends NonTerminalNode {
  isStepNode() {
    const stepNode = false;

    return stepNode;
  }

  isSubproofNode() {
    const subproofNode = true;

    return subproofNode;
  }

  getLastStepNode() {
    const subDerivationNode = this.getSubDerivationNode(),
          lastStepNode = subDerivationNode.getLastStepNode();

    return lastStepNode;
  }

  getSubDerivationNode() {
    const ruleName = SUB_DERIVATION_RULE_NAME,
          subDerivationNode = this.getNodeByRuleName(ruleName);

    return subDerivationNode;
  }

  getSuppositionNodes() {
    const ruleName = SUPPOSITION_RULE_NAME,
          suppositionNodes = this.getNodesByRuleName(ruleName);

    return suppositionNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SubproofNode, ruleName, childNodes, opacity, precedence); }
}
