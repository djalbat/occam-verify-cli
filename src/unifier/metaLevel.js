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
    let unifiedAtMetaLevel;

    const nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    unifiedAtMetaLevel = nonTerminalNodeUnified; ///

    return unifiedAtMetaLevel;
  }

  static maps = [
    {
      generalNodeQuery: statementNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext) => {
        let statementUnified;

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

          statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
        } else {
          const childNodesUnified = unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext);

          statementUnified = childNodesUnified; ///
        }

        return statementUnified;
      }
    },
    {
      generalNodeQuery: declarationMetavariableNodeQuery,
      specificNodeQuery: declarationMetavariableNodeQuery,
      unify: (generalDeclarationMetavariableNode, specificDeclarationMetavariableNode, substitutions, generalContext, specificContext) => {
        let referenceUnified;

        const { Reference, Metavariable } = dom;

        let context,
            metavariableNode;

        context = generalContext; ///

        metavariableNode = generalDeclarationMetavariableNode;  ///

        const metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

        context = specificContext;  ///

        metavariableNode = specificDeclarationMetavariableNode; ///

        const reference = Reference.fromMetavariableNode(metavariableNode, context);

        referenceUnified = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);

        return referenceUnified;
      }
    },
    {
      generalNodeQuery: frameMetavariableNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalFrameMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) => {
        let frameUnified;

        const { Frame, Metavariable } = dom,
              frameNode = specificFrameNode, ///
              metavariableNode = generalFrameMetavariableNode;  ///

        let context;

        context = generalContext; ///

        const metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

        context = specificContext;  ///

        const frame = Frame.fromFrameNode(frameNode, context);

        frameUnified = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);

        return frameUnified;
      }
    },
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let termUnified;

        const { Term, Variable } = dom,
              termNode = specificTermNode, ///
              variableNode = generalTermVariableNode; ///

        let context;

        context = generalContext; ///

        const variable = Variable.fromVariableNode(variableNode, context);

        context = specificContext;  ///

        const term = Term.fromTermNode(termNode, context);

        termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext);

        return termUnified;
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
        childNodesUnified = childNodesVerified; ///

  return childNodesUnified;
}
