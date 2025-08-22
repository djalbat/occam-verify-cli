"use strict";

import TopLevelMetaAssertion from "./topLevelMetaAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Metatheorem extends TopLevelMetaAssertion {
  verify() {
    let verifies;

    const metaLemma = this, ///
          fileContext = this.getFileContext(),
          metaLemmaString = metaLemma.getString();

    fileContext.trace(`Verifying the '${metaLemmaString}' metatheorem...`);

    verifies = super.verify();

    if (verifies) {
      const metaTheorem = this; ///

      fileContext.addMetatheorem(metaTheorem);

      fileContext.debug(`...verified the '${metaLemmaString}' metatheorem.`);
    }

    return verifies;
  }

  static name = "Metatheorem";

  static fromJSON(json, fileContext) { return TopLevelMetaAssertion.fromJSON(Metatheorem, json, fileContext); }

  static fromMetatheoremNode(metatheoremNode, fileContext) {
    const node = metatheoremNode, ///
          metatheorem = TopLevelMetaAssertion.fromNode(Metatheorem, node, fileContext);

    return metatheorem;
  }
});
