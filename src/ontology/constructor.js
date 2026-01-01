"use strict";

import ontology from "../ontology";

import { define } from "../ontology";
import { baseType } from ".//type";
import { unifyTermWithConstructor } from "../process/unify";
import { termFromJSON, termToTermJSON } from "../utilities/json";

export default define(class Constructor {
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
          constructor = new Constructor(term);

    return constructor;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const { Term } = ontology,
          term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context),
          constructor = new Constructor(term);

    return constructor;
  }
});
