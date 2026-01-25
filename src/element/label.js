"use strict";

import { Element, elements } from "occam-furtle";

import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

const { define } = elements;

export default define(class Label extends Element {
  constructor(context, string, node, metavariable) {
    super(context, string, node);

    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getMetavariableName() { return this.metavariable.getName(); }

  getMetavariableNode() { return this.metavariable.getNode(); }

  compareMetavariableName(metavariableName) { return this.metavariable.compareMetavariableName(metavariableName); }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  compareReference(reference) {
    const metavariable = reference.getMetavariable(),
          metavariableEqualToMetavariable = this.isMetavariableEqualToMetavariable(metavariable),
          comparesToReference = metavariableEqualToMetavariable; ///

    return comparesToReference;
  }

  verify(nameOnly) {
    let verifies = false;

    const context = this.getContext(),
          labelString = this.getString(); ///

    context.trace(`Verifying the '${labelString}' label...`);

    let labelPresent;

    if (nameOnly) {
      const metavariableName = this.getMetavariableName();

      labelPresent = context.isLabelPresentByMetavariableName(metavariableName);
    } else {
      const metavariable = this.getMetavariable();

      labelPresent = context.isLabelPresentByMetavariable(metavariable);
    }

    if (labelPresent) {
      context.debug(`The '${labelString}' label is already present.`);
    } else {
      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${labelString}' label.`);
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
          string = metavariable.getString(),
          node = metavariable.getNode(),
          label = new Label(context, string, node, metavariable);

    return label;
  }
});
