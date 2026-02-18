"use strict";

import { arrayUtilities } from "necessary";

const { compress } = arrayUtilities;

export function termFromTermAndSubstitutions(term, generalContext, specificContext) {
  if (term !== null) {
    const termNode = term.getNode(),
          termSingular = term.isSingular();

    term = null;  ///

    if (termSingular) {
      const variableIdentifier = termNode.getVariableIdentifier(),
            variable = generalContext.findVariableByVariableIdentifier(variableIdentifier);

      if (variable !== null) {
        const substitution = specificContext.findSubstitutionByVariableIdentifier(variableIdentifier);

        if (substitution !== null) {
          const termSubstitution = substitution,  ///
                replacementTerm = termSubstitution.getReplacementTerm();

          term = replacementTerm; ///
        }
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
      const metavariableName = frameNode.getMetavariableName(),
            metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);

      if (metavariable !== null) {
        const substitution = specificContext.findSubstitutionByMetavariableName(metavariableName);

        if (substitution !== null) {
          const frameSubstitution = substitution, ///
                replacementFrame = frameSubstitution.getReplacementFrame();

          frame = replacementFrame; ///
        }
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

      const metavariableName = statementNode.getMetavariableName(),
            metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);

      if (metavariable !== null) {
        substitution = (substitution !== null) ?
                         specificContext.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) :
                           specificContext.findSubstitutionByMetavariableName(metavariableName);

        if (substitution !== null) {
          const statementSubstitution = substitution, ///
                replacementStatement = statementSubstitution.getReplacementStatement();

          statement = replacementStatement; ///
        }
      }
    }
  }

  return statement;
}

export function metavariablesFromSubstitutions(substitutions, generalContext, specificContext) {
  const metavariables = [];

  substitutions.forEach((substitution) => {
    const context = generalContext, ///
          metavariableName = substitution.getMetavariableName(),
          metavariable = context.findMetavariableByMetavariableName(metavariableName);

    if (metavariable !== null) {
      metavariables.push(metavariable);
    }
  });

  compress(metavariables, (metavariableA, metavariableB) => {
    const metavariableComparesToMetavariableB = metavariableB.compare(metavariableA);

    if (!metavariableComparesToMetavariableB) {
      return true;
    }
  });

  return metavariables;
}
