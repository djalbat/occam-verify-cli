"use strict";

import { asynchronousUtilities } from "occam-languages";

import ProofAssertion from "../proofAssertion";

import { define } from "../../elements";
import { unifyStatements } from "../../utilities/unification";
import { asyncAttempt, asyncLiminally } from "../../utilities/context";
import { propertyAssertionFromStatement } from "../../utilities/statement";

const { asyncSome } = asynchronousUtilities;

export default define(class Step extends ProofAssertion {
  constructor(context, string, node, statement, reference, satisfiesAssertion) {
    super(context, string, node, statement);

    this.reference = reference;
    this.satisfiesAssertion = satisfiesAssertion;
  }

  getReference() {
    return this.reference;
  }

  getSatisfiesAssertion() {
    return this.satisfiesAssertion;
  }

  getStepNode() {
    const node = this.getNode(),
          stepNode = node;  ///

    return stepNode;
  }

  isSatisfied() {
    const satisfied = (this.satisfiesAssertion !== null);

    return satisfied;
  }

  isQualified() {
    const qualified = (this.reference !== null);

    return qualified;
  }

  isStated() {
    const qualified = this.isQualified(),
          stated = qualified; ///

    return stated;
  }

  compareTermAndPropertyRelation(term, propertyRelation, context) {
    let comparesToTermAndPropertyRelation = false;

    const statement = this.getStatement(),
          propertyAssertion = propertyAssertionFromStatement(statement, context);

    if (propertyAssertion !== null) {
      comparesToTermAndPropertyRelation = propertyAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);
    }

    return comparesToTermAndPropertyRelation;
  }

  validate(context) {
    let validates = false;

    const stepString = this.getString(); ///

    context.trace(`Validating the '${stepString}' step...`);

    const statement = this.getStatement();

    if (statement !== null) {
      const referenceValidates = this.validateReference(context);

      if (referenceValidates) {
        const satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);

        if (satisfiesAssertioValidates) {
          const statementValidates = this.validateStatement(context);

          if (statementValidates) {
            validates = true;
          }
        }
      }
    } else {
      context.debug(`Unable to validate the '${stepString}' step because it is nonsense.`);
    }

    if (validates) {
      context.debug(`...validate the '${stepString}' step.`);
    }

    return validates;
  }

  validateReference(context) {
    let referenceValidates = true;

    if (this.reference !== null) {
      const stepString = this.getString(),  ///
            referenceString = this.reference.getString();

      context.trace(`Validating the '${stepString}' step's '${referenceString}' reference... `);

      const reference = this.reference.validate(context);

      if (reference === null) {
        referenceValidates = false;
      }

      if (referenceValidates) {
        context.debug(`...validated the '${stepString}' step's '${referenceString}' reference. `);
      }
    }

    return referenceValidates;
  }

  validateSatisfiesAssertion(context) {
    let satisfiesAssertionValidates = true;  ///

    if (this.satisfiesAssertion !== null) {
      const stepString = this.getString(),  ///
            satisfiesAssertionString = this.satisfiesAssertion.getString();

      context.trace(`Validating the '${stepString}' step's '${satisfiesAssertionString}' satisfies assertion... `);

      const stated = true,
            satisfiesAssertion = this.satisfiesAssertion.validate(stated, context);

      if (satisfiesAssertion !== null) {
        satisfiesAssertionValidates = true;
      }

      if (satisfiesAssertionValidates) {
        context.debug(`...validating the '${stepString}' step's '${satisfiesAssertionString}' satisfies assertion. `);
      }
    }

    return satisfiesAssertionValidates;
  }

  unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
    let unifiesWithSatisfiesAssertion = false;

    const stepString = this.getString(), ///
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion...`);

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference);

    if (axiom !== null) {
      const step = this,  ///
            substitutions = [],
            stepUnifies = axiom.unifyStep(step, substitutions, context);

      if (stepUnifies) {
        const substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);

        if (substitutionsCompare) {
          unifiesWithSatisfiesAssertion = true;
        }
      }
    }

    if (unifiesWithSatisfiesAssertion) {
      context.debug(`...unified the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion.`);
    }

    return unifiesWithSatisfiesAssertion;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const stepString = this.getString(); ///

    context.trace(`Verifying the '${stepString}' step...`);

    await asyncAttempt(async (context) => {
      const validates = this.validate(context);

      if (validates) {
        const unifies = await this.unify(context);

        if (unifies) {
          this.setContext(context);

          verifies = true;
        }
      }
    }, context);

    if (verifies) {
      context.debug(`...verified the '${stepString}' step.`);
    }

    return verifies;
  }

  async unify(context) {
    let unifies = false;

    const stepString = this.getString(); ///

    context.trace(`Unifying the '${stepString}' step...`);

    const statement = this.getStatement(),
          reference = this.getReference(),
          satisfiesAssertion = this.getSatisfiesAssertion(),
          statementUnifies = await asyncLiminally(async (context) => {
            const statementUnifies = await asyncSome(unifyStatements, async (unifyStatement) => {
              const statementUnifies = await unifyStatement(statement, reference, satisfiesAssertion, context);

              if (statementUnifies) {
                return true;
              }
            });

            return statementUnifies;
          }, context);

    if (statementUnifies) {
      unifies = true;
    }

    if (unifies) {
      context.debug(`...unified the '${stepString}' step.`);
    }

    return unifies;
  }

  static name = "Step";
});
