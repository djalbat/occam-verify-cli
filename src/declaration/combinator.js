"use strict";

import Combinator from "../combinator";

export default class CombinatorDeclaration {
  constructor(combinator) {
    this.combinator = combinator;
  }

  getCombinator() {
    return this.combinator;
  }

  getString() { return this.combinator.getString(); }

  verify(fileContext) {
    let verified;

    const ocmbinatorDeclarationString = this.getString(); ///

    fileContext.trace(`Verifying the '${ocmbinatorDeclarationString}' combinator declaration...`);

    const combinatorVerified = this.combinator.verify(fileContext);

    if (combinatorVerified) {
      fileContext.addCombinator(this.combinator);

      verified = true;
    }

    if (verified) {
      fileContext.debug(`...verified the '${ocmbinatorDeclarationString}' combinator declaration.`);
    }

    return verified;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
          combinatorDeclaration = new CombinatorDeclaration(combinator);

    return combinatorDeclaration;
  }
}