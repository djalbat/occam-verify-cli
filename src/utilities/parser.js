"use strict";

import { rulesUtilities } from "occam-parsers";

import Node from "../node";
import nodeMap from "../nodeMap";

const { rulesFromStartRuleAndRuleMap } = rulesUtilities;

export function setNonTerminalNodes(nominalParser) {
  const startRule = nominalParser.getStartRule(),
        ruleMap = nominalParser.getRuleMap(),
        rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

  rules.forEach((rule) => {
    const ruleName = rule.getName(),
          NonTerminalNode = nodeMap[ruleName] || Node; ///

    rule.setNonTerminalNode(NonTerminalNode);
  });
}
