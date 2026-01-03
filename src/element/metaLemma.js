"use strict";

import MetaLemmaMetatheorem from "./metaLemmaMetatheorem";

import { define } from "../elements";

export default define(class MetaLemma extends MetaLemmaMetatheorem {
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

  static fromJSON(json, context) { return MetaLemmaMetatheorem.fromJSON(MetaLemma, json, context); }

  static fromMetaLemmaNode(metaLemmaNode, context) {
    const node = metaLemmaNode, ///
          metaLemma = MetaLemmaMetatheorem.fromNode(MetaLemma, node, context);

    return metaLemma;
  }
});
