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

  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          constructorDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`, node);

    const constructorTypeVerifies = this.verifyConstructorType();

    if (constructorTypeVerifies) {
      const constructorValidates = this.verifyConstructor();

      if (constructorValidates) {
        context.addConstructor(this.constructor);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`, node);
    }

    return verifies;
  }

  verifyConstructor() {
    let constructorValidates = false;

    const node = this.getNode(),
          context = this.getContext(),
          constructorString = this.constructor.getString();

    context.trace(`Verifying the '${constructorString}' constructor...`, node);

    const term = this.constructor.getTerm(),
          termNode = term.getNode(),
          termValidates = validateTerm(termNode, context);

    if (termValidates) {
      constructorValidates = true;
    }

    if (constructorValidates) {
      context.debug(`...verified the '${constructorString}' constructor.`, node);
    }

    return constructorValidates;
  }

  verifyConstructorType() {
    let constructorTypeVerifies = false;

    const node = this.getNode(),
          context = this.getContext();

    let type;

    type = this.constructor.getType();

    const typeString = type.getString();

    context.trace(`Verifying the '${typeString}' type...`, node);

    const nominalTypeName = type.getNominalTypeName();

    type = context.findTypeByNominalTypeName(nominalTypeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      context.debug(`The '${typeString}' type is not present.`, node);
    } else {
      const includeSupertypes = false,
            provisional = type.isProvisional(includeSupertypes),
            typeComparesToProvisional = type.compareProvisional(provisional);

      if (!typeComparesToProvisional) {
        provisional ?
          context.debug(`The '${typeString}' type is present but not provisional.`, node) :
            context.debug(`The '${typeString}' type is present but provisional.`, node);
      } else {
        this.constructor.setType(type);

        constructorTypeVerifies = true;
      }
    }

    if (constructorTypeVerifies) {
      context.debug(`...verified the '${typeString}' type.`, node);
    }

    return constructorTypeVerifies;
  }

  static name = "ConstructorDeclaration";
});
