"use strict";

import TopLevelMetaAssertionNode from "../node/topLevelMetaAssertion";

export default class RuleNode extends TopLevelMetaAssertionNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TopLevelMetaAssertionNode.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence); }
}
