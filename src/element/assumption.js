"use strict";

import Element from "../element";
import elements from "../elements";

import { define } from "../elements";
import { unifyStatementIntrinsically } from "../process/unify";
import { referenceFromJSON, referenceToReferenceJSON } from "../utilities/json";

export default define(class Assumption extends Element {
  constructor(context, string, node, statement, reference) {
    super(context, string, node);

    this.statement = statement;
    this.reference = reference;
  }

  getStatement() {
    return this.statement;
  }

  getReference() {
    return this.reference;
  }

  getMetavariable() { return this.reference.getMetavariable(); }

  isSimple() {
    const simple = (this.statement === null);

    return simple;
  }

  compareSubstitution(substitution, context) {
    let comparesToSubstituion = false;

    const assumptionString = this.getString(),  ///
          substitutionString = substitution.getString();

    context.trace(`Comparing the '${assumptionString}' assumption to the '${substitutionString}' substitution...`);

    const simple = this.isSimple();

    if (simple) {
      const metavariable = this.reference.getMetavariable(),
            judgement = context.findJudgementByMetavariable(metavariable);

      if (judgement !== null) {
        const assumption = judgement.getDeclaration(),
              assumptionComaresToSubstitution = assumption.compareSubstitution(substitution, context);

        if (assumptionComaresToSubstitution) {
          comparesToSubstituion = true;
        }
      }
    } else {
      const statement = substitution.getStatement(),
            metavariable = substitution.getMetavariable(),
            statementEqualToStatement = this.statement.isEqualTo(statement),
            referenceMetavariableEqualToMetavariable = this.reference.isMetavariableEqualToMetavariable(metavariable);

      if (statementEqualToStatement && referenceMetavariableEqualToMetavariable) {
        comparesToSubstituion = true;
      }
    }

    if (comparesToSubstituion) {
      context.debug(`...compared the '${substitutionString}' assumption to the '${assumptionString}' substitution.`);
    }

    return comparesToSubstituion;
  }

  validate(assignments, stated, context) {
    let validates = false;

    const assumptionString = this.getString();  ///

    context.trace(`Validating the '${assumptionString}' assumption...`);

    const simple = this.isSimple();

    if (simple) {
      const referenceValidatesAsMetavariable = this.validateReferenceAsMetavariable(assignments, stated, context);

      if (referenceValidatesAsMetavariable) {
        validates = true;
      }
    } else {
      const referenceValidates = this.reference.validate(context);

      if (referenceValidates) {
        const statementValidates = this.validateStatement(assignments, stated, context);

        if (statementValidates) {
          let validatesWhenStated = false,
              validatesWhenDerived = false;

          if (stated) {
            validatesWhenStated = this.validateWhenStated(assignments, context);
          } else {
            validatesWhenDerived = this.validateWhenDerived(context);
          }

          if (validatesWhenStated || validatesWhenDerived) {
            validates = true;
          }
        }
      }

      if (validates) {
        context.debug(`...validated the '${assumptionString}' assumption.`);
      }
    }

    return validates;
  }

  validateStatement(assignments, stated, context) {
    let statementValidates = true;  ///

    if (this.statement !== null) {
      const assumptionString = this.getString(),
            statementString = this.statement.getString();

      context.trace(`Validating the '${assumptionString}' assumption's '${statementString}' statement...`);

      stated = true;  ///

      assignments = null; ///

      statementValidates = this.statement.validate(assignments, stated, context);

      if (statementValidates) {
        context.debug(`...validated the '${assumptionString}' assumption's '${statementString}' statement.`);
      }
    }

    return statementValidates;
  }

  validateReferenceAsMetavariable(assignments, stated, context) {
    let referenceValidatesAsMetavariable = false;

    const referenceString = this.reference.getString(),
          assumptionString = this.getString(); ///

    context.trace(`Validating the '${assumptionString}' assumption's '${referenceString}' reference as s metavariable...`);

    const metavariable = this.reference.getMetavariable(),
          metavariableName = metavariable.getName(),
          metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

    if (metavariablePresent) {
      referenceValidatesAsMetavariable = true;
    }

    if (referenceValidatesAsMetavariable) {
      context.debug(`...validated the '${assumptionString}' assumption's '${referenceString}' reference as a metavariable.`);
    }

    return referenceValidatesAsMetavariable;
  }

  validateWhenStated(assignments, context) {
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

    const simple = this.isSimple();

    if (simple) {
      statementUnifies = false;
    } else {
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

    const { Substitutions } = elements,
          specificContext = context,  ///
          labelSubstitutions = Substitutions.fromNothing(context),
          label = topLevelMetaAssertion.getLabel(),
          substitutions = labelSubstitutions, ///
          labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);

    if (labelUnifies) {
      const statementSubstitutions = Substitutions.fromNothing(context),
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
