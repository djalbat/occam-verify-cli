"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import Metavariable from "./metavariable";

const termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      statementNodeQuery = nodeQuery("/statement"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      declarationMetavariableNodeQuery = nodeQuery("/declaration/metavariable!"),
      frameDeclarationMetavariableNodeQuery = nodeQuery("/frame/declaration!/metavariable!");

class MetaLevelUnifier extends Unifier {
  unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext) {
    let unifiesAtMetaLevel;

    const nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    unifiesAtMetaLevel = nonTerminalNodeUnifies; ///

    return unifiesAtMetaLevel;
  }

  static maps = [
    {
      generalNodeQuery: statementMetavariableNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalStatementMetavariableNode, specificStatementNode, substitutions, generalContext, specificContext) => {
        let statementUnifies;

        const { Metavariable, Statement } = dom; ///

        let context,
            statementNode;

        context = generalContext; ///

        const metavariableNode = generalStatementMetavariableNode,  ///
              metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

        const metavariableNodeParentNode = metavariableNode.getParentNode();

        statementNode = metavariableNodeParentNode; ///

        const { TermSubstitution, FrameSubstitution } = dom,
              frameSubstitution = FrameSubstitution.fromStatementNode(statementNode, context),
              termSubstitution = TermSubstitution.fromStatementNode(statementNode, context),
              substitution = (frameSubstitution || termSubstitution);

        context = specificContext; ///

        statementNode = specificStatementNode;  ///

        const statement = Statement.fromStatementNode(statementNode, context);

        statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);

        return statementUnifies;
      }
    },
    {
      generalNodeQuery: frameDeclarationMetavariableNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalFrameDeclarationMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) => {
        let frameUnifies;

        const { Frame, Metavariable } = dom,
              frameNode = specificFrameNode, ///
              metavariableNode = generalFrameDeclarationMetavariableNode;  ///

        let context;

        context = generalContext; ///

        const metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

        context = specificContext;  ///

        const frame = Frame.fromFrameNode(frameNode, context);

        frameUnifies = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);

        return frameUnifies;
      }
    },
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let termUnifies;

        const { Term, Variable } = dom,
              termNode = specificTermNode, ///
              variableNode = generalTermVariableNode; ///

        let context;

        context = generalContext; ///

        const variable = Variable.fromVariableNode(variableNode, context);

        context = specificContext;  ///

        const term = Term.fromTermNode(termNode, context);

        termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);

        return termUnifies;
      }
    },
    {
      generalNodeQuery: declarationMetavariableNodeQuery,
      specificNodeQuery: declarationMetavariableNodeQuery,
      unify: (generalDeclarationMetavariableNode, specificDeclarationMetavariableNode, substitutions, generalContext, specificContext) => {
        let referenceUnifies;

        const { Metavariable, Reference } = dom;

        let context,
            metavariableNode;

        context = generalContext; ///

        metavariableNode = generalDeclarationMetavariableNode;  ///

        const metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);  ///

        context = specificContext;  ///

        metavariableNode = specificDeclarationMetavariableNode; ///

        const reference = Reference.fromMetavariableNode(metavariableNode, context);

        referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);

        return referenceUnifies;
      }
    }
  ];
}

const metaLevelUnifier = new MetaLevelUnifier();

export default metaLevelUnifier;
