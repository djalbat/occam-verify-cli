"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class MetavariableDeclaration {
  constructor(fileContext, string, metavariable) {
    this.fileContext = fileContext;
    this.string = string;
    this.metavariable = metavariable;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  getMetavariable() {
    return this.metavariable;
  }

  verify() {
    let verified;

    const metavariableDeclarationString = this.string; ///

    this.fileContext.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);

    const metavariableVerified = this.verifyMetavariable(this.metavariable);

    if (metavariableVerified) {
      this.fileContext.addMetavariable(this.metavariable);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
    }

    return verified;
  }

  verifyType(type) {
    let typeVerified;

    if (type === null) {
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

  verifyMetavariable(metavariable) {
    let metavariableVerified = false;

    const metavariableString = metavariable.getString();

    this.fileContext.trace(`Verifying the '${metavariableString}' metavariable when declared...`);

    const metavariableNode = metavariable.getNode(), ///
          termNode = metavariableNode.getTermNode();

    if (termNode !== null) {
      this.fileContext.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`);
    } else {
      const metavariableName = metavariable.getName(),
            metavariablePresent = this.fileContext.isMetavariablePresentByMetavariableName(metavariableName);

      if (metavariablePresent) {
        this.fileContext.debug(`The '${metavariableName}' metavariable is already present.`);
      } else {
        const type = metavariable.getType(),
              typeVerified = this.verifyType(type);

        metavariableVerified = typeVerified;  ///
      }
    }

    if (metavariableVerified) {
      this.fileContext.debug(`...verified the '${metavariableString}' metavariable when declared.`);
    }

    return metavariableVerified;
  }

  static name = "MetavariableDeclaration";

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    const { Metavariable } = dom,
          metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
          metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
          string = stringFromMetavariableAndMetaType(metavariable, metaType),
          metavariableDeclaration = new MetavariableDeclaration(fileContext, string, metavariable);

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

function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
  const { MetaType } = dom,
        metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(),
        metaType = MetaType.fromMetaTypeNode(metaTypeNode, fileContext);

  return metaType;
}
