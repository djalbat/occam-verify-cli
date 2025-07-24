"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class TopLevelMetaAssertionNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TopLevelMetaAssertionNode, ruleName, childNodes, opacity, precedence); }
}
