"use strict";

import Node from "../node";

export default class LemmaNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(LemmaNode, ruleName, childNodes, opacity, precedence); }
}
