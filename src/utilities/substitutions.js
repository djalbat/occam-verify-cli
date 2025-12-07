"use strict";

import ontology from "../ontology";

export function termFromTermAndSubstitutions(term, substitutions, context) {
  if (term !== null) {
    const { Variable } = ontology,
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
    const { Metavariable } = ontology,
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
    const { Metavariable } = ontology,
          statementNode = statement.getNode(),
          metavariable = Metavariable.fromStatementNode(statementNode, context);

    statement = null; ///

    if (metavariable !== null) {
      let substitution;

      const { TermSubstitution, FrameSubstitution } = ontology,
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
