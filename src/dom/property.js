"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

export default domAssigned(class Property {
  constructor(string, type, name, identifier) {
    this.string = string;
    this.type = type;
    this.identifier = identifier;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getIdentifier() {
    return this.identifier;
  }

  setType(type) {
    this.type = type;
  }

  matchTypeName(typeName) { return this.type.matchTypeName(typeName); }

  matchPropertyIdentifier(propertyIdentifier) {
    const propertyIdentifierMatches = (this.identifier === propertyIdentifier);

    return propertyIdentifierMatches;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          identifier = this.identifier, ///
          type = typeJSON,  ///
          json = {
            type,
            identifier
          };

    return json;
  }

  static name = "Property";

  static fromJSON(json, context) {
    const { identifier } = json,
          type = typeFromJSON(json, context),
          string = identifier, ///
          property = new Property(string, type, identifier);

    return property;
  }

  static fromPropertyNode(propertyNode, context) {
    const property = propertyFromPropertyNode(propertyNode, context)

    return property;
  }

  static fromPropertyRelationNode(propertyRelationNode, context) {
    const propertyNode = propertyRelationNode.getPropertyNode(),
          property = propertyFromPropertyNode(propertyNode, context);

    return property;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, context) {
    const { Type } = dom,
          type = Type.fromPropertyDeclarationNode(propertyDeclarationNode),
          propertyIdentifier = propertyDeclarationNode.getPropertyIdentifier(),
          identifier = propertyIdentifier,  ///
          string = identifier,  ///
          property = new Property(string, type, identifier);

    return property;
  }
});

function propertyFromPropertyNode(propertyNode, context) {
  const { Property } = dom,
        propertyIdentifier = propertyNode.getPropertyIdentifier(),
        identifier = propertyIdentifier,  ///
        type = null,
        string = identifier,  ///
        property = new Property(string, type, identifier);

  return property;
}
