"use strict";

import ontology from "../ontology";

import { define } from "../ontology";

export default define(class PropertyRelation {
  constructor(string, node, property, term) {
    this.string = string;
    this.node = node;
    this.property = property;
    this.term = term;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getProperty() {
    return this.property;
  }

  getTerm() {
    return this.term;
  }

  isEqualTo(propertyRelation) {
    const propertyRelationNode = propertyRelation.getNode(),
          matches = this.node.match(propertyRelationNode),
          equalTo = matches;  ///

    return equalTo;
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

  static fromPropertyAssertionNode(propertyAssertionNode, context) {
    const { Term, Property } = ontology,
          propertyRelationNode = propertyAssertionNode.getPropertyRelationNode(),
          node = propertyRelationNode,  ///
          string = context.nodeAsString(node),
          property = Property.fromPropertyRelationNode(propertyRelationNode, context),
          term = Term.fromPropertyRelationNode(propertyRelationNode, context),
          propertyRelation = new PropertyRelation(string, node, property, term);

    return propertyRelation;
  }
});
