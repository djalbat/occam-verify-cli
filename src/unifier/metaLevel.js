"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      statementNodeQuery = nodeQuery("/statement"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      declarationMetavariableNodeQuery = nodeQuery("/declaration/metavariable!");

class MetaLevelUnifier extends Unifier {
  unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext) {
    let unifiesAtMetaLevel;

    const nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    unifiesAtMetaLevel = nonTerminalNodeUnifies; ///

    return unifiesAtMetaLevel;
  }

  static maps = [
    {
      generalNodeQuery: statementNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext) => {
        let statementUnifies;

        const statementNode = generalStatementNode, ///
              singularMetavariableNode = statementNode.getSingularMetavariableNode();

        if (singularMetavariableNode !== null) {
          const { Metavariable, Statement } = dom; ///

          let context,
              statementNode;

          context = generalContext; ///

          statementNode = generalStatementNode; ///

          const { TermSubstitution, FrameSubstitution } = dom,
                frameSubstitution = FrameSubstitution.fromStatementNode(statementNode, context),
                termSubstitution = TermSubstitution.fromStatementNode(statementNode, context),
                metavariable = Metavariable.fromStatementNode(statementNode, context),
                substitution = (frameSubstitution || termSubstitution);

          context = specificContext; ///

          statementNode = specificStatementNode;  ///

          const statement = Statement.fromStatementNode(statementNode, context);

          statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
        } else {
          const childNodesUnifies = unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext);

          statementUnifies = childNodesUnifies; ///
        }

        return statementUnifies;
      }
    },
    {
      generalNodeQuery: declarationMetavariableNodeQuery,
      specificNodeQuery: declarationMetavariableNodeQuery,
      unify: (generalDeclarationMetavariableNode, specificDeclarationMetavariableNode, substitutions, generalContext, specificContext) => {
        let referenceUnifies;

        const { Reference, Metavariable } = dom;

        let context,
            metavariableNode;

        context = generalContext; ///

        metavariableNode = generalDeclarationMetavariableNode;  ///

        const metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

        context = specificContext;  ///

        metavariableNode = specificDeclarationMetavariableNode; ///

        const reference = Reference.fromMetavariableNode(metavariableNode, context);

        referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);

        return referenceUnifies;
      }
    },
    {
      generalNodeQuery: frameMetavariableNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalFrameMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) => {
        let frameUnifies;

        const { Frame, Metavariable } = dom,
              frameNode = specificFrameNode, ///
              metavariableNode = generalFrameMetavariableNode;  ///

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
    }
  ];
}

const metaLevelUnifier = new MetaLevelUnifier();

export default metaLevelUnifier;

function unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext) {
  const generalNonTerminalNode = generalStatementNode, ///
        specificNonTerminalNode = specificStatementNode, ///
        generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
        specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(),
        generalChildNodes = generalNonTerminalNodeChildNodes, ///
        specificChildNodes = specificNonTerminalNodeChildNodes, ///
        childNodesVerified = metaLevelUnifier.unifyChildNodes(generalChildNodes, specificChildNodes, substitutions, generalContext, specificContext),
        childNodesUnifies = childNodesVerified; ///

  return childNodesUnifies;
}
