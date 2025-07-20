"use strict";

import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { CombinedCustomGrammar as CombinedCustomGrammarBase } from "occam-custom-grammars";

import Node from "../node";
import nodeMap from "../nodeMap";

export default class CombinedCustomGrammar extends CombinedCustomGrammarBase {
  getCombinedRules() {
    const rules = this.getRules(),
          combinedRules = rules;  ///

    return combinedRules;
  }

  postProcess(rules) {
    const combinedRules = this.getCombinedRules();

    rules = [ ///
      ...rules,
      ...combinedRules,
    ];

    rules.forEach((rule) => {
      const ruleName = rule.getName(),
            NonTerminalNode = nodeMap[ruleName] || Node; ///

      rule.setNonTerminalNode(NonTerminalNode);
    });

    rules = eliminateLeftRecursion(rules);  ///

    return rules;
  }
}
