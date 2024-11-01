"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

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

  getTokens() { return this.metavariable.getTokens(); }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

  verifyWhenDeclared(fileContext) {
    let verifiedWhenDeclared = false;

    const labelString = this.getString(); ///

    fileContext.trace(`Verifying the '${labelString}' label when declared...`);

    const labelPresent = fileContext.isLabelPresentByMetavariable(this.metavariable);

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
