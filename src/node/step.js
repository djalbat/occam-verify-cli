"use strict";

import Node from "../node";

export default class StepNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(StepNode, ruleName, childNodes, opacity); }
}
