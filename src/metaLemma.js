"use strict";

import shim from "./shim";
import TopLevelAssertion from "./topLevelAssertion";

import { EMPTY_STRING } from "./constants";

class MetaLemma extends TopLevelAssertion {
  verify() {
    let verified;

    const fileContext = this.getFileContext(),
          metaLemmaString = this.string;  ///

    (metaLemmaString === EMPTY_STRING) ?
      fileContext.trace(`Verifying a meta-lemma...`) :
        fileContext.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);

    verified = super.verify();

    if (verified) {
      const metaLemma = this; ///

      fileContext.addMetaLemma(metaLemma);

      (metaLemmaString === EMPTY_STRING) ?
        fileContext.debug(`...verified a meta-lemma.`) :
          fileContext.debug(`...verified the '${metaLemmaString}' meta-lemma.`);
    }

    return verified;
  }

  static fromMetaLemmaNode(metaLemmaNode, fileContext) { return TopLevelAssertion.fromNode(MetaLemma, metaLemmaNode, fileContext); }
}

Object.assign(shim, {
  MetaLemma
});

export default MetaLemma;