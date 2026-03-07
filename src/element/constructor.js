"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt, literally } from "../utilities/context";
import { instantiateConstructor } from "../process/instantiate";
import { verifyTermAsConstructor } from "../process/verify";
import { termFromConstructorNode } from "../utilities/element";
import { unifyTermWithConstructor } from "../process/unify";
import { typeFromJSON, termToTermJSON, typeToTypeJSON, ephemeralContextFromJSON } from "../utilities/json";

export default define(class Constructor extends Element {
  constructor(context, string, node, term, type) {
    super(context, string, node, type);

    this.term = term;
    this.type = type;
  }

  getTerm() {
    return this.term;
  }

  getType() {
    return this.type;
  }

  getConclusionNode() {
    const node = this.getNode(),
          constructorNode = node;  ///

    return constructorNode;
  }

  getString(includeType = true) {
    let string;

    if (includeType) {
      const termString = this.term.getString(),
            typeString = this.type.getString();

      string = `${termString}.${typeString}`;
    } else {
      string = super.getString();
    }

    return string;
  }

  setType(type) {
    this.type = type;
  }

  verify(context) {
    let verifies = false;

    const includeType = false,
          constructorString = this.getString(includeType);

    context.trace(`Verifying the '${constructorString}' constructor...`);

    attempt((context) => {
      const termVerifies = this.verifyTerm(context);

      if (termVerifies) {
        this.setContext(context);

        verifies = true;
      }
    }, context);

    if (verifies) {
      context.debug(`...verified the '${constructorString}' constructor.`);
    }

    return verifies;
  }

  verifyTerm(context) {
    let termVerifies = false;

    const termString = this.term.getString(),
          includeType = false,
          constructorString = this.getString(includeType);

    context.trace(`Verifying the '${constructorString}' constructor's '${termString}' term...`);

    const termVerifiesAsConstructor = verifyTermAsConstructor(this.term, context);

    if (termVerifiesAsConstructor) {
      termVerifies = true;
    }

    if (termVerifies) {
      context.debug(`...verified the '${constructorString}' constructor's '${termString}' term.`);
    }

    return termVerifies;
  }

  unifyTerm(term, context, validateForwards) {
    let termUnifies = false;

    const termString = term.getString(),
          includeType = false,
          constructorString = this.getString(includeType);

    context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`);

    const specifiContext = context; ///

    context = this.getContext();

    const generalContext = context; ///

    context = specifiContext; ///

    const constructor = this, ///
          termUnifiesWithConstructor = unifyTermWithConstructor(term, constructor, generalContext, specifiContext);

    if (termUnifiesWithConstructor) {
      let validatesForwards;

      term.setType(this.type);

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
          typeJSON = typeToTypeJSON(this.type),
          string = this.getString(includeType),
          term = termJSON,  ///
          type = typeJSON,  ///
          json = {
            context,
            string,
            term,
            type
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
            type = typeFromJSON(json, context),
            ephemeralContext = ephemeralContextFromJSON(json, context);

      context = ephemeralContext; ///

      const constructor = new Constructor(context, string, node, term, type);

      return constructor;

    }, context);

    return constructor;
  }
});
