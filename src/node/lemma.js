"use strict";

import Node from "../node";

export default class LemmaNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(LemmaNode, ruleName, childNodes, opacity); }
}
