"use strict";

import dom from "../dom";

export function termFromTermAndSubstitutions(term, substitutions, context) {
  if (term !== null) {
    const { Variable } = dom,
          termNode = term.getNode(),
          variable = Variable.fromTermNode(termNode, context);

    term = null;  ///

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
    const { Metavariable } = dom,
          frameNode = frame.getNode(),
          metavariable = Metavariable.fromFrameNode(frameNode, context);

    frame = null; ///

    if (metavariable !== null) {
      let substitution = null;

      substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);

      if (substitution !== null) {
        frame = substitution.getFrame();
      }
    }
  }

  return frame;
}

export function statementFromStatementAndSubstitutions(statement, substitutions, context) {
  if (statement !== null) {
    const { Metavariable } = dom,
          statementNode = statement.getNode(),
          metavariable = Metavariable.fromStatementNode(statementNode, context);

    statement = null; ///

    if (metavariable !== null) {
      let substitution;

      const { TermSubstitution, FrameSubstitution } = dom,
            termSubstitution = TermSubstitution.fromStatementNode(statementNode, context),
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
