"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { domAssigned } from "../dom";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default domAssigned(class Label {
  constructor(context, metavariable) {
    this.context = context;
    this.metavariable = metavariable;
  }

  getContext() {
    return this.context;
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

  matchReference(reference) {
    const metavariable = reference.getMetavariable(),
          metavariableEqualToMetavariable = this.isMetavariableEqualTo(metavariable),
          referenceMatches = metavariableEqualToMetavariable; ///

    return referenceMatches;
  }

  isMetavariableEqualTo(metavariable) {
    const equalTo = this.metavariable.isEqualTo(metavariable),
          metavariableEqualTo = equalTo;  ///

    return metavariableEqualTo;
  }

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

  verify(nameOnly) {
    let verifies = false;

    const labelString = this.getString(); ///

    this.context.trace(`Verifying the '${labelString}' label...`);

    let labelPresent;

    if (nameOnly) {
      const metavariableName = this.getMetavariableName();

      labelPresent = this.context.isLabelPresentByMetavariableName(metavariableName);
    } else {
      const metavariable = this.getMetavariable();

      labelPresent = this.context.isLabelPresentByMetavariable(metavariable);
    }

    if (labelPresent) {
      this.context.debug(`The '${labelString}' label is already present.`);
    } else {
      verifies = true;
    }

    if (verifies) {
      this.context.debug(`...verified the '${labelString}' label.`);
    }

    return verifies;
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

  static fromJSON(json, context) {
    const metavariable = metavariableFromJSON(json, context),
          label = new Label(context, metavariable);

    return label;
  }

  static fromLabelNode(labelNode, context) {
    const { Metavariable } = dom,
          localContext = LocalContext.fromFileContext(context),
          metavariable = Metavariable.fromLabelNode(labelNode, localContext),
          label = new Label(context, metavariable);

    return label;
  }
});
