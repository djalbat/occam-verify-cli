"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

export default domAssigned(class Property {
  constructor(string, name, type) {
    this.string = string;
    this.name = name;
    this.type = type;
  }

  getString() {
    return this.string;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  matchTypeName(typeName) { return this.type.matchTypeName(typeName); }

  matchPropertyName(propertyName) {
    const propertyNameMatches = (this.name === propertyName);

    return propertyNameMatches;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          name = this.name, ///
          type = typeJSON,  ///
          json = {
            type,
            name
          };

    return json;
  }

  static name = "Property";

  static fromJSON(json, context) {
    const { name } = json,
          type = typeFromJSON(json, context),
          string = name, ///
          property = new Property(string, name, type);

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
          propertyName = propertyDeclarationNode.getPropertyName(),
          name = propertyName,  ///
          string = name,  ///
          property = new Property(string, name, type);

    return property;
  }
});

function propertyFromPropertyNode(propertyNode, context) {
  const { Property } = dom,
        propertyName = propertyNode.getPropertyName(),
        name = propertyName,  ///
        type = null,
        string = name,  ///
        property = new Property(string, name, type);

  return property;
}
