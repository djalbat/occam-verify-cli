"use strict";

import TopLevelMetaAssertion from "./topLevelMetaAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Metatheorem extends TopLevelMetaAssertion {
  verify() {
    let verified;

    const metaLemma = this, ///
          fileContext = this.getFileContext(),
          metaLemmaString = metaLemma.getString();

    fileContext.trace(`Verifying the '${metaLemmaString}' metatheorem...`);

    verified = super.verify();

    if (verified) {
      const metaTheorem = this; ///

      fileContext.addMetatheorem(metaTheorem);

      fileContext.debug(`...verified the '${metaLemmaString}' metatheorem.`);
    }

    return verified;
  }

  static name = "Metatheorem";

  static fromJSON(json, fileContext) { return TopLevelMetaAssertion.fromJSON(Metatheorem, json, fileContext); }

  static fromNode(node, fileContext) { return TopLevelMetaAssertion.fromNode(Metatheorem, node, fileContext); }
});
