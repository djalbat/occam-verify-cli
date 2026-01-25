"use strict";

import { elements } from "occam-furtle";

import TopLevelMetaAssertion from "./../topLevelMetaAssertion";

const { define } = elements;

export default define(class MetaLemma extends TopLevelMetaAssertion {
  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          metaLemmaString = this.getString(); ///

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
});
