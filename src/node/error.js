"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ErrorNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ErrorNode, ruleName, childNodes, opacity, precedence); }
}
