"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class NonsenseNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NonsenseNode, ruleName, childNodes, opacity, precedence); }
}
