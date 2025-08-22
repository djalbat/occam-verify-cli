"use strict";

import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term");

class EquationalUnifier extends Unifier {
  equateTerms(leftTermNode, rightTermNode, context) {
    let termsEquate;

    const generalNonTerminalNode = leftTermNode, ///
          specificNonTerminalNode = rightTermNode, ///
          nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);

    termsEquate = nonTerminalNodeUnifies; ///

    return termsEquate;
  };

  equateStatements(statementANode, statementBNode, context) {
    let statementsEquate;

    const generalNonTerminalNode = statementANode, ///
          specificNonTerminalNode = statementBNode, ///
          nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);

    statementsEquate = nonTerminalNodeUnifies; ///

    return statementsEquate;
  };

  static maps = [
    {
      generalNodeQuery: termNodeQuery,  ///
      specificNodeQuery: termNodeQuery, ///
      unify: (leftTermNode, rightTermNode, context) => {
        let termUnifies = false;

        if (!termUnifies) {
          const depth = Infinity,
                leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);

          if (leftTermNodeMatchesRightTermNode) {
            termUnifies = true;
          }
        }

        if (!termUnifies) {
          const equivalences = context.getEquivalences(),
                termNodes = [
                  leftTermNode,
                  rightTermNode
                ],
                equivalence = equivalences.findEquivalenceByTermNodes(termNodes);

          if (equivalence !== null) {
            termUnifies = true;
          }
        }

        if (!termUnifies) {
          const depth = 1,
                leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);

          if (leftTermNodeMatchesRightTermNode) {
            const leftNonTerminalNode = leftTermNode, ///
                  rightNonTerminalNode = rightTermNode, ///
                  leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
                  rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
                  leftChildNodes = leftNonTerminalNodeChildNodes, ///
                  rightChildNodes = rightNonTerminalNodeChildNodes, ///
                  childNodesUnify = equationalUnifier.unifyChildNodes(leftChildNodes, rightChildNodes, context);

            if (childNodesUnify) {
              termUnifies = true;
            }
          }
        }

        return termUnifies;
      }
    }
  ];
}

const equationalUnifier = new EquationalUnifier();

export default equationalUnifier;
