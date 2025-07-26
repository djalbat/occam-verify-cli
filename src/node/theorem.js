"use strict";

import TopLevelAssertionNode from "../node/topLevelAssertion";

export default class TheoremNode extends TopLevelAssertionNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TopLevelAssertionNode.fromRuleNameChildNodesOpacityAndPrecedence(TheoremNode, ruleName, childNodes, opacity, precedence); }
}
