"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Lemma extends TopLevelAssertion {
  verify() {
    let verifies;

    const lemma = this, ///
          fileContext = this.getFileContext(),
          lemmaString = lemma.getString();

    (lemmaString === null) ?
      fileContext.trace(`Verifying a lemma...`) :
        fileContext.trace(`Verifying the '${lemmaString}' lemma...`);

    verifies = super.verify();

    if (verifies) {
      const lemma = this; ///

      fileContext.addLemma(lemma);

      (lemmaString === null) ?
        fileContext.debug(`...verified a lemma.`) :
          fileContext.debug(`...verified the '${lemmaString}' lemma.`);
    }

    return verifies;
  }

  static name = "Lemma";

  static fromLemmaNode(lemmaNode, fileContext) {
    const node = lemmaNode, ///
          lemma = TopLevelAssertion.fromNode(Lemma, node, fileContext);

    return lemma;
  }
});
