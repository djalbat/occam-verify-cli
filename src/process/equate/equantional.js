"use strict";

import Pass from "./pass";

import { nodeQuery } from "../../utilities/query";

const termNodeQuery = nodeQuery("/term");

class EquationalPass extends Pass {
  static maps = [
    {
      leftNodeQuery: termNodeQuery,  ///
      rightNodeQuery: termNodeQuery, ///
      run: (leftTermNode, rightTermNode, context) => {
        let success = false;

        if (!success) {
          const depth = Infinity,
                leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);

          if (leftTermNodeMatchesRightTermNode) {
            success = true;
          }
        }

        if (!success) {
          const equivalences = context.getEquivalences(),
                termNodes = [
                  leftTermNode,
                  rightTermNode
                ],
                equivalence = equivalences.findEquivalenceByTermNodes(termNodes);

          if (equivalence !== null) {
            success = true;
          }
        }

        if (!success) {
          const depth = 1,
                leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);

          if (leftTermNodeMatchesRightTermNode) {
            const leftNonTerminalNode = leftTermNode, ///
                  rightNonTerminalNode = rightTermNode, ///
                  leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
                  rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
                  leftChildNodes = leftNonTerminalNodeChildNodes, ///
                  rightChildNodes = rightNonTerminalNodeChildNodes, ///
                  descended = equationalPass.descend(leftChildNodes, rightChildNodes, context);

            if (descended) {
              success = true;
            }
          }
        }

        return success;
      }
    }
  ];
}

const equationalPass = new EquationalPass();

export function equateTerms(leftTermNode, rightTermNode, context) {
  let termsEquate;

  const leftNode = leftTermNode, ///
        rightNode = rightTermNode, ///
        success = equationalPass.run(leftNode, rightNode, context);

  termsEquate = success; ///

  return termsEquate;
}

export function equateStatements(leftStatementNode, rightStatementNode, context) {
  let statementsEquate;

  const leftNode = leftStatementNode, ///
        rightNode = rightStatementNode, ///
        success = equationalPass.run(leftNode, rightNode, context);

  statementsEquate = success; ///

  return statementsEquate;
}
