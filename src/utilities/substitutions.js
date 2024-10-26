"use strict";

import { nodeQuery } from "../utilities/query";
import { variableNameFromVariableNode } from "../utilities/name";

const variableNodeQuery = nodeQuery("/term/variable!"),
      metavariableNodeQuery = nodeQuery("/*/metavariable!"),
      substitutionNodeQuery = nodeQuery("/*/substitution!");

export function termFromTermAndSubstitutions(term, substitutions) {
  if (term !== null) {
    const termNode = term.getNode();

    term = null;

    const variableNode = variableNodeQuery(termNode);

    if (variableNode !== null) {
      const variableName = variableNameFromVariableNode(variableNode),
            substitution = substitutions.findSubstitutionByVariableName(variableName);

      if (substitution !== null) {
        term = substitution.getTerm();
      }
    }
  }

  return term;
}

export function frameFromFrameAndSubstitutions(frame, substitutions) {
  if (frame !== null) {
    const frameNode = frame.getNode();

    frame = null;

    const metavariableNode = metavariableNodeQuery(frameNode),
          substitutionNode = substitutionNodeQuery(frameNode);

    if (metavariableNode !== null) {
      const substitution = substitutions.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);

      if (substitution !== null) {
        frame = substitution.getFrame();
      }
    }
  }

  return frame;
}

export function statementFromStatementAndSubstitutions(statement, substitutions) {
  if (statement !== null) {
    const statementNode = statement.getNode();

    statement = null;

    const metavariableNode = metavariableNodeQuery(statementNode),
          substitutionNode = substitutionNodeQuery(statementNode);

    if (metavariableNode !== null) {
      const substitution = substitutions.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);

      if (substitution !== null) {
        statement = substitution.getStatement();
      }
    }
  }

  return statement;
}
