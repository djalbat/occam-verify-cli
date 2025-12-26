"use strict";

import { nodeQuery } from "../utilities/query";
import { frameMetavariableNameFromFrameNode } from "../utilities/frame";
import { termVariableIdentifierFromTermNode } from "../utilities/variable";
import { statementMetavariableNameFromFrameNode } from "../utilities/statement";

const substitutionNodeQuery = nodeQuery("/statement/termSubstitution|frameSubstitution!");

export function termFromTermAndSubstitutions(term, substitutions, generalContext, specificContext) {
  if (term !== null) {
    const termNode = term.getNode(),
          termSingular = term.isSingular();

    term = null;  ///

    if (termSingular) {
      const termVariableIdentifier = termVariableIdentifierFromTermNode(termNode),
            variableIdentifier = termVariableIdentifier,  ///
            variable = generalContext.findVariableByVariableIdentifier(variableIdentifier);

      if (variable !== null) {
        const substitution = substitutions.findSubstitutionByVariable(variable);

        if (substitution !== null) {
          const termSubstitution = substitution;  ///

          term = termSubstitution.getTerm();
        }
      }
    }
  }

  return term;
}

export function frameFromFrameAndSubstitutions(frame, substitutions, generalContext, specificContext) {
  if (frame !== null) {
    const frameNode = frame.getNode(),
          frameSimple = frame.isSimple();

    frame = null;  ///

    if (frameSimple) {
      const frameMetavariableName = frameMetavariableNameFromFrameNode(frameNode),
            metavariableName = frameMetavariableName, ///
            metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);

      if (metavariable !== null) {
        let substitution = null;

        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);

        if (substitution !== null) {
          const frameSubstitution = substitution; ///

          frame = frameSubstitution.getFrame();
        }
      }
    }
  }

  return frame;
}

export function statementFromStatementAndSubstitutions(statement, substitutions, generalContext, specificContext) {
  if (statement !== null) {
    const statementNode = statement.getNode(),
          statementSimple = statement.isSimple();

    if (statementSimple) {
      statement = null;

      let substitution = null;

      const substitutionNode = substitutionNodeQuery(statementNode);

      if (substitutionNode !== null) {
        substitution = generalContext.findSubstitutionBySubstitutionNode(substitutionNode);
      }

      const statementMetavariableName = statementMetavariableNameFromFrameNode(statementNode),
            metavariableName = statementMetavariableName, ///
            metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);

      if (metavariable !== null) {
        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);

        if (substitution !== null) {
          const statementSubstitution = substitution; ///

          statement = statementSubstitution.getStatement();
        }
      }
    }
  }

  return statement;
}
