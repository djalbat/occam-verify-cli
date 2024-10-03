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

  verify(fileContext) {
    let verified;

    const combinatorDeclarationString = this.getString(); ///

    fileContext.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);

    const combinatorVerified = this.combinator.verify(fileContext);

    if (combinatorVerified) {
      fileContext.addCombinator(this.combinator);

      verified = true;
    }

    if (verified) {
      fileContext.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
    }

    return verified;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
          combinatorDeclaration = new CombinatorDeclaration(fileContext, combinator);

    return combinatorDeclaration;
  }
}