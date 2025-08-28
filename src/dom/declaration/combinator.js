"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

import combinatorVerifier from "../../verifier/combinator";

export default domAssigned(class CombinatorDeclaration {
  constructor(context, string, combinator) {
    this.context = context;
    this.string = string;
    this.combinator = combinator;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getCombinator() {
    return this.combinator;
  }

  verify() {
    let verifies = false;

    const combinatorDeclarationString = this.getString(); ///

    this.context.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);

    const combinatorVerifies = this.verifyCombinator();

    if (combinatorVerifies) {
      this.context.addCombinator(this.combinator);

      verifies = true;
    }

    if (verifies) {
      this.context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
    }

    return verifies;
  }

  verifyCombinator() {
    let statementVerifies;

    const combinatorString = this.combinator.getString();

    this.context.trace(`Verifying the '${combinatorString}' combinator...`);

    const statement = this.combinator.getStatement(),
          statementNode = statement.getNode();

    statementVerifies = combinatorVerifier.verifyStatement(statementNode, this.context);

    if (statementVerifies) {
      this.context.debug(`...verified the '${combinatorString}' combinator.`);
    }

    return statementVerifies;
  }

  static name = "CombinatorDeclaration";

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    const { Combinator } = dom,
          node = combinatorDeclarationNode, ///
          string = context.nodeAsString(node),
          combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, context),
          combinatorDeclaration = new CombinatorDeclaration(context, string, combinator);

    return combinatorDeclaration;
  }
});
