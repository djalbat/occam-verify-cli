"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { TYPE_PREFIX_RULE_NAME } from "../../ruleNames";

export default class TypePrefixDeclarationNode extends NonTerminalNode {
  getTypePrefix() {
    const typePrefixNode = this.getTypePrefixNode(),
          typePrefix = typePrefixNode.getTypePrefix();

    return typePrefix;
  }

  getTypePrefixNode() {
    const ruleName = TYPE_PREFIX_RULE_NAME,
          typePrefixNode = this.getNodeByRuleName(ruleName);

    return typePrefixNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypePrefixDeclarationNode, ruleName, childNodes, opacity, precedence); }
}

