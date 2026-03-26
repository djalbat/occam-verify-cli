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
      const metaTypeVerifies = this.verifyMetaType();

      if (metaTypeVerifies) {
        const declaredMetavariable = this.metavariable; ///

        context.addDeclaredMetavariable(declaredMetavariable);

        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
    }

    return verifies;
  }

  verifyMetaType() {
    let metaTypeVerifies = true;

    const context = this.getContext(),
          metaTypeString = this.metaType.getString(),
          metaTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metaTypeDeclarationString}' metavariable declaration's '${metaTypeString}' metaType...`);

    this.metavariable.setMetaType(this.metaType);

    if (metaTypeVerifies) {
      context.debug(`...verified the '${metaTypeDeclarationString}' metavariable declaration's '${metaTypeString}' metaType.`);
    }

    return metaTypeVerifies;
  }

  verifyMetavariable() {
    let metavariableVerifies = false;

    const context = this.getContext(),
          metavariableString = this.metavariable.getString(),
          metavariableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration's '${metavariableString}' metavariable...`);

    const metavariableName = this.metavariable.getName(),
          declaredMetavariablePresent = context.isDeclaredMetavariablePresentByMetavariableName(metavariableName);

    if (!declaredMetavariablePresent) {
      metavariableVerifies = this.metavariable.verify(context);
    } else {
      context.debug(`The '${metavariableName}' declared metavariable is already present.`);
    }

    if (metavariableVerifies) {
      context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration's '${metavariableString}' metavariable.`);
    }

    return metavariableVerifies;
  }

  static name = "MetavariableDeclaration";
});
