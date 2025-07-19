"use strict";

import Node from "../node";

export default class DerivationNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(DerivationNode, ruleName, childNodes, opacity); }
}
