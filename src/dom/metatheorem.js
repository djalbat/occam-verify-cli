"use strict";

import TopLevelMetaAssertion from "./topLevelMetaAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Metatheorem extends TopLevelMetaAssertion {
  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          metaLemma = this, ///
          metaLemmaString = metaLemma.getString();

    context.trace(`Verifying the '${metaLemmaString}' metatheorem...`, node);

    verifies = super.verify();

    if (verifies) {
      const metaTheorem = this; ///

      context.addMetatheorem(metaTheorem);

      context.debug(`...verified the '${metaLemmaString}' metatheorem.`, node);
    }

    return verifies;
  }

  static name = "Metatheorem";

  static fromJSON(json, context) { return TopLevelMetaAssertion.fromJSON(Metatheorem, json, context); }

  static fromMetatheoremNode(metatheoremNode, context) {
    const node = metatheoremNode, ///
          metatheorem = TopLevelMetaAssertion.fromNode(Metatheorem, node, context);

    return metatheorem;
  }
});
