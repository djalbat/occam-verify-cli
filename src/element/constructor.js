"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt, literally } from "../utilities/context";
import { instantiateConstructor } from "../process/instantiate";
import { verifyTermAsConstructor } from "../process/verify";
import { termFromConstructorNode } from "../utilities/element";
import { unifyTermWithConstructor } from "../process/unify";
import { termToTermJSON, ephemeralContextFromJSON } from "../utilities/json";

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

  getType() { return this.term.getType(); }

  getString(includeType = true) {
    let string;

    if (includeType) {
      const type = this.getType(),
            typeString = type.getString(),
            termString = this.term.getString();

      string = `${termString}.${typeString}`;
    } else {
      string = super.getString();
    }

    return string;
  }

  setType(type) { this.term.setType(type); }

  verify(context) {
    let verifies = false;

    const includeType = false,
          constructorString = this.getString(includeType);

    context.trace(`Verifying the '${constructorString}' constructor...`);

    attempt((context) => {
      const termVerifiesAsConstructor = verifyTermAsConstructor(this.term, context);

      if (termVerifiesAsConstructor) {
        this.setContext(context);

        verifies = true;
      }
    }, context);

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

    const specifiContext = context; ///

    context = this.getContext();

    const generalContext = context; ///

    context = specifiContext; ///

    const constructor = this, ///
          termUnifiesWithConstructor = unifyTermWithConstructor(term, constructor, generalContext, specifiContext);

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
    let context;

    context = this.getContext();

    const contextJSON = context.toJSON();

    context = contextJSON;  ///

    const includeType = false,
          termJSON = termToTermJSON(this.term),
          string = this.getString(includeType),
          term = termJSON,  ///
          json = {
            context,
            string,
            term
          };

    return json;
  }

  static name = "Constructor";

  static fromJSON(json, context) {
    const constructor = literally((context) => {
      const { string } = json,
            constructorNode = instantiateConstructor(string, context),
            node = constructorNode, ///
            term = termFromConstructorNode(constructorNode, context),
            ephemeralContext = ephemeralContextFromJSON(json, context);

      context = ephemeralContext; ///

      const constructor = new Constructor(context, string, node, term);

      return constructor;

    }, context);

    return constructor;
  }
});
