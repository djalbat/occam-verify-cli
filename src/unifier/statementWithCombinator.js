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
  unify(statementNode, combinatorStatementNode, localContext) {
    let statementUnifiedWithCombinator;

    const nonTerminalNodeA = statementNode, ///
          nonTerminalNodeB = combinatorStatementNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);

    statementUnifiedWithCombinator = nonTerminalNodeUnified; ///

    return statementUnifiedWithCombinator;
  };

  static maps = [
    {
      nodeQueryA: statementNodeQuery,
      nodeQueryB: metaTypeNodeQuery,
      unify: (statementNodeA, metaTypeNodeB, localContext) => {
        const metaTypeNode = metaTypeNodeB, ///
              statementNode = statementNodeA, ///
              statementUnifiedWithMetaType = unifyStatementWithMetaType(statementNode, metaTypeNode, localContext);

        return statementUnifiedWithMetaType;
      }
    },
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, localContext) => {
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
