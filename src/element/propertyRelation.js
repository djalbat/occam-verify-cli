"use strict";

import Element from "../element";

import { define } from "../elements";

export default define(class PropertyRelation extends Element {
  constructor(context, string, node, property, term) {
    super(context, string, node);

    this.property = property;
    this.term = term;
  }

  getProperty() {
    return this.property;
  }

  getTerm() {
    return this.term;
  }

  verify(context) {
    let verifies = false;

    const propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation...`);

    const termVerifies = this.verifyTerm(context);

    if (termVerifies) {
      const propertyVerifies = this.verifyProperty(context);

      verifies = propertyVerifies;
    }

    if (verifies) {
      context.debug(`...verified the '${propertyRelationString}' property relation.`);
    }

    return verifies;
  }

  verifyTerm(context) {
    let termVerifies;

    const termString = this.term.getString();

    context.trace(`Verifying the '${termString}' term...`);

    termVerifies = this.term.verify(context, () => {
      const verifiesAhead = true;

      return verifiesAhead;
    });

    if (termVerifies) {
      context.debug(`...verified the '${termString}' term.`);
    }

    return termVerifies;
  }

  verifyProperty(context) {
    let propertyVerifies;

    const propertyString = this.property.getString();

    context.trace(`Verifying the '${propertyString}' property...`);

    const termType = this.term.getType(),
          propertyName = this.property.getName(),
          termTypeProperties = termType.getProperties(),
          variableTypeProperty = termTypeProperties.find((termTypeProperty) => {
            const propertyNameMatches = termTypeProperty.matchPropertyName(propertyName);

            if (propertyNameMatches) {
              return true;
            }
          }) || null;

    if (variableTypeProperty === null) {
      const variableString = this.term.getString(),
            variableTypeString = termType.getString();

      context.debug(`The '${propertyName}' property is not a property of the '${variableString}' variable's '${variableTypeString}' type.`);
    } else {
      propertyVerifies = true;
    }

    if (propertyVerifies) {
      context.debug(`...verified the '${propertyString}' property.`);
    }

    return propertyVerifies;
  }

  static name = "PropertyRelation";
});
