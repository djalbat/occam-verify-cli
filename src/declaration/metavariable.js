"use strict";

import MetaType from "../metaType";
import Metavariable from "../metavariable";

import { nodeQuery } from "../utilities/query";

const metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType");

export default class MetavariableDeclaration {
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

    const metavariableVerifiedAtTopLevel = this.metavariable.verifyAtTopLevel(this.fileContext);

    if (metavariableVerifiedAtTopLevel) {
      this.fileContext.addMetavariable(this.metavariable);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
    }

    return verified;
  }

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    const metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode),
          metaType = MetaType.fromMetaTypeNode(metaTypeNode, fileContext),
          metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
          string = stringFromMetavariableAndMetaType(metavariable, metaType),
          metavariableDeclaration = new MetavariableDeclaration(fileContext, string, metavariable);

    return metavariableDeclaration;
  }
}

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