"use strict";

import dom from "../../dom";

import constructorVerifier from "../../verifier/constructor";

import { objectType } from "../type";
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
    let verified;

    const constructorDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const constructorVerified = this.verifyConstructor();

    if (constructorVerified) {
      const typeVerified = this.verifyType();

      if (typeVerified) {
        let type;

        type = this.constructor.getType();

        const typeName = type.getName();

        type = this.fileContext.findTypeByTypeName(typeName);

        const typeProvisional = type.isProvisional(),
              constructorProvisional = this.constructor.isProvisional();

        if (typeProvisional !== constructorProvisional) {
          const typeString = type.getString(),
                constructorString = this.constructor.getString();

          if (typeProvisional) {
            this.fileContext.debug(`The '${typeString}' type is provisional whilst the '${constructorString}' constructor's type is not.`);
          }

          if (constructorProvisional) {
            this.fileContext.debug(`The '${typeString}' type is not provisional whilst the '${constructorString}' constructor's type is.`);
          }
        } else {
          this.constructor.setType(type);

          this.fileContext.addConstructor(this.constructor);

          verified = true;
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verified;
  }

  verifyType() {
    let typeVerified;

    const type = this.constructor.getType();

    if (type === objectType) {
      typeVerified = true;
    } else {
      const typeName = type.getName(),
            typeString = type.getString();

      this.fileContext.trace(`Verifying the '${typeString}' type...`);

      const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

      if (!typePresent) {
        this.fileContext.debug(`The '${typeString}' type is not present.`);
      } else {
        typeVerified = true;
      }

      if (typeVerified) {
        this.fileContext.debug(`...verified the '${typeString}' type.`);
      }
    }

    return typeVerified;
  }

  verifyConstructor() {
    let constructorVerified;

    const constructorString = this.constructor.getString();

    this.fileContext.trace(`Verifying the '${constructorString}' constructor...`);

    const term = this.constructor.getTerm(),
          termNode = term.getNode();

    constructorVerified = constructorVerifier.verifyTerm(termNode, this.fileContext);

    if (constructorVerified) {
      this.fileContext.debug(`...verified the '${constructorString}' constructor.`);
    }

    return constructorVerified;
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
