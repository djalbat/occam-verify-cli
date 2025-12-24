"use strict";

import MetaLemmaMetaTheoremNode from "../node/metaLemmaMetaTheorem";

import { METATHEOREM_BODY_RULE_NAME, METATHEOREM_HEADER_RULE_NAME } from "../ruleNames";

export default class MetatheoremNode extends MetaLemmaMetaTheoremNode {
  static bodyRuleName = METATHEOREM_BODY_RULE_NAME;

  static headerRuleName = METATHEOREM_HEADER_RULE_NAME;

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MetaLemmaMetaTheoremNode.fromRuleNameChildNodesOpacityAndPrecedence(MetatheoremNode, ruleName, childNodes, opacity, precedence); }
}
