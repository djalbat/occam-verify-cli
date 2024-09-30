"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyTermWithType from "../unify/termWithType";
import unifyFrameWithMetaType from "../unify/frameWithMetaType";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      frameNodeQuery = nodeQuery("/frame!"),
      metaTypeNodeQuery = nodeQuery("/metaType!"),
      statementNodeQuery = nodeQuery("/statement!");

class StatementWithCombinatorUnifier extends Unifier {
  unify(statementNode, combinatorStatementNode, assignments, stated, localContext) {
    let statementUnifiedWithCombinator;

    const nonTerminalNodeA = statementNode, ///
          nonTerminalNodeB = combinatorStatementNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, assignments, stated, localContext);

    statementUnifiedWithCombinator = nonTerminalNodeUnified; ///

    return statementUnifiedWithCombinator;
  };

  static maps = [
    {
      nodeQueryA: statementNodeQuery,
      nodeQueryB: metaTypeNodeQuery,
      unify: (statementNodeA, metaTypeNodeB, assignments, stated, localContext) => {
        const { MetaType, Statement } = shim,
              metaTypeNode = metaTypeNodeB, ///
              statementNode = statementNodeA, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
              statement = Statement.fromStatementNode(statementNode, localContext),
              statementUnifiedWithMetaType = statement.unifyWithMetaType(metaType, assignments, stated, localContext);

        return statementUnifiedWithMetaType;
      }
    },
    {
      nodeQueryA: frameNodeQuery,
      nodeQueryB: metaTypeNodeQuery,
      unify: (frameNodeA, metaTypeNodeB, assignments, stated, localContext) => {
        const metaTypeNode = metaTypeNodeB, ///
              frameNode = frameNodeA, ///
              frameUnifiedWithMetaType = unifyFrameWithMetaType(frameNode, metaTypeNode, assignments, stated, localContext);

        return frameUnifiedWithMetaType;
      }
    },
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, assignments, stated, localContext) => {
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
