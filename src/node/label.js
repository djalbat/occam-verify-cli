"use strict";

import Node from "../node";

export default class LabelNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(LabelNode, ruleName, childNodes, opacity, precedence); }
}
