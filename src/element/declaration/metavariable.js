"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class MetavariableDeclaration extends Declaration {
  constructor(context, string, node, metavariable, metaType) {
    super(context, string, node);

    this.metavariable = metavariable;
    this.metaType = metaType;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getMetaType() {
    return this.metaType;
  }

  verifyMetavariable() {
    let metavariableVerifies = false;

    const context = this.getContext(),
          metavariableString = this.metavariable.getString(),
          metavariableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable...`);

    const metavariableNode = this.metavariable.getNode(), ///
          termNode = metavariableNode.getTermNode();

    if (termNode !== null) {
      context.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`);
    } else {
      const metavariableName = this.metavariable.getName(),
            metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

      if (metavariablePresent) {
        context.debug(`The '${metavariableName}' metavariable is already present.`);
      } else {
        const metavariableTypeVerified = this.verifyMetavariableType();

        if (metavariableTypeVerified) {
          metavariableVerifies = true;
        }
      }
    }

    if (metavariableVerifies) {
      context.debug(`...verified the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable.`);
    }

    return metavariableVerifies;
  }

  verifyMetavariableType() {
    let metavariableTypeVerified = false;

    const context = this.getContext(),
          metavariableType = this.metavariable.getType();

    if (metavariableType === null) {
      metavariableTypeVerified = true;
    } else {
      const metavariableTypeString = metavariableType.getString(),
            metavariableDeclarationString = this.getString(); ///

      context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration's '${metavariableTypeString}' metavariable type...`);

      const nominalTypeName = metavariableType.getNominalTypeName(),
        typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

      if (!typePresent) {
        context.debug(`The '${metavariableTypeString}' type is not present.`);
      } else {
        metavariableTypeVerified = true;
      }

      if (metavariableTypeVerified) {
        context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration's '${metavariableTypeString}' metavariable type.`);
      }
    }

    return metavariableTypeVerified;
  }

  async verify() {
    let verifies;

    const context = this.getContext(),
          metavariableDeclarationString = this.getString(); ///

    await this.break(context);

    context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);

    const metavariableVerifies = this.verifyMetavariable();

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
