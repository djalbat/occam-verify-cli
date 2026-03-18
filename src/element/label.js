"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateLabel } from "../process/instantiate";
import { attempt, instantiate } from "../utilities/context";
import { metavariableFromLabelNode } from "../utilities/element";
import { ephemeralContextFromJSON, ephemeralContextToEphemeralContextJSON } from "../utilities/json";

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

  matchLabelNode(labelNode) {
    const node = labelNode, ///
          nodeMatches = this.matchNode(node),
          labelNodeMatches = nodeMatches; ///

    return labelNodeMatches;
  }

  compareMetavariable(metavariable) { return this.metavariable.compare(metavariable); }

  compareMetavariableName(metavariableName) { return this.metavariable.compareMetavariableName(metavariableName); }

  compareReference(reference) {
    const metavariable = reference.getMetavariable(),
          metavariableComparesToMetavariable = this.compareMetavariable(metavariable),
          comparesToReference = metavariableComparesToMetavariable; ///

    return comparesToReference;
  }

  verify() {
    let verifies = false;

    const context = this.getContext(),
          labelString = this.getString(); ///

    context.trace(`Verifying the '${labelString}' label...`);

    const labelNode = this.getLabelNode(),
          labelPresent = context.isLabelPresentByLabelNode(labelNode);

    if (!labelPresent) {
      const validates = this.validate();

      if (validates !== null) {
        verifies = true;
      }
    } else {
      context.debug(`The '${labelString}' label is already present.`);
    }

    if (verifies) {
      context.debug(`...verified the '${labelString}' label.`);
    }

    return verifies;
  }

  validate() {
    let validates = false;

    const context = this.getContext(),
          labelString = this.getString(); ///

    context.trace(`Validating the '${labelString}' label...`);

    attempt((context) => {
      const metavariableValidates = this.validateMetavariable(context);

      if (metavariableValidates) {
        context.commit(this);

        validates = true;
      }
    }, context);

    if (validates) {
      context.debug(`...validated the '${labelString}' label.`);
    }

    return validates;
  }

  validateMetavariable(context) {
    let metavariableValidates = false;

    const labelString = this.getString(), ///
          metavariableString = this.metavariable.getString();

    context.trace(`Validating the '${labelString}' label's '${metavariableString}' metavariable...`);

    const metavariable = this.metavariable.validate(context);

    if (metavariable !== null) {
      this.metavariable = metavariable;

      metavariableValidates = true;
    }

    if (metavariableValidates) {
      context.debug(`...validated the '${labelString}' label's '${metavariableString}' metavariable.'`);
    }

    return metavariableValidates;
  }

  toJSON() {
    let context;

    context = this.getContext();

    const ephemeralContext = context, ///
          ephemeralContextJSON = ephemeralContextToEphemeralContextJSON(ephemeralContext),
          contextJSON = ephemeralContextJSON; ///

    context = contextJSON;  ///

    const string = this.getString(),
          json = {
            context,
            string
          };

    return json;
  }

  static name = "Label";

  static fromJSON(json, context) {
    const ephemeralContext = ephemeralContextFromJSON(json, context);

    context = ephemeralContext; ///

    return instantiate((context) => {
      const { string } = json,
            labelNode = instantiateLabel(string, context),
            node = labelNode, ///
            metavariable = metavariableFromLabelNode(labelNode, context),
            label = new Label(context, string, node, metavariable);

      return label;
    }, context);
  }
});
