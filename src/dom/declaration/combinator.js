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
    let verified = false;

    const combinatorDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);

    const combinatorVerified = this.verifyCombinator();

    if (combinatorVerified) {
      this.fileContext.addCombinator(this.combinator);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
    }

    return verified;
  }

  verifyCombinator() {
    let statementVerified;

    const combinatorString = this.combinator.getString();

    this.fileContext.trace(`Verifying the '${combinatorString}' statement...`);

    const statement = this.combinator.getStatement(),
          statementNode = statement.getNode();

    statementVerified = combinatorVerifier.verifyStatement(statementNode, this.fileContext);

    if (statementVerified) {
      this.fileContext.debug(`...verified the '${combinatorString}' statement.`);
    }

    return statementVerified;
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
