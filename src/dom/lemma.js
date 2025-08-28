"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Lemma extends TopLevelAssertion {
  verify() {
    let verifies;

    const lemma = this, ///
          context = this.getContext(),
          lemmaString = lemma.getString();

    (lemmaString === null) ?
      context.trace(`Verifying a lemma...`) :
        context.trace(`Verifying the '${lemmaString}' lemma...`);

    verifies = super.verify();

    if (verifies) {
      const lemma = this; ///

      context.addLemma(lemma);

      (lemmaString === null) ?
        context.debug(`...verified a lemma.`) :
          context.debug(`...verified the '${lemmaString}' lemma.`);
    }

    return verifies;
  }

  static name = "Lemma";

  static fromLemmaNode(lemmaNode, context) {
    const node = lemmaNode, ///
          lemma = TopLevelAssertion.fromNode(Lemma, node, context);

    return lemma;
  }
});
