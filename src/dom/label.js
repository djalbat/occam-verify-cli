"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { domAssigned } from "../dom";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default domAssigned(class Label {
  constructor(metavariable, fileContext) {
    this.metavariable = metavariable;
    this.fileContext = fileContext;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getFileContext() {
    return this.fileContext;
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

  verify(nameOnly) {
    let verified = false;

    const labelString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${labelString}' label when declared...`);

    let labelPresent;

    if (nameOnly) {
      const metavariableName = this.getMetavariableName();

      labelPresent = this.fileContext.isLabelPresentByMetavariableName(metavariableName);
    } else {
      const metavariableNode = this.getMetavariableNode();

      labelPresent = this.fileContext.isLabelPresentByMetavariableNode(metavariableNode);
    }

    if (labelPresent) {
      this.fileContext.debug(`The '${labelString}' label is already present.`);
    } else {
      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${labelString}' label when declared.`);
    }

    return verified;
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.metavariable),
          metavariable = metavariableJSON,  ///
          json = {
            metavariable
          };

    return json;
  }

  static name = "Label";

  static fromJSON(json, fileContext) {
    const metavariable = metavariableFromJSON(json, fileContext),
          label = new Label(metavariable, fileContext);

    return label;
  }

  static fromLabelNode(labelNode, fileContext) {
    const { Metavariable } = dom,
          localContext = LocalContext.fromFileContext(fileContext),
          metavariable = Metavariable.fromLabelNode(labelNode, localContext),
          label = new Label(metavariable, fileContext);

    return label;
  }
});
