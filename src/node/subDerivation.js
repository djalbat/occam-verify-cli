"use strict";

import Node from "../node";

export default class SubDerivationNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(SubDerivationNode, ruleName, childNodes, opacity, precedence); }
}
