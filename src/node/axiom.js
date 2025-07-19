"use strict";

import Node from "../node";

export default class AxiomNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(AxiomNode, ruleName, childNodes, opacity); }
}
