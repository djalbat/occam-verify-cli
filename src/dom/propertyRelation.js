"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const propertyAssertionPropertyRelationNodeQuery = nodeQuery("/propertyAssertion/propertyRelation");

export default domAssigned(class PropertyRelation {
  constructor(string, node, tokens, property, term) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.property = property;
    this.term = term;
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

  getTerm() {
    return this.term;
  }

  getType() { return this.property.getType(); }

  isEqualTo(propertyRelation) {
    const propertyRelationString = propertyRelation.getString(),
          equalTo = (propertyRelationString === this.string);

    return equalTo;
  }

  verify(context) {
    let verified = false;

    const propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation...`);

    const termVerified = this.verifyTerm(context);

    if (termVerified) {
      const propertyVerified = this.verifyProperty(context);

      verified = propertyVerified;
    }

    if (verified) {
      context.debug(`...verified the '${propertyRelationString}' property relation.`);
    }

    return verified;
  }

  verifyTerm(context) {
    let termVerified;

    const termString = this.term.getString(),
          propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation's '${termString}' term...`);

    termVerified = this.term.verify(context, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    if (termVerified) {
      context.debug(`...verified the '${propertyRelationString}' property relation's '${termString}' term.`);
    }

    return termVerified;
  }

  verifyProperty(context) {
    let propertyVerified;

    const propertyString = this.property.getString(),
          propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation's '${propertyString}' property...`);

    const variableType = this.term.getType(),
          propertyNames = this.property.getNames(),
          variableTypeProperties = variableType.getProperties(),
          variableTypeProperty = variableTypeProperties.find((variableTypeProperty) => {
            const propertyNamesMatch = variableTypeProperty.matchPropertyNames(propertyNames);

            if (propertyNamesMatch) {
              return true;
            }
          }) || null;

    if (variableTypeProperty === null) {
      const variableString = this.term.getString(),
            variableTypeName = variableType.getName();

      context.debug(`The '${propertyNames}' property is not a property of the '${variableString}' variable's '${variableTypeName}' type.`);
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

  static fromPropertyAssertionNode(propertyAssertionNode, context) {
    const { Term, Property } = dom,
          propertyAssertionPropertyRelationNode = propertyAssertionPropertyRelationNodeQuery(propertyAssertionNode),
          propertyRelationNode = propertyAssertionPropertyRelationNode, ///
          node = propertyRelationNode,  ///
          string = context.nodeAsString(node),
          tokens = context.nodeAsTokens(node),
          property = Property.fromPropertyRelationNode(propertyRelationNode, context),
          term = Term.fromPropertyRelationNode(propertyRelationNode, context),
          propertyRelation = new PropertyRelation(string, node, tokens, property, term);

    return propertyRelation;
  }
});
