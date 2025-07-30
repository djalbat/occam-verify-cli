"use strict";

import { arrayUtilities } from "necessary";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

const { first } = arrayUtilities;

export default class NonTerminalNode extends NonTerminalNodeBase {
  getSingularTNodeByRuleName(...ruleNames) {
    let singularNode = null;

    const nodes = this.filterChildNode((childNode) => {
            const ruleName = childNode.getRuleName(),
                  ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

            if (ruleNamesIncludesRuleName) {
              return true;
            }
          }),
          nodesLength = nodes.length;

      if (nodesLength === 1) {
        const firstNode = first(nodes);

        singularNode = firstNode; ///
      }

    return singularNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
