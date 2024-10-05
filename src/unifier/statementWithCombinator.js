"use strict";

import shim from "../shim";
import Unifier from "../unifier";

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
        const { Statement, MetaType } = shim,
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
        const { Frame, MetaType } = shim,
              metaTypeNode = metaTypeNodeB, ///
              frameNode = frameNodeA, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
              frame = Frame.fromFrameNode(frameNode, localContext),
              frameUnifiedWithMetaType = frame.unifyWithMetaType(metaType, assignments, stated, localContext);

        return frameUnifiedWithMetaType;
      }
    },
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, assignments, stated, localContext) => {
        const { Term, Type } = shim,
              typeNode = typeNodeB, ///
              termNode = termNodeA, ///
              type = Type.fromTypeNode(typeNode, localContext),
              term = Term.fromTermNode(termNode, localContext),
              termUnifiedWithType = term.unifyWithType(type, localContext);

        return termUnifiedWithType;
      }
    }
  ];
}

const statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();

export default statementWithCombinatorUnifier;
