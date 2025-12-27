"use strict";

import structure from "../structure";

import { define } from "../structure";

export default define(class Property {
  constructor(string, name, nominalTypeName) {
    this.string = string;
    this.name = name;
    this.nominalTypeName = nominalTypeName;
  }

  getString() {
    return this.string;
  }

  getName() {
    return this.name;
  }

  getNominalTypeName() {
    return this.nominalTypeName;
  }

  matchPropertyName(propertyName) {
    const propertyNameMatches = (this.name === propertyName);

    return propertyNameMatches;
  }

  matchNominalTypeName(nominalTypeName) {
    const nominalTypeNameMatches = (this.nominalTypeName === nominalTypeName);

    return nominalTypeNameMatches;
  }

  toJSON() {
    const name = this.name, ///
          nominalTypeName = this.nominalTypeName,  ///
          json = {
            name,
            nominalTypeName
          };

    return json;
  }

  static name = "Property";

  static fromJSON(json, context) {
    const { name, nominalTypeName } = json,
          string = name, ///
          property = new Property(string, name, nominalTypeName);

    return property;
  }

  static fromPropertyRelationNode(propertyRelationNode, context) {
    const propertyNode = propertyRelationNode.getPropertyNode(),
          property = propertyFromPropertyNode(propertyNode, context);

    return property;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, context) {
    const propertyName = propertyDeclarationNode.getPropertyName(),
          nominalTypeName = propertyDeclarationNode.getNominalTypeName(),
          name = propertyName,  ///
          string = name,  ///
          property = new Property(string, name, nominalTypeName);

    return property;
  }
});

function propertyFromPropertyNode(propertyNode, context) {
  const { Property } = structure,
        propertyName = propertyNode.getPropertyName(),
        nominalTypeName = null,
        name = propertyName,  ///
        string = name,  ///
        property = new Property(string, name, nominalTypeName);

  return property;
}
