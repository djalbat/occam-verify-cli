"use strict";

import Unifier from "../unifier";
import unifyTermAgainstType from "../unify/termAgainstType";
import unifyStatementAgainstMetaType from "../unify/statementAgainstMetaType";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      metaTypeNodeQuery = nodeQuery("/metaType!"),
      statementNodeQuery = nodeQuery("/statement!");

class StatementAgainstCombinatorUnifier extends Unifier {
  unify(statementNode, combinatorStatementNode, localContext) {
    let statementUnifiedAgainstCombinator;

    const nonTerminalNodeA = statementNode, ///
          nonTerminalNodeB = combinatorStatementNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);

    statementUnifiedAgainstCombinator = nonTerminalNodeUnified; ///

    return statementUnifiedAgainstCombinator;
  };

  static maps = [
    {
      nodeQueryA: statementNodeQuery,
      nodeQueryB: metaTypeNodeQuery,
      unify: (statementNodeA, metaTypeNodeB, localContext) => {
        const metaTypeNode = metaTypeNodeB, ///
              statementNode = statementNodeA, ///
              statementUnifiedAgainstMetaType = unifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext);

        return statementUnifiedAgainstMetaType;
      }
    },
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, localContext) => {
        const termNode = termNodeA, ///
              typeNode = typeNodeB, ///
              termUnifiedAgainstType = unifyTermAgainstType(termNode, typeNode, localContext);

        return termUnifiedAgainstType;
      }
    }
  ];
}

const statementAgainstCombinatorUnifier = new StatementAgainstCombinatorUnifier();

export default statementAgainstCombinatorUnifier;