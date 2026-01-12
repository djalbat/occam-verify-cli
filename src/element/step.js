"use strict";

import elements from "../elements";
import ProofAssertion from "./proofAssertion";
import TemporaryContext from "../context/temporary";

import { define } from "../elements";
import { unifyStatements } from "../utilities/unification";
import { propertyAssertionFromStatement } from "../utilities/statement";

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

  verify(substitutions, assignments, context) {
    let verifies = false;

    const temporaryContext = TemporaryContext.fromNothing(context);

    context = temporaryContext; ///

    const node = this.getNode(),
          stepString = this.getString(); ///

    context.trace(`Verifying the '${stepString}' step...`, node);

    const statement = this.getStatement();

    if (statement === null) {
      context.debug(`Unable to verify the '${stepString}' step because it is nonsense.`, node);
    } else {
      const referenceVerifies = this.verifyReference(context);

      if (referenceVerifies) {
        const satisfiesAssertioVeriries = this.verifySatisfiesAssertion(context);

        if (satisfiesAssertioVeriries) {
          const stated = this.isStated(),
                statementValidates = statement.validate(assignments, stated, context);

          if (statementValidates) {
            const statementUnifies = unifyStatements.some((unifyStatement) => {
              const statementUnifies = unifyStatement(statement, this.reference, this.satisfiesAssertion, substitutions, context);

              if (statementUnifies) {
                return true;
              }
            });

            if (statementUnifies) {
              const subproofOrProofAssertion = this;  ///

              context.addSubproofOrProofAssertion(subproofOrProofAssertion);

              this.setContext(context);

              verifies = true;
            }
          }
        }
      }
    }

    if (verifies) {
      context.debug(`...verified the '${stepString}' step.`, node);
    }

    return verifies;
  }

  verifyReference(context) {
    let referenceVeriries;

    const node = this.getNode(),
          stepString = this.getString();  ///

    context.trace(`Verifying the '${stepString}' step's reference... `, node);

    if (this.reference !== null) {
      referenceVeriries = this.reference.verify(context);
    } else {
      referenceVeriries = true;
    }

    if (referenceVeriries) {
      context.debug(`...verified the '${stepString}' step's reference. `, node);
    }

    return referenceVeriries;
  }

  verifySatisfiesAssertion(context) {
    let satisfiesAssertionVerifies;

    const node = this.getNode(),
          stepString = this.getString();  ///

    context.trace(`Verifying the '${stepString}' step's satisfies assertion... `, node);

    if (this.satisfiesAssertion !== null) {
      const stated = true,
            assignments = null;

      satisfiesAssertionVerifies = this.satisfiesAssertion.validate(assignments, stated, context);
    } else {
      satisfiesAssertionVerifies = true;
    }

    if (satisfiesAssertionVerifies) {
      context.debug(`...verified the '${stepString}' step's satisfies assertion. `, node);
    }

    return satisfiesAssertionVerifies;
  }

  unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
    let unifiesWithSatisfiesAssertion = false;

    const stepString = this.string, ///
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion...`, this.node);

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference);

    if (axiom !== null) {
      const { Substitutions } = elements,
            step = this,  ///
            substitutions = Substitutions.fromNothing(),
            stepUnifies = axiom.unifyStep(step, substitutions, context);

      if (stepUnifies) {
        const substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);

        if (substitutionsCompare) {
          unifiesWithSatisfiesAssertion = true;
        }
      }
    }

    if (unifiesWithSatisfiesAssertion) {
      context.debug(`...unified the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion.`, this.node);
    }

    return unifiesWithSatisfiesAssertion;
  }

  static name = "Step";
});
