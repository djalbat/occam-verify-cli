"use strict";

import elements from "../elements";

import { descend } from "./context";

async function unifyStepWithRule(step, context) {
  let stepUnifiesWithRule = false;

  const reference = step.getReference();

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

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

  const reference = step.getReference();

  if (reference !== null) {
    const stepString = step.getString(),
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

async function unifyStepWithTopLevelAssertion(step, context) {
  let stepUnifiesWithTopLevelAssertion = false;

  const reference = step.getReference();

  if (reference !== null) {
    const topLevelAssertion = context.findTopLevelAssertionByReference(reference);

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

      stepUnifiesAEquality = true;

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

      if (stepUnifiesAsTypeAssertion) {
        context.debug(`...unified the '${stepString}' step as a type assertion.`);
      }
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

      stepUnifiesAsPropertyAssertion = true;

      if (stepUnifiesAsPropertyAssertion) {
        context.debug(`...unified the '${stepString}' step as a property assertion.`);
      }
    }
  }

  return stepUnifiesAsPropertyAssertion;
}

async function unifyStepAsSignatureAssertion(step, context) {
  let stepUnifiesAsSignatureAssertion = false;

  const unqualified = step.isUnqualified();

  if (unqualified) {
    const { SignatureAssertion } = elements,
          statement = step.getStatement(),
          signatureAssertion = SignatureAssertion.fromStatement(statement, context);

    if (signatureAssertion !== null) {
      const stepString = step.getString();

      context.trace(`Unifying the '${stepString}' step as a signature assertion...`);

      stepUnifiesAsSignatureAssertion = true;

      if (stepUnifiesAsSignatureAssertion) {
        context.debug(`...unified the '${stepString}' step as a signature assertion.`);
      }
    }
  }

  return stepUnifiesAsSignatureAssertion;
}

async function unifyStepWithSignatureAssertion(step, context) {
  let stepUnifiesWithSignatureAssertion = false;

  const signatureAssertion = step.getSignatureAssertion();

  if (signatureAssertion !== null) {
    const stepString = step.getString(),
          signatureAssertionString = signatureAssertion.getString();

    context.trace(`Unifying the '${stepString}' step with the '${signatureAssertionString}' signature assertion...`);

    const reference = signatureAssertion.getReference(),
          axiom = context.findAxiomByReference(reference),
          subproofOrProofAssertions = context.getSubproofOrProofAssertions(),
          stepAndSubproofOrProofAssertionsUnify = await axiom.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);

    if (stepAndSubproofOrProofAssertionsUnify) {

      debugger

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
  unifyStepWithTopLevelAssertion,
  unifyStepAsEquality,
  unifyStepAsJudgement,
  unifyStepAsTypeAssertion,
  unifyStepAsPropertyAssertion,
  unifyStepAsSignatureAssertion,
  unifyStepWithSignatureAssertion,
  compareStepWithSubproofOrProofAssertions
];
