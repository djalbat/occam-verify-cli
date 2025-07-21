"use strict";

import Node from "../node";

export default class ProofNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ProofNode, ruleName, childNodes, opacity, precedence); }
}
