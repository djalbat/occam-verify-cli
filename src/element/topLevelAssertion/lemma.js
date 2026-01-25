"use strict";

import { elements } from "occam-furtle";

import TopLevelAssertion from "../topLevelAssertion";

const { define } = elements;

export default define(class Lemma extends TopLevelAssertion {
  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          lemmaString = this.getString(); ///

    (lemmaString === null) ?
      context.trace(`Verifying a lemma...`, node) :
        context.trace(`Verifying the '${lemmaString}' lemma...`, node);

    verifies = super.verify();

    if (verifies) {
      const lemma = this; ///

      context.addLemma(lemma);

      (lemmaString === null) ?
        context.debug(`...verified a lemma.`, node) :
          context.debug(`...verified the '${lemmaString}' lemma.`, node);
    }

    return verifies;
  }

  static name = "Lemma";
});
