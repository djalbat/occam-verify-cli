"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { instantiateReferenceSubstitution } from "../../process/instantiate";
import { referenceSubstitutionFromReferenceSubstitutionNode } from "../../utilities/element";
import { referenceSubstitutionStringFromReferenceAndMetavariable } from "../../utilities/string";

export default define(class ReferenceSubstitution extends Substitution {
  constructor(context, string, node, targetReference, replacementReference) {
    super(context, string, node);

    this.targetReference = targetReference;
    this.replacementReference = replacementReference;
  }

  getTargetReference() {
    return this.targetReference;
  }

  getReplacementReference() {
    return this.replacementReference;
  }

  getTargetNode() {
    const targetReferenceNode = this.targetReference.getNode(),
          tergetNode = targetReferenceNode; ///

    return tergetNode;
  }

  getReplacementNode() {
    const replacementReferenceNode = this.replacementReference.getNode(),
          replacementNode = replacementReferenceNode; ///

    return replacementNode;
  }

  isTrivial() {
    const targetReferenceEqualToReplacementReference = this.targetReference.isEqualTo(this.replacementReference),
          trivial = targetReferenceEqualToReplacementReference; ///

    return trivial;
  }

  compareReference(reference, context) {
    const referenceEqualToReplacementReference = this.replacementReference.isEqualTo(reference),
          comparedToReference = referenceEqualToReplacementReference; ///

    return comparedToReference;
  }

  compareParameter(parameter) {
    const targetReferenceComparesToParameter = this.targetReference.compareParameter(parameter),
          comparesToParameter = targetReferenceComparesToParameter;  ///

    return comparesToParameter;
  }

  validate(generalContext, specificContext) {
    let validates = false;

    const context = this.getContext(),
          referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference substitution...`);

    specificContext = context;  ///

    const targetReferenceValidates = this.validateTargetReference(generalContext, specificContext);

    if (targetReferenceValidates) {
      const replacementReferenceValidates = this.validateReplacementReference(generalContext, specificContext);

      if (replacementReferenceValidates) {
        validates = true;
      }
    }

    if (validates) {
      const substititoin = this;  ///

      context.addSubstitution(substititoin);

      context.debug(`...validated the '${referenceSubstitutionString}' reference substitution.`);
    }

    return validates;
  }

  validateTargetReference(generalContext, specificContext) {
    let targetReferenceValidates = false;

    const context = generalContext, ///
          targetReferenceString = this.targetReference.getString(),
          referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference subtitution's '${targetReferenceString}' target reference...`);

    const targetReferenceSingular = this.targetReference.isSingular();

    if (targetReferenceSingular) {
      targetReferenceValidates = this.targetReference.validate(context);
    } else {
      context.debug(`The '${referenceSubstitutionString}' reference subtitution's '${targetReferenceString}' target reference is not singular.`);
    }

    if (targetReferenceValidates) {
      context.debug(`...validated the '${referenceSubstitutionString}' reference subtitution's '${targetReferenceString}' target reference...`);
    }

    return targetReferenceValidates;
  }

  validateReplacementReference(generalContext, specificContext) {
    let replacementReferenceValidates;

    const context = specificContext,  ///
          replacementReferenceString = this.replacementReference.getString(),
          referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference subtitution's '${replacementReferenceString}' replacement reference...`);

    replacementReferenceValidates = this.replacementReference.validate(context);

    if (replacementReferenceValidates) {
      context.debug(`...validated the '${referenceSubstitutionString}' reference subtitution's '${replacementReferenceString}' replacement reference...`);
    }

    return replacementReferenceValidates;
  }

  static name = "ReferenceSubstitution";

  static fromReferenceAndMetavariable(reference, metavariable, context) {
    return literally((context) => {
      const referenceSubstitutionString = referenceSubstitutionStringFromReferenceAndMetavariable(reference, metavariable),
            string = referenceSubstitutionString,  ///
            referenceSubstitutionNode = instantiateReferenceSubstitution(string, context),
            referenceSubstitution = referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context);

      return referenceSubstitution;
    }, context);
  }
});
