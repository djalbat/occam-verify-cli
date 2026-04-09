"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateProperty } from "../process/instantiate";
import { nameFromPropertyNode } from "../utilities/element";
import { nominalTypeNameFromJSON, nominalTypeNameToNominalTypeNameJSON } from "../utilities/json";

export default define(class Property extends Element {
  constructor(context, string, node, lineIndex, name, nominalTypeName) {
    super(context, string, node, lineIndex);

    this.name = name;
    this.nominalTypeName = nominalTypeName;
  }

  getName() {
    return this.name;
  }

  getNominalTypeName() {
    return this.nominalTypeName;
  }

  getPropertyNode() {
    const node = this.getNode(),
          properetyNode = node; ///

    return properetyNode;
  }

  comparePropertyName(propertyName) {
    const comparesToPropertyName = (this.name === propertyName);

    return comparesToPropertyName;
  }

  compareNominalTypeName(nominalTypeName) {
    const comparesToNominalTypeName = (this.nominalTypeName === nominalTypeName);

    return comparesToNominalTypeName;
  }

  verify(context, properties) {
    let verifies = false;

    const propertyString = this.getString();  ///

    context.trace(`Verifying the '${propertyString}' property...`);

    const naemVerifies = this.verifyName(properties, context);

    if (naemVerifies) {
      const nominalTypeNameVerifies = this.verifyNominalTypeName(context);

      if (nominalTypeNameVerifies) {
        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${propertyString}' property.`);
    }

    return verifies;
  }

  verifyName(properties, context) {
    let naemVerifies = false;

    const propertyString = this.getString();

    context.trace(`Verifying the '${propertyString}' property's name...`);

    const propertyName = this.name, ///
          count = properties.reduce((count, property) => {
            const propertyComparesToPropertyName = property.comparePropertyName(propertyName);

            if (propertyComparesToPropertyName) {
              count++;
            }

            return count;
          }, 0);

    if (count > 1) {
      context.debug(`The '${propertyString}' property appears more than once.`);
    } else {
      const superTypes = this.type.getSuperTypes(),
            superType = superTypes.find((superType) => {
              const superTypeProperties = superType.getProperties(),
                    superTypePropertyComparesToPropertyName = superTypeProperties.some((superTypeProperty) => {
                      const superTypePropertyComparesToPropertyName = superTypeProperty.comparePropertyName(propertyName);

                      if (superTypePropertyComparesToPropertyName) {
                        return true;
                      }
                    });

              if (superTypePropertyComparesToPropertyName) {
                return true;
              }
            }) || null;

      if (superType !== null) {
        const superTypeString = superType.getString();

        context.debug(`The '${superTypeString}' super-type has the same property.`);
      } else {
        naemVerifies = true;
      }
    }

    if (naemVerifies) {
      context.debug(`...verified the '${propertyString}' property's name.`);
    }

    return naemVerifies;
  }

  verifyNominalTypeName(context) {
    let nominalTypeNameVerifies = false;

    const propertyString = this.getString();  ///

    context.trace(`Verifying the '${propertyString}' property's nominal type name...`);

    const typeComparesToNominalTypeName = this.type.compareNominalTypeName(this.nominalTypeName);

    if (typeComparesToNominalTypeName) {
      nominalTypeNameVerifies = true;
    } else {
      const typePresent = context.isTypePresentByNominalTypeName(this.nominalTypeName);

      if (typePresent) {
        nominalTypeNameVerifies = true;
      }
    }

    if (nominalTypeNameVerifies) {
      context.debug(`...verifies the '${propertyString}' property's nominal type name.`);
    }

    return nominalTypeNameVerifies;
  }

  toJSON() {
    const nominalTypeNameJSON = nominalTypeNameToNominalTypeNameJSON(this.nominalTypeName),
          nominalTypeName = nominalTypeNameJSON,  ///
          string = this.getString(),
          lineIndex = this.getLineIndex(),
          json = {
            string,
            lineIndex,
            nominalTypeName
          };

    return json;
  }

  static name = "Property";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string, lineIndex } = json,
            propertyNode = instantiateProperty(string, context),
            node = propertyNode,  ///
            name = nameFromPropertyNode(propertyNode, context),
            nominalTypeName = nominalTypeNameFromJSON(json);

      context = null;

      const property = new Property(context, string, node, lineIndex, name, nominalTypeName);

      return property;
    }, context);
  }
});
