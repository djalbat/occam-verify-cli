"use strict";

import TopLevelMetaAssertion from "./topLevelMetaAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class MetaLemma extends TopLevelMetaAssertion {
  verify() {
    let verifies;

    const context = this.getContext(),
          metaLemma = this, ///
          metaLemmaString = metaLemma.getString();

    context.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);

    verifies = super.verify();

    if (verifies) {
      const metaTheorem = this; ///

      context.addMetatheorem(metaTheorem);

      context.debug(`...verified the '${metaLemmaString}' meta-lemma.`);
    }

    return verifies;
  }

  static name = "MetaLemma";

  static fromJSON(json, context) { return TopLevelMetaAssertion.fromJSON(MetaLemma, json, context); }

  static fromMetaLemmaNode(metaLemmaNode, context) {
    const node = metaLemmaNode, ///
          metaLemma = TopLevelMetaAssertion.fromNode(MetaLemma, node, context);

    return metaLemma;
  }
});
