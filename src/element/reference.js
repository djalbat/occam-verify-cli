"use strict";

import Element from "../element";
import elements from "../elements";

import { define } from "../elements";
import { referenceMetaTypeFromNothing } from "../metaTypes";
import { unifyMetavariableIntrinsically } from "../process/unify";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default define(class Reference extends Element {
  constructor(context, string, node, metavariable) {
    super(context, string, node);

    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getName() { return this.metavariable.getName(); }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  compareMetavariableName(metavariableName) { return this.metavariable.compareMetavariableName(metavariableName); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchNode(metavariableNode); }

  verify(context) {
    let verifies = false;

    const referenceString = this.getString(); ///

    context.trace(`Verifying the '${referenceString}' reference...`);

    if (!verifies) {
      const metavariableValidates = this.validateMetavariable(context);

      verifies = metavariableValidates; ///
    }

    if (!verifies) {
      const reference = this, ///
            labelPresent = context.isLabelPresentByReference(reference);

      verifies = labelPresent;  ///
    }

    if (verifies) {
      const reference = this; ///

      context.addReference(reference);

      context.debug(`...verified the '${referenceString}' reference.`);
    }

    return verifies;
  }

  validateMetavariable(context) {
    let metavariableValidates = false;

    const referenceMetaType = referenceMetaTypeFromNothing(),
          metaType = referenceMetaType, ///
          metavariableValidatesGivenMetaType = this.metavariable.validateGivenMetaType(metaType, context);

    if (metavariableValidatesGivenMetaType) {
      metavariableValidates = true;
    }

    return metavariableValidates;
  }

  unifyLabel(label, substitutions, context) {
    let labelUnifies;

    const specificContext = context; ///

    context = label.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    const reference = this, ///
          labelString = label.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    const labelMetavariable = label.getMetavariable(),
          generalMetavariable = this.metavariable,  ///
          specificMetavariable = labelMetavariable, ///
          metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

    labelUnifies = metavariableUnifiesIntrinsically; ///

    if (labelUnifies) {
      context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnifies;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnifies;

    const reference = this, ///
          metavariableString = metavariable.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);

    const { Substitutions } = elements,
          substitutions = Substitutions.fromNothing(),
          generalContext = context, ///
          specificContext = context,  ///
          generalMetavariable = this.metavariable,  ///
          specificMetavariable = metavariable, ///
          metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

    metavariableUnifies = metavariableUnifiesIntrinsically; ///

    if (metavariableUnifies) {
      context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
    }

    return metavariableUnifies;
  }

  unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnifies;

    const reference = this, ///
          referenceString = reference.getString(),
          metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${referenceString}' reference...`);

    const { Substitutions } = elements,
          label = metaLemmaMetatheorem.getLabel(),
          substitutions = Substitutions.fromNothing(),
          labelUnifies = this.unifyLabel(label, substitutions, context);

    metaLemmaMetatheoremUnifies = labelUnifies;  ///

    if (metaLemmaMetatheoremUnifies) {
      context.trace(`...unified the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${referenceString}' reference.`);
    }

    return metaLemmaMetatheoremUnifies;
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.metavariable),
          metavariable = metavariableJSON,  ///
          json = {
            metavariable
          };

    return json;
  }

  static name = "Reference";

  static fromJSON(json, context) {
    const metavariable = metavariableFromJSON(json, context),
          string = metavariable.getString(),
          node = metavariable.getNode(),
          reference = new Reference(context, string, node, metavariable);

    return reference;
  }
});
