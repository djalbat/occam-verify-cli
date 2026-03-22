"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { unifyAssumption } from "../process/unify";
import { instantiateAssumption } from "../process/instantiate";
import { assumptionFromAssumptionNode } from "../utilities/element";
import { join, descend, reconcile, instantiate } from "../utilities/context";
import { assumptionStringFromStatementAndReference } from "../utilities/string";

export default define(class Assumption extends Element {
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

  getAssumptionNode() {
    const node = this.getNode(),
          assumptionNode = node;  ///

    return assumptionNode;
  }

  getMetavariable() { return this.reference.getMetavariable(); }

  getTopLevelMetaAssertion() { return this.reference.getTopLevelMetaAssertion(); }

  isEqualTo(assumption) {
    const assumptionNode = assumption.getNode(),
          assumptionNodeMatches = this.matchAssumptionNode(assumptionNode),
          equalTo = assumptionNodeMatches;  ///

    return equalTo;
  }

  isMetaLevel() {
    const metaLevel = (this.context !== null);

    return metaLevel;
  }

  matchAssumptionNode(assumptionNode) {
    const node = assumptionNode, ///
          nodeMatches = this.matchNode(node),
          assumptionNodeMatches = nodeMatches; ///

    return assumptionNodeMatches;
  }

  findValidAssumption(context, metaLevel = false) {
    const assumptionNode = this.getAssumptionNode(),
          assumption = context.findAssumptionByAssumptionNode(assumptionNode, metaLevel),
          validAssumption = assumption;  ///

    return validAssumption;
  }

  validate(context) {
    let assumption = null;

    const metaLevel = this.isMetaLevel();

    if (metaLevel) {
      context = this.getContext();
    }

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' assumption...`);

    const validAssumption = this.findValidAssumption(context, metaLevel);

    if (validAssumption) {
      assumption = validAssumption; ///

      context.debug(`...the '${assumptionString}' assumption is already valid.`);
    } else {
      let validates = false;

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
        assumption = this;  ///

        context.addAssumption(assumption, metaLevel);

        context.debug(`...validated the '${assumptionString}' assumption.`);
      }
    }

    return assumption;
  }

  validateReference(context) {
    let referenceValidates = false;

    const referenceString = this.reference.getString(),
          assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' assumption's '${referenceString}' reference...`);

    const reference = this.reference.validate();

    if (reference !== null) {
      const metavariable = this.reference.getMetavariable(),
            metavariablePresent = context.isMetavariablePresent(metavariable, context);

      if (metavariablePresent) {
        referenceValidates = true;
      } else {
        const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference),
              topLevelMetaAssertionsCompare = topLevelMetaAssertions.some((topLevelMetaAssertion) => {
                const topLevelMetaAssertionUnifies = this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);

                if (topLevelMetaAssertionUnifies) {
                  return true;
                }
              });

        if (topLevelMetaAssertionsCompare) {
          referenceValidates = true;
        }
      }

      if (referenceValidates) {
        context.addReference(reference);
      }
    }

    if (referenceValidates) {
      context.debug(`...validated the '${assumptionString}' assumption's '${referenceString}' reference.`);
    }

    return referenceValidates;
  }

  validateStatement(context) {
    let statementValidates = false;

    const assumptionString = this.getString(),  ///
          statementString = this.statement.getString();

    context.trace(`Validating the '${assumptionString}' assumption's '${statementString}' statement...`);

    descend((context) => {
      const statement = this.statement.validate(context);

      if (statement !== null) {
        statementValidates = true;
      }
    }, context);

    if (statementValidates) {
      context.debug(`...validated the '${assumptionString}' assumption's '${statementString}' statement.`);
    }

    return statementValidates;
  }

  validateWhenStated(context) {
    let validatesWhenStated;

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' stated assumption...`);

    validatesWhenStated = true

    if (validatesWhenStated) {
      context.debug(`...validated the '${assumptionString}' stated assumption.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived = false;

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' derived assumption...`);
    const topLevelMetaAssertion = this.getTopLevelMetaAssertion();

    if (topLevelMetaAssertion !== null) {
      validatesWhenDerived = true;
    } else {
      context.debug(`The '${assumptionString}' asumption did not unify a top level meta-assumption.`);
    }

    if (validatesWhenDerived) {
      context.debug(`...validated the '${assumptionString}' derived assumption.`);
    }

    return validatesWhenDerived;
  }

  unifyAssumption(assumption, generalContext, specificContext) {
    let assumptionUnifies;

    const context = specificContext,  ///
          generalAssumption = this, ///
          specificAssumption = assumption,  ///
          generalAssumptionString = generalAssumption.getString(),
          specificAssumptionString = specificAssumption.getString();

    context.trace(`Unifying the '${specificAssumptionString}' assumption with the '${generalAssumptionString}' assumption...`);

    const assumptionContext = assumption.getContext();

    specificContext = assumptionContext;  ///

    join((specificContext) => {
      reconcile((specificContext) => {
        assumptionUnifies = unifyAssumption(generalAssumption, specificAssumption, generalContext, specificContext);

        if (assumptionUnifies) {
          specificContext.commit(context);
        }

      }, specificContext);
    }, specificContext, context);

    if (assumptionUnifies) {
      context.debug(`...unified the '${specificAssumptionString}' assumption with the '${generalAssumptionString}' assumption.`);
    }

    return assumptionUnifies;
  }

  unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
    let topLevelMetaAssertionUnifies;

    const assumptionString = this.getString(),  ///
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);

    topLevelMetaAssertionUnifies = this.reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);

    if (topLevelMetaAssertionUnifies) {
      topLevelMetaAssertionUnifies = this.statement.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
    }

    if (topLevelMetaAssertionUnifies) {
      context.trace(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
    }

    return topLevelMetaAssertionUnifies;
  }

  toJSON() {
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "Assumption";

  static fromJSON(json, context) {
    const assumption = instantiate((context) => {
      const { string } = json,
            assumptionNode = instantiateAssumption(string, context),
            node = assumptionNode,  ///
            reference = referenceFromAssumptionNode(assumptionNode, context),
            statement = statementFromAssumptionNode(assumptionNode, context);

      context = null; ///

      const assumption = new Assumption(context, string, node, reference, statement);

      return assumption;
    }, context);

    return assumption;
  }

  static fromStatementAndReference(statement, reference, context) {
    let assumption;

    instantiate((context) => {
      const assumptionString = assumptionStringFromStatementAndReference(statement, reference),
            string = assumptionString,  ///
            assumptionNode = instantiateAssumption(string, context);

      assumption = assumptionFromAssumptionNode(assumptionNode, context);

      assumption.setContext(context);
    }, context);

    return assumption;
  }
});

function referenceFromAssumptionNode(assumptionNode, context) {
  const metavariableNode = assumptionNode.getMetavariableNode(context),
        reference = context.findReferenceByMetavariableNode(metavariableNode);

  return reference;
}

function statementFromAssumptionNode(assumptionNode, context) {
  const statementNode = assumptionNode.getStatementNode(),
        statement = context.findStatementByStatementNode(statementNode);

  return statement;
}
