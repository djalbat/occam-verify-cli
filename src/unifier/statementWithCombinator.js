"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";
import local from "../context/local";

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
              statementNode = statementNodeA, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
              statement = Statement.fromStatementNode(statementNode, localContext),
              statementVerifiedGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, localContext);

        unified = statementVerifiedGivenType;

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

        const { Term } = shim,
              typeNode = typeNodeB, ///
              typeName = typeNameFromTypeNode(typeNode),
              type = localContext.findTypeByTypeName(typeName);

        if (type !== null) {
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
