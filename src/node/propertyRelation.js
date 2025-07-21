"use strict";

import Node from "../node";

export default class PropertyRelationNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(PropertyRelationNode, ruleName, childNodes, opacity, precedence); }
}
