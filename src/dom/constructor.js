"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { unifyTermWithConstructor } from "../utilities/unification";
import { termFromJSON, termToTermJSON } from "../utilities/json";

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      typeNodeQuery = nodeQuery("/constructorDeclaration/type");

export default domAssigned(class Constructor {
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

  unifyTerm(term, context, verifyAhead) {
    let termUnified = false;

    const constructor = this, ///
          termString = term.getString(),
          constructorString = constructor.getString();

    context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`, term);

    const termUnifiedWithConstructor = unifyTermWithConstructor(term, constructor, context);

    if (termUnifiedWithConstructor) {
      let verifiedAhead;

      const type = constructor.getType();

      term.setType(type);

      verifiedAhead = verifyAhead();

      termUnified = verifiedAhead;  ///
    }

    if (termUnified) {
      context.debug(`...unified the '${termString}' term with the '${constructorString}' constructor.`, term);
    }

    return termUnified;
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
    const { Term, Type } = dom,
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
});

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
