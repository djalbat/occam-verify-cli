"use strict";

import Node from "../node";

export default class ProcedureCallNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ProcedureCallNode, ruleName, childNodes, opacity); }
}
