"use strict";

import shim from "./shim";
import Type from "./type";

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

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel;

    const constructorString = this.string;  ///

    fileContext.trace(`Verifying the '${constructorString}' constructor at top level...`);

    const termTypeVerified = this.term.verifyType(fileContext);

    if (termTypeVerified) {
      const termVerifiedAtTopLevel = this.term.verifyAtTopLevel(fileContext);

      if (termVerifiedAtTopLevel) {
        verifiedAtTopLevel = true; ///
      }
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${constructorString}' constructor at top level.`);
    }

    return verifiedAtTopLevel;
  }

  toJSON() {
    const termJSON = this.term.toJSON(),
          term = termJSON,  ///
          json = {
            term
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { term } = json;

    const termJSON = term;  ///

    json = termJSON;  ///

    const { Term } = shim;

    term = Term.fromJSON(json, fileContext);

    const type = term.getType(),
          string = stringFromTermAndType(term, type),
          constructor = new Constructor(string, term);

    return constructor;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const termNode = termNodeQuery(constructorDeclarationNode),
          typeNode = typeNodeQuery(constructorDeclarationNode),
          type = Type.fromTypeNode(typeNode),
          term = Term.fromTermNodeAndType(termNode, type),
          string = stringFromTermAndType(term, type),
          constructor = new Constructor(string, term);

    return constructor;
  }
}

export function stringFromTermAndType(term, type) {
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
