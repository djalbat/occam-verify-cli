"use strict";

import Node from "../node";

export default class MetatheoremNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(MetatheoremNode, ruleName, childNodes, opacity, precedence); }
}
