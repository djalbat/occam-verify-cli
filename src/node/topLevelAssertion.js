"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class TopLevelAssertionNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TopLevelAssertionNode, ruleName, childNodes, opacity, precedence); }
}
