"use strict";

import ontology from "../../ontology";
import Declaration from "../declaration";

import { define } from "../../ontology";
import { verifyTerm } from "../../process/verify";

export default define(class ConstructorDeclaration extends Declaration {
  constructor(context, node, string, constructor) {
    super(context, node, string);

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
      const constructorVerifies = this.verifyConstructor();

      if (constructorVerifies) {
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
    let constructorVerifies;

    const node = this.getNode(),
          context = this.getContext(),
          constructorString = this.constructor.getString();

    context.trace(`Verifying the '${constructorString}' constructor...`, node);

    const term = this.constructor.getTerm(),
          termNode = term.getNode();

    constructorVerifies = verifyTerm(termNode, context);

    if (constructorVerifies) {
      context.debug(`...verified the '${constructorString}' constructor.`, node);
    }

    return constructorVerifies;
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
            provisionalMatches = type.matchProvisional(provisional);

      if (!provisionalMatches) {
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

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    const { Constructor } = ontology,
          node = constructorDeclarationNode,  ///
          string = context.nodeAsString(node),
          constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, context),
          constructorDeclaration = new ConstructorDeclaration(context, node, string, constructor);

    return constructorDeclaration;
  }
});
