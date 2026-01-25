"use strict";

import { elements } from "occam-furtle";

import TopLevelMetaAssertion from "../topLevelMetaAssertion";

const { define } = elements;

export default define(class Metatheorem extends TopLevelMetaAssertion {
  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          metaLemmaString = this.getString(); ///

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
});
