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

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel;

    const referenceString = this.getString(); ///

    fileContext.trace(`Verifying the '${referenceString}' reference at top level...`);

    verifiedAtTopLevel = true;

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${referenceString}' reference at top level.`);
    }

    return verifiedAtTopLevel;
  }

  toJSON() {
    const metavariableJSON = this.metavariable.toJSON(),
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
