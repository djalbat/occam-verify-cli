"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";
import assignAssignments from "../process/assign";

import { define } from "../elements";

const { last } = arrayUtilities;

export default define(class Derivation extends Element {
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

  verify(context) {
    let verifies;

    verifies = this.subproofOrProofAssertions.every((subproofOrProofAssertion) => { ///
      const assignments = [],
            subproofOrProofAssertionVerifies = subproofOrProofAssertion.verify(assignments, context);

      if (subproofOrProofAssertionVerifies) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          context.addSubproofOrProofAssertion(subproofOrProofAssertion);

          return true;
        }
      }
    });

    return verifies;
  }

  static name = "Derivation";
});

