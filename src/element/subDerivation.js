"use strict";

import { arrayUtilities } from "necessary";
import { Element, elements } from "occam-furtle";

import assignAssignments from "../process/assign";

const { last } = arrayUtilities,
      { define } = elements;

export default define(class SubDerivation extends Element {
  constructor(context, string, node, subproofOrProofAssertions) {
    super(context, string, node);

    this.subproofOrProofAssertions = subproofOrProofAssertions;
  }

  getSubproofOrProofAssertions() {
    return this.subproofOrProofAssertions;
  }

  getLastProofAssertion() {
    const lastSubproofOrProofAssertion = last(this.subproofOrProofAssertions),
          lastProofAssertion = lastSubproofOrProofAssertion;  ///

    return lastProofAssertion;
  }

  verify(substitutions, context) {
    let verifies;

    verifies = this.subproofOrProofAssertions.every((subproofOrProofAssertion) => { ///
      const assignments = [],
            subproofOrProofAssertionVarifies = subproofOrProofAssertion.verify(substitutions, assignments, context);

      if (subproofOrProofAssertionVarifies) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          context.addSubproofOrProofAssertion(subproofOrProofAssertion);

          return true;
        }
      }
    });

    return verifies;
  }

  static name = "SubDerivation";
});
