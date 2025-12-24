"use strict";

import MetaLemmaMetaTheoremNode from "../node/metaLemmaMetaTheorem";

import { META_LEMMA_BODY_RULE_NAME, META_LEMMA_HEADER_RULE_NAME } from "../ruleNames";

export default class MetaLemmaNode extends MetaLemmaMetaTheoremNode {
  static bodyRuleName = META_LEMMA_BODY_RULE_NAME;

  static headerRuleName = META_LEMMA_HEADER_RULE_NAME;

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MetaLemmaMetaTheoremNode.fromRuleNameChildNodesOpacityAndPrecedence(MetaLemmaNode, ruleName, childNodes, opacity, precedence); }
}
