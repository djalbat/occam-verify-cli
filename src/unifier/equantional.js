"use strict";

import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term");

class EquationalUnifier extends Unifier {
  equateTerms(leftTermNode, rightTermNode, context) {
    let termsEquated;

    const generalNonTerminalNode = leftTermNode, ///
          specificNonTerminalNode = rightTermNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);

    termsEquated = nonTerminalNodeUnified; ///

    return termsEquated;
  };

  equateStatements(statementANode, statementBNode, context) {
    let statementsEquated;

    const generalNonTerminalNode = statementANode, ///
          specificNonTerminalNode = statementBNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);

    statementsEquated = nonTerminalNodeUnified; ///

    return statementsEquated;
  };

  static maps = [
    {
      generalNodeQuery: termNodeQuery,  ///
      specificNodeQuery: termNodeQuery, ///
      unify: (leftTermNode, rightTermNode, context) => {
        let termUnified = false;

        if (!termUnified) {
          const depth = Infinity,
                leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);

          if (leftTermNodeMatchesRightTermNode) {
            termUnified = true;
          }
        }

        if (!termUnified) {
          const equivalences = context.getEquivalences(),
                termNodes = [
                  leftTermNode,
                  rightTermNode
                ],
                equivalence = equivalences.findEquivalenceByTermNodes(termNodes);

          if (equivalence !== null) {
            termUnified = true;
          }
        }

        if (!termUnified) {
          const depth = 1,
                leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);

          if (leftTermNodeMatchesRightTermNode) {
            const leftNonTerminalNode = leftTermNode, ///
                  rightNonTerminalNode = rightTermNode, ///
                  leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
                  rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
                  leftChildNodes = leftNonTerminalNodeChildNodes, ///
                  rightChildNodes = rightNonTerminalNodeChildNodes, ///
                  childNodesUnified = equationalUnifier.unifyChildNodes(leftChildNodes, rightChildNodes, context);

            if (childNodesUnified) {
              termUnified = true;
            }
          }
        }

        return termUnified;
      }
    }
  ];
}

const equationalUnifier = new EquationalUnifier();

export default equationalUnifier;
