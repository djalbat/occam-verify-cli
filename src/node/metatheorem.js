"use strict";

import TopLevelMetaAssertionNode from "../node/topLevelMetaAssertion";

export default class MetatheoremNode extends TopLevelMetaAssertionNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TopLevelMetaAssertionNode.fromRuleNameChildNodesOpacityAndPrecedence(MetatheoremNode, ruleName, childNodes, opacity, precedence); }
}
