"use strict";

import Node from "../node";

export default class PremiseNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(PremiseNode, ruleName, childNodes, opacity); }
}
