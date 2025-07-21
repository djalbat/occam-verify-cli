"use strict";

import Node from "../node";

export default class JudgementNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(JudgementNode, ruleName, childNodes, opacity, precedence); }
}
