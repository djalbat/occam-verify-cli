"use strict";

import Node from "../node";

export default class JudgementNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(JudgementNode, ruleName, childNodes, opacity); }
}
