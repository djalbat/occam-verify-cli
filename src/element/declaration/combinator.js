"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";
import { verifyStatement } from "../../process/verify";

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

    const combinatorVerifies = this.verifyCombinator();

    if (combinatorVerifies) {
      context.addCombinator(this.combinator);

      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`, node);
    }

    return verifies;
  }

  verifyCombinator() {
    let statementVerifies;

    const node = this.getNode(),
          context = this.getContext(),
          combinatorString = this.combinator.getString();

    context.trace(`Verifying the '${combinatorString}' combinator...`, node);

    const statement = this.combinator.getStatement(),
          statementNode = statement.getNode();

    statementVerifies = verifyStatement(statementNode, context);

    if (statementVerifies) {
      context.debug(`...verified the '${combinatorString}' combinator.`, node);
    }

    return statementVerifies;
  }

  static name = "CombinatorDeclaration";
});
