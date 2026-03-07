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

  getCombinatorDeclarationNode() {
    const node = this.getNode(),
          combinatorDeclarationNode = node; ///

    return combinatorDeclarationNode;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext();

    await this.break(context);

    const combinatorDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);

    const combinatorValidates = this.validateCombinator();

    if (combinatorValidates) {
      context.addCombinator(this.combinator);

      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
    }

    return verifies;
  }

  validateCombinator() {
    let combinatorValidates;

    const context = this.getContext(),
          combinatorString = this.combinator.getString(),
          combinatorDeclarationString = this.getString();  ///

    context.trace(`Validating the '${combinatorDeclarationString}' combinator declaration's '${combinatorString}' combinator...`);

    combinatorValidates = this.combinator.validate(context);

    if (combinatorValidates) {
      context.debug(`...validated the '${combinatorDeclarationString}' combinator declaration's '${combinatorString}' combinator.`);
    }

    return combinatorValidates;
  }

  static name = "CombinatorDeclaration";
});
