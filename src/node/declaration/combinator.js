"use strict";

import DeclarationNode from "../../node/declaration";

import { STATEMENT_RULE_NAME } from "../../ruleNames";

export default class ContainedDeclarationNode extends DeclarationNode {
  getStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNode = this.getNodeByRuleName(ruleName);

    return statementNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return DeclarationNode.fromRuleNameChildNodesOpacityAndPrecedence(ContainedDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
