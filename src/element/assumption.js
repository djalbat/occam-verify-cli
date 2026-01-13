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

    const assumptionString = this.string,  ///
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

  verify(assignments, stated, context) {
    let verifies = false;

    const assumptionString = this.string;  ///

    context.trace(`Verifying the '${assumptionString}' assumption...`);

    const simple = this.isSimple();

    if (simple) {
      const referenceVerifiesAsMetavariable = this.verifyReferenceAsMetavariable(assignments, stated, context);

      verifies = referenceVerifiesAsMetavariable; ///
    } else {
      const referenceVerified = this.verifyReference(assignments, stated, context);

      if (referenceVerified) {
        const statementValidates = this.validateStatement(assignments, stated, context);

        if (statementValidates) {
          let verifiesWhenStated = false,
              verifiesWhenDerived = false;

          if (stated) {
            verifiesWhenStated = this.verifyWhenStated(assignments, context);
          } else {
            verifiesWhenDerived = this.verifyWhenDerived(context);
          }

          if (verifiesWhenStated || verifiesWhenDerived) {
            verifies = true;
          }
        }
      }

      if (verifies) {
        context.debug(`...verified the '${assumptionString}' assumption.`);
      }
    }

    return verifies;
  }

  verifyReference(assignments, stated, context) {
    let referenceVerified;

    const referenceString = this.reference.getString(),
          assumptionString = this.string; ///

    context.trace(`Verifying the '${assumptionString}' assumption's '${referenceString}' reference...`);

    referenceVerified = this.reference.verify(context);

    if (referenceVerified) {
      context.debug(`...verified the '${assumptionString}' assumption's '${referenceString}' reference.`);
    }

    return referenceVerified;
  }

  validateStatement(assignments, stated, context) {
    let statementValidates;

    if (this.statement === null) {
      statementValidates = true;
    } else {
      const statementString = this.statement.getString();

      context.trace(`Validating the '${statementString}' statement...`);

      stated = true;  ///

      assignments = null; ///

      statementValidates = this.statement.validate(assignments, stated, context);

      if (statementValidates) {
        context.debug(`...validated the '${statementString}' statement.`);
      }
    }

    return statementValidates;
  }

  verifyReferenceAsMetavariable(assignments, stated, context) {
    let referenceVerifiesAsMetavariable = false;

    const referenceString = this.reference.getString(),
          assumptionString = this.string; ///

    context.trace(`Verifying the '${assumptionString}' assumption's '${referenceString}' reference as s metavariable...`);

    const metavariable = this.reference.getMetavariable(),
          metavariableName = metavariable.getName(),
          metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

    if (metavariablePresent) {
      referenceVerifiesAsMetavariable = true;
    }

    if (referenceVerifiesAsMetavariable) {
      context.debug(`...verified the '${assumptionString}' assumption's '${referenceString}' reference as a metavariable.`);
    }

    return referenceVerifiesAsMetavariable;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated;

    const assumptionString = this.string;  ///

    context.trace(`Verifying the '${assumptionString}' stated assumption...`);

    const metavariablePresent = context.isMetavariablePresentByReference(this.reference);

    if (metavariablePresent) {
      verifiesWhenStated = true;
    } else {
      const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference),
            topLevelMetaAssertionsUnify = topLevelMetaAssertions.every((topLevelMetaAssertion) => {
              const topLevelMetaAssertionUnifies = this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);

              if (topLevelMetaAssertionUnifies) {
                return true;
              }
            });

      verifiesWhenStated = topLevelMetaAssertionsUnify; ///
    }

    if (verifiesWhenStated) {
      context.debug(`...verified the '${assumptionString}' stated assumption.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const assumptionString = this.string;  ///

    context.trace(`Verifying the '${assumptionString}' derived assumption...`);

    const topLevelMetaAssertionPresent = context.isTopLevelMetaAssertionPresentByReference(this.reference);

    verifiesWhenDerived = topLevelMetaAssertionPresent; ///

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${assumptionString}' derived assumption.`);
    }

    return verifiesWhenDerived;
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
          assumptionString = this.string;  //;/

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

    const assumptionString = this.string,  ///
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);

    const generalContext = context; ///

    context = topLevelMetaAssertion.getContext();  ///

    const { Substitutions } = elements,
          specificContext = context,  ///
          labelSubstitutions = Substitutions.fromNothing(),
          label = topLevelMetaAssertion.getLabel(),
          substitutions = labelSubstitutions, ///
          labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);

    if (labelUnifies) {
      const statementSubstitutions = Substitutions.fromNothing(),
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
