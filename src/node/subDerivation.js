"use strict";

import Node from "../node";

export default class SubDerivationNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(SubDerivationNode, ruleName, childNodes, opacity); }
}
