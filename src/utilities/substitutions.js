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
        const substitution = specificContext.findSubstitutionByVariable(variable);

        if (substitution !== null) {
          const termSubstitution = substitution;  ///

          term = termSubstitution.getTerm();
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
        let substitution = null;

        substitution = specificContext.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);

        if (substitution !== null) {
          const frameSubstitution = substitution; ///

          frame = frameSubstitution.getFrame();
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

    if (statementSingular) {
      statement = null;

      let substitution = null;

      const substitutionNode = statementNode.getSubstitutionNode();

      if (substitutionNode !== null) {
        substitution = generalContext.findSubstitutionBySubstitutionNode(substitutionNode);
      }

      const metavariableName = statementNode.getMetavariableName(),
            metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);

      if (metavariable !== null) {
        substitution = specificContext.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);

        if (substitution !== null) {
          const statementSubstitution = substitution; ///

          statement = statementSubstitution.getStatement();
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
          metavariable = substitution.getMetavariable(context);

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
