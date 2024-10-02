"use strict";

import Metavariable from "./metavariable";

import { nodeQuery } from "./utilities/query";

const metavariableNodeQuery = nodeQuery("//reference/metavariable");

export default class Reference {
  constructor(metavariable) {
    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getString() { return this.metavariable.getString(); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  verify(fileContext) {
    let verified;

    const referenceString = this.getString(); ///

    fileContext.trace(`Verifying the '${referenceString}' reference...`);

    verified = true;

    if (verified) {
      fileContext.debug(`...verified the '${referenceString}' reference.`);
    }

    return verified;
  }

  toJSON(fileContext) {
    const metavariableJSON = this.metavariable.toJSON(fileContext),
          metavariable = metavariableJSON,  ///
          string = this.string,
          json = {
            string,
            metavariable
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json;

    let { metavariable } = json;

    json = metavariable;  ///

    metavariable = Metavariable.fromJSON(json, fileContext);

    const reference = new Reference(string, metavariable);

    return reference;
  }

  static fromReferenceNode(referenceNode, fileContext) {
    const metavariableNode = metavariableNodeQuery(referenceNode),
          metavariable = Metavariable.fromMetavariableNode(metavariableNode, fileContext),
          reference = new Reference(metavariable);

    return reference;
  }
}
