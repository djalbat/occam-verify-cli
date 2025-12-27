"use strict";

import structure from "../structure";

import { define } from "../structure";
import { baseType } from ".//type";
import { unifyTermWithConstructor } from "../utilities/unification";
import { termFromJSON, termToTermJSON } from "../utilities/json";

export default define(class Constructor {
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
    let termUnifies = false;

    const constructor = this, ///
          termString = term.getString(),
          constructorString = constructor.getString();

    context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`);

    const termUnifiesWithConstructor = unifyTermWithConstructor(term, constructor, context);

    if (termUnifiesWithConstructor) {
      let verifiesAhead;

      const type = constructor.getType();

      term.setType(type);

      verifiesAhead = verifyAhead();

      termUnifies = verifiesAhead;  ///
    }

    if (termUnifies) {
      context.debug(`...unified the '${termString}' term with the '${constructorString}' constructor.`);
    }

    return termUnifies;
  }

  toJSON() {
    const termJSON = termToTermJSON(this.term),
          term = termJSON,  ///
          json = {
            term
          };

    return json;
  }

  static name = "Constructor";

  static fromJSON(json, context) {
    const term = termFromJSON(json, context),
          string = stringFromTerm(term),
          constructor = new Constructor(string, term);

    return constructor;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const { Term } = structure,
          term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context),
          string = stringFromTerm(term),
          constructor = new Constructor(string, term);

    return constructor;
  }
});

function stringFromTerm(term) {
  let string;

  const termString = term.getString(),
        type = term.getType();

  if (type === baseType) {
    string = termString;  ///
  } else {
    const typeString = type.getString();

    string = `${termString}:${typeString}`;
  }

  return string;
}