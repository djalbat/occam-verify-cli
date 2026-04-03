"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateAssumption } from "../process/instantiate";

export default define(class Assumption extends Element {
  constructor(context, string, node, lineIndex, reference, statement) {
    super(context, string, node, lineIndex);

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

  matchAssumptionNode(assumptionNode) {
    const node = assumptionNode, ///
          nodeMatches = this.matchNode(node),
          assumptionNodeMatches = nodeMatches; ///

    return assumptionNodeMatches;
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

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' assumption's reference...`);

    const reference = this.reference.validate(context);

    if (reference !== null) {
      const metavariable = reference.getMetavariable(),
            metavariablePresent = context.isMetavariablePresent(metavariable, context);

      if (metavariablePresent) {
        this.reference = reference;

        referenceValidates = true;
      } else {
        const topLevelMetaAssertionsUnify = this.unifyTopLevelMetaAssertions(reference, context);

        if (topLevelMetaAssertionsUnify) {
          this.reference = reference;

          referenceValidates = true;
        }
      }
    }

    if (referenceValidates) {
      context.debug(`...validated the '${assumptionString}' assumption's reference.`);
    }

    return referenceValidates;
  }

  validateStatement(context) {
    let statementValidates = false;

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' assumption's statement...`);

    const statement = this.statement.validate(context);

    if (statement !== null) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.debug(`...validated the '${assumptionString}' assumption's statement.`);
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

  unifyTopLevelMetaAssertions(reference, context) {
    let topLevelMetaAssertionsUnify;

    const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(reference);

    topLevelMetaAssertionsUnify = topLevelMetaAssertions.some((topLevelMetaAssertion) => {
      const topLevelMetaAssertionUnifies = this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);

      if (topLevelMetaAssertionUnifies) {
        return true;
      }
    });

    return topLevelMetaAssertionsUnify;
  }

  static name = "Assumption";

  toJSON() {
    const string = this.getString(),
          lineIndex = this.getLineIndex(),
          json = {
            string,
            lineIndex
          };

    return json;
  }

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string, lineIndex } = json,
            assumptionNode = instantiateAssumption(string, context),
            node = assumptionNode,  ///
            reference = referenceFromAssumptionNode(assumptionNode, context),
            statement = statementFromAssumptionNode(assumptionNode, context),
            assumption = new Assumption(context, string, node, lineIndex, reference, statement);

      return assumption;
    }, context);
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
