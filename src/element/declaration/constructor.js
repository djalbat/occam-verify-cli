"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";
import { validateTerm } from "../../process/validate";

export default define(class ConstructorDeclaration extends Declaration {
  constructor(context, string, node, constructor) {
    super(context, string, node);

    this.constructor = constructor;
  }

  getConstructor() {
    return this.constructor;
  }

  getConstructorDeclarationNode() {
    const node = this.getNode(),
          constructorDeclarationNode = node;  ///

    return constructorDeclarationNode;
  }

  verifyConstructor() {
    let constructorValidates = false;

    const context = this.getContext(),
          constructorString = this.constructor.getString();

    context.trace(`Verifying the '${constructorString}' constructor...`);

    const term = this.constructor.getTerm(),
          termNode = term.getNode(),
          termValidates = validateTerm(termNode, context, () => {
            const validatesFormards = true;

            return validatesFormards;
          });

    if (termValidates) {
      constructorValidates = true;
    }

    if (constructorValidates) {
      context.debug(`...verified the '${constructorString}' constructor.`);
    }

    return constructorValidates;
  }

  verifyConstructorType() {
    let constructorTypeVerifies = false;

    const context = this.getContext();

    let type;

    type = this.constructor.getType();

    const typeString = type.getString();

    context.trace(`Verifying the '${typeString}' type...`);

    const nominalTypeName = type.getNominalTypeName();

    type = context.findTypeByNominalTypeName(nominalTypeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      context.debug(`The '${typeString}' type is not present.`);
    } else {
      const includeSupertypes = false,
            provisional = type.isProvisional(includeSupertypes),
            typeComparesToProvisional = type.compareProvisional(provisional);

      if (!typeComparesToProvisional) {
        provisional ?
          context.debug(`The '${typeString}' type is present but not provisional.`) :
            context.debug(`The '${typeString}' type is present but provisional.`);
      } else {
        this.constructor.setType(type);

        constructorTypeVerifies = true;
      }
    }

    if (constructorTypeVerifies) {
      context.debug(`...verified the '${typeString}' type.`);
    }

    return constructorTypeVerifies;
  }

  async verify() {
    let verifies;

    const context = this.getContext(),
          constructorDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const constructorTypeVerifies = this.verifyConstructorType();

    if (constructorTypeVerifies) {
      const constructorValidates = this.verifyConstructor();

      if (constructorValidates) {
        context.addConstructor(this.constructor);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verifies;
  }

  static name = "ConstructorDeclaration";
});
