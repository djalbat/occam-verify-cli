"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiatePropertyRelation } from "../process/instantiate";
import { propertyFromPropertyRelationNode } from "../utilities/element";

export default define(class PropertyRelation extends Element {
  constructor(context, string, node, term, property) {
    super(context, string, node);

    this.term = term;
    this.property = property;
  }

  getTerm() {
    return this.term;
  }

  getProperty() {
    return this.property;
  }

  getPropertyRelationNode() {
    const node = this.getNode(),
          propertyRelationNode = node;  ///

    return propertyRelationNode;
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
    let termValidates = false;

    const termString = this.term.getString();

    context.trace(`Validating the '${termString}' term...`);

    const term = this.term.validate(context, (term) => {
      const validatesForwards = true;

      return validatesForwards;
    });

    if (term !== null) {
      this.term = term;

      termValidates = true;
    }

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

  toJSON() {
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static fromJSON(json, context) {
    const propertyRelation = instantiate((context) => {
      const { string } = json,
            propertyRelationNode = instantiatePropertyRelation(string, context),
            node = propertyRelationNode,  ///
            term = termFromPropertyRelationNode(propertyRelationNode, context),
            property = propertyFromPropertyRelationNode(propertyRelationNode, context);

      context = null;

      const propertyRelation = new PropertyRelation(context, string, node, term, property);

      return propertyRelation;
    }, context);

    return propertyRelation;
  }
});

function termFromPropertyRelationNode(propertyRelationNode, context) {
  const termNode = propertyRelationNode.getTermNode(),
        term = context.findTermByTermNode(termNode);

  return term;
}
