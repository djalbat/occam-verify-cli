"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class ConstructorDeclaration extends Declaration {
  constructor(context, string, node, type, provisional, constructor) {
    super(context, string, node);

    this.type = type;
    this.provisional = provisional;
    this.constructor = constructor;
  }

  getType() {
    return this.type;
  }

  isProvisional() {
    return this.provisional;
  }

  getConstructor() {
    return this.constructor;
  }

  getConstructorDeclarationNode() {
    const node = this.getNode(),
          constructorDeclarationNode = node; ///

    return constructorDeclarationNode;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext();

    await this.break(context);

    const constructorDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const typeVerified = this.verifyType();

    if (typeVerified) {
      const constructorValidates = this.validateConstructor();

      if (constructorValidates) {
        this.constructor.setType(this.type);

        context.addConstructor(this.constructor);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const context = this.getContext(),
          typeString = this.type.getString(),
          constructorDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration's '${typeString}' type...`);

    const nominalTypeName = this.type.getNominalTypeName(),
          type = context.findTypeByNominalTypeName(nominalTypeName);

    if (type !== null) {
      const provisional = this.isProvisional(),
            typeComparesToProvisional = type.compareProvisional(provisional);

      if (!typeComparesToProvisional) {
        provisional ?
          context.debug(`The '${typeString}' type is present but not provisional.`) :
            context.debug(`The '${typeString}' type is present but provisional.`);
      } else {
        this.type = type;

        typeVerifies = true;
      }
    } else {
      context.debug(`The '${typeString}' type is not present.`);
    }

    if (typeVerifies) {
      context.debug(`...verified the '${constructorDeclarationString}' constructor declaration's '${typeString}' type.`);
    }

    return typeVerifies;
  }

  validateConstructor() {
    let constructorValidates;

    const context = this.getContext(),
          includeType = false,
          constructorString = this.constructor.getString(includeType),
          constructorDeclarationString = this.getString();  ///

    context.trace(`Validating the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor...`);

    constructorValidates = this.constructor.validate(context);

    if (constructorValidates) {
      context.debug(`...validated the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor.`);
    }

    return constructorValidates;
  }

  static name = "ConstructorDeclaration";
});
