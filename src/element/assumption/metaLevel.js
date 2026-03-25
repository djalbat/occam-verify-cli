"use strict";

import { Element } from "occam-languages";

import { define } from "../../elements";
import { instantiateMetaLevelAssumption } from "../../process/instantiate";
import { metaLevelAssumptionFromMetaLevelAssumptionNode } from "../../utilities/element";
import { metaLevelAssumptionStringFromStatementAndReference } from "../../utilities/string";
import { ablate, attempt, descend, serialise, unserialise, instantiate } from "../../utilities/context";

export default define(class MetaLevelAssumption extends Element {
  constructor(context, string, node, reference, statement) {
    super(context, string, node);

    this.reference = reference;
    this.statement = statement;
  }

  getReference() {
    return this.reference;
  }

  getStatement() {
    return this.statement;
  }

  getMetaLevelAssumptionNode() {
    const node = this.getNode(),
          metaLevelAssumptionNode = node;  ///

    return metaLevelAssumptionNode;
  }

  getMetavariable() { return this.reference.getMetavariable(); }

  getTopLevelMetaAssertion() { return this.reference.getTopLevelMetaAssertion(); }

  isEqualTo(metaLevelAssumption) {
    const metaLevelAssumptionNode = metaLevelAssumption.getNode(),
          metaLevelAssumptionNodeMatches = this.matchMetaLevelAssumptionNode(metaLevelAssumptionNode),
          equalTo = metaLevelAssumptionNodeMatches;  ///

    return equalTo;
  }

  matchMetaLevelAssumptionNode(metaLevelAssumptionNode) {
    const node = metaLevelAssumptionNode, ///
          nodeMatches = this.matchNode(node),
          metaLevelAssumptionNodeMatches = nodeMatches; ///

    return metaLevelAssumptionNodeMatches;
  }

  findValidMetaLevelAssumption(context) {
    const metaLevelAssumptionNode = this.getMetaLevelAssumptionNode(),
          metaLevelAssumption = context.findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode),
          validMetaLevelAssumption = metaLevelAssumption;  ///

    return validMetaLevelAssumption;
  }

  validate(context) {
    let metaLevelAssumption = null;

    const metaLevelAssumptionString = this.getString();  ///

    context.trace(`Validating the '${metaLevelAssumptionString}' meta-lLevel assumption...`);

    let validates = false;

    const validMetaLevelAssumption = this.findValidMetaLevelAssumption(context);

    if (validMetaLevelAssumption) {
      metaLevelAssumption = validMetaLevelAssumption; ///

      context.debug(`...the '${metaLevelAssumptionString}' meta-level assumption is already valid.`);
    } else {
      const context = this.getContext();

      attempt((context) => {
        const statementValidates = this.validateStatement(context);

        if (statementValidates) {
          const referenceValidates = this.validateReference(context);

          if (referenceValidates) {
            const stated = context.isStated();

            let validatesWhenStated = false,
                validatesWhenDerived = false;

            if (stated) {
              validatesWhenStated = this.validateWhenStated(context);
            } else {
              validatesWhenDerived = this.validateWhenDerived(context);
            }

            if (validatesWhenStated || validatesWhenDerived) {
              validates = true;
            }
          }
        }

        if (validates) {
          context.commit(this);
        }
      }, context);
    }

    if (validates) {
      metaLevelAssumption = this;  ///

      context.addMetaLevelAssumption(metaLevelAssumption);

      context.debug(`...validated the '${metaLevelAssumptionString}' meta-level assumption.`);
    }

    return metaLevelAssumption;
  }

  validateReference(context) {
    let referenceValidates = false;

    const referenceString = this.reference.getString(),
          metaLevelAssumptionString = this.getString();  ///

    context.trace(`Validating the '${metaLevelAssumptionString}' metaLevelAssumption's '${referenceString}' reference...`);

    const reference = this.reference.validate(context);

    if (reference !== null) {
      const metavariable = this.reference.getMetavariable(),
            metavariablePresent = context.isMetavariablePresent(metavariable, context);

      if (metavariablePresent) {
        referenceValidates = true;
      }
    }

    if (referenceValidates) {
      context.debug(`...validated the '${metaLevelAssumptionString}' metaLevelAssumption's '${referenceString}' reference.`);
    }

    return referenceValidates;
  }

  validateStatement(context) {
    let statementValidates = false;

    const metaLevelAssumptionString = this.getString(),  ///
          statementString = this.statement.getString();

    context.trace(`Validating the '${metaLevelAssumptionString}' metaLevelAssumption's '${statementString}' statement...`);

    descend((context) => {
      const statement = this.statement.validate(context);

      if (statement !== null) {
        statementValidates = true;
      }
    }, context);

    if (statementValidates) {
      context.debug(`...validated the '${metaLevelAssumptionString}' metaLevelAssumption's '${statementString}' statement.`);
    }

    return statementValidates;
  }

  validateWhenStated(context) {
    let validatesWhenStated;

    const metaLevelAssumptionString = this.getString();  ///

    context.trace(`Validating the '${metaLevelAssumptionString}' stated meta-level assumption...`);

    validatesWhenStated = true

    if (validatesWhenStated) {
      context.debug(`...validated the '${metaLevelAssumptionString}' stated meta-level assumption.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived;

    const metaLevelAssumptionString = this.getString();  ///

    context.trace(`Validating the '${metaLevelAssumptionString}' derived meta-level assumption...`);

    validatesWhenDerived = true;

    if (validatesWhenDerived) {
      context.debug(`...validated the '${metaLevelAssumptionString}' derived meta-level assumption.`);
    }

    return validatesWhenDerived;
  }

  toJSON() {
    const context = this.getContext();

    return serialise((context) => {
      const string = this.getString(),
            json = {
              context,
              string
            };

      return json;
    }, context);
  }

  static name = "MetaLevelAssumption";

  static fromJSON(json, context) {
    let metaLevelAssumption;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string } = json,
              metaLevelAssumptionNode = instantiateMetaLevelAssumption(string, context),
              node = metaLevelAssumptionNode,  ///
              reference = referenceFromMetaLevelAssumptionNode(metaLevelAssumptionNode, context),
              statement = statementFromMetaLevelAssumptionNode(metaLevelAssumptionNode, context);

        metaLevelAssumption = new MetaLevelAssumption(context, string, node, reference, statement);
      }, context);
    }, json, context);

    return metaLevelAssumption;
  }

  static fromStatementAndReference(statement, reference, context) {
    let metaLevelAssumption;

    ablate((context) => {
      instantiate((context) => {
        const metaLevelAssumptionString = metaLevelAssumptionStringFromStatementAndReference(statement, reference),
              string = metaLevelAssumptionString,  ///
              metaLevelAssumptionNode = instantiateMetaLevelAssumption(string, context);

        metaLevelAssumption = metaLevelAssumptionFromMetaLevelAssumptionNode(metaLevelAssumptionNode, context);
      }, context);
    }, context);

    return metaLevelAssumption;
  }
});

function referenceFromMetaLevelAssumptionNode(metaLevelAssumptionNode, context) {
  const referenceNode = metaLevelAssumptionNode.getReferenceNode(),
        refernece = context.findReferenceByReferenceNode(referenceNode);

  return refernece;
}

function statementFromMetaLevelAssumptionNode(metaLevelAssumptionNode, context) {
  const statementNode = metaLevelAssumptionNode.getStatementNode(),
        statement = context.findStatementByStatementNode(statementNode);

  return statement;
}
