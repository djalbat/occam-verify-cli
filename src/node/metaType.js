"use strict";

import Node from "../node";

export default class MetaTypeNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(MetaTypeNode, ruleName, childNodes, opacity); }
}
