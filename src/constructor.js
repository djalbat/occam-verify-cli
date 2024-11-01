"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
import { termFromJSON, termToTermJSON } from "./utilities/json";

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      typeNodeQuery = nodeQuery("/constructorDeclaration/type");

class Constructor {
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

  verifyWhenDeclared(fileContext) {
    let verifiedWhenDeclared;

    const constructorString = this.string;  ///

    fileContext.trace(`Verifying the '${constructorString}' constructor when declared...`);

    const termVerifiedAtTopLevel = this.term.verifyWhenDeclared(fileContext);

    if (termVerifiedAtTopLevel) {
      verifiedWhenDeclared = true; ///
    }

    if (verifiedWhenDeclared) {
      fileContext.debug(`...verified the '${constructorString}' constructor when declared.`);
    }

    return verifiedWhenDeclared;
  }

  toJSON() {
    const termJSON = termToTermJSON(this.term),
          term = termJSON,  ///
          json = {
            term
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const term = termFromJSON(json, fileContext),
          type = term.getType(),
          string = stringFromTermAndType(term, type),
          constructor = new Constructor(string, term);

    return constructor;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const { Term, Type } = shim,
          termNode = termNodeQuery(constructorDeclarationNode),
          typeNode = typeNodeQuery(constructorDeclarationNode),
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          type = Type.fromTypeNode(typeNode),
          term = Term.fromTermNodeAndType(termNode, type, context),
          string = stringFromTermAndType(term, type),
          constructor = new Constructor(string, term);

    return constructor;
  }
}

Object.assign(shim, {
  Constructor
});

export default Constructor;

export function stringFromTermAndType(term, type) {
  let string;

  const termString = term.getString();

  if (type === null) {
    string = `${termString}`;
  } else {
    const typeName = type.getName();

    string = `${termString}:${typeName}`;
  }

  return string;
}
