"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { define } from "../elements";

export default define(class Lemma extends TopLevelAssertion {
  verify() {
    let verifies;

    const lemma = this, ///
          node = this.getNode(),
          context = this.getContext(),
          lemmaString = lemma.getString();

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

  static fromLemmaNode(lemmaNode, context) {
    const node = lemmaNode, ///
          lemma = TopLevelAssertion.fromNode(Lemma, node, context);

    return lemma;
  }
});
