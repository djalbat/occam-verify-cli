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
        let unified;

        const { Statement, MetaType } = shim,
              metaTypeNode = metaTypeNodeB, ///
              statementeNode = statementeNodeA, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
              statemente = Statement.fromTermNode(statementeNode, localContext),
              statementeVerifiedGivenType = statemente.verifyGivenMetaType(metaType, localContext);

        unified = statementeVerifiedGivenType;

        return unified;
      }
    },
    {
      nodeQueryA: frameNodeQuery,
      nodeQueryB: metaTypeNodeQuery,
      unify: (frameNodeA, metaTypeNodeB, assignments, stated, localContext) => {
        let unified;

        const { Frame, MetaType } = shim,
              metaTypeNode = metaTypeNodeB, ///
              frameNode = frameNodeA, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
              frame = Frame.fromTermNode(frameNode, localContext),
              frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, localContext);

        unified = frameVerifiedGivenType;

        return unified;
      }
    },
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, assignments, stated, localContext) => {
        let unified = false;

        const { Term, Type } = shim,
              typeNode = typeNodeB, ///
              type = Type.fromTypeNode(typeNode, localContext),
              typeVerified = type.verify(localContext);

        if (typeVerified) {
          const termNode = termNodeA, ///
                term = Term.fromTermNode(termNode, localContext),
                termVerifiedGivenType = term.verifyGivenType(type, localContext);

          if (termVerifiedGivenType) {
            unified = true;
          }
        }

        return unified;
      }
    }
  ];
}

const statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();

export default statementWithCombinatorUnifier;
