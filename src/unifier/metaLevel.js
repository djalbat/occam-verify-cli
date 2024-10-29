"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import TermSubstitution from "../substitution/term";
import FrameSubstitution from "../substitution/frame";

import { nodeQuery } from "../utilities/query";
import { variableNameFromVariableNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      statementNodeQuery = nodeQuery("/statement"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!");

class MetaLevelUnifier extends Unifier {
  unify(generalNode, specificNode, substitutions, generalContext, specificContext) {
    let unifiedAtMetaLevel;

    const generalNonTerminalNode = generalNode, ///
          specificNonTerminalNode = specificNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    unifiedAtMetaLevel = nonTerminalNodeUnified; ///

    return unifiedAtMetaLevel;
  }

  static maps = [
    {
      generalNodeQuery: statementNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext) => {
        let statementUnified;

        const matches = generalStatementNode.match(specificStatementNode);

        if (matches) {
          statementUnified = true;
        } else {
          let context,
              statementNode;

          context = generalContext; ///

          statementNode = generalStatementNode; ///

          const statementMetavariableNode = statementMetavariableNodeQuery(statementNode);

          if (statementMetavariableNode !== null) {
            const frameSubstitution = FrameSubstitution.fromStatementNode(statementNode, context),
                  termSubstitution = TermSubstitution.fromStatementNode(statementNode, context),
                  substitution = (frameSubstitution || termSubstitution);

            const { Statement } = shim,
                  metavariableNode = statementMetavariableNode, ///
                  metavariable = generalContext.findMetavariableByMetavariableNode(metavariableNode, generalContext, specificContext);

            context = specificContext; ///

            statementNode = specificStatementNode; ///

            const statement = Statement.fromStatementNode(statementNode, context);

            statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, context);
          } else {
            statementUnified = unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext);
          }
        }

        return statementUnified;
      }
    },
    {
      generalNodeQuery: frameMetavariableNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalFrameMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) => {
        let frameUnified = false;

        const metavariableNode = generalFrameMetavariableNode,  ///
              metavariablePresent = generalContext.isMetavariablePresentByMetavariableNode(metavariableNode, generalContext, specificContext);

        if (metavariablePresent) {
          let context;

          const { Frame, Metavariable } = shim,
                frameNode = specificFrameNode; ///

          context = generalContext; ///

          const metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

          context = specificContext;  ///

          const frame = Frame.fromFrameNode(frameNode, context);

          frameUnified = metavariable.unifyFrame(frame, substitutions, context);
        }

        return frameUnified;
      }
    },
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let termUnified = false;

        const variableNode = generalTermVariableNode, ///
              variableName = variableNameFromVariableNode(variableNode),
              variablePresent = generalContext.isVariablePresentByVariableName(variableName);

        if (variablePresent) {
          let context;

          const { Term, Variable } = shim,
                termNode = specificTermNode; ///

          context = generalContext; ///

          const variable = Variable.fromVariableNode(variableNode, context);

          context = specificContext;  ///

          const term = Term.fromTermNode(termNode, context);

          termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext);
        }

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
        statementUnified = childNodesVerified; ///

  return statementUnified;
}
