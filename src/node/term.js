"use strict";

import Node from "../node";

export default class TermNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(TermNode, ruleName, childNodes, opacity); }
}
