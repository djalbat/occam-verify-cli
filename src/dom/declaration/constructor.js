"use strict";

import dom from "../../dom";

import constructorVerifier from "../../verifier/constructor";

import { domAssigned } from "../../dom";

export default domAssigned(class ConstructorDeclaration {
  constructor(context, node, string, constructor) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.constructor = constructor;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  getConstructor() {
    return this.constructor;
  }

  verify() {
    let verifies;

    const constructorDeclarationString = this.string; ///

    this.context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`, this.node);

    const constructorTypeVerifies = this.verifyConstructorType();

    if (constructorTypeVerifies) {
      const constructorVerifies = this.verifyConstructor();

      if (constructorVerifies) {
        this.context.addConstructor(this.constructor);

        verifies = true;
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`, this.node);
    }

    return verifies;
  }

  verifyConstructor() {
    let constructorVerifies;

    const constructorString = this.constructor.getString();

    this.context.trace(`Verifying the '${constructorString}' constructor...`, this.node);

    const term = this.constructor.getTerm(),
          termNode = term.getNode();

    constructorVerifies = constructorVerifier.verifyTerm(termNode, this.context);

    if (constructorVerifies) {
      this.context.debug(`...verified the '${constructorString}' constructor.`, this.node);
    }

    return constructorVerifies;
  }

  verifyConstructorType() {
    let constructorTypeVerifies = false;

    let type;

    type = this.constructor.getType();

    const typeName = type.getName(),
          typeString = type.getString();

    this.context.trace(`Verifying the '${typeString}' type...`, this.node);

    const includeSupertypes = false,
          provisional = type.isProvisional(includeSupertypes);

    type = this.context.findTypeByTypeName(typeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      this.context.debug(`The '${typeString}' type is not present.`, this.node);
    } else {
      const provisionalMatches = type.matchProvisional(provisional);

      if (!provisionalMatches) {
        provisional ?
          this.context.debug(`The '${typeString}' type is present but not provisional.`, this.node) :
            this.context.debug(`The '${typeString}' type is present but provisional.`, this.node);
      } else {
        this.constructor.setType(type);

        constructorTypeVerifies = true;
      }
    }

    if (constructorTypeVerifies) {
      this.context.debug(`...verified the '${typeString}' type.`, this.node);
    }

    return constructorTypeVerifies;
  }

  static name = "ConstructorDeclaration";

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const { Constructor } = dom,
          node = constructorDeclarationNode,  ///
          string = context.nodeAsString(node),
          constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, context),
          constructorDeclaration = new ConstructorDeclaration(context, node, string, constructor);

    return constructorDeclaration;
  }
});
