"use strict";

import { arrayUtilities } from "necessary";
import { Element, asynchronousUtilities } from "occam-languages";

import assignAssignments from "../process/assign";

import { define } from "../elements";

const { last } = arrayUtilities,
      { asyncEvery } = asynchronousUtilities;

export default define(class Derivation extends Element {
  constructor(context, string, node, subproofOrProofAssertions) {
    super(context, string, node);

    this.subproofOrProofAssertions = subproofOrProofAssertions;
  }

  getSubproofOrProofAssertions() {
    return this.subproofOrProofAssertions;
  }

  getDerivationNode() {
    const node = this.getNode(),
          derivationNode = node;  ///

    return derivationNode;
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
            subproofOrProofAssertionVerifies = await subproofOrProofAssertion.verify(assignments, context);

      if (subproofOrProofAssertionVerifies) {
        assignAssignments(assignments, context);

        context.addSubproofOrProofAssertion(subproofOrProofAssertion);

        return true;
      }
    });

    return verifies;
  }

  static name = "Derivation";
});

