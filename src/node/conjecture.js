"use strict";

import TopLevelAssertionNode from "../node/topLevelAssertion";

export default class ConjectureNode extends TopLevelAssertionNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TopLevelAssertionNode.fromRuleNameChildNodesOpacityAndPrecedence(ConjectureNode, ruleName, childNodes, opacity, precedence); }
}
