"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class SubDerivationNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SubDerivationNode, ruleName, childNodes, opacity, precedence); }
}
