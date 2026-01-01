"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../../ontology";

import { equalityFromStatement,
         judgementFromStatement,
         typeAssertionFromStatement,
         propertyAssertionFromStatement,
         satisfiesAssertionFromStatement } from "../../utilities/statement";

const { backwardsSome } = arrayUtilities;

function unifyWithRule(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesWithRule = false;

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const ruleString = rule.getString(),
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs(),
            statementAndStepsUnify = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

      if (statementAndStepsUnify) {
        unifiesWithRule = true;
      }

      if (unifiesWithRule) {
        context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
      }
    }
  }

  return unifiesWithRule;
}

function unifyWithReference(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesWithReference = false;

  if (reference !== null) {
    const metavariableVerifies = reference.verifyMetavariable(context);

    if (metavariableVerifies) {
      const statementString = statement.getString(),
            referenceString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${referenceString}' reference...`);

      const { StatementSubstitution } = ontology,
            metavariable = reference.getMetavariable(),
            statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
            substitution = statementSubstitution; ///

      substitutions.addSubstitution(substitution, context);

      unifiesWithReference = true;

      if (unifiesWithReference) {
        context.debug(`...unified the '${statementString}' statement with the '${referenceString}' reference.`);
      }
    }
  }

  return unifiesWithReference;
}

function unifyAsSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesAsSatisfiesAssertion = false;

  satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Unifying the '${statementString}' statement as a satisfies assertion...`);

    const stated = true,
          assignments = null;

    satisfiesAssertion.verifySignature(assignments, stated, context);

    if (reference === null) {
      const stepsOrSubproofs = context.getStepsOrSubproofs();

      unifiesAsSatisfiesAssertion = backwardsSome(stepsOrSubproofs, (stepsOrSubproof) => {
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
            const { Substitutions } = ontology,
                  substitutions = Substitutions.fromNothing(),
                  axiomLemmaTheoremOrConjectureUnifies = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions, context);

            if (axiomLemmaTheoremOrConjectureUnifies) {
              const substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions, context);

              if (substitutionsCorrelates) {
                unifiesAsSatisfiesAssertion = true;
              }
            }
          } else {
            const axiomString = axiom.getString();

            context.debug(`Cannot unify with the '${axiomString}' because it is not satisfiable.`)
          }
        }
      }
    }

    if (unifiesAsSatisfiesAssertion) {
      context.debug(`...unified the '${statementString}' statement as a satisfies assertion.`);
    }
  }

  return unifiesAsSatisfiesAssertion;
}

function unifyWithAxiomLemmaTheoremOrConjecture(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesWithAxiomLemmaTheoremOrConjecture = false;

  if (reference !== null) {
    const { Substitutions } = ontology,
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
        const { StatementSubstitution } = ontology,
              metavariable = reference.getMetavariable(),
              statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
              substitution = statementSubstitution;  ///

        substitutions = generalSubstitutions; ///

        substitutions.addSubstitution(substitution, context);

        unifiesWithAxiomLemmaTheoremOrConjecture = true;
      }

      if (unifiesWithAxiomLemmaTheoremOrConjecture) {
        context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture.`);
      }
    }
  }

  return unifiesWithAxiomLemmaTheoremOrConjecture;
}

function unifyAEquality(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesAEquality = false;

  if (reference === null) {
    const equality = equalityFromStatement(statement, context);

    if (equality !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as an equality...`);

      const equalityEqual = equality.isEqual(context);

      if (equalityEqual) {
        unifiesAEquality = true;
      }

      if (unifiesAEquality) {
        context.debug(`...unified the '${statementString}' statement as an equality.`);
      }
    }
  }

  return unifiesAEquality;
}

function unifyAsJudgement(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesAsJudgement = false;

  if (reference === null) {
    const judgement = judgementFromStatement(statement, context);

    if (judgement !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a judgement...`);

      unifiesAsJudgement = true;

      if (unifiesAsJudgement) {
        context.debug(`...unified the '${statementString}' statement as a judgement.`);
      }
    }
  }

  return unifiesAsJudgement;
}

function unifyAsTypeAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesAsTypeAssertion = false;

  if (reference === null) {
    const typeAssertion = typeAssertionFromStatement(statement, context);

    if (typeAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a type assertion...`);

      unifiesAsTypeAssertion = true;

      context.debug(`...unified the '${statementString}' statement as a type assertion.`);
    }
  }

  return unifiesAsTypeAssertion;
}

function unifyAsPropertyAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesAsPropertyAssertion = false;

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
          unifiesAsPropertyAssertion = true;
        }
      }

      if (unifiesAsPropertyAssertion) {
        context.debug(`...unified the '${statementString}' statement as a property assertion.`);
      }
    }
  }

  return unifiesAsPropertyAssertion;
}

function unifyWithSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesWithSatisfiesAssertion = false;

  if (satisfiesAssertion !== null) {
    const stepsOrSubproofs = context.getStepsOrSubproofs(),
          statementUnifies = satisfiesAssertion.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

    if (statementUnifies) {
      unifiesWithSatisfiesAssertion = true;
    }
  }

  return unifiesWithSatisfiesAssertion;
}

function equateWithStepsOrSubproofs(statement, reference, satisfiesAssertion, substitutions, context) {
  let unifiesWithStepOrSubproofs = false;

  if (reference === null) {
    const stepsOrSubproofs = context.getStepsOrSubproofs(),
          statementUnifiesWithSteps = statement.equateWithStepsOrSubproofs(stepsOrSubproofs, context);

    if (statementUnifiesWithSteps) {
      unifiesWithStepOrSubproofs = true;
    }
  }

  return unifiesWithStepOrSubproofs;
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

