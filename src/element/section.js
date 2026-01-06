"use strict";

import { define } from "../elements";

export default define(class Section {
  constructor(context, string, node, hypotheses, axiom, lemma, theorem, conjecture) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.hypotheses = hypotheses;
    this.axiom = axiom;
    this.lemma = lemma;
    this.theorem = theorem;
    this.conjecture = conjecture;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
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

  verify() {
    let verifies = false;

    const sectionString = this.string;  ///

    this.context.trace(`Verifying the '${sectionString}' section...`, this.node);

    const hypothesesVerify = this.verifyHypotheses();

    if (hypothesesVerify) {
      const axiomLemmaTheoremOrConjecture = (this.axiom || this.lemma || this.theorem || this.conjecture),
            axiomLemmaTheoremOrConjectureVerifies = axiomLemmaTheoremOrConjecture.verify(this.context);

      if (axiomLemmaTheoremOrConjectureVerifies) {
        axiomLemmaTheoremOrConjecture.setHypotheses(this.hypotheses);

        verifies = true;
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${sectionString}' section.`, this.node);
    }

    return verifies;
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

  static name = "Section";
});
