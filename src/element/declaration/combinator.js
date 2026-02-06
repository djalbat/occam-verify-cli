"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class CombinatorDeclaration extends Declaration {
  constructor(context, string, node, combinator) {
    super(context, string, node);

    this.combinator = combinator;
  }

  getCombinator() {
    return this.combinator;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext(),
          combinatorDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);

    const combinatorVerifies = this.combinator.verify();

    if (combinatorVerifies) {
      context.addCombinator(this.combinator);

      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
    }

    return verifies;
  }

  static name = "CombinatorDeclaration";
});
