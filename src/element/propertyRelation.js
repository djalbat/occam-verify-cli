"use strict";

import { Element } from "occam-furtle";

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

    const propertyRelationString = this.getString(); ///

    context.trace(`Verifying the '${propertyRelationString}' property relation...`);

    const termValidates = this.validateTerm(context);

    if (termValidates) {
      const propertyVerifies = this.verifyProperty(context);

      verifies = propertyVerifies;
    }

    if (verifies) {
      context.debug(`...verified the '${propertyRelationString}' property relation.`);
    }

    return verifies;
  }

  validateTerm(context) {
    let termValidates;

    const termString = this.term.getString();

    context.trace(`Validating the '${termString}' term...`);

    termValidates = this.term.validate(context, () => {
      const verifiesForwards = true;

      return verifiesForwards;
    });

    if (termValidates) {
      context.debug(`...validated the '${termString}' term.`);
    }

    return termValidates;
  }

  verifyProperty(context) {
    let propertyVerifies;

    const propertyString = this.property.getString();

    context.trace(`Verifying the '${propertyString}' property...`);

    const termType = this.term.getType(),
          propertyName = this.property.getName(),
          termTypeProperties = termType.getProperties(),
          variableTypeProperty = termTypeProperties.find((termTypeProperty) => {
            const termTypePropertyComparesToPropertyName = termTypeProperty.comparePropertyName(propertyName);

            if (termTypePropertyComparesToPropertyName) {
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
