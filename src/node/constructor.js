"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class ConstructorNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorNode, ruleName, childNodes, opacity, precedence); }
}
