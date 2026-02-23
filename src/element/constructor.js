"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { verifyTermAsConstructor } from "../process/verify";
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

  getConclusionNode() {
    const node = this.getNode(),
          constructorNode = node;  ///

    return constructorNode;
  }

  setType(type) { this.term.setType(type); }

  verify(context) {
    let verifies = false;

    const constructorString = this.getString();  ///

    context.trace(`Verifying the '${constructorString}' constructor...`);

    const termVerifiesAsConstructor = verifyTermAsConstructor(this.term, context);

    if (termVerifiesAsConstructor) {
      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${constructorString}' constructor.`);
    }

    return verifies;
  }

  unifyTerm(term, context, validateForwards) {
    let termUnifies = false;

    const termString = term.getString(),
          constructorString = this.getString(); ///

    context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`);

    const constructor = this, ///
          termUnifiesWithConstructor = unifyTermWithConstructor(term, constructor, context);

    if (termUnifiesWithConstructor) {
      let validatesForwards;

      const type = this.getType();

      term.setType(type);

      validatesForwards = validateForwards();

      termUnifies = validatesForwards;  ///
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
