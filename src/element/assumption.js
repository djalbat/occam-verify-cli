"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { descend, instantiate } from "../utilities/context";
import { instantiateAssumption } from "../process/instantiate";

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

  matchAssumptionNode(assumptionNode) {
    const node = assumptionNode, ///
          nodeMatches = this.matchNode(node),
          assumptionNodeMatches = nodeMatches; ///

    return assumptionNodeMatches;
  }

  compareSubstitution(substitution, context) {
    let comparesToSubstituion = false;

    const assumptionString = this.getString(),  ///
          substitutionString = substitution.getString();

    context.trace(`Comparing the '${assumptionString}' assumption to the '${substitutionString}' substitution...`);

    const statement = substitution.getStatement(),
          metavariableName = substitution.getMetavariableName(),
          statementEqualToStatement = this.statement.isEqualTo(statement),
          referenceMetavariableComparesToMetavariable = this.reference.compareMetavariableName(metavariableName);

    if (statementEqualToStatement && referenceMetavariableComparesToMetavariable) {
      comparesToSubstituion = true;
    }

    if (comparesToSubstituion) {
      context.debug(`...compared the '${substitutionString}' assumption to the '${assumptionString}' substitution.`);
    }

    return comparesToSubstituion;
  }

  findValidAssumption(context) {
    const assumptionNode = this.getAssumptionNode(),
          assumption = context.findAssumptionByAssumptionNode(assumptionNode),
          validAssumption = assumption;  ///

    return validAssumption;
  }

  validate(context) {
    let assumption = null;

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' assumption...`);

    const validAssumption = this.findValidAssumption(context);

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

        context.addAssumption(assumption);

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

    const reference = this.reference.validate(context);

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
