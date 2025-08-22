"use strict";

import TopLevelMetaAssertion from "./topLevelMetaAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class MetaLemma extends TopLevelMetaAssertion {
  verify() {
    let verifies;

    const metaLemma = this, ///
          fileContext = this.getFileContext(),
          metaLemmaString = metaLemma.getString();

    fileContext.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);

    verifies = super.verify();

    if (verifies) {
      const metaTheorem = this; ///

      fileContext.addMetatheorem(metaTheorem);

      fileContext.debug(`...verified the '${metaLemmaString}' meta-lemma.`);
    }

    return verifies;
  }

  static name = "MetaLemma";

  static fromJSON(json, fileContext) { return TopLevelMetaAssertion.fromJSON(MetaLemma, json, fileContext); }

  static fromMetaLemmaNode(metaLemmaNode, fileContext) {
    const node = metaLemmaNode, ///
          metaLemma = TopLevelMetaAssertion.fromNode(MetaLemma, node, fileContext);

    return metaLemma;
  }
});
