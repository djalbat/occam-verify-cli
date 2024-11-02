"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { metavariableFromJSON, metavariableToMetavariableJSON } from "./utilities/json";

class Label {
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

  verifyWhenDeclared(fileContext, nameOnly) {
    let verifiedWhenDeclared = false;

    const labelString = this.getString(); ///

    fileContext.trace(`Verifying the '${labelString}' label when declared...`);

    let labelPresent;

    if (nameOnly) {
      const metavariableName = this.getMetavariableName();

      labelPresent = fileContext.isLabelPresentByMetavariableName(metavariableName);
    } else {
      const metavariableNode = this.getMetavariableNode();

      labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);
    }

    if (labelPresent) {
      fileContext.debug(`The '${labelString}' label is already present.`);
    } else {
      verifiedWhenDeclared = true;
    }

    if (verifiedWhenDeclared) {
      fileContext.debug(`...verified the '${labelString}' label when declared.`);
    }

    return verifiedWhenDeclared;
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
          localContext = LocalContext.fromFileContext(fileContext),
          metavariable = Metavariable.fromLabelNode(labelNode, localContext),
          label = new Label(metavariable);

    return label;
  }
}

Object.assign(shim, {
  Label
});

export default Label;
