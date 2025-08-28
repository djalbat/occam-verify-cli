"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class MetavariableDeclaration {
  constructor(context, string, metavariable) {
    this.context = context;
    this.string = string;
    this.metavariable = metavariable;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getMetavariable() {
    return this.metavariable;
  }

  verify() {
    let verifies;

    const metavariableDeclarationString = this.string; ///

    this.context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);

    const metavariableVerifies = this.verifyMetavariable(this.metavariable);

    if (metavariableVerifies) {
      this.context.addMetavariable(this.metavariable);

      verifies = true;
    }

    if (verifies) {
      this.context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
    }

    return verifies;
  }

  verifyType(type) {
    let typeVerifies;

    if (type === null) {
      typeVerifies = true;
    } else {
      const typeName = type.getName(),
            typeString = type.getString();

      this.context.trace(`Verifying the '${typeString}' type...`);

      const typePresent = this.context.isTypePresentByTypeName(typeName);

      if (!typePresent) {
        this.context.debug(`The '${typeString}' type is not present.`);
      } else {
        typeVerifies = true;
      }

      if (typeVerifies) {
        this.context.debug(`...verified the '${typeString}' type.`);
      }
    }

    return typeVerifies;
  }

  verifyMetavariable(metavariable) {
    let metavariableVerifies = false;

    const metavariableString = metavariable.getString();

    this.context.trace(`Verifying the '${metavariableString}' metavariable when declared...`);

    const metavariableNode = metavariable.getNode(), ///
          termNode = metavariableNode.getTermNode();

    if (termNode !== null) {
      this.context.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`);
    } else {
      const metavariableName = metavariable.getName(),
            metavariablePresent = this.context.isMetavariablePresentByMetavariableName(metavariableName);

      if (metavariablePresent) {
        this.context.debug(`The '${metavariableName}' metavariable is already present.`);
      } else {
        const type = metavariable.getType(),
              typeVerifies = this.verifyType(type);

        metavariableVerifies = typeVerifies;  ///
      }
    }

    if (metavariableVerifies) {
      this.context.debug(`...verified the '${metavariableString}' metavariable when declared.`);
    }

    return metavariableVerifies;
  }

  static name = "MetavariableDeclaration";

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    const { Metavariable } = dom,
          metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          string = stringFromMetavariableAndMetaType(metavariable, metaType),
          metavariableDeclaration = new MetavariableDeclaration(context, string, metavariable);

    return metavariableDeclaration;
  }
});

function stringFromMetavariableAndMetaType(metavariable, metaType) {
  let string;

  const metavariableString = metavariable.getString();

  if (metaType === null) {
    string = metavariableString; ///
  } else {
    const metaTypeString = metaType.getString();

    string = `${metavariableString}:${metaTypeString}`;
  }

  return string;
}

function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
  const { MetaType } = dom,
        metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(),
        metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);

  return metaType;
}
