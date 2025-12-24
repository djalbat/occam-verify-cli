"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class NonsenseNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NonsenseNode, ruleName, childNodes, opacity, precedence); }
}
