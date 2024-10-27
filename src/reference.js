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

  verify(context) {
    let verified = false;

    const referenceString = this.getString(); ///

    context.trace(`Verifying the '${referenceString}' reference...`);

    if (!verified) {
      const metaType = referenceMetaType, ///
            metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, context);

      verified = metavariableVerifiedGivenMetaType; ///
    }

    if (!verified) {
      const reference = this, ///
            metaLemmaPresent = context.isMetaLemmaPresentByReference(reference, context),
            metatheoremPresent = context.isMetatheoremPresentByReference(reference, context);

      verified = (metaLemmaPresent || metatheoremPresent);
    }

    if (!verified) {
      const reference = this, ///
            axiomPresent = context.isAxiomPresentByReference(reference),
            lemmaPresent = context.isLemmaPresentByReference(reference),
            theoremPresent = context.isTheoremPresentByReference(reference),
            conjecturePresent = context.isConjecturePresentByReference(reference);

      verified = (axiomPresent || lemmaPresent || theoremPresent || conjecturePresent);
    }

    if (verified) {
      context.debug(`...verified the '${referenceString}' reference.`);
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
          context = localContext, ///
          metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
          reference = new Reference(metavariable);

    return reference;
  }
}
