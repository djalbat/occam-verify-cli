"use strict";

import elements from "../elements";

import { define } from "../elements";
import { referenceMetaType } from ".//metaType";
import { unifyMetavariableIntrinsically } from "../process/unify";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default define(class Reference {
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

  getName() { return this.metavariable.getName(); }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  isEqualTo(refernece) {
    const metavariable = refernece.getMetavariable(),
          metavariableEqualToMetvariable = this.metavariable.isEqualTo(metavariable),
          equalTo = metavariableEqualToMetvariable; ///

    return equalTo;
  }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeA = metavariableNode; ///

    metavariableNode = this.metavariable.getNode();

    const metavariableNodeB = metavariableNode, ///
          matches = metavariableNodeA.match(metavariableNodeB),
          metavariableNodeMatches = matches;  ///

    return metavariableNodeMatches; ///
  }

  verify(context) {
    let verifies = false;

    const referenceString = this.getString(); ///

    context.trace(`Verifying the '${referenceString}' reference...`);

    if (!verifies) {
      const metavariableVerifies = this.verifyMetavariable(context);

      verifies = metavariableVerifies; ///
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

  verifyMetavariable(context) {
    let metavariableVerifies;

    const metaType = referenceMetaType, ///
          metavariableVerifiesGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, context);

    metavariableVerifies = metavariableVerifiesGivenMetaType; ///

    return metavariableVerifies;
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
          reference = new Reference(metavariable);

    return reference;
  }

  static fromAssumptionNode(assumptionNode, context) {
    let reference = null;

    const metavariableNode = assumptionNode.getMetavariableNode();

    if (metavariableNode !== null) {
      reference = referenceFromMetavariableNode(metavariableNode, context);
    }

    return reference;
  }

  static fromMetavariableNode(metavariableNode, context) {
    const reference = referenceFromMetavariableNode(metavariableNode, context);

    return reference;
  }

  static fromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    const metavariableNode = satisfiesAssertionNode.getMetavariableNode(),
          reference = referenceFromMetavariableNode(metavariableNode, context);

    return reference;
  }
});

function referenceFromMetavariableNode(metavariableNode, context) {
  const { Reference, Metavariable } = elements,
        metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
        reference = new Reference(metavariable);

  return reference;
}
