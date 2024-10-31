"use strict";

import shim from "../shim";
import TermSubstitution from "../substitution/term";
import FrameSubstitution from "../substitution/frame";

export function termFromTermAndSubstitutions(term, substitutions, context) {
  if (term !== null) {
    const { Variable } = shim,
          termNode = term.getNode(),
          variable = Variable.fromTermNode(termNode, context);

    if (variable !== null) {
      const substitution = substitutions.findSubstitutionByVariable(variable);

      if (substitution !== null) {
        term = substitution.getTerm();
      }
    }
  }

  return term;
}

export function frameFromFrameAndSubstitutions(frame, substitutions, context) {
  if (frame !== null) {
    const { Metavariable } = shim,
          frameNode = frame.getNode(),
          metavariable = Metavariable.fromFrameNode(frameNode, context);

    if (metavariable !== null) {
      const substitution = substitutions.findSubstitutionByMetavariable(metavariable);

      if (substitution !== null) {
        frame = substitution.getFrame();
      }
    }
  }

  return frame;
}

export function statementFromStatementAndSubstitutions(statement, substitutions, context) {
  if (statement !== null) {
    const { Metavariable } = shim,
          statementNode = statement.getNode(),
          metavariable = Metavariable.fromStatementNode(statementNode, context);

    statement = null; ///

    if (metavariable !== null) {
      let substitution;

      const termSubstitution = TermSubstitution.fromStatementNode(statementNode, context),
            frameSubstitution = FrameSubstitution.fromStatementNode(statementNode, context);

      substitution = (termSubstitution || frameSubstitution);

      substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///

      if (substitution !== null) {
        statement = substitution.getStatement();
      }
    }
  }

  return statement;
}
