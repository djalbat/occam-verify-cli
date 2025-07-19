"use strict";

import Node from "../../node";

export default class DefinedAssertionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(DefinedAssertionNode, ruleName, childNodes, opacity); }
}
