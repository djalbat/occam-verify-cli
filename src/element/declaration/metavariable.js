"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class MetavariableDeclaration extends Declaration {
  constructor(context, string, node, metaType, metavariable) {
    super(context, string, node);

    this.metaType = metaType;
    this.metavariable = metavariable;
  }

  getMetaType() {
    return this.metaType;
  }

  getMetavariable() {
    return this.metavariable;
  }

  async verify() {
    let verifies;

    const context = this.getContext();

    await this.break(context);

    const metavariableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);

    const metavariableVerifies = this.verifyMetavariable();

    if (metavariableVerifies) {
      const metavariableTypeVerified = this.verifyMetavariableType();

      if (metavariableTypeVerified) {
        this.metavariable.setMetaType(this.metaType);

        context.addMetavariable(this.metavariable);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
    }

    return verifies;
  }

  verifyMetavariable() {
    let metavariableVerifies = false;

    const context = this.getContext(),
          metavariableString = this.metavariable.getString(),
          metavariableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable...`);

    const metavariableNode = this.metavariable.getNode(), ///
          termNode = metavariableNode.getTermNode();

    if (termNode === null) {
      const metavariableName = this.metavariable.getName(),
            metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

      if (!metavariablePresent) {
        metavariableVerifies = true;
      } else {
        context.debug(`The '${metavariableName}' metavariable is already present.`);
      }
    } else {
      context.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`);
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
            type = context.findTypeByNominalTypeName(nominalTypeName);

      if (type === null) {
        this.metavariable.setType(type);

        metavariableTypeVerified = true;
      } else {
        context.debug(`The '${metavariableTypeString}' type is not present.`);
      }

      if (metavariableTypeVerified) {
        context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration's '${metavariableTypeString}' metavariable type.`);
      }
    }

    return metavariableTypeVerified;
  }

  static name = "MetavariableDeclaration";
});
