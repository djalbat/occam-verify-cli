"use strict";

import Node from "../node";

export default class PropertyRelationNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(PropertyRelationNode, ruleName, childNodes, opacity); }
}
