"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt, literally } from "../utilities/context";
import { instantiateConstructor } from "../process/instantiate";
import { unifyTermWithConstructor } from "../process/unify";
import { validateTermAsConstructor } from "../process/validate";
import { typeFromJSON, typeToTypeJSON, ephemeralContextFromJSON, ephemeralContextToEphemeralContextJSON } from "../utilities/json";

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

  validate(context) {
    let validates = false;

    const includeType = false,
          constructorString = this.getString(includeType);

    context.trace(`Validating the '${constructorString}' constructor...`);

    attempt((context) => {
      const termValidates = this.validateTerm(context);

      if (termValidates) {
        this.setContext(context);

        validates = true;
      }
    }, context);

    if (validates) {
      context.debug(`...validated the '${constructorString}' constructor.`);
    }

    return validates;
  }

  validateTerm(context) {
    let termValidates = false;

    const termString = this.term.getString(),
          includeType = false,
          constructorString = this.getString(includeType);

    context.trace(`Validating the '${constructorString}' constructor's '${termString}' term...`);

    const termValidatesAsConstructor = validateTermAsConstructor(this.term, context);

    if (termValidatesAsConstructor) {
      termValidates = true;
    }

    if (termValidates) {
      context.debug(`...validated the '${constructorString}' constructor's '${termString}' term.`);
    }

    return termValidates;
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

    const ephemeralContext = context, ///
          ephemeralContextJSON = ephemeralContextToEphemeralContextJSON(ephemeralContext),
          contextJSON = ephemeralContextJSON; ///

    context = contextJSON;  ///

    const includeType = false,
          typeJSON = typeToTypeJSON(this.type),
          string = this.getString(includeType),
          type = typeJSON,  ///
          json = {
            context,
            string,
            type
          };

    return json;
  }

  static name = "Constructor";

  static fromJSON(json, context) {
    const ephemeralContext = ephemeralContextFromJSON(json, context);

    context = ephemeralContext; ///

    const constructor = literally((context) => {
      const { string } = json,
            constructorNode = instantiateConstructor(string, context),
            node = constructorNode, ///
            term = termFromConstructorNode(constructorNode, context),
            type = typeFromJSON(json, context),
            constructor = new Constructor(context, string, node, term, type);

      return constructor;
    }, context);

    return constructor;
  }
});

function termFromConstructorNode(constructorNode, context) {
  const termNode = constructorNode.getTermNode(),
        term = context.findTermByTermNode(termNode);

  return term;
}
