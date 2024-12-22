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

  matchReference(reference) {
    const metavariable = reference.getMetavariable(),
          metavariableMatches = this.matchMetavariable(metavariable),
          referenceMatches = metavariableMatches; ///

    return referenceMatches;
  }

  matchMetavariable(metavariable) {
    const matches = this.metavariable.match(metavariable),
          metavariableMatches = matches;  ///

    return metavariableMatches;
  }

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

  verify(nameOnly) {
    let verified = false;

    const labelString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${labelString}' label...`);

    let labelPresent;

    if (nameOnly) {
      const metavariableName = this.getMetavariableName();

      labelPresent = this.fileContext.isLabelPresentByMetavariableName(metavariableName);
    } else {
      const metavariable = this.getMetavariable();

      labelPresent = this.fileContext.isLabelPresentByMetavariable(metavariable);
    }

    if (labelPresent) {
      this.fileContext.debug(`The '${labelString}' label is already present.`);
    } else {
      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${labelString}' label.`);
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
