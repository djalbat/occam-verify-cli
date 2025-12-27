"use strict";

import TopLevelMetaAssertion from "./topLevelMetaAssertion";

import { define } from "../ontology";

export default define(class MetaLemma extends TopLevelMetaAssertion {
  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          metaLemma = this, ///
          metaLemmaString = metaLemma.getString();

    context.trace(`Verifying the '${metaLemmaString}' meta-lemma...`, node);

    verifies = super.verify();

    if (verifies) {
      const metaTheorem = this; ///

      context.addMetatheorem(metaTheorem);

      context.debug(`...verified the '${metaLemmaString}' meta-lemma.`, node);
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
