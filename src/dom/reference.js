"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { referenceMetaType } from "../dom/metaType";
import { unifyLabelWithReference } from "../utilities/unification";
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

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  unifyLabel(label, substitutions, generalContext, specificContext) {
    let labelUnified;

    const reference = this, ///
          labelString = label.getString(),
          referenceString = reference.getString();

    specificContext.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    const labelUnifiedWithReference = unifyLabelWithReference(label, reference, substitutions, generalContext, specificContext);

    labelUnified = labelUnifiedWithReference; ///

    if (labelUnified) {
      specificContext.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnified;
  }

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
            rulePresent = context.isRulePresentByReference(reference),
            metaLemmasMetaTheoremsPresent = context.areMetaLemmasMetaTheoremsPresentByReference(reference),
            axiomLemmaTheoremConjecturePresent = context.isAxiomLemmaTheoremConjecturePresentByReference(reference);

      verified = (rulePresent || metaLemmasMetaTheoremsPresent || axiomLemmaTheoremConjecturePresent);
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
