"use strict";

import Unifier from "../unifier";
import unifyTermWithType from "../unify/termWithType";
import unifyStatementWithMetaType from "../unify/statementWithMetaType";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      metaTypeNodeQuery = nodeQuery("/metaType!"),
      statementNodeQuery = nodeQuery("/statement!");

class StatementWithCombinatorUnifier extends Unifier {
  unify(statementNode, combinatorStatementNode, assignments, derived, localContext) {
    let statementUnifiedWithCombinator;

    const nonTerminalNodeA = statementNode, ///
          nonTerminalNodeB = combinatorStatementNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, assignments, derived, localContext);

    statementUnifiedWithCombinator = nonTerminalNodeUnified; ///

    return statementUnifiedWithCombinator;
  };

  static maps = [
    {
      nodeQueryA: statementNodeQuery,
      nodeQueryB: metaTypeNodeQuery,
      unify: (statementNodeA, metaTypeNodeB, assignments, derived, localContext) => {
        const metaTypeNode = metaTypeNodeB, ///
              statementNode = statementNodeA, ///
              statementUnifiedWithMetaType = unifyStatementWithMetaType(statementNode, metaTypeNode, assignments, derived, localContext);

        return statementUnifiedWithMetaType;
      }
    },
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, assignments, derived, localContext) => {
        const termNode = termNodeA, ///
              typeNode = typeNodeB, ///
              termUnifiedWithType = unifyTermWithType(termNode, typeNode, localContext);

        return termUnifiedWithType;
      }
    }
  ];
}

const statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();

export default statementWithCombinatorUnifier;
