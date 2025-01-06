"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

import combinatorVerifier from "../../verifier/combinator";

export default domAssigned(class CombinatorDeclaration {
  constructor(fileContext, combinator) {
    this.fileContext = fileContext;
    this.combinator = combinator;
  }

  getFileContext() {
    return this.fileContext;
  }

  getCombinator() {
    return this.combinator;
  }

  getString() { return this.combinator.getString(); }

  verify() {
    let verified = false;

    const combinatorDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);

    const statement = this.combinator.getStatement(),
          statementVerified = this.verifyStatement(statement);

    if (statementVerified) {
      this.fileContext.addCombinator(this.combinator);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
    }

    return verified;
  }

  verifyStatement(statement) {
    let statementVerified;

    const statementString = statement.getString(); ///

    this.fileContext.trace(`Verifying the '${statementString}' statement...`);

    const statementNode = statement.getNode();

    statementVerified = combinatorVerifier.verifyStatement(statementNode, this.fileContext);

    if (statementVerified) {
      this.fileContext.debug(`...verified the '${statementString}' statement.`);
    }

    return statementVerified;
  }

  static name = "CombinatorDeclaration";

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const { Combinator } = dom,
          combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
          combinatorDeclaration = new CombinatorDeclaration(fileContext, combinator);

    return combinatorDeclaration;
  }
});
