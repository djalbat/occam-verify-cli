"use strict";

import Node from "../node";

export default class StatementNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(StatementNode, ruleName, childNodes, opacity); }
}
