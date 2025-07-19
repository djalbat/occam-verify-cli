"use strict";

import Node from "../node";

export default class ConstructorNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ConstructorNode, ruleName, childNodes, opacity); }
}
