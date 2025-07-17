"use strict";

import { rulesUtilities } from "occam-parsers";

const { rulesFromStartRuleAndRuleMap } = rulesUtilities;

export function setNonTerminalNodes(parser, nodeMap, DefaultNonTerminalNode) {
  const startRule = parser.getStartRule(),
        ruleMap = parser.getRuleMap(),
        rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

  rules.forEach((rule) => {
    const ruleName = rule.getName(),
          NonTerminalNode = nodeMap[ruleName] || DefaultNonTerminalNode; ///

    rule.setNonTerminalNode(NonTerminalNode);
  });
}
