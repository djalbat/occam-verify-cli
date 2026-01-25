"use strict";

import { Element, elements } from "occam-furtle";

const { define } = elements;

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

  comparePropertyName(propertyName) {
    const comparesToPropertyName = (this.name === propertyName);

    return comparesToPropertyName;
  }

  compareNominalTypeName(nominalTypeName) {
    const comparesToNominalTypeName = (this.nominalTypeName === nominalTypeName);

    return comparesToNominalTypeName;
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
