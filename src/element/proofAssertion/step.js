"use strict";

import { asynchronousUtilities } from "occam-languages";

import elements from "../../elements";
import ProofAssertion from "../proofAssertion";

import { define } from "../../elements";
import { unifyStatements } from "../../utilities/unification";
import { derive, attempt, descend, asyncReconcile } from "../../utilities/context";

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

  compareTermAndPropertyRelation(term, propertyRelation, context) {
    let comparesToTermAndPropertyRelation = false;

    const { PropertyAssertion } = elements,
          statement = this.getStatement(),
          propertyAssertion = PropertyAssertion.fromStatement(statement, context);

    if (propertyAssertion !== null) {
      comparesToTermAndPropertyRelation = propertyAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);
    }

    return comparesToTermAndPropertyRelation;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const stepString = this.getString(); ///

    context.trace(`Verifying the '${stepString}' step...`);

    const statement = this.getStatement();

    if (statement !== null) {
      const validates = this.validate(context);

      if (validates) {
        context = this.getContext();

        const unifiies = await this.unify(context);

        if (unifiies) {
          verifies = true;
        }
      }
    } else {
      context.debug(`Unable to verify the '${stepString}' step because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${stepString}' step.`);
    }

    return verifies;
  }

  validate(context) {
    let validates = false;

    const stepString = this.getString(); ///

    context.trace(`Validating the '${stepString}' step...`);

    derive((context) => {
      attempt((context) => {
        const statementValidates = this.validateStatement(context);

        if (statementValidates) {
          const referenceValidates = this.validateReference(context);

          if (referenceValidates) {
            const satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);

            if (satisfiesAssertioValidates) {
              context.commit(this);

              validates = true;
            }
          }
        }
      }, context);
    }, context);

    if (validates) {
      context.debug(`...validated the '${stepString}' step.`);
    }

    return validates;
  }

  validateReference(context) {
    let referenceValidates = true;  ///

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

  validateStatement(context) {
    let statementValidates = false;

    const stepString = this.getString();

    context.trace(`Validating the '${stepString}' step's statement... `);

    let statement;

    statement = this.getStatement();

    statement = statement.validate(context);  ///

    if (statement !== null) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.debug(`...validated the '${stepString}' step statement. `);
    }

    return statementValidates;
  }

  validateSatisfiesAssertion(context) {
    let satisfiesAssertionValidates = true;  ///

    if (this.satisfiesAssertion !== null) {
      const stepString = this.getString(),  ///
            satisfiesAssertionString = this.satisfiesAssertion.getString();

      context.trace(`Validating the '${stepString}' step's '${satisfiesAssertionString}' satisfies assertion... `);

      descend((context) => {
        const satisfiesAssertion = this.satisfiesAssertion.validate(context);

        if (satisfiesAssertion === null) {
          satisfiesAssertionValidates = false;
        }
      }, context);

      if (satisfiesAssertionValidates) {
        context.debug(`...validating the '${stepString}' step's '${satisfiesAssertionString}' satisfies assertion. `);
      }
    }

    return satisfiesAssertionValidates;
  }

  async unify(context) {
    let unifies = false;

    const stepString = this.getString(); ///

    context.trace(`Unifying the '${stepString}' step...`);

    const statement = this.getStatement(),
          reference = this.getReference(),
          satisfiesAssertion = this.getSatisfiesAssertion();

    await asyncSome(unifyStatements, async (unifyStatement) => {
      let statementUnifies;

      await asyncReconcile(async (context) => {
        statementUnifies = await unifyStatement(statement, reference, satisfiesAssertion, context);
      }, context);

      if (statementUnifies) {
        unifies = true;

        return true;
      }
    });

    if (unifies) {
      context.debug(`...unified the '${stepString}' step.`);
    }

    return unifies;
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
            stepUnifies = axiom.unifyStep(step, context);

      if (stepUnifies) {
        const substitutionsCompare = satisfiesAssertion.compareSubstitutions(context);

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

  static name = "Step";
});
