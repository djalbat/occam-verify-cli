"use strict";

import Node from "../node";

export default class DeductionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(DeductionNode, ruleName, childNodes, opacity); }
}
