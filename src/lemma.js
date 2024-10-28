"use strict";

import shim from "./shim";
import TopLevelAssertion from "./topLevelAssertion";

import { EMPTY_STRING } from "./constants";

class Lemma extends TopLevelAssertion {
  verify() {
    let verified;

    const lemma = this, ///
          fileContext = this.getFileContext(),
          lemmaString = lemma.getString();

    (lemmaString === EMPTY_STRING) ?
      fileContext.trace(`Verifying a lemma...`) :
        fileContext.trace(`Verifying the '${lemmaString}' lemma...`);

    verified = super.verify();

    if (verified) {
      const lemma = this; ///

      fileContext.addLemma(lemma);

      (lemmaString === EMPTY_STRING) ?
        fileContext.debug(`...verified a lemma.`) :
          fileContext.debug(`...verified the '${lemmaString}' lemma.`);
    }

    return verified;
  }

  static fromLemmaNode(metaLemmaNode, fileContext) { return TopLevelAssertion.fromNode(Lemma, metaLemmaNode, fileContext); }
}

Object.assign(shim, {
  Lemma
});

export default Lemma;
