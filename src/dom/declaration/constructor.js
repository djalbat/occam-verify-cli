"use strict";

import dom from "../../dom";

import constructorVerifier from "../../verifier/constructor";

import { domAssigned } from "../../dom";

export default domAssigned(class ConstructorDeclaration {
  constructor(context, string, constructor) {
    this.context = context;
    this.string = string;
    this.constructor = constructor;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getConstructor() {
    return this.constructor;
  }

  verify() {
    let verifies;

    const constructorDeclarationString = this.getString(); ///

    this.context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const constructorTypeVerifies = this.verifyConstructorType();

    if (constructorTypeVerifies) {
      const constructorVerifies = this.verifyConstructor();

      if (constructorVerifies) {
        this.context.addConstructor(this.constructor);

        verifies = true;
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verifies;
  }

  verifyConstructor() {
    let constructorVerifies;

    const constructorString = this.constructor.getString();

    this.context.trace(`Verifying the '${constructorString}' constructor...`);

    const term = this.constructor.getTerm(),
          termNode = term.getNode();

    constructorVerifies = constructorVerifier.verifyTerm(termNode, this.context);

    if (constructorVerifies) {
      this.context.debug(`...verified the '${constructorString}' constructor.`);
    }

    return constructorVerifies;
  }

  verifyConstructorType() {
    let constructorTypeVerifies = false;

    let type;

    type = this.constructor.getType();

    const typeName = type.getName(),
          typeString = type.getString();

    this.context.trace(`Verifying the '${typeString}' type...`);

    const includeSupertypes = false,
          provisional = type.isProvisional(includeSupertypes);

    type = this.context.findTypeByTypeName(typeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      this.context.debug(`The '${typeString}' type is not present.`);
    } else {
      const provisionalMatches = type.matchProvisional(provisional);

      if (!provisionalMatches) {
        provisional ?
          this.context.debug(`The '${typeString}' type is present but not provisional.`) :
            this.context.debug(`The '${typeString}' type is present but provisional.`);
      } else {
        this.constructor.setType(type);

        constructorTypeVerifies = true;
      }
    }

    if (constructorTypeVerifies) {
      this.context.debug(`...verified the '${typeString}' type.`);
    }

    return constructorTypeVerifies;
  }

  static name = "ConstructorDeclaration";

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const { Constructor } = dom,
          node = constructorDeclarationNode,  ///
          string = context.nodeAsString(node),
          constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, context),
          constructorDeclaration = new ConstructorDeclaration(context, string, constructor);

    return constructorDeclaration;
  }
});
