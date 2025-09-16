"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { METATHEOREM_BODY_RULE_NAME, METATHEOREM_HEADER_RULE_NAME } from "../ruleNames";

export default class MetatheoremNode extends NonTerminalNode {
  getMetatheoremBodyNode() {
    const ruleName = METATHEOREM_BODY_RULE_NAME,
          metatheoremBodyNode = this.getNodeByRuleName(ruleName);

    return metatheoremBodyNode;
  }

  getMetatheoremHeaderNode() {
    const ruleName = METATHEOREM_HEADER_RULE_NAME,
          metatheoremHeaderNode = this.getNodeByRuleName(ruleName);

    return metatheoremHeaderNode;
  }

  getLabelNode() {
    const metatheoremHeaderNode = this.getMetatheoremHeaderNode(),
          labelNode = metatheoremHeaderNode.getLabelNode();

    return labelNode;
  }

  getSuppositionNodes() {
    const metatheoremBodyNode = this.getMetatheoremBodyNode(),
          suppositionNodes = metatheoremBodyNode.getSuppositionNodes();

    return suppositionNodes;
  }

  getConclusionNode() {
    const metatheoremBodyNode = this.getMetatheoremBodyNode(),
          conclusionNode = metatheoremBodyNode.getConclusionNode();

    return conclusionNode;
  }

  getProofNode() {
    const metatheoremBodyNode = this.getMetatheoremBodyNode(),
          proofNode = metatheoremBodyNode.getProofNode();

    return proofNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(MetatheoremNode, ruleName, childNodes, opacity, precedence); }
}
