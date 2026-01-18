"use strict";

import elements from "../../elements";
import Substitution from "../substitution";

import { define } from "../../elements";
import { withinFragment } from "../../utilities/fragment";
import { unifySubstitution } from "../../process/unify";
import { unchainMetavariable } from "../../utilities/context";
import { stripBracketsFromStatement } from "../../utilities/brackets";
import { instantiateStatementSubstitution } from "../../process/instantiate";
import { statementSubstitutionFromStatementSubstitutionNode } from "../../utilities/element";
import { statementToStatementJSON, metavariableToMetavariableJSON } from "../../utilities/json";
import { statementSubstitutionStringFromStatementAndMetavariable, statementSubstitutionStringFromStatementMetavariableAndSubstitution } from "../../utilities/string";

export default define(class StatementSubstitution extends Substitution {
  constructor(context, string, node, resolved, statement, metavariable, substitution) {
    super(context, string, node);

    this.resolved = resolved;
    this.statement = statement;
    this.metavariable = metavariable;
    this.substitution = substitution;
  }

  isResolved() {
    return this.resolved;
  }

  getStatement() {
    return this.statement;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getSubstitution() {
    return this.substitution;
  }

  getTargetNode() {
    const metavariableNode = this.metavariable.getNode(),
          targetNode = metavariableNode; ///

    return targetNode;
  }

  getReplacementNode() {
    const statementNode = this.statement.getNode(),
          replacementNode = statementNode; ///

    return replacementNode;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  compareParameter(parameter) {
    const metavariableComparesToParameter = this.metavariable.compareParameter(parameter),
          comparesToParameter = metavariableComparesToParameter;  ///

    return comparesToParameter;
  }

  compareStatement(statement, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const statementEqualToStatement = this.statement.isEqualTo(statement),
          comparesToStatement = statementEqualToStatement;  ///

    return comparesToStatement;
  }

  compareSubstitution(substitution) {
    let comparesToSubstitution = false;

    if (false) {
      ///
    } else if ((this.substitution === null) && (substitution === null)){
      comparesToSubstitution = true;
    } else if ((this.substitution !== null) && (substitution !== null)){
      const substitutionEqualToSubstituion = this.substitution.isEqualTo(substitution);

      if (substitutionEqualToSubstituion) {
        comparesToSubstitution = true;
      }
    }

    return comparesToSubstitution;
  }

  unifyStatement(statement, context) {
    let statementUnifies = false;

    const statementString = statement.getString(),
          statementSubstitutionString = this.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${statementSubstitutionString}' statement substiution's statement...`);

    const specificContext = context; ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    const { Substitutions } = elements,
          substitutions = Substitutions.fromNothing(context);

    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    let substitution = null;

    if (statementUnifies) {
      const substitutionsNonTrivialLength = substitutions.getNonTrivialLength();

      if (substitutionsNonTrivialLength === 1) {
        const firstSubstitution = substitutions.getFirstSubstitution();

        substitution = firstSubstitution; ///
      } else {
        statementUnifies = false;
      }
    }

    if (statementUnifies) {
      context.trace(`...unified the '${statementString}' statement with the '${statementSubstitutionString}' statement substiution's statement.`);
    }

    return substitution;
  }

  unifySubstitution(substitution, substitutions, context) {
    const generalSubstitution = this.substitution,  ///
          specificSubstitution = substitution,  ///
          generalSubstitutionString = generalSubstitution.getString(),
          specificSubstitutionString = specificSubstitution.getString();

    context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);

    let substitutionContext;

    substitutionContext = this.substitution.getContext();

    const generalContext = substitutionContext; ///

    substitutionContext = substitution.getContext();

    const specificContext = substitutionContext,  ///
          substitutionUnifies = unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);

    if (substitutionUnifies) {
      context.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
    }

    return substitutionUnifies;
  }

  resolve(substitutions, context) {
    context = this.getContext();

    const substitutionString = this.getString(); ///

    context.trace(`Resolving the ${substitutionString} substitution...`);

    substitutions.snapshot();

    const metavariable = this.getMetavariable(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable),
          substitution = simpleSubstitution.unifyStatement(this.statement, context);

    if (substitution !== null) {
      const substitutionUnifies = this.unifySubstitution(substitution, substitutions, context);

      if (substitutionUnifies) {
        this.resolved = true;
      }
    }

    this.resolved ?
      substitutions.continue() :
        substitutions.rollback(context);

    if (this.resolved) {
      context.debug(`...resolved the '${substitutionString}' substitution.`);
    }
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.metavariable),
          statementJSON = statementToStatementJSON(this.statement),
          metavariable = metavariableJSON,  ///
          statement = statementJSON,  ///
          string = this.string, ///
          json = {
            string,
            statement,
            metavariable
          };

    return json;
  }

  static name = "StatementSubstitution";

  static fromJSON(json, context) {
    ///
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    return withinFragment((context) => {
      const statementSubstitutionString = statementSubstitutionStringFromStatementAndMetavariable(statement, metavariable, context),
            string = statementSubstitutionString, ///
            statementSubstitutionNode = instantiateStatementSubstitution(string, context),
            statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context);

      metavariable = unchainMetavariable(metavariable);

      context.addMetavariable(metavariable);

      return statementSubstitution;
    }, context);
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    return withinFragment((context) => {
      const statementSubstitutionString = statementSubstitutionStringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution),
            string = statementSubstitutionString, ///
            statementSubstitutionNode = instantiateStatementSubstitution(string, context),
            statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, substitution, context);

      metavariable = unchainMetavariable(metavariable);

      context.addMetavariable(metavariable);

      return statementSubstitution;
    }, context);
  }
});
