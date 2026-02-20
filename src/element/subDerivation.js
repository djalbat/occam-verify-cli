"use strict";

import { arrayUtilities } from "necessary";
import { Element, asynchronousUtilities } from "occam-languages";

import { define } from "../elements";

import assignAssignments from "../process/assign";

const { last } = arrayUtilities,
      { asyncEvery } = asynchronousUtilities;

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

  async verify(context) {
    let verifies;

    verifies = await asyncEvery(this.subproofOrProofAssertions, async (subproofOrProofAssertion) => { ///
      const assignments = [],
            subproofOrProofAssertionVarifies = await subproofOrProofAssertion.verify(assignments, context);

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
