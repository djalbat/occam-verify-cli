"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const termNodeQuery = nodeQuery("/propertyRelation/term"),
      propertyNodeQuery = nodeQuery("/propertyRelation/property"),
      propertyRelationNodeQuery = nodeQuery("/term/propertyRelation");

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

  verify(context) {
    let verified = false;

    const propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation...`);

    const termVerified = this.verifyTerm(context);

    if (termVerified) {
      const propertyVerified = this.verifyProperty(context);

      if (propertyVerified) {
        const type = this.property.getType();

        this.term.setType(type);

        verified = true;
      }
    }

    if (verified) {
      context.debug(`...verified the '${propertyRelationString}' property relation.`);
    }

    return verified;
  }

  verifyProperty(context) {
    let propertyVerified;

    const propertyString = this.property.getString(),
          propertyRelationString = this.string; ///

    context.trace(`Verifying the '${propertyRelationString}' property relation's '${propertyString}' property...`);

    const termType = this.term.getType(),
          propertyName = this.property.getName(),
          termTypeProperties = termType.getProperties(),
          termTypeProperty = termTypeProperties.find((termTypeProperty) => {
            const propertyNameMatches = termTypeProperty.matchPropertyName(propertyName);

            if (propertyNameMatches) {
              return true;
            }
          }) || null;

    if (termTypeProperty === null) {
      const termString = this.term.getString(),
            termTypeName = termType.getName();

      context.debug(`The '${propertyName}' property is not a property of the '${termString}' term's '${termTypeName}' type.`);
    } else {
      const type = termType;

      this.property.setType(type);

      propertyVerified = true;
    }

    if (propertyVerified) {
      context.debug(`...verified the '${propertyRelationString}' property relation's '${propertyString}' property.`);
    }

    return propertyVerified;
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

  static name = "PropertyRelation";

  static fromTermNode(termNode, context) {
    let propertyRelation = null;

    const propertyRelationNode = propertyRelationNodeQuery(termNode);

    if (propertyRelationNode !== null) {
      const { Term, Property } = dom,
            node = propertyRelationNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            termNode = termNodeQuery(propertyRelationNode),
            propertyNode = propertyNodeQuery(propertyRelationNode),
            property = Property.fromPropertyNode(propertyNode, context),
            term = Term.fromTermNode(termNode, context);

      propertyRelation = new PropertyRelation(string, node, tokens, property, term);
    }

    return propertyRelation;
  }
});
