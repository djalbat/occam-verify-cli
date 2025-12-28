"use strict";

import ontology from "../../ontology";
import Substitution from "../substitution";

import { define } from "../../ontology";
import { unifySubstitution } from "../../process/unify";
import { stripBracketsFromStatement } from "../../utilities/brackets";
import { instantiateStatementSubstitution } from "../../process/instantiate";
import { statementFromJSON, statementToStatementJSON, metavariableFromJSON, metavariableToMetavariableJSON } from "../../utilities/json";

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

  getReplacementNode() {
    const statementNode = this.statement.getNode(),
          replacementNode = statementNode; ///

    return replacementNode;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  isStatementEqualToStatement(statement, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const statementEqualToStatement = this.statement.isEqualTo(statement);

    return statementEqualToStatement;
  }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  isSubstitutionEqualToSubstitution(substitution) {
    let substitutionEqualToSubstitution;

    if (this.substitution === null) {
      substitutionEqualToSubstitution = (substitution === null);
    } else {
      if (substitution === null) {
        substitutionEqualToSubstitution = false;
      } else {
        substitutionEqualToSubstitution = this.substitution.isEqualTo(substitution);
      }
    }

    return substitutionEqualToSubstitution;
  }

  matchParameter(parameter) { return this.metavariable.matchParameter(parameter); }

  unifyStatement(statement, context) {
    let substitution = null;

    const { Substitutions } = ontology,
          substitutions = Substitutions.fromNothing(),
          specificContext = context; ///

    context = this.getContext();

    const generalContext = context, ///
          statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      const substitutionsNonTrivialLength = substitutions.getNonTrivialLength();

      if (substitutionsNonTrivialLength === 1) {
        const firstSubstitution = substitutions.getFirstSubstitution();

        substitution = firstSubstitution; ///
      }
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
    const substitutionString = this.string; ///

    context.trace(`Resolving the ${substitutionString} substitution...`);

    substitutions.snapshot();

    const metavariable = this.getMetavariable(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable);

    if (simpleSubstitution !== null) {
      let context;

      context = this.getContext();

      const substitution = simpleSubstitution.unifyStatement(this.statement, context);

      if (substitution !== null) {
        context = simpleSubstitution.getContext();

        const simpleContext = context;  ///

        context = substitution.getContext();

        context.merge(simpleContext);

        const substitutionUnifies = this.unifySubstitution(substitution, substitutions, context);

        if (substitutionUnifies) {
          this.resolved = true;
        }
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
    const { string } = json,
          statementSubstitutionNode = instantiateStatementSubstitution(string, context),
          node = statementSubstitutionNode,
          resolved = true,
          statement = statementFromJSON(json, context),
          metavariable = metavariableFromJSON(json, context),
          substitution = null,  ///
          statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const string = stringFromStatementAndMetavariable(statement, metavariable),
          statementSubstitutionNode = instantiateStatementSubstitution(string, context),
          node = statementSubstitutionNode,
          resolved = true,
          substitution = null,
          statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context),
          statementSubstitutionNode = instantiateStatementSubstitution(string, context),
          node = statementSubstitutionNode,
          resolved = false,
          statementSubstitution = new StatementSubstitution(context, string, node, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }
});

function stringFromStatementAndMetavariable(statement, metavariable) {
  const statementString = statement.getString(),
        metavariableString = metavariable.getString(),
        string = `[${statementString} for ${metavariableString}]`;

  return string;
}

function stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution) {
  let string;

  const statementString = statement.getString(),
        metavariableString = metavariable.getString();

  if (substitution === null) {
    string = `[${statementString} for ${metavariableString}]`;
  } else {
    const substitutionString = substitution.getString();

    string = `[${statementString} for ${metavariableString}${substitutionString}]`;
  }

  return string;
}
