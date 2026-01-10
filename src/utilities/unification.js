"use strict";

import { arrayUtilities } from "necessary";

import elements from "../elements";

import { equalityFromStatement,
         judgementFromStatement,
         typeAssertionFromStatement,
         propertyAssertionFromStatement,
         satisfiesAssertionFromStatement } from "../utilities/statement";

const { backwardsSome } = arrayUtilities;

function unifyStatementWithRule(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesWithRule = false;

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const ruleString = rule.getString(),
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs(),
            statementAndStepsUnify = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

      if (statementAndStepsUnify) {
        statementUnifiesWithRule = true;
      }

      if (statementUnifiesWithRule) {
        context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
      }
    }
  }

  return statementUnifiesWithRule;
}

function unifyStatementWithReference(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesWithReference = false;

  if (reference !== null) {
    const metavariableVerifies = reference.verifyMetavariable(context);

    if (metavariableVerifies) {
      const statementString = statement.getString(),
            referenceString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${referenceString}' reference...`);

      const { StatementSubstitution } = elements,
            metavariable = reference.getMetavariable(),
            statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
            substitution = statementSubstitution; ///

      substitutions.addSubstitution(substitution, context);

      statementUnifiesWithReference = true;

      if (statementUnifiesWithReference) {
        context.debug(`...unified the '${statementString}' statement with the '${referenceString}' reference.`);
      }
    }
  }

  return statementUnifiesWithReference;
}

function unifyStatementAsSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesAsSatisfiesAssertion = false;

  satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Unifying the '${statementString}' statement as a satisfies assertion...`);

    const stated = true,
          assignments = null;

    satisfiesAssertion.verifySignature(assignments, stated, context);

    if (reference === null) {
      const stepsOrSubproofs = context.getStepsOrSubproofs();

      statementUnifiesAsSatisfiesAssertion = backwardsSome(stepsOrSubproofs, (stepsOrSubproof) => {
        const stepOrSubProofUnifiesWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);

        if (stepOrSubProofUnifiesWIthSatisfiesAssertion) {
          return true;
        }
      });
    } else {
      const axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference);

      if (axiomLemmaTheoremOrConjecture !== null) {
        reference = satisfiesAssertion.getReference();

        const axiom = context.findAxiomByReference(reference);

        if (axiom !== null) {
          const satisfiable = axiom.isSatisfiable();

          if (satisfiable) {
            const { Substitutions } = elements,
                  substitutions = Substitutions.fromNothing(),
                  axiomLemmaTheoremOrConjectureUnifies = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions, context);

            if (axiomLemmaTheoremOrConjectureUnifies) {
              const substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions, context);

              if (substitutionsCorrelates) {
                statementUnifiesAsSatisfiesAssertion = true;
              }
            }
          } else {
            const axiomString = axiom.getString();

            context.debug(`Unable to unify with the '${axiomString}' because it is not satisfiable.`)
          }
        }
      }
    }

    if (statementUnifiesAsSatisfiesAssertion) {
      context.debug(`...unified the '${statementString}' statement as a satisfies assertion.`);
    }
  }

  return statementUnifiesAsSatisfiesAssertion;
}

function unifyStatementWithAxiomLemmaTheoremOrConjecture(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesWithAxiomLemmaTheoremOrConjecture = false;

  if (reference !== null) {
    const { Substitutions } = elements,
          axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference),
          generalSubstitutions = substitutions; ///

    if (axiomLemmaTheoremOrConjecture !== null) {
      const statementString = statement.getString(),
            axiomLemmaTheoremOrConjectureString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs();

      substitutions = Substitutions.fromNothing();

      const statementAndStepsUnify = axiomLemmaTheoremOrConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);

      if (statementAndStepsUnify) {
        const { StatementSubstitution } = elements,
              metavariable = reference.getMetavariable(),
              statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
              substitution = statementSubstitution;  ///

        substitutions = generalSubstitutions; ///

        substitutions.addSubstitution(substitution, context);

        statementUnifiesWithAxiomLemmaTheoremOrConjecture = true;
      }

      if (statementUnifiesWithAxiomLemmaTheoremOrConjecture) {
        context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture.`);
      }
    }
  }

  return statementUnifiesWithAxiomLemmaTheoremOrConjecture;
}

