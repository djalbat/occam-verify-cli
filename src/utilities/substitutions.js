"use strict";

import { arrayUtilities } from "necessary";

const { compress } = arrayUtilities;

export function termFromTermAndSubstitutions(term, generalContext, specificContext) {
  if (term !== null) {
    const termNode = term.getNode(),
          termSingular = term.isSingular();

    term = null;  ///

    if (termSingular) {
      const variableNode = termNode.getVariableNode(),
            substitution = specificContext.findSubstitutionByVariableNode(variableNode);

      if (substitution !== null) {
        const termSubstitution = substitution,  ///
              replacementTerm = termSubstitution.getReplacementTerm();

        term = replacementTerm; ///
      }
    }
  }

  return term;
}

export function frameFromFrameAndSubstitutions(frame, generalContext, specificContext) {
  if (frame !== null) {
    const frameNode = frame.getNode(),
          frameSingular = frame.isSingular();

    frame = null;  ///

    if (frameSingular) {
      const metavariableNode = frameNode.getMetavariableNode(),
            substitution = specificContext.findSubstitutionByMetavariableNode(metavariableNode);

      if (substitution !== null) {
        const frameSubstitution = substitution, ///
              replacementFrame = frameSubstitution.getReplacementFrame();

        frame = replacementFrame; ///
      }
    }
  }

  return frame;
}

export function statementFromStatementAndSubstitutions(statement, generalContext, specificContext) {
  if (statement !== null) {
    const statementNode = statement.getNode(),
          statementSingular = statement.isSingular();

    statement = null;

    if (statementSingular) {
      let substitution = null;

      const substitutionNode = statementNode.getSubstitutionNode();

      if (substitutionNode !== null) {
        let context = generalContext; ///

        generalContext = specificContext; ///

        specificContext = context;  ///

        substitution = specificContext.findSubstitutionBySubstitutionNode(substitutionNode);

        context = generalContext; ///

        generalContext = specificContext; ///

        specificContext = context;  ///
      }

      const metavariableNode = statementNode.getMetavariableNode();

      substitution = (substitution !== null) ?
                       specificContext.findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution) :
                         specificContext.findSubstitutionByMetavariableNode(metavariableNode);

      if (substitution !== null) {
        const statementSubstitution = substitution, ///
              replacementStatement = statementSubstitution.getReplacementStatement();

        statement = replacementStatement; ///
      }
    }
  }

  return statement;
}

export function metavariableNodesFromSubstitutions(substitutions) {
  const metavariableNodes = [];

  substitutions.forEach((substitution) => {
    const metavariableNode = substitution.getMetavariableNode();

    if (metavariableNode !== null) {
      metavariableNodes.push(metavariableNode);
    }
  });

  compress(metavariableNodes, (metavariableNodeA, metavariableNodeB) => {
    const metavariableNodeAMatchesetavariableNodeB = metavariableNodeA.match(metavariableNodeB);

    if (!metavariableNodeAMatchesetavariableNodeB) {
      return true;
    }
  });

  return metavariableNodes;
}
