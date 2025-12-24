"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class CombinatorNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(CombinatorNode, ruleName, childNodes, opacity, precedence); }
}
