"use strict";

import { define } from "../elements";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default define(class Label {
  constructor(context, string, node, metavariable) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.metavariable = metavariable;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getMetavariable() {
    return this.metavariable;
  }

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
          metavariableEqualToMetavariable = this.isMetavariableEqualToMetavariable(metavariable),
          referenceMatches = metavariableEqualToMetavariable; ///

    return referenceMatches;
  }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

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
});
