"use strict";

import Node from "../node";

export default class MetaLemmaNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(MetaLemmaNode, ruleName, childNodes, opacity); }
}
