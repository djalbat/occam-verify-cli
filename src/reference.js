"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
import { referenceMetaType } from "./metaType";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "./utilities/json";
import local from "./context/local";

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
    let verified = false;

    const referenceString = this.getString(); ///

    localContext.trace(`Verifying the '${referenceString}' reference...`);

    if (!verified) {
      const metaType = referenceMetaType, ///
            metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, localContext);

      verified = metavariableVerifiedGivenMetaType; ///
    }

    if (!verified) {
      const reference = this, ///
            lemmaPresent = localContext.isLemmaPresentByReference(reference),
            theoremPresent = localContext.isTheoremPresentByReference(reference);

      verified = (lemmaPresent || theoremPresent);
    }

    if (verified) {
      localContext.debug(`...verified the '${referenceString}' reference.`);
    }

    return verified;
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.metavariable),
          metavariable = metavariableJSON,  ///
          string = this.string,
          json = {
            string,
            metavariable
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const metavariable = metavariableFromJSON(json, fileContext),
          reference = new Reference(string, metavariable);

    return reference;
  }

  static fromReferenceNode(referenceNode, fileContext) {
    const { Metavariable } = shim,
          metavariableNode = metavariableNodeQuery(referenceNode),
          localContext = LocalContext.fromFileContext(fileContext),
          metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext),
          reference = new Reference(metavariable);

    return reference;
  }
}
