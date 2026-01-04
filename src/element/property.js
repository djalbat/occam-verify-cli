"use strict";

import { define } from "../elements";

export default define(class Property {
  constructor(context, string, node, name, nominalTypeName) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.name = name;
    this.nominalTypeName = nominalTypeName;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
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
});
