"use strict";

import { elements } from "occam-furtle";

import Declaration from "../declaration";

const { define } = elements;

export default define(class CombinatorDeclaration extends Declaration {
  constructor(context, string, node, combinator) {
    super(context, string, node);

    this.combinator = combinator;
  }

  getCombinator() {
    return this.combinator;
  }

  verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          combinatorDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`, node);

    const combinatorVerifies = this.combinator.verify();

    if (combinatorVerifies) {
      context.addCombinator(this.combinator);

      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`, node);
    }

    return verifies;
  }

  static name = "CombinatorDeclaration";
});
