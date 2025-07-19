"use strict";

import Node from "../node";

export default class ReferenceNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ReferenceNode, ruleName, childNodes, opacity); }
}
