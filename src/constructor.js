"use strict";

import Type from "./type";
import Term from "./term";

import { nodeQuery } from "./utilities/query";

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      typeNodeQuery = nodeQuery("/constructorDeclaration/type");

export default class Constructor {
  constructor(string, term) {
    this.string = string;
    this.term = term;
  }

  getString() {
    return this.string;
  }

  getTerm() {
    return this.term;
  }

  getType() { return this.term.getType(); }

  verify(fileContext) {
    let verified;

    const constructorString = this.string;  ///

    fileContext.trace(`Verifying the '${constructorString}' constructor...`);

    const termTypeVerified = this.term.verifyType(fileContext);

    if (termTypeVerified) {
      const termVerifiedAsConstructor = this.term.verifyAsConstructor(fileContext);

      if (termVerifiedAsConstructor) {
        verified = true; ///
      }
    }

    if (verified) {
      fileContext.debug(`...verified the '${constructorString}' constructor.`);
    }

    return verified;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const termNode = termNodeQuery(constructorDeclarationNode),
          typeNode = typeNodeQuery(constructorDeclarationNode),
          type = Type.fromTypeNode(typeNode),
          term = Term.fromTermNodeAndType(termNode, type, fileContext),
          string = stringFromTermAndType(term, type),
          constructor = new Constructor(string, term);

    return constructor;
  }
}

function stringFromTermAndType(term, type) {
  let string;

  const termString = term.getString();

  if (type === null) {
    string = `${termString}`;
  } else {
    const typeString = type.getString();

    string = `${termString}:${typeString}`;
  }

  return string;
}
