"use strict";

import Node from "../node";

export default class ErrorNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ErrorNode, ruleName, childNodes, opacity); }
}
