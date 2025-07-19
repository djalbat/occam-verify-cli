"use strict";

import Node from "../node";

export default class LabelNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(LabelNode, ruleName, childNodes, opacity); }
}
