"use strict";

import { arrayUtilities } from "necessary";

import elements from "../elements";

import { descend } from "./context";

const { backwardsSome } = arrayUtilities;

async function unifyStepWithRule(step, context) {
  let stepUnifiesWithRule = false;

  const qualified = step.isQualified();

  if (qualified) {
    const reference = step.getReference(),
          rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const stepString = step.getString(),
            ruleString = rule.getString();

      context.trace(`Unifying the '${stepString}' step with the '${ruleString}' rule...`);

      const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
            stepAndSubproofOrProofAssertionsUnify = await rule.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);

      if (stepAndSubproofOrProofAssertionsUnify) {
        stepUnifiesWithRule = true;
      }

      if (stepUnifiesWithRule) {
        context.debug(`...unified the '${stepString}' step with the '${ruleString}' rule.`);
      }
    }
  }

  return stepUnifiesWithRule;
}

async function unifyStepWithReference(step, context) {
  let stepUnifiesWithReference = false;

  const qualified = step.isQualified();

  if (qualified) {
    const reference = step.getReference(),
          stepString = step.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${stepString}' step with the '${referenceString}' reference...`);

    const topLevelAssertion = context.findTopLevelAssertionByReference(reference);

    if (topLevelAssertion !== null) {
      const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
            stepAndSubproofOrProofAssertionsUnify = await topLevelAssertion.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);

      if (stepAndSubproofOrProofAssertionsUnify) {
        stepUnifiesWithReference = true;
      }
    } else {
      const metaLevel = context.isMetaLevel();

      if (metaLevel) {
        descend((context) => {
          const { MetaLevelAssumption } = elements,
                metaLevelAssumption = MetaLevelAssumption.fromStep(step, context);

          metaLevelAssumption.validate(context);

          stepUnifiesWithReference = true;
        }, context);
      }
    }

    if (stepUnifiesWithReference) {
      context.debug(`...unified the '${stepString}' step with the '${referenceString}' reference.`);
    }
  }

  return stepUnifiesWithReference;
}

async function unifyStepAsSignatureAssertion(step, context) {
  let stepUnifiesAsSignatureAssertion = false;

  const { SignatureAssertion } = elements;

  const signatureAssertion = SignatureAssertion.fromStep(step, context);

  if (signatureAssertion !== null) {
    const stepString = step.getString();

    context.trace(`Unifying the '${stepString}' step as a signature assertion...`);

    descend((context) => {
      signatureAssertion.verifySignature(context);
    }, context);

    const unqualified = step.isUnqualified();

    if (unqualified) {
      const subproofOrProofAssertions = context.getSubproofOrProofAssertions();

      stepUnifiesAsSignatureAssertion = backwardsSome(subproofOrProofAssertions, (stepsOrSubproof) => {
        const stepOrSubProofUnifiesWIthSignatureAssertion = stepsOrSubproof.unifyWithSignatureAssertion(signatureAssertion, context);

        if (stepOrSubProofUnifiesWIthSignatureAssertion) {
          return true;
        }
      });
    } else {
      const reference = signatureAssertion.getReference(),
            topLevelAssertion = context.findTopLevelAssertionByReference(reference);

      if (topLevelAssertion !== null) {
        const axiom = context.findAxiomByReference(reference);

        if (axiom !== null) {
          const satisfiable = axiom.isSatisfiable();

          if (satisfiable) {
            const topLevelAssertionUnifies = axiom.unifyTopLevelAssertion(topLevelAssertion, context);

            if (topLevelAssertionUnifies) {
              const substitutionsCorrelates = signatureAssertion.correlateSubstitutions(substitutions, context);

              if (substitutionsCorrelates) {
                stepUnifiesAsSignatureAssertion = true;
              }
            }
          } else {
            const axiomString = axiom.getString();

            context.debug(`Unable to unify with the '${axiomString}' because it is not satisfiable.`)
          }
        }
      }
    }

    if (stepUnifiesAsSignatureAssertion) {
      context.debug(`...unified the '${stepString}' step as a signature assertion.`);
    }
  }

  return stepUnifiesAsSignatureAssertion;
}

async function unifyStepWithTopLevelAssertion(step, context) {
  let stepUnifiesWithTopLevelAssertion = false;

  const qualified = step.isQualified();

  if (qualified) {
    const reference = step.getReference(),
          topLevelAssertion = context.findTopLevelAssertionByReference(reference);

    if (topLevelAssertion !== null) {
      const stepString = step.getString(),
            topLevelAssertionString = reference.getString();

      context.trace(`Unifying the '${stepString}' step with the '${topLevelAssertionString}' top level assertion...`);

      const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
            stepAndSubproofOrProofAssertionsUnify = await topLevelAssertion.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);

      if (stepAndSubproofOrProofAssertionsUnify) {
        stepUnifiesWithTopLevelAssertion = true;
      }

      if (stepUnifiesWithTopLevelAssertion) {
        context.debug(`...unified the '${stepString}' step with the '${topLevelAssertionString}' top level assertion.`);
      }
    }
  }

  return stepUnifiesWithTopLevelAssertion;
}

