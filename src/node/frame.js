"use strict";

import Node from "../node";

export default class FrameNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(FrameNode, ruleName, childNodes, opacity); }
}
