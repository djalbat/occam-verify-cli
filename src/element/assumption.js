"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { unifyStatementIntrinsically } from "../process/unify";
import { referenceFromJSON, referenceToReferenceJSON } from "../utilities/json";

export default define(class Assumption extends Element {
  constructor(context, string, node, reference, statement) {
    super(context, string, node);

    this.statement = statement;
    this.reference = reference;
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

  matchAssumptionNode(assumptionode) {
    const assumptionodeA = assumptionode; ///

    assumptionode = this.getAssumptionNode();

    const assumptionodeB = assumptionode, ///
          assumptionodeAAMatchesAssumptionBNodeB = assumptionodeA.match(assumptionodeB),
          assumptionodeMatches = assumptionodeAAMatchesAssumptionBNodeB; ///

    return assumptionodeMatches;
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

  validate(stated, context) {
    let assumption = null;

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' assumption...`);

    const validAssumption = this.findValidAssumption(context);

    if (validAssumption) {
      assumption = validAssumption; ///

      context.debug(`...the '${assumptionString}' assumption is already valid.`);
    } else {
      let validates = false;

      const referenceValidates = this.validateReference(stated, context);

      if (referenceValidates) {
        const statementValidates = this.validateStatement(stated, context);

        if (statementValidates) {
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
        const assumption = this;  ///

        context.addAssumption(assumption);

        context.debug(`...validated the '${assumptionString}' assumption.`);
      }
    }

    return assumption;
  }

  validateReference(stated, context) {
    let referenceValidates = false;

    const assumptionString = this.getString(),  ///
          referenceString = this.reference.getString();

    context.trace(`Validating the '${assumptionString}' assumption's '${referenceString}' reference...`);

    const reference = this.reference.validate(context);

    if (reference !== null) {
      referenceValidates = true;
    }

    if (referenceValidates) {
      context.debug(`...validated the '${assumptionString}' assumption's '${referenceString}' statement.`);
    }

    return referenceValidates;
  }

  validateStatement(stated, context) {
    let statementValidates = false;

    const assumptionString = this.getString(),  ///
      statementString = this.statement.getString();

    context.trace(`Validating the '${assumptionString}' assumption's '${statementString}' statement...`);

    stated = true;  ///

    const statement = this.statement.validate(stated, context);

    if (statement !== null) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.debug(`...validated the '${assumptionString}' assumption's '${statementString}' statement.`);
    }

    return statementValidates;
  }

  validateReferenceAsMetavariable(stated, context) {
    let referenceValidatesAsMetavariable;

    const referenceString = this.reference.getString(),
          assumptionString = this.getString(); ///

    context.trace(`Validating the '${assumptionString}' assumption's '${referenceString}' reference as s metavariable...`);

    referenceValidatesAsMetavariable = this.reference.validateAsMetavariable(context);

    if (referenceValidatesAsMetavariable) {
      context.debug(`...validated the '${assumptionString}' assumption's '${referenceString}' reference as a metavariable.`);
    }

    return referenceValidatesAsMetavariable;
  }

  validateWhenStated(context) {
    let validatesWhenStated;

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' stated assumption...`);

    const metavariablePresent = context.isMetavariablePresentByReference(this.reference);

    if (metavariablePresent) {
      validatesWhenStated = true;
    } else {
      const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference),
            topLevelMetaAssertionsUnify = topLevelMetaAssertions.every((topLevelMetaAssertion) => {
              const topLevelMetaAssertionUnifies = this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);

              if (topLevelMetaAssertionUnifies) {
                return true;
              }
            });

      validatesWhenStated = topLevelMetaAssertionsUnify; ///
    }

    if (validatesWhenStated) {
      context.debug(`...validated the '${assumptionString}' stated assumption.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived;

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' derived assumption...`);

    const topLevelMetaAssertionPresent = context.isTopLevelMetaAssertionPresentByReference(this.reference);

    validatesWhenDerived = topLevelMetaAssertionPresent; ///

    if (validatesWhenDerived) {
      context.debug(`...validated the '${assumptionString}' derived assumption.`);
    }

    return validatesWhenDerived;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

    const context = generalContext,  ///
          statementString = statement.getString(),
          assumptionStatementString = this.statement.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${assumptionStatementString}' statement...`);

    const generalStatement = this.statement,
          specificStatement = statement,  ///
          statementUUnifiesIntrinsically = unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext);

    statementUnifies = statementUUnifiesIntrinsically;  ///

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${assumptionStatementString}' statement.`);
    }

    return statementUnifies;
  }

  unifyLabel(label, substitutions, generalContext, specificContext) {
    let labelUnifiesWithReference;

    const context = generalContext, ///
          labelString = label.getString(),
          assumptionString = this.getString();  //;/

    context.trace(`Unifying the '${labelString}' label with the '${assumptionString}' assumption...`);

    const labelUnifies = this.reference.unifyLabel(label, substitutions, context);

    labelUnifiesWithReference = labelUnifies; ///

    if (labelUnifiesWithReference) {
      context.debug(`...unified the '${labelString}' label with the '${assumptionString}' assumption.`);
    }

    return labelUnifiesWithReference;
  }

  unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
    let topLevelMetaAssertionUnifies = false;

    const assumptionString = this.getString(),  ///
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);

    const generalContext = context; ///

    context = topLevelMetaAssertion.getContext();  ///

    const specificContext = context,  ///
          labelSubstitutions = [],
          label = topLevelMetaAssertion.getLabel(),
          substitutions = labelSubstitutions, ///
          labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);

    if (labelUnifies) {
      const statementSubstitutions = [],
            statement = topLevelMetaAssertion.getStatement(),
            substitutions = statementSubstitutions, ///
            statementUUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

      if (statementUUnifies) {
        const labelSubstitutionsCorrelateStatementSubstitutions = labelSubstitutions.correlateSubstitutions(statementSubstitutions);

        if (labelSubstitutionsCorrelateStatementSubstitutions) {
          topLevelMetaAssertionUnifies = true; ///
        }
      }
    }

    if (topLevelMetaAssertionUnifies) {
      context = generalContext; ///

      context.trace(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
    }

    return topLevelMetaAssertionUnifies;
  }

  toJSON() {
    let json = null;

    const simple = this.isSimple();

    if (simple) {
      const reference = this, ///
            referenceJSON = referenceToReferenceJSON(reference);

      json = referenceJSON;  ///
    }

    return json;
  }

  static name = "Assumption";

  static fromJSON(json, context) {
    let assumption = null;

    if (json !== null) {
      const string = null,
            node = null,
            statement = null,
            reference = referenceFromJSON(json, context);

      assumption = new Assumption(string, node, statement, reference)
    }

    return assumption;
  }
});
