"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { AXIOM_BODY_RULE_NAME, AXIOM_HEADER_RULE_NAME } from "../ruleNames";

export default class AxiomNode extends NonTerminalNode {
  getAxiomBodyNode() {
    const ruleName = AXIOM_BODY_RULE_NAME,
          axiomBodyNode = this.getNodeByRuleName(ruleName);

    return axiomBodyNode;
  }


  getAxiomHeaderNode() {
    const ruleName = AXIOM_HEADER_RULE_NAME,
          axiomHeaderNode = this.getNodeByRuleName(ruleName);

    return axiomHeaderNode;
  }

  getSignatureNode() {
    const axiomHeaderNode = this.getAxiomHeaderNode(),
          signatureNode = axiomHeaderNode.getSignatureNode();

    return signatureNode;
  }

  getLabelNodes() {
    const axiomHeaderNode = this.getAxiomHeaderNode(),
          labelNodes = axiomHeaderNode.getLabelNodes();

    return labelNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(AxiomNode, ruleName, childNodes, opacity, precedence); }
}
