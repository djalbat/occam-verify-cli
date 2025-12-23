"use strict";

import ontology from "../ontology";

import { frameMetavariableNameFromFrameNode } from "../utilities/frame";
import { termVariableIdentifierFromTermNode } from "../utilities/variable";

export function termFromTermAndSubstitutions(term, substitutions, context) {
  if (term !== null) {
    const termNode = term.getNode(),
          termSimple = term.isSimple();

    term = null;  ///

    if (termSimple) {
      const termVariableIdentifier = termVariableIdentifierFromTermNode(termNode),
            variableIdentifier = termVariableIdentifier,  ///
            variable = context.findVariableByVariableIdentifier(variableIdentifier);

      if (variable !== null) {
        const substitution = substitutions.findSubstitutionByVariable(variable);

        if (substitution !== null) {
          term = substitution.getTerm();
        }
      }
    }
  }

  return term;
}

export function frameFromFrameAndSubstitutions(frame, substitutions, context) {
  if (frame !== null) {
    const frameNode = frame.getNode(),
          frameSimple = frame.isSimple();

    frame = null;  ///

    if (frameSimple) {
      const frameMetavariableName = frameMetavariableNameFromFrameNode(frameNode),
            metavariableName = frameMetavariableName,
            metavariable = context.findMetavariableByMetavariableName(metavariableName);

      if (metavariable !== null) {
        const substitution = substitutions.findSubstitutionByMetavariable(metavariable);

        if (substitution !== null) {
          frame = substitution.getFrame();
        }
      }
    }
  }

  return frame;
}

export function statementFromStatementAndSubstitutions(statement, substitutions, context) {
  if (statement !== null) {
    const { Metavariable } = ontology,
          statementNode = statement.getNode(),
          metavariable = Metavariable.fromStatementNode(statementNode, context);

    statement = null; ///

    if (metavariable !== null) {
      const substitution = context.getSubstitution();

      if (substitution !== null) {
        statement = substitution.getStatement();
      }
    }
  }

  return statement;
}
