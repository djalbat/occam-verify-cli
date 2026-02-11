"use strict";

import elements from "../../elements";
import ProofAssertion from "../proofAssertion";

import { define } from "../../elements";
import { unifyStatements } from "../../utilities/unification";
import { attempt, liminally } from "../../utilities/context";
import { propertyAssertionFromStatement } from "../../utilities/statement";

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

  verify(assignments, context) {
    let verifies = false;

    this.break(context);

    const stepString = this.getString(); ///

    context.trace(`Verifying the '${stepString}' step...`);

    const statement = this.getStatement();

    if (statement !== null) {
      attempt((context) => {
        const referenceValidates = this.validateReference(context);

        if (referenceValidates) {
          const satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);

          if (satisfiesAssertioValidates) {
            const statementValidates = this.validateStatement(assignments, context);

            if (statementValidates) {
              const reference = this.getReference(),
                    satisfiesAssertion = this.getSatisfiesAssertion(),
                    statementUnifies = liminally((context) => {
                      const statementUnifies = unifyStatements.some((unifyStatement) => {
                        const statementUnifies = unifyStatement(statement, reference, satisfiesAssertion, context);

                        if (statementUnifies) {
                          this.setContext(context);

                          return true;
                        }
                      });

                      return statementUnifies;
                    }, context);

              if (statementUnifies) {
                verifies = true;
              }
            }
          }
        }

        return verifies;
      }, context);
    } else {
      context.debug(`Unable to verify the '${stepString}' step because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${stepString}' step.`);
    }

    return verifies;
  }

  validateReference(context) {
    let referenceValidates = true;

    if (this.reference !== null) {
      const stepString = this.getString(),  ///
            referenceString = this.reference.getString();

      context.trace(`Validating the '${stepString}' step's '${referenceString}' reference... `);

      referenceValidates = this.reference.validate(context);

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
            satisfiesAssertion = this.satisfiesAssertion.getString();

      context.trace(`Validating the '${stepString}' step's '${satisfiesAssertion}' satisfies assertion... `);

      const stated = true,
            assignments = null;

      satisfiesAssertionValidates = this.satisfiesAssertion.validate(assignments, stated, context);

      if (satisfiesAssertionValidates) {
        context.debug(`...validating the '${stepString}' step's '${satisfiesAssertion}' satisfies assertion. `);
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
      const { Substitutions } = elements,
            step = this,  ///
            substitutions = Substitutions.fromNothing(context),
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

  static name = "Step";
});
