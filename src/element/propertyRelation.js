"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiatePropertyRelation } from "../process/instantiate";
import { propertyFromPropertyRelationNode } from "../utilities/element";

export default define(class PropertyRelation extends Element {
  constructor(context, string, node, lineIndex, term, property) {
    super(context, string, node, lineIndex);

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

  isEqualTo(propertyRelation) {
    const propertyRelationNode = propertyRelation.getNode(),
          propertyRelationNodeMatches = this.matchPropertyRelationNode(propertyRelationNode),
          equalTo = propertyRelationNodeMatches;  ///

    return equalTo;
  }

  matchPropertyRelationNode(propertyRelationNode) {
    const node = propertyRelationNode, ///
          nodeMatches = this.matchNode(node),
          propertyRelationNodeMatches = nodeMatches; ///

    return propertyRelationNodeMatches;
  }

  findValidPropertyRelation(context) {
    const propertyRelationNode = this.getPropertyRelationNode(),
          propertyRelation = context.findPropertyRelationByPropertyRelationNode(propertyRelationNode),
          validPropertyRelation = propertyRelation; ///

    return validPropertyRelation;
  }

  validate(context) {
    let propertyRelation = null;

    const propertyRelationString = this.getString(); ///

    context.trace(`Validating the '${propertyRelationString}' property relation...`);

    const validPropertyRelation = this.findValidPropertyRelation(context);

    if (validPropertyRelation) {
      propertyRelation = validPropertyRelation; ///

      context.debug(`...the '${propertyRelationString}' property relation is already valid.`);
    } else {
      let validates = false;

      const termValidates = this.validateTerm(context);

      if (termValidates) {
        const propertyVerifies = this.verifyProperty(context);

        validates = propertyVerifies;
      }

      if (validates) {
        const propertyRelation = this; ///

        this.assign(context);

        context.addPropertyRelation(propertyRelation);

        context.debug(`...validated the '${propertyRelationString}' property relation.`);
      }
    }

    return propertyRelation;
  }

  validateTerm(context) {
    let termValidates = false;

    const propertyRelationString = this.getString(); ///

    context.trace(`Validating the '${propertyRelationString}' property relation's term...`);

    const term = this.term.validate(context, (term) => {
      const validatesForwards = true;

      return validatesForwards;
    });

    if (term !== null) {
      this.term = term;

      termValidates = true;
    }

    if (termValidates) {
      context.debug(`...validated the '${propertyRelationString}' property relation's term.`);
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
          lineIndex = this.getLineIndex(),
          json = {
            string,
            lineIndex
          };

    return json;
  }

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string, lineIndex } = json,
            propertyRelationNode = instantiatePropertyRelation(string, context),
            node = propertyRelationNode,  ///
            term = termFromPropertyRelationNode(propertyRelationNode, context),
            property = propertyFromPropertyRelationNode(propertyRelationNode, context);

      context = null;

      const propertyRelation = new PropertyRelation(context, string, node, lineIndex, term, property);

      return propertyRelation;
    }, context);
  }
});

function termFromPropertyRelationNode(propertyRelationNode, context) {
  const termNode = propertyRelationNode.getTermNode(),
        term = context.findTermByTermNode(termNode);

  return term;
}
