"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class CombinatorNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(CombinatorNode, ruleName, childNodes, opacity, precedence); }
}