async function unifyStepAsEquality(step, context) {
  let stepUnifiesAEquality = false;

  const unqualified = step.isUnqualified();

  if (unqualified) {
    const { Equality } = elements,
          statement = step.getStatement(),
          equality = Equality.fromStatement(statement, context);

    if (equality !== null) {
      const stepString = step.getString();

      context.trace(`Unifying the '${stepString}' step as an equality...`);

      const equalityEqual = equality.isEqual(context);

      if (equalityEqual) {
        stepUnifiesAEquality = true;
      }

      if (stepUnifiesAEquality) {
        context.debug(`...unified the '${stepString}' step as an equality.`);
      }
    }
  }

  return stepUnifiesAEquality;
}

async function unifyStepAsJudgement(step, context) {
  let stepUnifiesAsJudgement = false;

  const unqualified = step.isUnqualified();

  if (unqualified) {
    const { Judgement } = elements,
          statement = step.getStatement(),
          judgement = Judgement.fromStatement(statement, context);

    if (judgement !== null) {
      const stepString = step.getString();

      context.trace(`Unifying the '${stepString}' step as a judgement...`);

      stepUnifiesAsJudgement = true;

      if (stepUnifiesAsJudgement) {
        context.debug(`...unified the '${stepString}' step as a judgement.`);
      }
    }
  }

  return stepUnifiesAsJudgement;
}

async function unifyStepAsTypeAssertion(step, context) {
  let stepUnifiesAsTypeAssertion = false;

  const unqualified = step.isUnqualified();

  if (unqualified) {
    const { TypeAssertion } = elements,
          statement = step.getStatement(),
          typeAssertion = TypeAssertion.fromStatement(statement, context);

    if (typeAssertion !== null) {
      const stepString = step.getString();

      context.trace(`Unifying the '${stepString}' step as a type assertion...`);

      stepUnifiesAsTypeAssertion = true;

      context.debug(`...unified the '${stepString}' step as a type assertion.`);
    }
  }

  return stepUnifiesAsTypeAssertion;
}

async function unifyStepAsPropertyAssertion(step, context) {
  let stepUnifiesAsPropertyAssertion = false;

  const unqualified = step.isUnqualified();

  if (unqualified) {
    const { PropertyAssertion } = elements,
          statement = step.getStatement(),
          propertyAssertion = PropertyAssertion.fromStatement(statement, context);

    if (propertyAssertion !== null) {
      const stepString = step.getString();

      context.trace(`Unifying the '${stepString}' step as a property assertion...`);

      const term = propertyAssertion.getTerm(),
            equivalence = context.findEquivalenceByTerm(term);

      if (equivalence !== null) {
        const propertyAssertionMatches = equivalence.someOtherTerm(term, (term) => {  ///
          const propertyRelation = propertyAssertion.getPropertyRelation(),
                comparesToTermAndPropertyRelation = context.compareTermAndPropertyRelation(term, propertyRelation);

          if (comparesToTermAndPropertyRelation) {
            return true;
          }
        });

        if (propertyAssertionMatches) {
          stepUnifiesAsPropertyAssertion = true;
        }
      }

      if (stepUnifiesAsPropertyAssertion) {
        context.debug(`...unified the '${stepString}' step as a property assertion.`);
      }
    }
  }

  return stepUnifiesAsPropertyAssertion;
}

async function unifyStepWithSignatureAssertion(step, context) {
  let stepUnifiesWithSignatureAssertion = false;

  const signatureAssertion = step.getSignatureAssertion();

  if (signatureAssertion !== null) {
    const stepString = step.getString(),
          signatureAssertionString = signatureAssertion.getString();

    context.trace(`Unifying the '${stepString}' step with the '${signatureAssertionString}' signature assertion...`);

    const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
          stepUnifies = signatureAssertion.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);

    if (stepUnifies) {
      stepUnifiesWithSignatureAssertion = true;
    }

    if (stepUnifiesWithSignatureAssertion) {
      context.debug(`...unified the '${stepString}' step with the '${signatureAssertionString}' signature assertion.`);
    }
  }

  return stepUnifiesWithSignatureAssertion;
}

async function compareStepWithSubproofOrProofAssertions(step, context) {
  let stepComparesToSubproofOrProofAssertions = false;

  const unqualified = step.isUnqualified();

  if (unqualified) {
    const stepString = step.getString();

    context.trace(`Comparing the '${stepString}' step with the subproofs or proof asssertions...`);

    const subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
          comparesToSubproofOrProofAssertions = step.compareSubproofOrProofAssertions(subproofOrProofAssertions, context);

    if (comparesToSubproofOrProofAssertions) {
      stepComparesToSubproofOrProofAssertions = true;
    }

    if (stepComparesToSubproofOrProofAssertions) {
      context.debug(`...compared the '${stepString}' step with the subproofs or proof asssertions.`);
    }
  }

  return stepComparesToSubproofOrProofAssertions;
}

export const unifySteps = [
  unifyStepWithRule,
  unifyStepWithReference,
  unifyStepAsSignatureAssertion,
  unifyStepWithTopLevelAssertion,
  unifyStepAsEquality,
  unifyStepAsJudgement,
  unifyStepAsTypeAssertion,
  unifyStepAsPropertyAssertion,
  unifyStepWithSignatureAssertion,
  compareStepWithSubproofOrProofAssertions
];
