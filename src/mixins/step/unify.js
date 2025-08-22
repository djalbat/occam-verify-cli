"use strict";

import { arrayUtilities } from "necessary";

import dom from "../../dom";
import Substitutions from "../../substitutions";

import { equalityFromStatement,
         judgementFromStatement,
         typeAssertionFromStatement,
         propertyAssertionFromStatement,
         satisfiesAssertionFromStatement } from "../../utilities/context";

const { backwardsSome } = arrayUtilities;

function unifyWithRule(statement, reference, substitutions, context) {
  let unifiesWithRule = false;

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const ruleString = rule.getString(),
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs(),
            statementAndStepsUnifies = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

      if (statementAndStepsUnifies) {
        unifiesWithRule = true;
      }

      if (unifiesWithRule) {
        context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
      }
    }
  }

  return unifiesWithRule;
}

function unifyWithReference(statement, reference, substitutions, context) {
  let unifiesWithReference = false;

  if (reference !== null) {
    const metavariableVerified = reference.verifyMetavariable(context);

    if (metavariableVerified) {
      const statementString = statement.getString(),
            referenceString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${referenceString}' reference...`);

      const { StatementSubstitution } = dom,
            metavariable = reference.getMetavariable(),
            specificContext = context,  ///
            statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
            substitution = statementSubstitution; ///

      substitutions.addSubstitution(substitution, specificContext);

      unifiesWithReference = true;

      if (unifiesWithReference) {
        context.debug(`...unified the '${statementString}' statement with the '${referenceString}' reference.`);
      }
    }
  }

  return unifiesWithReference;
}

function unifyAsSatisfiesAssertion(statement, reference, substitutions, context) {
  let unifiesAsSatisfiesAssertion = false;

  const satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Unifying the '${statementString}' statement as a satisfies assertion...`);

    const stated = true,
          assignments = null;

    satisfiesAssertion.verifySignature(assignments, stated, context);

    if (reference === null) {
      const stepsOrSubproofs = context.getStepsOrSubproofs();

      unifiesAsSatisfiesAssertion = backwardsSome(stepsOrSubproofs, (stepsOrSubproof) => {
        const satisfiedAssertionUnifies = stepsOrSubproof.unifySatisfiesAssertion(satisfiesAssertion, context);

        if (satisfiedAssertionUnifies) {
          return true;
        }
      });
    } else {
      const axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference);

      if (axiomLemmaTheoremConjecture !== null) {
        reference = satisfiesAssertion.getReference();

        const axiom = context.findAxiomByReference(reference);

        if (axiom !== null) {
          const substitutions = Substitutions.fromNothing(),
                axiomLemmaTheoremConjectureUnifies = axiom.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions, context);

          if (axiomLemmaTheoremConjectureUnifies) {
            const substitutionsCorrelated = satisfiesAssertion.correlateSubstitutions(substitutions, context);

            if (substitutionsCorrelated) {
              unifiesAsSatisfiesAssertion = true;
            }
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

function unifyWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
  let unifiesWithAxiomLemmaTheoremOrConjecture = false;

  if (reference !== null) {
    const axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference),
          generalSubstitutions = substitutions; ///

    if (axiomLemmaTheoremConjecture !== null) {
      const statementString = statement.getString(),
            axiomLemmaTheoremConjectureString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`);

      const stepsOrSubproofs = context.getStepsOrSubproofs();

      substitutions = Substitutions.fromNothing();

      const statementAndStepsUnifies = axiomLemmaTheoremConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);

      if (statementAndStepsUnifies) {
        const { StatementSubstitution } = dom,
              metavariable = reference.getMetavariable(),
              specificContext = context,  ///
              statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
              substitution = statementSubstitution;  ///

        substitutions = generalSubstitutions; ///

        substitutions.addSubstitution(substitution, specificContext);

        unifiesWithAxiomLemmaTheoremOrConjecture = true;
      }

      if (unifiesWithAxiomLemmaTheoremOrConjecture) {
        context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture.`);
      }
    }
  }

  return unifiesWithAxiomLemmaTheoremOrConjecture;
}

function unifyAEquality(statement, reference, substitutions, context) {
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

function unifyAsJudgement(statement, reference, substitutions, context) {
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

function unifyAsTypeAssertion(statement, reference, substitutions, context) {
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

function unifyAsPropertyAssertion(statement, reference, substitutions, context) {
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

function unifyWithSatisfiesAssertion(statement, reference, substitutions, context) {
  let unifiesWithSatisfiesAssertion = false;

  const stepsOrSubproofs = context.getStepsOrSubproofs(),
        satisfiesAssertions = stepsOrSubproofs.reduce((satisfiesAssertions, stepOrSubproof) => {
          const stepOrSubproofStep = stepOrSubproof.isStep();

          if (stepOrSubproofStep) {
            const { SatisfiesAssertion } = dom,
                  step = stepOrSubproof,  ///
                  statement = step.getStatement(),
                  statementNode = statement.getNode(),
                  satisfiesAssertion = SatisfiesAssertion.fromStatementNode(statementNode, context);

            if (satisfiesAssertion !== null) {
              satisfiesAssertions.unshift(satisfiesAssertion);
            }
          }

          return satisfiesAssertions;
        }, []),
        statementUnifies = backwardsSome(satisfiesAssertions, (satisfiesAssertion) => {
          const statementUnifies = satisfiesAssertion.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);

          if (statementUnifies) {
            return true;
          }
        });

  if (statementUnifies) {
    unifiesWithSatisfiesAssertion = true;
  }

  return unifiesWithSatisfiesAssertion;
}

function equateWithStepsOrSubproofs(statement, reference, substitutions, context) {
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

