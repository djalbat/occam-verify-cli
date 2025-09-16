"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { ARGUMENT_RULE_NAME } from "../ruleNames";

export default class MetavariableNode extends NonTerminalNode {
  getTermNode() {
    let termNode = null;

    const argumentNode = this.getArgumentNode();

    if (argumentNode !== null) {
      termNode = argumentNode.getTermNode();
    }

    return termNode;
  }

  getTypeNode() {
    let typeNode = null;

    const argumentNode = this.getArgumentNode();

    if (argumentNode !== null) {
      typeNode = argumentNode.getTypeNode();
    }

    return typeNode;
  }

  getArgumentNode() {
    const ruleName = ARGUMENT_RULE_NAME,
          argumentNode = this.getNodeByRuleName(ruleName);

    return argumentNode;
  }

  getMetavariableName() {
    let metaVariableName;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              content = terminalNode.getContent();

        metaVariableName = content; ///

        return true;
      }
    });

    return metaVariableName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(MetavariableNode, ruleName, childNodes, opacity, precedence); }
}
