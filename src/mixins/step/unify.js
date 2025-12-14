"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../../ontology";
import Substitutions from "../../substitutions";

import { equalityFromStatement,
         judgementFromStatement,
         typeAssertionFromStatement,
         propertyAssertionFromStatement,
         satisfiesAssertionFromStatement } from "../../utilities/context";

const { backwardsSome } = arrayUtilities;

function unifyWithRule(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedWithRule = false;

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const ruleString = rule.getString(),
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs(),
            statementAndStepsUnify = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

      if (statementAndStepsUnify) {
        unifiedWithRule = true;
      }

      if (unifiedWithRule) {
        context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
      }
    }
  }

  return unifiedWithRule;
}

function unifyWithReference(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedWithReference = false;

  if (reference !== null) {
    const metavariableVerifies = reference.verifyMetavariable(context);

    if (metavariableVerifies) {
      const statementString = statement.getString(),
            referenceString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${referenceString}' reference...`);

      const { StatementSubstitution } = ontology,
            metavariable = reference.getMetavariable(),
            specificContext = context,  ///
            statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
            substitution = statementSubstitution; ///

      substitutions.addSubstitution(substitution, context);

      unifiedWithReference = true;

      if (unifiedWithReference) {
        context.debug(`...unified the '${statementString}' statement with the '${referenceString}' reference.`);
      }
    }
  }

  return unifiedWithReference;
}

function unifyAsSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedAsSatisfiesAssertion = false;

  satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Unifying the '${statementString}' statement as a satisfies assertion...`);

    const stated = true,
          assignments = null;

    satisfiesAssertion.verifySignature(assignments, stated, context);

    if (reference === null) {
      const stepsOrSubproofs = context.getStepsOrSubproofs();

      unifiedAsSatisfiesAssertion = backwardsSome(stepsOrSubproofs, (stepsOrSubproof) => {
        const stepOrSubProofUnifiedWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);

        if (stepOrSubProofUnifiedWIthSatisfiesAssertion) {
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
            const substitutions = Substitutions.fromNothing(),
                  axiomLemmaTheoremOrConjectureUnified = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions, context);

            if (axiomLemmaTheoremOrConjectureUnified) {
              const substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions, context);

              if (substitutionsCorrelates) {
                unifiedAsSatisfiesAssertion = true;
              }
            }
          } else {
            const axiomString = axiom.getString();

            context.debug(`Cannot unify with the '${axiomString}' because it is not satisfiable.`)
          }
        }
      }
    }

    if (unifiedAsSatisfiesAssertion) {
      context.debug(`...unified the '${statementString}' statement as a satisfies assertion.`);
    }
  }

  return unifiedAsSatisfiesAssertion;
}

function unifyWithAxiomLemmaTheoremOrConjecture(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedWithAxiomLemmaTheoremOrConjecture = false;

  if (reference !== null) {
    const axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference),
          generalSubstitutions = substitutions; ///

    if (axiomLemmaTheoremOrConjecture !== null) {
      const statementString = statement.getString(),
            axiomLemmaTheoremOrConjectureString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs();

      substitutions = Substitutions.fromNothing();

      const statementAndStepsUnify = axiomLemmaTheoremOrConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);

      if (statementAndStepsUnify) {
        const { StatementSubstitution } = ontology,
              metavariable = reference.getMetavariable(),
              specificContext = context,  ///
              statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
              substitution = statementSubstitution;  ///

        substitutions = generalSubstitutions; ///

        substitutions.addSubstitution(substitution, context);

        unifiedWithAxiomLemmaTheoremOrConjecture = true;
      }

      if (unifiedWithAxiomLemmaTheoremOrConjecture) {
        context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture.`);
      }
    }
  }

  return unifiedWithAxiomLemmaTheoremOrConjecture;
}

function unifyAEquality(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedAEquality = false;

  if (reference === null) {
    const equality = equalityFromStatement(statement, context);

    if (equality !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as an equality...`);

      const equalityEqual = equality.isEqual(context);

      if (equalityEqual) {
        unifiedAEquality = true;
      }

      if (unifiedAEquality) {
        context.debug(`...unified the '${statementString}' statement as an equality.`);
      }
    }
  }

  return unifiedAEquality;
}

function unifyAsJudgement(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedAsJudgement = false;

  if (reference === null) {
    const judgement = judgementFromStatement(statement, context);

    if (judgement !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a judgement...`);

      unifiedAsJudgement = true;

      if (unifiedAsJudgement) {
        context.debug(`...unified the '${statementString}' statement as a judgement.`);
      }
    }
  }

  return unifiedAsJudgement;
}

function unifyAsTypeAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedAsTypeAssertion = false;

  if (reference === null) {
    const typeAssertion = typeAssertionFromStatement(statement, context);

    if (typeAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a type assertion...`);

      unifiedAsTypeAssertion = true;

      context.debug(`...unified the '${statementString}' statement as a type assertion.`);
    }
  }

  return unifiedAsTypeAssertion;
}

function unifyAsPropertyAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedAsPropertyAssertion = false;

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
          unifiedAsPropertyAssertion = true;
        }
      }

      if (unifiedAsPropertyAssertion) {
        context.debug(`...unified the '${statementString}' statement as a property assertion.`);
      }
    }
  }

  return unifiedAsPropertyAssertion;
}

function unifyWithSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedWithSatisfiesAssertion = false;

  if (satisfiesAssertion !== null) {
    const stepsOrSubproofs = context.getStepsOrSubproofs(),
          statementUnified = satisfiesAssertion.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

    if (statementUnified) {
      unifiedWithSatisfiesAssertion = true;
    }
  }

  return unifiedWithSatisfiesAssertion;
}

function equateWithStepsOrSubproofs(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiedWithStepOrSubproofs = false;

  if (reference === null) {
    const stepsOrSubproofs = context.getStepsOrSubproofs(),
          statementUnifiedWithSteps = statement.equateWithStepsOrSubproofs(stepsOrSubproofs, context);

    if (statementUnifiedWithSteps) {
      unifiedWithStepOrSubproofs = true;
    }
  }

  return unifiedWithStepOrSubproofs;
}

const unifyMixins = [
  unifyWithRule,
  unifyWithReference,
  unifyAsSatisfiesAssertion,
  unifyWithAxiomLemmaTheoremOrConjecture,
  unifyAEquality,
  unifyAsJudgement,
  unifyAsTypeAssertion,
  unifyAsPropertyAssertion,
  unifyWithSatisfiesAssertion,
  equateWithStepsOrSubproofs
];

export default unifyMixins;

