"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { statementToStatementJSON } from "../../utilities/json";
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

  getReferenceSubstitutionNode() {
    const node = this.getNode(),
          referenceSubstitution = node; ///

    return referenceSubstitution;
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

  getMetavariableName() { return this.targetReference.getMetavariableName(); }

  compareMetavariableName(metavariableName) { return this.targetReference.compareMetavariableName(metavariableName); }

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
    let referenceSubstitution = null;

    const context = this.getContext();

    specificContext = context;  ///

    const referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference substitution...`);

    const validSubstitution = this.findValidSubstiution(context);

    if (validSubstitution) {
      referenceSubstitution = validSubstitution;  ///

      context.debug(`...the '${referenceSubstitutionString}' reference substitution is already valid.`);
    } else {
      let validates = false;

      const targetReferenceValidates = this.validateTargetReference(generalContext, specificContext);

      if (targetReferenceValidates) {
        const replacementReferenceValidates = this.validateReplacementReference(generalContext, specificContext);

        if (replacementReferenceValidates) {
          validates = true;
        }
      }

      if (validates) {
        const subsitution = this;  ///

        referenceSubstitution = subsitution;  ///

        context.addSubstitution(subsitution);

        context.debug(`...validated the '${referenceSubstitutionString}' reference substitution.`);
      }
    }

    return referenceSubstitution;
  }

  validateTargetReference(generalContext, specificContext) {
    let targetReferenceValidates = false;

    const context = generalContext, ///
          targetReferenceString = this.targetReference.getString(),
          referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference subtitution's '${targetReferenceString}' target reference...`);

    const targetReferenceSingular = this.targetReference.isSingular();

    if (targetReferenceSingular) {
      const targetReference = this.targetReference.validate(context);

      if (targetReference !== null) {
        targetReferenceValidates = true;
      }
    } else {
      context.debug(`The '${referenceSubstitutionString}' reference subtitution's '${targetReferenceString}' target reference is not singular.`);
    }

    if (targetReferenceValidates) {
      context.debug(`...validated the '${referenceSubstitutionString}' reference subtitution's '${targetReferenceString}' target reference...`);
    }

    return targetReferenceValidates;
  }

  validateReplacementReference(generalContext, specificContext) {
    let replacementReferenceValidates = false;

    const context = specificContext,  ///
          replacementReferenceString = this.replacementReference.getString(),
          referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference subtitution's '${replacementReferenceString}' replacement reference...`);

    const replacementReference = this.replacementReference.validate(context);

    if (replacementReference !== null) {
      replacementReferenceValidates = true;
    }

    if (replacementReferenceValidates) {
      context.debug(`...validated the '${referenceSubstitutionString}' reference subtitution's '${replacementReferenceString}' replacement reference.`);
    }

    return replacementReferenceValidates;
  }

  toJSON() {
    const { name } = this.constructor,
          targetStatementJSON = statementToStatementJSON(this.targetStatement),
          replacementStatementJSON = statementToStatementJSON(this.replacementStatement),
          targetStatement = targetStatementJSON,  ///
          replacementStatement = replacementStatementJSON,  ///
          string = this.getString(),
          json = {
            name,
            string,
            targetStatement,
            replacementStatement
          };

    return json;
  }
  static fromJSON(json, context) {
    let referenceSubstitutionn = null;

    const { name } = json;

    if (this.name === name) {
      debugger
    }

    return referenceSubstitutionn;
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
