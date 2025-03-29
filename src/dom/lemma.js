"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Lemma extends TopLevelAssertion {
  verify() {
    let verified;

    const lemma = this, ///
          fileContext = this.getFileContext(),
          lemmaString = lemma.getString();

    (lemmaString === null) ?
      fileContext.trace(`Verifying a lemma...`) :
        fileContext.trace(`Verifying the '${lemmaString}' lemma...`);

    verified = super.verify();

    if (verified) {
      const lemma = this; ///

      fileContext.addLemma(lemma);

      (lemmaString === null) ?
        fileContext.debug(`...verified a lemma.`) :
          fileContext.debug(`...verified the '${lemmaString}' lemma.`);
    }

    return verified;
  }

  static name = "Lemma";

  static fromNode(node, fileContext) { return TopLevelAssertion.fromNode(Lemma, node, fileContext); }
});
