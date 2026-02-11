"use strict";

import TopLevelAssertion from "../topLevelAssertion";

import { define } from "../../elements";

export default define(class Lemma extends TopLevelAssertion {
  async verify() {
    let verifies;

    const context = this.getContext();

    await this.break(context);

    const lemmaString = this.getString(); ///

    (lemmaString === null) ?
      context.trace(`Verifying a lemma...`) :
        context.trace(`Verifying the '${lemmaString}' lemma...`);

    verifies = await super.verify();

    if (verifies) {
      const lemma = this; ///

      context.addLemma(lemma);

      (lemmaString === null) ?
        context.debug(`...verified a lemma.`) :
          context.debug(`...verified the '${lemmaString}' lemma.`);
    }

    return verifies;
  }

  static name = "Lemma";
});
