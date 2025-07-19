"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      frameNodeQuery = nodeQuery("/frame"),
      metaTypeNodeQuery = nodeQuery("/metaType"),
      statementNodeQuery = nodeQuery("/statement");

class StatementWithCombinatorUnifier extends Unifier {
  unify(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext) {
    let statementUnifiedWithCombinator;

    const generalNonTerminalNode = combinatorStatementNode, ///
          specificNonTerminalNode = statementNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, assignments, stated, generalContext, specificContext);

    statementUnifiedWithCombinator = nonTerminalNodeUnified; ///

    return statementUnifiedWithCombinator;
  };

  static maps = [
    {
      generalNodeQuery: metaTypeNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalMetaTypeNode, specificStatementNode, assignments, stated, generalContext, specificContext) => {
        let unified;

        const { Statement, MetaType } = dom,
              metaTypeNode = generalMetaTypeNode, ///
              statementNode = specificStatementNode; ///

        let context;

        context = generalContext; ///

        const metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);

        context = specificContext;  ///

        const statement = Statement.fromStatementNode(statementNode, context),
              statementVerifiedGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);

        unified = statementVerifiedGivenType;

        return unified;
      }
    },
    {
      generalNodeQuery: metaTypeNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalMetaTypeNode, specificFrameNode, assignments, stated, generalContext, specificContext) => {
        let unified;

        const { Frame, MetaType } = dom,
              metaTypeNode = generalMetaTypeNode, ///
              frameNode = specificFrameNode; ///

        let context;

        context = generalContext; ///

        const metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);

        context = specificContext;  ///

        const frame = Frame.fromFrameNode(frameNode, context),
              frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);

        unified = frameVerifiedGivenType;

        return unified;
      }
    },
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTypeNode, specificTermNode, assignments, stated, generalContext, specificContext) => {
        let unified = false;

        const { Term } = dom,
              typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              typeName = typeNode.getTypeName();

        let context;

        context = generalContext; ///

        const type = context.findTypeByTypeName(typeName);

        context = specificContext;  ///

        const term = Term.fromTermNode(termNode, context),
              termVerifiedGivenType = term.verifyGivenType(type, generalContext, specificContext);

        if (termVerifiedGivenType) {
          unified = true;
        }

        return unified;
      }
    }
  ];
}

const statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();

export default statementWithCombinatorUnifier;
