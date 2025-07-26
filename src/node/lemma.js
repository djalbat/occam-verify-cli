"use strict";

import TopLevelAssertionNode from "../node/topLevelAssertion";

export default class LemmaNode extends TopLevelAssertionNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TopLevelAssertionNode.fromRuleNameChildNodesOpacityAndPrecedence(LemmaNode, ruleName, childNodes, opacity, precedence); }
}
