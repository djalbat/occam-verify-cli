"use strict";

import elements from "../../elements";

import { define } from "../../elements";
import { unifyTermWithConstructorTerm } from "../../process/unify";
import { termFromJSON, termToTermJSON } from "../../utilities/json";

export default define(class ConstructorTerm {
  constructor(term) {
    this.term = term;
  }

  getTerm() {
    return this.term;
  }

  getType() { return this.term.getType(); }

  getString() { return this.term.getString(); }

  isProvisional() { return this.term.isProvisional(); }

  setType(type) { this.term.setType(type); }

  unifyTerm(term, context, verifyAhead) {
    let termUnifies = false;

    const termString = term.getString(),
          constructorTermString = this.getString();

    context.trace(`Unifying the '${termString}' term with the '${constructorTermString}' constructor's term...`);

    const constructorTerm = this, ///
          termUnifiesWithConstructor = unifyTermWithConstructorTerm(term, constructorTerm, context);

    if (termUnifiesWithConstructor) {
      let verifiesAhead;

      const type = this.getType();

      term.setType(type);

      verifiesAhead = verifyAhead();

      termUnifies = verifiesAhead;  ///
    }

    if (termUnifies) {
      context.debug(`...unified the '${termString}' term with the '${constructorTermString}' constructor's term.`);
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

  static name = "ConstructorTerm";

  static fromJSON(json, context) {
    const term = termFromJSON(json, context),
          constructor = new ConstructorTerm(term);

    return constructor;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const { Term } = elements,
          term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context),
          constructor = new ConstructorTerm(term);

    return constructor;
  }
});
