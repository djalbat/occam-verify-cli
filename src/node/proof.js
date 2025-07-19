"use strict";

import Node from "../node";

export default class ProofNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ProofNode, ruleName, childNodes, opacity); }
}
