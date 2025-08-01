"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { ARGUMENT_RULE_NAME, VARIABLE_RULE_NAME } from "../ruleNames";

export default class TermNode extends NonTerminalNode {
  getVariableNodes() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNodes = this.getNodesByRuleName(ruleName);

    return variableNodes;
  }

  getSingularTermNode() {
    let singularTermNode = null;

    const singularArgumentNode = this.getSingularArgumentNode();

    if (singularArgumentNode !== null) {
      singularTermNode = singularArgumentNode.getSingularTermNode();
    }

    return singularTermNode;
  }

  getSingularArgumentNode() {
    const ruleName = ARGUMENT_RULE_NAME,
          singularArgumentNode = this.getSingularTNodeByRuleName(ruleName);

    return singularArgumentNode;
  }

  getSingularVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          singularVariableNode = this.getSingularTNodeByRuleName(ruleName);

    return singularVariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence); }
}
