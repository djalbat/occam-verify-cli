"use strict";

import Node from "../node";

export default class AxiomNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(AxiomNode, ruleName, childNodes, opacity, precedence); }
}
