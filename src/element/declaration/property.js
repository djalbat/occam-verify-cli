"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class PropertyDeclaration extends Declaration {
  constructor(context, string, node, lineIndex, property, type) {
    super(context, string, node, lineIndex);

    this.property = property;
    this.type = type;
  }

  getProperty() {
    return this.property;
  }

  getType() {
    return this.type;
  }

  async verify(properties, context) {
    let verifies = false;

    await this.break(context);

    const propertyDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${propertyDeclarationString}' property declaration...`);

    if (this.property !== null) {
      const typeVerifies = this.verifyType(context);

      if (typeVerifies) {
        const propertyVerifies = this.verifyProperty(properties, context);

        if (propertyVerifies) {
          this.property.setType(this.type);

          verifies = true;
        }
      }
    } else {
      context.debug(`Unable to verify the '${propertyDeclarationString}' property declaration because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${propertyDeclarationString}' property declaration.`);
    }

    return verifies;
  }

  verifyType(context) {
    let typeVerifies = false;

    const typeString = this.type.getString(),
          propertyDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${propertyDeclarationString}' property declaration's '${typeString}' type...`);

    const typeName = this.type.getName(),
          type = context.findTypeByTypeName(typeName);

    if (type !== null) {
      this.type = type;

      typeVerifies = true;
    } else {
      context.debug(`The '${typeString}' type is not present.`);
    }

    if (typeVerifies) {
      context.debug(`...verified the '${propertyDeclarationString}' property declaration's '${typeString}' type`);
    }

    return typeVerifies;
  }

  verifyProperty(properties, context) {
    let propertyVerifies;

    const propertyString = this.property.getString(),
          propertyDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${propertyDeclarationString}' property declaration's '${propertyString}' property...`);

    propertyVerifies = this.property.verify(properties, context);

    if (propertyVerifies) {
      context.debug(`...verified the '${propertyDeclarationString}' property declaration's '${propertyString}' type`);
    }

    return propertyVerifies;
  }

  static name = "PropertyDeclaration";
});
