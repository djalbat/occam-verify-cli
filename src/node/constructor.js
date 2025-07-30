"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class ConstructorNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorNode, ruleName, childNodes, opacity, precedence); }
}
