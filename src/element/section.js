"use strict";

import { Element } from "occam-furtle";

import { define } from "../elements";

export default define(class Section extends Element {
  constructor(context, string, node, hypotheses, axiom, lemma, theorem, conjecture) {
    super(context, string, node);

    this.hypotheses = hypotheses;
    this.axiom = axiom;
    this.lemma = lemma;
    this.theorem = theorem;
    this.conjecture = conjecture;
  }

  getHypotheses() {
    return this.hypotheses;
  }

  getAxiom() {
    return this.axiom;
  }

  getLemma() {
    return this.lemma;
  }

  getTheorem() {
    return this.theorem;
  }

  getConjecture() {
    return this.conjecture;
  }

  verifyHypotheses() {
    const hypothesesVerify = this.hypotheses.every((hypothesis) => {
      const hypothesisVerifies = hypothesis.verify(this.context);

      if (hypothesisVerifies) {
        return true;
      }
    });

    return hypothesesVerify;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext(),
          sectionString = this.getString();  ///

    context.trace(`Verifying the '${sectionString}' section...`);

    const hypothesesVerify = this.verifyHypotheses();

    if (hypothesesVerify) {
      const topLevelAssertion = (this.axiom || this.lemma || this.theorem || this.conjecture),
            topLevelAssertionVerifies = topLevelAssertion.verify(context);

      if (topLevelAssertionVerifies) {
        topLevelAssertion.setHypotheses(this.hypotheses);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${sectionString}' section.`);
    }

    return verifies;
  }

  static name = "Section";
});
