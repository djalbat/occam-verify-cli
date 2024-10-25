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
  unify(combinatorStatementNode, statementNode, assignments, stated, context) {
    let statementUnifiedWithCombinator;

    const generalNonTerminalNode = combinatorStatementNode, ///
          specificNonTerminalNode = statementNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, assignments, stated, context);

    statementUnifiedWithCombinator = nonTerminalNodeUnified; ///

    return statementUnifiedWithCombinator;
  };

  static maps = [
    {
      generalNodeQuery: metaTypeNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalMetaTypeNode, specificStatementNode, assignments, stated, context) => {
        let unified;

        const { Statement, MetaType } = shim,
              metaTypeNode = generalMetaTypeNode, ///
              statementNode = specificStatementNode, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, context),
              statement = Statement.fromStatementNode(statementNode, context),
              statementVerifiedGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);

        unified = statementVerifiedGivenType;

        return unified;
      }
    },
    {
      generalNodeQuery: metaTypeNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalMetaTypeNode, specificFrameNode, assignments, stated, context) => {
        let unified;

        const { Frame, MetaType } = shim,
              metaTypeNode = generalMetaTypeNode, ///
              frameNode = specificFrameNode, ///
              metaType = MetaType.fromMetaTypeNode(metaTypeNode, context),
              frame = Frame.fromFrameNode(frameNode, context),
              frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);

        unified = frameVerifiedGivenType;

        return unified;
      }
    },
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTypeNode, specificTermNode, assignments, stated, context) => {
        let unified = false;

        const { Term } = shim,
              typeNode = generalTypeNode, ///
              typeName = typeNameFromTypeNode(typeNode),
              type = context.findTypeByTypeName(typeName);

        if (type !== null) {
          const termNode = specificTermNode, ///
                term = Term.fromTermNode(termNode, context),
                termVerifiedGivenType = term.verifyGivenType(type, context);

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
