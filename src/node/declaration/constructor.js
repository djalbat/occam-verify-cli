"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { PROVISIONALLY } from "../../constants";
import { TERM_RULE_NAME, TYPE_RULE_NAME } from "../../ruleNames";

export default class ConstructorDeclarationNode extends NonTerminalNode {
  isProvisional() {
    let provisional = false;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode,
              content = terminalNode.getContent(),
              contentProvisionally = (content === PROVISIONALLY);

        if (contentProvisionally) {
          provisional = true;

          return true;
        }
      }
    });

    return provisional;
  }

  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          typeNode = this.getNodeByRuleName(ruleName);

    return typeNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
