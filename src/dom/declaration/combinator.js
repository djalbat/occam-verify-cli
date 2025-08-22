"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

import combinatorVerifier from "../../verifier/combinator";

export default domAssigned(class CombinatorDeclaration {
  constructor(fileContext, string, combinator) {
    this.fileContext = fileContext;
    this.string = string;
    this.combinator = combinator;
  }

  getFileContext() {
    return this.fileContext;
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

    this.fileContext.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);

    const combinatorVerifies = this.verifyCombinator();

    if (combinatorVerifies) {
      this.fileContext.addCombinator(this.combinator);

      verifies = true;
    }

    if (verifies) {
      this.fileContext.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
    }

    return verifies;
  }

  verifyCombinator() {
    let statementVerifies;

    const combinatorString = this.combinator.getString();

    this.fileContext.trace(`Verifying the '${combinatorString}' combinator...`);

    const statement = this.combinator.getStatement(),
          statementNode = statement.getNode();

    statementVerifies = combinatorVerifier.verifyStatement(statementNode, this.fileContext);

    if (statementVerifies) {
      this.fileContext.debug(`...verified the '${combinatorString}' combinator.`);
    }

    return statementVerifies;
  }

  static name = "CombinatorDeclaration";

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const { Combinator } = dom,
          node = combinatorDeclarationNode, ///
          string = fileContext.nodeAsString(node),
          combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
          combinatorDeclaration = new CombinatorDeclaration(fileContext, string, combinator);

    return combinatorDeclaration;
  }
});
