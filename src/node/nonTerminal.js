"use strict";

import { arrayUtilities } from "necessary";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

const { first } = arrayUtilities;

export default class NonTerminalNode extends NonTerminalNodeBase {
  getNodeByRuleName(...ruleNames) {
    const node = this.findChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode, ///
              ruleName = nonTerminalNode.getRuleName(),
              ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

        if (ruleNamesIncludesRuleName) {
          return true;
        }
      }
    }) || null;

    return node;
  }

  getNodesByRuleName(...ruleNames) {
    const nodes = this.filterChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode, ///
              ruleName = nonTerminalNode.getRuleName(),
              ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

        if (ruleNamesIncludesRuleName) {
          return true;
        }
      }
    });

    return nodes;
  }

  getSingularTNodeByRuleName(...ruleNames) {
    let singularNode = null;

    const nodes = this.filterChildNode((childNode) => {
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();

            if (childNodeNonTerminalNode) {
              const nonTerminalNode = childNode, ///
                    ruleName = nonTerminalNode.getRuleName(),
                    ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

              if (ruleNamesIncludesRuleName) {
                return true;
              }
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
