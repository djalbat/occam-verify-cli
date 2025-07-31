"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { SATISFIABLE } from "../constants";
import { PROOF_RULE_NAME,
         DEDUCTION_RULE_NAME,
         SUPPOSITION_RULE_NAME,
         PARENTHESISED_LABELS_RULE_NAME } from "../ruleNames";

export default class TopLevelAssertionNode extends NonTerminalNode {
  isSatisfiable() {
    let satisfiable = false;

    this.someChildNode((childNode, index) => {
      const terminalNode = childNode,
            content = terminalNode.getContent(),
            contentSatisfiable = (content === SATISFIABLE);

      if (contentSatisfiable) {
        satisfiable = true;
      }

      if (index === 0) {
        return true;
      }
    });

    return satisfiable;
  }

  getLabelNodes() {
    let labelNodes = [];

    const parenthesisedLabelsNode = this.getParenthesisedLabelsNode();

    if (parenthesisedLabelsNode !== null) {
      labelNodes = parenthesisedLabelsNode.getLabelNodes();
    }

    return labelNodes;
  }

  getProofNode() {
    const ruleName = PROOF_RULE_NAME,
          proofNode = this.getNodeByRuleName(ruleName);

    return proofNode;
  }

  getDeductionNode() {
    const ruleName = DEDUCTION_RULE_NAME,
          deductionNode = this.getNodeByRuleName(ruleName);

    return deductionNode;
  }

  getSuppositionNodes() {
    const ruleName = SUPPOSITION_RULE_NAME,
          suppositionNodes = this.getNodesByRuleName(ruleName);

    return suppositionNodes;
  }

  getParenthesisedLabelsNode() {
    const ruleName = PARENTHESISED_LABELS_RULE_NAME,
          parenthesisedLabelsNode = this.getNodesByRuleName(ruleName);

    return parenthesisedLabelsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
