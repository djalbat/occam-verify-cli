"use strict";

import Metavariable from "./metavariable";

import { nodeQuery } from "./utilities/query";
import { referenceMetaType } from "./metaType";

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

  verify(localContext) {
    let verified;

    const referenceString = this.getString(); ///

    localContext.trace(`Verifying the '${referenceString}' reference...`);

    const metaType = referenceMetaType, ///
          metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, localContext);

    verified = metavariableVerifiedGivenMetaType; ///

    if (verified) {
      localContext.debug(`...verified the '${referenceString}' reference.`);
    }

    return verified;
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
