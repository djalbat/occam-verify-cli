"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { unifyTermWithConstructor } from "../process/unify";
import { termFromJSON, termToTermJSON } from "../utilities/json";

export default define(class Constructor extends Element {
  constructor(context, string, node, term) {
    super(context, string, node);

    this.term = term;
  }

  getTerm() {
    return this.term;
  }

  isProvisional() { return this.term.isProvisional(); }

  getType() { return this.term.getType(); }

  setType(type) { this.term.setType(type); }

  unifyTerm(term, context, verifyForwards) {
    let termUnifies = false;

    const termString = term.getString(),
          constructorString = this.getString(); ///

    context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`);

    const constructor = this, ///
          termUnifiesWithConstructor = unifyTermWithConstructor(term, constructor, context);

    if (termUnifiesWithConstructor) {
      let verifiesForwards;

      const type = this.getType();

      term.setType(type);

      verifiesForwards = verifyForwards();

      termUnifies = verifiesForwards;  ///
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
});
