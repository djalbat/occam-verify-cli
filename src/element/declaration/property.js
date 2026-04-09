"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class PropertyDeclaration extends Declaration {
  constructor(context, string, node, lineIndex, type, property) {
    super(context, string, node, lineIndex);

    this.type = type;
    this.property = property;
  }

  getType() {
    return this.type;
  }

  getProperty() {
    return this.property;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const propertyDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${propertyDeclarationString}' property declaration...`);

    const typeVerifies = this.verifyType(context);

    if (typeVerifies) {
      const superTypesVerify = this.verifySuperTypes(context);

      if (superTypesVerify) {
        const typePrefixVerifies = this.verifyTypePrefix(context);

        if (typePrefixVerifies) {
          const propertiesVerifies = this.verifyProperties(context);

          if (propertiesVerifies) {
            context.addType(this.type);

            verifies = true;
          }
        }
      }
    }

    if (verifies) {
      context.debug(`...verified the '${propertyDeclarationString}' property declaration.`);
    }

    return verifies;
  }

  static name = "PropertyDeclaration";
});
