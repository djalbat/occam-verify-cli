"use strict";

import { arrayUtilities } from "necessary";

const { compress } = arrayUtilities;

export function resolveSubstitutions(substitutions) {
  const metavariables = metavariablesFromSubstitutions(substitutions);

  metavariables.forEach((metavariable) => {
    const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
          complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
            let resolved;

            const substitution = complexSubstitution; ///

            resolved = substitution.isResolved();

            if (!resolved) {
              substitution.resolve(substitutions, context);
            }
          });

    if (complexSubstitutionsResolved) {
      return true;
    }
  });
}

export function areSubstitutionsResolved(substitutions) {
  const metavariables = metavariablesFromSubstitutions(substitutions),
        resolved = metavariables.every((metavariable) => {
          const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
                complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
                  const complexSubstitutionResolved = complexSubstitution.isResolved();

                  if (complexSubstitutionResolved) {
                    return true;
                  }
                });

          if (complexSubstitutionsResolved) {
            return true;
          }
        });

  return resolved;
}

export function termFromTermAndSubstitutions(term, substitutions, generalContext, specificContext) {
  if (term !== null) {
    const termNode = term.getNode(),
          termSingular = term.isSingular();

    term = null;  ///

    if (termSingular) {
      const variableIdentifier = termNode.getVariableIdentifier(),
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
          frameSingular = frame.isSingular();

    frame = null;  ///

    if (frameSingular) {
      const metavariableName = frameNode.getMetavariableName(),
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

function metavariablesFromSubstitutions(substitutions) {
  const metavariables = [];

  substitutions.forEach((substitution) => {
    const metavariable = substitution.getMetavariable();

    if (metavariable !== null) {
      metavariables.push(metavariable);
    }
  });

  compress(metavariables, (metavariableA, metavariableB) => {
    const metavariableAEqualToMetavariableB = metavariableB.isEqualTo(metavariableA);

    if (!metavariableAEqualToMetavariableB) {
      return true;
    }
  });

  return metavariables;
}
