"use strict";

import dom from "../../dom";

import constructorVerifier from "../../verifier/constructor";

import { domAssigned } from "../../dom";

export default domAssigned(class ConstructorDeclaration {
  constructor(fileContext, string, constructor) {
    this.fileContext = fileContext;
    this.string = string;
    this.constructor = constructor;
  }

  getFileContext() {
    return this.fileContext;
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

    this.fileContext.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const constructorTypeVerifies = this.verifyConstructorType();

    if (constructorTypeVerifies) {
      const constructorVerifies = this.verifyConstructor();

      if (constructorVerifies) {
        this.fileContext.addConstructor(this.constructor);

        verifies = true;
      }
    }

    if (verifies) {
      this.fileContext.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verifies;
  }

  verifyConstructor() {
    let constructorVerifies;

    const constructorString = this.constructor.getString();

    this.fileContext.trace(`Verifying the '${constructorString}' constructor...`);

    const term = this.constructor.getTerm(),
          termNode = term.getNode();

    constructorVerifies = constructorVerifier.verifyTerm(termNode, this.fileContext);

    if (constructorVerifies) {
      this.fileContext.debug(`...verified the '${constructorString}' constructor.`);
    }

    return constructorVerifies;
  }

  verifyConstructorType() {
    let constructorTypeVerifies = false;

    let type;

    type = this.constructor.getType();

    const typeName = type.getName(),
          typeString = type.getString();

    this.fileContext.trace(`Verifying the '${typeString}' type...`);

    const includeSupertypes = false,
          provisional = type.isProvisional(includeSupertypes);

    type = this.fileContext.findTypeByTypeName(typeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      this.fileContext.debug(`The '${typeString}' type is not present.`);
    } else {
      const provisionalMatches = type.matchProvisional(provisional);

      if (!provisionalMatches) {
        provisional ?
          this.fileContext.debug(`The '${typeString}' type is present but not provisional.`) :
            this.fileContext.debug(`The '${typeString}' type is present but provisional.`);
      } else {
        this.constructor.setType(type);

        constructorTypeVerifies = true;
      }
    }

    if (constructorTypeVerifies) {
      this.fileContext.debug(`...verified the '${typeString}' type.`);
    }

    return constructorTypeVerifies;
  }

  static name = "ConstructorDeclaration";

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const { Constructor } = dom,
          node = constructorDeclarationNode,  ///
          string = fileContext.nodeAsString(node),
          constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
          constructorDeclaration = new ConstructorDeclaration(fileContext, string, constructor);

    return constructorDeclaration;
  }
});
