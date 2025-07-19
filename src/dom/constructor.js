"use strict";

import dom from "../dom";

import { objectType } from "../dom/type";
import { domAssigned } from "../dom";
import { unifyTermWithConstructor } from "../utilities/unification";
import { termFromJSON, termToTermJSON } from "../utilities/json";

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

  isProvisional() { return this.term.isProvisional(); }

  setType(type) { this.term.setType(type); }

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
          string = stringFromTerm(term),
          constructor = new Constructor(string, term);

    return constructor;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const { Term } = dom,
          term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
          string = stringFromTerm(term),
          constructor = new Constructor(string, term);

    return constructor;
  }
});

function stringFromTerm(term) {
  let string;

  const termString = term.getString(),
        type = term.getType();

  if (type === objectType) {
    string = termString;  ///
  } else {
    const typeString = type.getString();

    string = `${termString}:${typeString}`;
  }

  return string;
}