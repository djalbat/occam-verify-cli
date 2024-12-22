"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { referenceMetaType } from "../dom/metaType";
import { unifyMetavariableIntrinsically } from "../utilities/unification";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

const proofStepReferenceNodeQuery = nodeQuery("/proofStep/reference"),
      procedureCallReferenceNodeQuery = nodeQuery("/procedureCall/reference"),
      declarationMetavariableNodeQuery = nodeQuery("/declaration/metavariable");

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

  matchMetavariable(metavariable) {
    const matches = this.metavariable.match(metavariable),
          metavariableMatches = matches;  ///

    return metavariableMatches;
  }

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

  verify(context) {
    let verified = false;

    const referenceString = this.getString(); ///

    context.trace(`Verifying the '${referenceString}' reference...`);

    if (!verified) {
      const metavariableVerified = this.verifyMetavariable(context);

      verified = metavariableVerified; ///
    }

    if (!verified) {
      const reference = this, ///
            labelPresent = context.isLabelPresentByReference(reference);

      verified = labelPresent;  ///
    }

    if (verified) {
      context.debug(`...verified the '${referenceString}' reference.`);
    }

    return verified;
  }

  verifyMetavariable(context) {
    let metavariableVerified;

    const metaType = referenceMetaType, ///
          metavariableVerifiedGivenMetaType = this.metavariable.verifyGivenMetaType(metaType, context);

    metavariableVerified = metavariableVerifiedGivenMetaType; ///

    return metavariableVerified;
  }

  unifyLabel(label, substitutions, context) {
    let labelUnified;

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
          metavariableUnifiedIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

    labelUnified = metavariableUnifiedIntrinsically; ///

    if (labelUnified) {
      context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnified;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnified;

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
          metavariableUnifiedIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

    metavariableUnified = metavariableUnifiedIntrinsically; ///

    if (metavariableUnified) {
      context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
    }

    return metavariableUnified;
  }

  unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnified;

    const reference = this, ///
          referenceString = reference.getString(),
          metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${referenceString}' reference...`);

    const label = metaLemmaMetatheorem.getLabel(),
          substitutions = Substitutions.fromNothing(),
          labelUnified = this.unifyLabel(label, substitutions, context);

    metaLemmaMetatheoremUnified = labelUnified;  ///

    if (metaLemmaMetatheoremUnified) {
      context.trace(`...unified the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${referenceString}' reference.`);
    }

    return metaLemmaMetatheoremUnified;
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

  static fromReferenceNode(referenceNode, fileContext) {
    const { Metavariable } = dom,
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          metavariable = Metavariable.fromReferenceNode(referenceNode, context),
          reference = new Reference(metavariable);

    return reference;
  }

  static fromProofStepNode(proofStepNode, fileContext) {
    let reference = null;

    const proofStepReferenceNode = proofStepReferenceNodeQuery(proofStepNode);

    if (proofStepReferenceNode !== null) {
      const { Metavariable } = dom,
            referenceNode = proofStepReferenceNode, ///
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext, ///
            metavariable = Metavariable.fromReferenceNode(referenceNode, context);

      reference = new Reference(metavariable);
    }

    return reference;
  }

  static fromDeclarationNode(declarationNode, fileContext) {
    const { Metavariable } = dom,
          declarationMetavariableNode = declarationMetavariableNodeQuery(declarationNode),
          metavariableNode = declarationMetavariableNode, ///
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
          reference = new Reference(metavariable);

    return reference;
  }

  static fromProcedureCallNode(procedureCallNode, fileContext) {
    let reference = null;

    const procedureCallReferenceNode = procedureCallReferenceNodeQuery(procedureCallNode);

    if (procedureCallReferenceNode !== null) {
      const { Metavariable } = dom,
            referenceNode = procedureCallReferenceNode, ///
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext, ///
            metavariable = Metavariable.fromReferenceNode(referenceNode, context);

      reference = new Reference(metavariable);
    }

    return reference;
  }
});
