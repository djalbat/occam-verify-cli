"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class MetavariableDeclaration extends Declaration {
  constructor(context, string, node, lineIndex, metaType, metavariable) {
    super(context, string, node, lineIndex);

    this.metaType = metaType;
    this.metavariable = metavariable;
  }

  getMetaType() {
    return this.metaType;
  }

  getMetavariable() {
    return this.metavariable;
  }

  async verify(context) {
    let verifies;

    await this.break(context);

    const metavariableDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);

    const metavariableVerifies = this.verifyMetavariable(context);

    if (metavariableVerifies) {
      const metaTypeVerifies = this.verifyMetaType(context);

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

  verifyMetaType(context) {
    let metaTypeVerifies = true;

    const metaTypeString = this.metaType.getString(),
          metaTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${metaTypeDeclarationString}' metavariable declaration's '${metaTypeString}' metaType...`);

    this.metavariable.setMetaType(this.metaType);

    if (metaTypeVerifies) {
      context.debug(`...verified the '${metaTypeDeclarationString}' metavariable declaration's '${metaTypeString}' metaType.`);
    }

    return metaTypeVerifies;
  }

  verifyMetavariable(context) {
    let metavariableVerifies = false;

    const metavariableString = this.metavariable.getString(),
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
