"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { instantiateReferenceSubstitution } from "../../process/instantiate";
import { referenceSubstitutionFromReferenceSubstitutionNode } from "../../utilities/element";
import { referenceSubstitutionStringFromReferenceAndMetavariable } from "../../utilities/string";
import { join, ablate, descend, attempt, unserialise, instantiate } from "../../utilities/context";

export default define(class ReferenceSubstitution extends Substitution {
  constructor(context, string, node, lineIndex, generalContext, targetReference, replacementReference) {
    super(context, string, node, lineIndex, generalContext);

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

  getMetavariableNode() { return this.targetReference.getMetavariableNode(); }

  isTrivial() {
    const targetReferenceEqualToReplacementReference = this.targetReference.isEqualTo(this.replacementReference),
          trivial = targetReferenceEqualToReplacementReference; ///

    return trivial;
  }

  matchMetavariableNode(metavariableNode) { return this.targetReference.matchMetavariableNode(metavariableNode); }

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

  compareSubstitution(substitution) {
    let substitutionCompares = false;

    const substitutionReferenceSubstitution = (substitution instanceof ReferenceSubstitution);

    if (substitutionReferenceSubstitution) {
      const substitutionNode = substitution.getNode(),
            substitutionNodeMatches = this.matchNode(substitutionNode);

      if (substitutionNodeMatches) {
        substitutionCompares = true;
      }
    }

    return substitutionCompares;
  }

  validate(generalContext, specificContext) {
    let referenceSubstitution = null;

    const context = specificContext,  ///
          referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference substitution...`);

    let validates = false;

    const validSubstitution = this.findValidSubstitution(context);

    if (validSubstitution) {
      referenceSubstitution = validSubstitution;  ///

      context.debug(`...the '${referenceSubstitutionString}' reference substitution is already valid.`);
    } else {
      const context = this.getContext();

      join((generalContext) => {
        join((specificContext) => {
          attempt((generalContext, specificContext) => {
            const targetReferenceValidates = this.validateTargetReference(generalContext, specificContext);

            if (targetReferenceValidates) {
              const replacementReferenceValidates = this.validateReplacementReference(generalContext, specificContext);

              if (replacementReferenceValidates) {
                validates = true;
              }
            }

            if (validates) {
              this.setContexts(generalContext, specificContext);
            }
          }, generalContext, specificContext);
        }, specificContext, context);
      }, generalContext, context);
    }

    if (validates) {
      const substitution = this;  ///

      referenceSubstitution = substitution;  ///

      context.addSubstitution(substitution);

      context.debug(`...validated the '${referenceSubstitutionString}' reference substitution.`);
    }

    return referenceSubstitution;
  }

  validateTargetReference(generalContext, specificContext) {
    let targetReferenceValidates = false;

    const context = generalContext, ///
          referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference substitution's target reference...`);

    descend((context) => {
      const targetReference = this.targetReference.validate(context);

      if (targetReference !== null) {
        targetReferenceValidates = true;
      }
    }, context);

    if (targetReferenceValidates) {
      context.debug(`...validated the '${referenceSubstitutionString}' reference substitution's target reference...`);
    }

    return targetReferenceValidates;
  }

  validateReplacementReference(generalContext, specificContext) {
    let replacementReferenceValidates = false;

    const context = specificContext,  ///
          referenceSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${referenceSubstitutionString}' reference substitution's replacement reference...`);

    descend((context) => {
      const replacementReference = this.replacementReference.validate(context);

      if (replacementReference !== null) {
        replacementReferenceValidates = true;
      }
    }, context);

    if (replacementReferenceValidates) {
      context.debug(`...validated the '${referenceSubstitutionString}' reference substitution's replacement reference.`);
    }

    return replacementReferenceValidates;
  }

  static name = "ReferenceSubstitution";

  static fromJSON(json, context) {
    let referenceSubstitutionn = null;

    const { name } = json;

    if (this.name === name) {
      unserialise((json, generalContext, specificContext) => {
        const context = specificContext;  ///

        instantiate((context) => {
          const { string, lineIndex } = json,
                referenceSubstitutionNode = instantiateReferenceSubstitution(string, context),
                node = referenceSubstitutionNode, ///
                targetReference = targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context),
                replacementReference = replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context);

          referenceSubstitutionn = new ReferenceSubstitution(context, string, node, lineIndex, generalContext, targetReference, replacementReference);
        }, context);
      }, json, context);
    }

    return referenceSubstitutionn;
  }

  static fromReferenceAndMetavariable(reference, metavariable, context) {
    let referenceSubstitution;

    ablate((context) => {
      instantiate((context) => {
        const referenceSubstitutionString = referenceSubstitutionStringFromReferenceAndMetavariable(reference, metavariable),
              string = referenceSubstitutionString,  ///
              referenceSubstitutionNode = instantiateReferenceSubstitution(string, context);

        referenceSubstitution = referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context);
      }, context);
    }, context);

    return referenceSubstitution;
  }

  static fromAssumptionAndMetaLevelAssumption(assumption, metaLevelAssumption, context) {
    let referenceSubstitution;

    ablate((context) => {
      instantiate((context) => {
        const reference = metaLevelAssumption.getReference(),
              metavariable = assumption.getMetavariable(),
              referenceSubstitutionString = referenceSubstitutionStringFromReferenceAndMetavariable(reference, metavariable),
              string = referenceSubstitutionString,  ///
              referenceSubstitutionNode = instantiateReferenceSubstitution(string, context);

        referenceSubstitution = referenceSubstitutionFromReferenceSubstitutionNode(referenceSubstitutionNode, context);
      }, context);
    }, context);

    return referenceSubstitution;
  }
});

function targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
  const targetReferenceNode = referenceSubstitutionNode.getTargetReferenceNode(),
        targetReference = context.findReferenceByReferenceNode(targetReferenceNode);

  return targetReference;
}

function replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
  const replacementReferenceNode = referenceSubstitutionNode.getReplacementReferenceNode(),
        replacementReference = context.findReferenceByReferenceNode(replacementReferenceNode);

  return replacementReference;
}
