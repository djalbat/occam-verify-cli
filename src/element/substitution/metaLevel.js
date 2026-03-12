"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { instantiateMetaLevelSubstitution } from "../../process/instantiate";
import { metaLevelSubstitutionFromMetaLevelSubstitutionNode } from "../../utilities/element";
import { metaLevelSubstitutionStringFromStatementAndReference } from "../../utilities/string";
import { ephemeralContextFromJSON, ephemeralContextToEphemeralContextJSON } from "../../utilities/json";

export default define(class MetaLevelSubstitution extends Substitution {
  constructor(context, string, node, targetReference, replacementStatement) {
    super(context, string, node);

    this.targetReference = targetReference;
    this.replacementStatement = replacementStatement;
  }

  getTargetReference() {
    return this.targetReference;
  }

  getReplacementStatement() {
    return this.replacementStatement;
  }

  getMetaLevelSubstitutionNode() {
    const node = this.getNode(),
          metaLevelSubstitutionNode = node; ///

    return metaLevelSubstitutionNode;
  }

  getTargetNode() {
    const targetReferenceNode = this.targetReference.getNode(),
          tergetNode = targetReferenceNode; ///

    return tergetNode;
  }

  getReplacementNode() {
    const replacementStatementNode = this.replacementStatement.getNode(),
          replacementNode = replacementStatementNode; ///

    return replacementNode;
  }

  matchMetaLevelSubstitutionNode(metaLevelSubstitutionNode) {
    const node = metaLevelSubstitutionNode, ///
          nodeMatches = this.matchNode(node),
          metaLevelSubstitutionNodeMatches = nodeMatches; ///

    return metaLevelSubstitutionNodeMatches;
  }

  findValidMetaLevelSubstiution(context) {
    const metaLevelSubstitutionNode = this.getMetaLevelSubstitutionNode(),
          metaLevelSubstitution = context.findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode),
          validMetaLevelSubstitution = metaLevelSubstitution;  ///

    return validMetaLevelSubstitution;
  }

  validate(generalContext, specificContext) {
    let metaLevelSubstitution = null;

    const context = this.getContext();

    specificContext = context;  ///

    const metaLevelSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${metaLevelSubstitutionString}' meta-level substitution...`);

    const validMetaLevelSubstitution = this.findValidMetaLevelSubstiution(context);

    if (validMetaLevelSubstitution) {
      metaLevelSubstitution = validMetaLevelSubstitution;  ///

      context.debug(`...the '${metaLevelSubstitutionString}' meta-level substitution is already valid.`);
    } else {
      let validates = false;

      const targetReferenceValidates = this.validateTargetReference(generalContext, specificContext);

      if (targetReferenceValidates) {
        const replacementStatementValidates = this.validateReplacementStatement(generalContext, specificContext);

        if (replacementStatementValidates) {
          validates = true;
        }
      }

      if (validates) {
        metaLevelSubstitution = this; ///

        context.addMetaLevelSubstitution(metaLevelSubstitution);

        context.debug(`...validated the '${metaLevelSubstitutionString}' meta-level substitution.`);
      }
    }

    return metaLevelSubstitution;
  }

  validateTargetReference(generalContext, specificContext) {
    let targetReferenceValidates = false;

    const context = generalContext, ///
          targetReferenceString = this.targetReference.getString(),
          metaLevelSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${metaLevelSubstitutionString}' meta-level substitution's '${targetReferenceString}' target reference...`);

    const targetReference = this.targetReference.validate(context);

    if (targetReference !== null) {
      targetReferenceValidates = true;
    }

    if (targetReferenceValidates) {
      context.debug(`...validated the '${metaLevelSubstitutionString}' meta-level substitution's '${targetReferenceString}' target reference...`);
    }

    return targetReferenceValidates;
  }

  validateReplacementStatement(generalContext, specificContext) {
    let replacementStatementValidates;

    const context = specificContext,  ///
          replacementStatementString = this.replacementStatement.getString(),
          metaLevelSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${metaLevelSubstitutionString}' meta-level substitution's '${replacementStatementString}' replacement statement...`);

    const stated = true,
      replacementStatement = this.replacementStatement.validate(stated, context);

    if (replacementStatement !== null) {
      replacementStatementValidates = true;
    }

    if (replacementStatementValidates) {
      context.debug(`...validated the '${metaLevelSubstitutionString}' meta-level substitution's '${replacementStatementString}' replacement statement.`);
    }

    return replacementStatementValidates;
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

  static name = "MetaLevelSubstitution";

  static fromJSON(json, context) {
    const ephemeralContext = ephemeralContextFromJSON(json, context);

    context = ephemeralContext; ///

    const metaLevelSubstitution = literally((context) => {
      const { string } = json,
            metaLevelSubstitutionNode = instantiateMetaLevelSubstitution(string, context),
            targetReference = targetReferenceFromMetaLevelSubstitutionNode(metaLevelSubstitutionNode, context),
            replacementStatement = replacementStatementFromMetaLevelSubstitutionNode(metaLevelSubstitutionNode, context),
            node = metaLevelSubstitutionNode,
            metaLevelSubstitution = new MetaLevelSubstitution(context, string, node, targetReference, replacementStatement);

      return metaLevelSubstitution;
    }, context);

    return metaLevelSubstitution;
  }

  static fromStatementAndReference(statement, reference, context) {
    return literally((context) => {
      const metaLevelSubstitutionString = metaLevelSubstitutionStringFromStatementAndReference(statement, reference),
            string = metaLevelSubstitutionString,  ///
            metaLevelSubstitutionNode = instantiateMetaLevelSubstitution(string, context),
            metaLevelSubstitution = metaLevelSubstitutionFromMetaLevelSubstitutionNode(metaLevelSubstitutionNode, context);

      return metaLevelSubstitution;
    }, context);
  }
});

function targetReferenceFromMetaLevelSubstitutionNode(metaLevelSubstitutionNode, context) {
  const targetReferenceNode = metaLevelSubstitutionNode.getTargetReferenceNode(),
        targetReference = context.findReferenceByReferenceNode(targetReferenceNode);

  return targetReference;
}

function replacementStatementFromMetaLevelSubstitutionNode(metaLevelSubstitutionNode, context) {
  const replacementStatementNode = metaLevelSubstitutionNode.getReplacementStatementNode(),
        replacementStatement = context.findStatementByStatementNode(replacementStatementNode);

  return replacementStatement;
}
