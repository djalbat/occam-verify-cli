"use strict";

import Node from "../node";

export default class MetatheoremNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(MetatheoremNode, ruleName, childNodes, opacity); }
}
