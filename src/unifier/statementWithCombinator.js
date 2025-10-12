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
    let statementUnifiesWithCombinator;

    const generalNonTerminalNode = combinatorStatementNode, ///
          specificNonTerminalNode = statementNode, ///
          nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, assignments, stated, generalContext, specificContext);

    statementUnifiesWithCombinator = nonTerminalNodeUnifies; ///

    return statementUnifiesWithCombinator;
  };

  static maps = [
    {
      generalNodeQuery: metaTypeNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalMetaTypeNode, specificStatementNode, assignments, stated, generalContext, specificContext) => {
        let unifies;

        const { Statement, MetaType } = dom,
              metaTypeNode = generalMetaTypeNode, ///
              statementNode = specificStatementNode; ///

        let context;

        context = generalContext; ///

        const metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);

        context = specificContext;  ///

        const statement = Statement.fromStatementNode(statementNode, context),
              statementVerifiesGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);

        unifies = statementVerifiesGivenType;

        return unifies;
      }
    },
    {
      generalNodeQuery: metaTypeNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalMetaTypeNode, specificFrameNode, assignments, stated, generalContext, specificContext) => {
        let unifies;

        const { Frame, MetaType } = dom,
              metaTypeNode = generalMetaTypeNode, ///
              frameNode = specificFrameNode; ///

        let context;

        context = generalContext; ///

        const metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);

        context = specificContext;  ///

        const frame = Frame.fromFrameNode(frameNode, context),
              frameVerifiesGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);

        unifies = frameVerifiesGivenType;

        return unifies;
      }
    },
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTypeNode, specificTermNode, assignments, stated, generalContext, specificContext) => {
        let unifies = false;

        const { Term } = dom,
              typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              nominalTypeName = typeNode.getNominalTypeName();

        let context;

        context = generalContext; ///

        const type = context.findTypeByNominalTypeName(nominalTypeName);

        context = specificContext;  ///

        const term = Term.fromTermNode(termNode, context),
              termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);

        if (termVerifiesGivenType) {
          unifies = true;
        }

        return unifies;
      }
    }
  ];
}

const statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();

export default statementWithCombinatorUnifier;
