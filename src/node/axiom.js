"use strict";

import TopLevelAssertionNode from "../node/topLevelAssertion";

export default class AxiomNode extends TopLevelAssertionNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TopLevelAssertionNode.fromRuleNameChildNodesOpacityAndPrecedence(AxiomNode, ruleName, childNodes, opacity, precedence); }
}