function unifyStatementAEquality(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesAEquality = false;

  if (reference === null) {
    const equality = equalityFromStatement(statement, context);

    if (equality !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as an equality...`);

      const equalityEqual = equality.isEqual(context);

      if (equalityEqual) {
        statementUnifiesAEquality = true;
      }

      if (statementUnifiesAEquality) {
        context.debug(`...unified the '${statementString}' statement as an equality.`);
      }
    }
  }

  return statementUnifiesAEquality;
}

function unifyStatementAsJudgement(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesAsJudgement = false;

  if (reference === null) {
    const judgement = judgementFromStatement(statement, context);

    if (judgement !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a judgement...`);

      statementUnifiesAsJudgement = true;

      if (statementUnifiesAsJudgement) {
        context.debug(`...unified the '${statementString}' statement as a judgement.`);
      }
    }
  }

  return statementUnifiesAsJudgement;
}

function unifyStatementAsTypeAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesAsTypeAssertion = false;

  if (reference === null) {
    const typeAssertion = typeAssertionFromStatement(statement, context);

    if (typeAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a type assertion...`);

      statementUnifiesAsTypeAssertion = true;

      context.debug(`...unified the '${statementString}' statement as a type assertion.`);
    }
  }

  return statementUnifiesAsTypeAssertion;
}

function unifyStatementAsPropertyAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesAsPropertyAssertion = false;

  if (reference === null) {
    const propertyAssertion = propertyAssertionFromStatement(statement, context);

    if (propertyAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a property assertion...`);

      const term = propertyAssertion.getTerm(),
            equivalence = context.findEquivalenceByTerm(term);

      if (equivalence !== null) {
        const propertyAssertionMatches = equivalence.someOtherTerm(term, (term) => {  ///
          const propertyRelation = propertyAssertion.getPropertyRelation(),
                propertyAssertionMatches = context.matchTermAndPropertyRelation(term, propertyRelation);

          if (propertyAssertionMatches) {
            return true;
          }
        });

        if (propertyAssertionMatches) {
          statementUnifiesAsPropertyAssertion = true;
        }
      }

      if (statementUnifiesAsPropertyAssertion) {
        context.debug(`...unified the '${statementString}' statement as a property assertion.`);
      }
    }
  }

  return statementUnifiesAsPropertyAssertion;
}

function unifyStatementWithSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementUnifiesWithSatisfiesAssertion = false;

  if (satisfiesAssertion !== null) {
    const stepsOrSubproofs = context.getStepsOrSubproofs(),
          statementUnifies = satisfiesAssertion.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

    if (statementUnifies) {
      statementUnifiesWithSatisfiesAssertion = true;
    }
  }

  return statementUnifiesWithSatisfiesAssertion;
}

function equateStatementWithStepsOrSubproofs(statement, reference, satisfiesAssertion, substitutions, context) {
  let statementEquatesWithStepOrSubproofs = false;

  if (reference === null) {
    const stepsOrSubproofs = context.getStepsOrSubproofs(),
          statementUnifiesWithSteps = statement.equateWithStepsOrSubproofs(stepsOrSubproofs, context);

    if (statementUnifiesWithSteps) {
      statementEquatesWithStepOrSubproofs = true;
    }
  }

  return statementEquatesWithStepOrSubproofs;
}

export const unifyStatements = [
  unifyStatementWithRule,
  unifyStatementWithReference,
  unifyStatementAsSatisfiesAssertion,
  unifyStatementWithAxiomLemmaTheoremOrConjecture,
  unifyStatementAEquality,
  unifyStatementAsJudgement,
  unifyStatementAsTypeAssertion,
  unifyStatementAsPropertyAssertion,
  unifyStatementWithSatisfiesAssertion,
  equateStatementWithStepsOrSubproofs
];
