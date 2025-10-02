"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class MetavariableDeclaration {
  constructor(context, node, string, metavariable) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.metavariable = metavariable;
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

  getMetavariable() {
    return this.metavariable;
  }

  verify() {
    let verifies;

    const metavariableDeclarationString = this.string; ///

    this.context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`, this.node);

    const metavariableVerifies = this.verifyMetavariable(this.metavariable);

    if (metavariableVerifies) {
      this.context.addMetavariable(this.metavariable);

      verifies = true;
    }

    if (verifies) {
      this.context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`, this.node);
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

      this.context.trace(`Verifying the '${typeString}' type...`, this.node);

      const typePresent = this.context.isTypePresentByTypeName(typeName);

      if (!typePresent) {
        this.context.debug(`The '${typeString}' type is not present.`, this.node);
      } else {
        typeVerifies = true;
      }

      if (typeVerifies) {
        this.context.debug(`...verified the '${typeString}' type.`, this.node);
      }
    }

    return typeVerifies;
  }

  verifyMetavariable(metavariable) {
    let metavariableVerifies = false;

    const metavariableString = metavariable.getString();

    this.context.trace(`Verifying the '${metavariableString}' metavariable when declared...`, this.node);

    const metavariableNode = metavariable.getNode(), ///
          termNode = metavariableNode.getTermNode();

    if (termNode !== null) {
      this.context.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`, this.node);
    } else {
      const metavariableName = metavariable.getName(),
            metavariablePresent = this.context.isMetavariablePresentByMetavariableName(metavariableName);

      if (metavariablePresent) {
        this.context.debug(`The '${metavariableName}' metavariable is already present.`, this.node);
      } else {
        const type = metavariable.getType(),
              typeVerifies = this.verifyType(type);

        metavariableVerifies = typeVerifies;  ///
      }
    }

    if (metavariableVerifies) {
      this.context.debug(`...verified the '${metavariableString}' metavariable when declared.`, this.node);
    }

    return metavariableVerifies;
  }

  static name = "MetavariableDeclaration";

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    const { Metavariable } = dom,
          node = metavariableDeclarationNode, ///
          metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          string = stringFromMetavariableAndMetaType(metavariable, metaType),
          metavariableDeclaration = new MetavariableDeclaration(context, node, string, metavariable);

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
