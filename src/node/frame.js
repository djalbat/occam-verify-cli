"use strict";

import Node from "../node";

export default class FrameNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence); }
}
