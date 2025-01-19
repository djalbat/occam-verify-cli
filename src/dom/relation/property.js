"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const variableNodeQuery = nodeQuery("/propertyRelation/variable"),
      propertyNodeQuery = nodeQuery("/propertyRelation/property");

export default domAssigned(class PropertyRelation {
  constructor(string, node, tokens, property, variable) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.property = property;
    this.variable = variable;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getProperty() {
    return this.property;
  }

  getVariable() {
    return this.variable;
  }

  getType() { return this.property.getType(); }

  verify(context) {
    let verified = false;

    const propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation...`);

    const variableVerified = this.verifyVariable(context);

    if (variableVerified) {
      const propertyVerified = this.verifyProperty(context);

      if (propertyVerified) {
        const type = this.property.getType();

        this.variable.setType(type);

        verified = true;
      }
    }

    if (verified) {
      context.debug(`...verified the '${propertyRelationString}' property relation.`);
    }

    return verified;
  }

  verifyVariable(context) {
    let variableVerifyed;

    const variableString = this.variable.getString(),
          propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation's '${variableString}' variable...`);

    variableVerifyed = this.variable.verify(context);

    if (variableVerifyed) {
      context.debug(`...verified the '${propertyRelationString}' property relation's '${variableString}' variable.`);
    }

    return variableVerifyed;
  }

  verifyProperty(context) {
    let propertyVerified;

    const propertyString = this.property.getString(),
          propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation's '${propertyString}' property...`);

    const variableType = this.variable.getType(),
          propertyName = this.property.getName(),
          variableTypeProperties = variableType.getProperties(),
          variableTypeProperty = variableTypeProperties.find((variableTypeProperty) => {
            const propertyNameMatches = variableTypeProperty.matchPropertyName(propertyName);

            if (propertyNameMatches) {
              return true;
            }
          }) || null;

    if (variableTypeProperty === null) {
      const variableString = this.variable.getString(),
            variableTypeName = variableType.getName();

      context.debug(`The '${propertyName}' property is not a property of the '${variableString}' variable's '${variableTypeName}' type.`);
    } else {
      const type = variableType;

      this.property.setType(type);

      propertyVerified = true;
    }

    if (propertyVerified) {
      context.debug(`...verified the '${propertyRelationString}' property relation's '${propertyString}' property.`);
    }

    return propertyVerified;
  }

  static name = "PropertyRelation";

  static fromPropertyRelationNode(propertyRelationNode, context) {
    const { Variable, Property } = dom,
          node = propertyRelationNode,  ///
          string = context.nodeAsString(node),
          tokens = context.nodeAsTokens(node),
          variableNode = variableNodeQuery(propertyRelationNode),
          propertyNode = propertyNodeQuery(propertyRelationNode),
          property = Property.fromPropertyNode(propertyNode, context),
          variable = Variable.fromVariableNode(variableNode, context),
          propertyRelation = new PropertyRelation(string, node, tokens, property, variable);

    return propertyRelation;
  }
});
