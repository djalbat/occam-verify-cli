"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { THEOREM_BODY_RULE_NAME, THEOREM_HEADER_RULE_NAME } from "../ruleNames";

export default class TheoremNode extends NonTerminalNode {
  getTheoremBodyNode() {
    const ruleName = THEOREM_BODY_RULE_NAME,
          theoremBodyNode = this.getNodeByRuleName(ruleName);

    return theoremBodyNode;
  }

  getTheoremHeaderNode() {
    const ruleName = THEOREM_HEADER_RULE_NAME,
          theoremHeaderNode = this.getNodeByRuleName(ruleName);

    return theoremHeaderNode;
  }

  getLabelsNode() {
    const theoremHeaderNode = this.getTheoremHeaderNode(),
          labelNodes = theoremHeaderNode.getLabelNodes();

    return labelNodes;
  }

  getSuppositionNodes() {
    const theoremBodyNode = this.getTheoremBodyNode(),
          suppositionNodes = theoremBodyNode.getSuppositionNodes();

    return suppositionNodes;
  }

  getDeductionNode() {
    const theoremBodyNode = this.getTheoremBodyNode(),
          deductionNode = theoremBodyNode.getDeductionNode();

    return deductionNode;
  }

  getProofNode() {
    const theoremBodyNode = this.getTheoremBodyNode(),
          proofNode = theoremBodyNode.getProofNode();

    return proofNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TheoremNode, ruleName, childNodes, opacity, precedence); }
}
