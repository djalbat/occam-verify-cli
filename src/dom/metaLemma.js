"use strict";

import TopLevelMetaAssertion from "./topLevelMetaAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class MetaLemma extends TopLevelMetaAssertion {
  verify() {
    let verified;

    const metaLemma = this, ///
          fileContext = this.getFileContext(),
          metaLemmaString = metaLemma.getString();

    fileContext.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);

    verified = super.verify();

    if (verified) {
      const metaTheorem = this; ///

      fileContext.addMetatheorem(metaTheorem);

      fileContext.debug(`...verified the '${metaLemmaString}' meta-lemma.`);
    }

    return verified;
  }

  static name = "MetaLemma";

  static fromJSON(json, fileContext) { return TopLevelMetaAssertion.fromJSON(MetaLemma, json, fileContext); }

  static fromMetaLemmaNode(axiomNode, fileContext) { return TopLevelMetaAssertion.fromNode(MetaLemma, axiomNode, fileContext); }
});
