"use strict";

import Element from "../element";

import { define } from "../elements";

export default define(class Property extends Element {
  constructor(context, string, node, name, nominalTypeName) {
    super(context, string, node);

    this.name = name;
    this.nominalTypeName = nominalTypeName;
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
          node = null,
          property = new Property(context, string, node, name, nominalTypeName);

    return property;
  }
});
