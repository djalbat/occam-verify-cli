"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class MetavariableDeclaration extends Declaration {
  constructor(context, string, node, metavariable) {
    super(context, string, node);

    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  verifyType(type) {
    let typeVerifies;

    const context = this.getContext();

    if (type === null) {
      typeVerifies = true;
    } else {
      const typeString = type.getString();

      context.trace(`Verifying the '${typeString}' type...`);

      const nominalTypeName = type.getNominalTypeName(),
            typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

      if (!typePresent) {
        context.debug(`The '${typeString}' type is not present.`);
      } else {
        typeVerifies = true;
      }

      if (typeVerifies) {
        context.debug(`...verified the '${typeString}' type.`);
      }
    }

    return typeVerifies;
  }

  verifyMetavariable(metavariable) {
    let metavariableVerifies = false;

    const context = this.getContext(),
          metavariableString = metavariable.getString();

    context.trace(`Verifying the '${metavariableString}' metavariable...`);

    const metavariableNode = metavariable.getNode(), ///
          termNode = metavariableNode.getTermNode();

    if (termNode !== null) {
      context.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`);
    } else {
      const metavariableName = metavariable.getName(),
            metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

      if (metavariablePresent) {
        context.debug(`The '${metavariableName}' metavariable is already present.`);
      } else {
        const type = metavariable.getType(),
              typeVerifies = this.verifyType(type);

        metavariableVerifies = typeVerifies;  ///
      }
    }

    if (metavariableVerifies) {
      context.debug(`...verified the '${metavariableString}' metavariable.`);
    }

    return metavariableVerifies;
  }

  async verify() {
    let verifies;

    const context = this.getContext(),
          metavariableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);

    const metavariableVerifies = this.verifyMetavariable(this.metavariable);

    if (metavariableVerifies) {
      context.addMetavariable(this.metavariable);

      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
    }

    return verifies;
  }

  static name = "MetavariableDeclaration";
});
