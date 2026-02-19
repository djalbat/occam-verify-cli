"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import assignAssignments from "../process/assign";

import { define } from "../elements";

const { last } = arrayUtilities;

export default define(class SubDerivation extends Element {
  constructor(context, string, node, subproofOrProofAssertions) {
    super(context, string, node);

    this.subproofOrProofAssertions = subproofOrProofAssertions;
  }

  getSubproofOrProofAssertions() {
    return this.subproofOrProofAssertions;
  }

  getSubDerivationNode() {
    const node = this.getNode(),
          subDerivationNode = node; ///

    return subDerivationNode;
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
        assignAssignments(assignments, context);

        context.addSubproofOrProofAssertion(subproofOrProofAssertion);

        return true;
      }
    });

    return verifies;
  }

  static name = "SubDerivation";
});
