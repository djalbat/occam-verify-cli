"use strict";

import Combinator from "../combinator";

export default class CombinatorDeclaration {
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
    let verified;

    const combinatorDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);

    const combinatorVerifiedAtTopLevel = this.combinator.verifyAtTopLevel(this.fileContext);

    if (combinatorVerifiedAtTopLevel) {
      this.fileContext.addCombinator(this.combinator);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
    }

    return verified;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
          combinatorDeclaration = new CombinatorDeclaration(fileContext, combinator);

    return combinatorDeclaration;
  }
}