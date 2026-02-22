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

  isProvisinal() {
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

    const context = this.getContext(),
          constructorDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const typeVerified = this.verifyType();

    if (typeVerified) {
      const constructorVerifies = this.verifyConstructor();

      if (constructorVerifies) {
        const constructorTypeVerifies = this.verifyConstructorType();

        if (constructorTypeVerifies) {
          context.addConstructor(this.constructor);

          verifies = true;
        }
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
      const includeSupertypes = false,
            provisional = this.isProvisional(includeSupertypes),
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

  verifyConstructor() {
    let constructorVerifies;

    const context = this.getContext(),
          constructorString = this.constructor.getString(),
          constructorDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor...`);

    constructorVerifies = this.constructor.verify(context);

    if (constructorVerifies) {
      context.debug(`...verified the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor.`);
    }

    return constructorVerifies;
  }

  // verifyConstructorType() {
  //   let constructorTypeVerifies = false;
  //
  //   const context = this.getContext(),
  //         constructorType = this,
  //         constructorTypeString = constructorType.getString(),
  //         constructorDeclarationString = this.getString();  ///
  //
  //   context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration's '${constructorTypeString}' type...`);
  //
  //   const nominalTypeName = this.type.getNominalTypeName(),
  //     typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
  //
  //   if (!typePresent) {
  //     context.debug(`The '${typeString}' type is not present.`);
  //   } else {
  //     const includeSupertypes = false,
  //       provisional = type.isProvisional(includeSupertypes),
  //       typeComparesToProvisional = type.compareProvisional(provisional);
  //
  //     if (!typeComparesToProvisional) {
  //       provisional ?
  //         context.debug(`The '${typeString}' type is present but not provisional.`) :
  //         context.debug(`The '${typeString}' type is present but provisional.`);
  //     } else {
  //       this.constructor.setType(type);
  //
  //       constructorTypeVerifies = true;
  //     }
  //   }
  //
  //   if (constructorTypeVerifies) {
  //     context.debug(`...verified the '${constructorDeclarationString}' constructor declaration's '${typeString}' type.`);
  //   }
  //
  //   return constructorTypeVerifies;
  // }

  static name = "ConstructorDeclaration";
});


// verifyConstructor() {
//   let constructorValidates = false;
//
//   const context = this.getContext(),
//         constructorString = this.constructor.getString();
//
//   context.trace(`Verifying the '${constructorString}' constructor...`);
//
//   const term = this.constructor.getTerm(),
//         termNode = term.getNode(),
//         termValidates = validateTerm(termNode, context, () => {
//           const validatesFormards = true;
//
//           return validatesFormards;
//         });
//
//   if (termValidates) {
//     constructorValidates = true;
//   }
//
//   if (constructorValidates) {
//     context.debug(`...verified the '${constructorString}' constructor.`);
//   }
//
//   return constructorValidates;
// }
