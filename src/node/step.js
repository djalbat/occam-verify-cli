"use strict";

import Node from "../node";

export default class StepNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence); }
}
