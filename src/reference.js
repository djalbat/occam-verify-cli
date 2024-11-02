"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
import { referenceMetaType } from "./metaType";
import { unifyLabelWithReference } from "./utilities/unification";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "./utilities/json";

const referenceNodeQuery = nodeQuery("/proofStep|lastProofStep/reference");

class Reference {
  constructor(metavariable) {
    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getString() { return this.metavariable.getString(); }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  unifyLabel(label, substitutions, generalContext, specificContext) {
    let labelUnified;

    const reference = this,
          labelString = label.getString(),
          referenceString = reference.getString();

    specificContext.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    const labelUnifiedWithReference = unifyLabelWithReference(label, reference, substitutions, generalContext, specificContext);

    labelUnified = labelUnifiedWithReference; ///

    if (labelUnified) {
      specificContext.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnified;
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

  static fromProofStepNode(proofStepNode, fileContext) {
    let reference = null;

    const referenceNode = referenceNodeQuery(proofStepNode);

    if (reference !== null) {
      const { Metavariable } = shim,
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext, ///
            metavariable = Metavariable.fromReferenceNode(referenceNode, context);

      reference = new Reference(metavariable);
    }

    return reference;
  }
}

Object.assign(shim, {
  Reference
});

export default Reference;
