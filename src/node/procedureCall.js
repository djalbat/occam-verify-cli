"use strict";

import Node from "../node";

export default class ProcedureCallNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureCallNode, ruleName, childNodes, opacity, precedence); }
}
