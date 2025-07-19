"use strict";

import Node from "../node";

export default class TheoremNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(TheoremNode, ruleName, childNodes, opacity); }
}
