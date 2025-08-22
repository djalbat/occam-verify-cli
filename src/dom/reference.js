"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { referenceMetaType } from "../dom/metaType";
import { unifyMetavariableIntrinsically } from "../utilities/unification";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default domAssigned(class Reference {
  constructor(metavariable) {
    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getName() { return this.metavariable.getName(); }

  getString() { return this.metavariable.getString(); }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  isMetavariableEqualTo(metavariable) {
    const equalTo = this.metavariable.isEqualTo(metavariable),
          metavariableEqualTo = equalTo;  ///

    return metavariableEqualTo;
  }

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

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

    const reference = this, ///
          labelString = label.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    const fileContext = label.getFileContext(),
          generalContext = context, ///
          specificContext = fileContext,  ///
          labelMetavariable = label.getMetavariable(),
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

    const fileContext = context.getFileContext(),
          substitutions = Substitutions.fromNothing(),
          generalContext = context, ///
          specificContext = fileContext,  ///
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

    const label = metaLemmaMetatheorem.getLabel(),
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

  static fromJSON(json, fileContext) {
    const metavariable = metavariableFromJSON(json, fileContext),
          reference = new Reference(metavariable);

    return reference;
  }

  static fromStepNode(stepNode, fileContext) {
    let reference = null;

    const referenceNode = stepNode.getReferenceNode();

    if (referenceNode !== null) {
      reference = referenceFromReferenceNode(referenceNode, fileContext);
    }

    return reference;
  }

  static fromReferenceNode(referenceNode, fileContext) {
    const reference = referenceFromReferenceNode(referenceNode, fileContext);

    return reference;
  }

  static fromDeclarationNode(declarationNode, fileContext) {
    const metavariableNode = declarationNode.getMetavariableNode(),
          reference = referenceFromMetavariableNode(metavariableNode, fileContext);

    return reference;
  }

  static fromMetavariableNode(metavariableNode, fileContext) {
    const reference = referenceFromMetavariableNode(metavariableNode, fileContext);

    return reference;
  }

  static fromProcedureCallNode(procedureCallNode, fileContext) {
    let reference = null;

    const referenceNode = procedureCallNode.getReferenceNode();

    if (referenceNode !== null) {
      reference = referenceFromReferenceNode(referenceNode, fileContext);
    }

    return reference;
  }

  static fromSatisfiesAssertionNode(satisfiesAssertionNode, fileContext) {
    const metavariableNode = satisfiesAssertionNode.getMetavariableNode(),
          reference = referenceFromMetavariableNode(metavariableNode, fileContext);

    return reference;
  }
});

function referenceFromReferenceNode(referenceNode, fileContext) {
  const { Reference, Metavariable } = dom,
        localContext = LocalContext.fromFileContext(fileContext),
        context = localContext, ///
        metavariable = Metavariable.fromReferenceNode(referenceNode, context),
        reference = new Reference(metavariable);

  return reference;
}

function referenceFromMetavariableNode(metavariableNode, fileContext) {
  const { Reference, Metavariable } = dom,
        localContext = LocalContext.fromFileContext(fileContext),
        context = localContext, ///
        metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
        reference = new Reference(metavariable);

  return reference;
}