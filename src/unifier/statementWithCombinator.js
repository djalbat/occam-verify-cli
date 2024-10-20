"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      frameNodeQuery = nodeQuery("/frame"),
      metaTypeNodeQuery = nodeQuery("/metaType"),
      statementNodeQuery = nodeQuery("/statement");

class StatementWithCombinatorUnifier extends Unifier {
  unify(combinatorStatementNode, statementNode, assignments, stated, localContext) {
    let statementUnifiedWithCombinator;

    const nonTerminalNodeA = combinatorStatementNode, ///
          nonTerminalNodeB = statementNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, assignments, stated, localContext);

    statementUnifiedWithCombinator = nonTerminalNodeUnified; ///

    return statementUnifiedWithCombinator;
  };

  static maps = [
    {
      nodeQueryA: metaTypeNodeQuery,
      nodeQueryB: statementNodeQuery,
      unify: (metaTypeNodeA, statementNodeB, assignments, stated, localContext) => {
        let unified;

        const { Statement, MetaType } = shim,
              metaTypeNode = metaTypeNodeA, ///
              statementNode = statementNodeB, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
              statement = Statement.fromStatementNode(statementNode, localContext),
              statementVerifiedGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, localContext);

        unified = statementVerifiedGivenType;

        return unified;
      }
    },
    {
      nodeQueryA: metaTypeNodeQuery,
      nodeQueryB: frameNodeQuery,
      unify: (metaTypeNodeA, frameNodeB, assignments, stated, localContext) => {
        let unified;

        const { Frame, MetaType } = shim,
              metaTypeNode = metaTypeNodeA, ///
              frameNode = frameNodeB, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
              frame = Frame.fromFrameNode(frameNode, localContext),
              frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, localContext);

        unified = frameVerifiedGivenType;

        return unified;
      }
    },
    {
      nodeQueryA: typeNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (typeNodeA, termNodeB, assignments, stated, localContext) => {
        let unified = false;

        const { Term } = shim,
              typeNode = typeNodeA, ///
              typeName = typeNameFromTypeNode(typeNode),
              type = localContext.findTypeByTypeName(typeName);

        if (type !== null) {
          const termNode = termNodeB, ///
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
