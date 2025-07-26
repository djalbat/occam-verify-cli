"use strict";

import TopLevelMetaAssertionNode from "../node/topLevelMetaAssertion";

export default class MetaLemmaNode extends TopLevelMetaAssertionNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TopLevelMetaAssertionNode.fromRuleNameChildNodesOpacityAndPrecedence(MetaLemmaNode, ruleName, childNodes, opacity, precedence); }
}
