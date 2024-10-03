"use strict";

import MetaType from "../metaType";
import Metavariable from "../metavariable";

import { nodeQuery } from "../utilities/query";

const metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType");

export default class MetavariableDeclaration {
  constructor(string, metavariable) {
    this.string = string;
    this.metavariable = metavariable;
  }

  getString() {
    return this.string;
  }

  getMetavariable() {
    return this.metavariable;
  }

  verify(fileContext) {
    let verified;

    const metavariableDeclarationString = this.string; ///

    fileContext.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);

    const metavariableVerified = this.metavariable.verify(fileContext);

    if (metavariableVerified) {
      fileContext.addMetavariable(this.metavariable);

      verified = true;
    }

    if (verified) {
      fileContext.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
    }

    return verified;
  }

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    const metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode),
          metaType = MetaType.fromMetaTypeNode(metaTypeNode, fileContext),
          metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
          metavariableString = metavariable.getString(),
          metaTypeString = metaType.getString(),
          string = `${metavariableString}:${metaTypeString}`,
          metavariableDeclaration = new MetavariableDeclaration(string, metavariable);

    return metavariableDeclaration;
  }
}