"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import intrinsicLevelUnifier from "./unifier/intrinsicLevel";

import { nodeQuery } from "./utilities/query";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "./utilities/json";

const metavariableNodeQuery = nodeQuery("//label/metavariable");

class Label {
  constructor(metavariable) {
    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getString() { return this.metavariable.getString(); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  unifyReference(reference, localContextA, localContextB) {
    const { Substitutions } = shim,
          metavariableNode = this.metavariable.getNode(),
          referenceMetavariable = reference.getMetavariable(),
          referenceMetavariableNode = referenceMetavariable.getNode(),
          metavariableNodeA = referenceMetavariableNode,  ///
          metavariableNodeB = metavariableNode, ///
          substitutions = Substitutions.fromNothing(),
          metavariableUnified = intrinsicLevelUnifier.unify(metavariableNodeA, metavariableNodeB, substitutions, localContextA, localContextB);

    return metavariableUnified;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedAtTopLevel = false;

    const labelString = this.getString(); ///

    fileContext.trace(`Verifying the '${labelString}' label when declared...`);

    const metavariableNode = this.metavariable.getNode(),
          labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);

    if (labelPresent) {
      fileContext.debug(`The '${labelString}' label is already present.`);
    } else {
      verifiedAtTopLevel = true;
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${labelString}' label when declared.`);
    }

    return verifiedAtTopLevel;
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.metavariable),
          metavariable = metavariableJSON,  ///
          json = {
            metavariable
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const metavariable = metavariableFromJSON(json, fileContext),
          label = new Label(metavariable);

    return label;
  }

  static fromLabelNode(labelNode, fileContext) {
    const { Metavariable } = shim,
          metavariableNode = metavariableNodeQuery(labelNode),
          localContext = LocalContext.fromFileContext(fileContext),
          metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext),
          label = new Label(metavariable);

    return label;
  }
}

Object.assign(shim, {
  Label
});

export default Label;
