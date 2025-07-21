"use strict";

import Node from "../node";

export default class MetaLemmaNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(MetaLemmaNode, ruleName, childNodes, opacity, precedence); }
}
