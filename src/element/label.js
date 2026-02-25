"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { literally } from "../utilities/context";
import { instantiateLabel } from "../process/instantiate";
import { metavariableToMetavariableJSON } from "../utilities/json";
import { metavariableFromMetavariableNode } from "../utilities/element";

export default define(class Label extends Element {
  constructor(context, string, node, metavariable) {
    super(context, string, node);

    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getLabelNode() {
    const node = this.getNode(),
          labelNode = node; ///

    return labelNode;
  }

  getMetavariableName() { return this.metavariable.getName(); }

  getMetavariableNode() { return this.metavariable.getNode(); }

  compareMetavariable(metavariable) { return this.metavariable.compare(metavariable); }

  compareMetavariableName(metavariableName) { return this.metavariable.compareMetavariableName(metavariableName); }

  compareReference(reference) {
    const metavariable = reference.getMetavariable(),
          metavariableComparesToMetavariable = this.compareMetavariable(metavariable),
          comparesToReference = metavariableComparesToMetavariable; ///

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
          string = this.getString(),
          json = {
            string,
            metavariable
          };

    return json;
  }

  static name = "Label";

  static fromJSON(json, context) {
    const label = literally((context) => {
      const { string } = json,
            labelNode = instantiateLabel(string, context),
            metavariable = metavariableFromLabelNode(labelNode, context),
            node = labelNode, ///
            label = new Label(context, string, node, metavariable);

      return label;
    }, context);

    return label;
  }
});

function metavariableFromLabelNode(labelNode, context) {
  const metavariableNode = labelNode.getMetavariableNode(),
        metavariable = metavariableFromMetavariableNode(metavariableNode, context);

  return metavariable;
}
