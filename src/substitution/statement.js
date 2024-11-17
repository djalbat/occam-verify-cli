"use strict";

import Substitution from "../substitution";
import Substitutions from "../substitutions";
import StatementSubstitutionPartialContext from "../context/partial/substitution/statement";

import { unifySubstitution } from "../utilities/unification";
import { stripBracketsFromStatement } from "../utilities/brackets";
import { statementFromJSON, statementToStatementJSON, metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default class StatementSubstitution extends Substitution {
  constructor(string, node, tokens, resolved, statement, metavariable, substitution) {
    super(string, node, tokens);

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

  isStatementEqualTo(statement, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const statementEqualTo = this.statement.isEqualTo(statement);

    return statementEqualTo;
  }

  isMetavariableEqualTo(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  isSubstitutionEqualTo(substitution) {
    let substitutionEqualTo;

    if (false) {
      ///
    } else if ((substitution === null) && (this.substitution === null)) {
      substitutionEqualTo = true;
    } else if ((substitution !== null) && (this.substitution === null)) {
      substitutionEqualTo = false;
    } else if ((substitution === null) && (this.substitution !== null)) {
      substitutionEqualTo = false;
    } else {
      substitutionEqualTo = this.substitution.isEqualTo(substitution);
    }

    return substitutionEqualTo;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  resolve(substitutions, generalContext, specificContext) {
    const substitutionString = this.string;

    const metavariable = this.getMetavariable(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable);

    if (simpleSubstitution !== null) {
      specificContext.trace(`Resolving the ${substitutionString} substitution...`);

      const substitution = simpleSubstitution,  ///
            substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, generalContext, specificContext);

      this.resolved = substitutionResolved; ///

      if (this.resolved) {
        specificContext.debug(`...resolved the ${substitutionString} substitution.`);
      }
    }
  }

  resolveSubstitution(substitution, statement, substitutions, generalContext, specificContext) {
    let substitutionResolved = false;

    const substitutionString = substitution.getString();

    specificContext.trace(`Resolving the ${substitutionString} substitution...`);

    const generalSubstitution = substitution, ///
          specificSubstitution = this.unifyStatement(statement, specificContext, specificContext);  ///

    if (specificSubstitution !== null) {
      substitutions.snapshot();

      const generalSubstitutionString = generalSubstitution.getString(),
            specificSubstitutionString = specificSubstitution.getString();

      specificContext.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);

      const substitutionUnified = unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);


      if (substitutionUnified) {
        specificContext.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
      }

      const context = specificContext;  ///

      substitutionUnified ?
        substitutions.continue() :
          substitutions.rollback(context);

      substitutionResolved = substitutionUnified;  ///
    }

    if (substitutionResolved) {
      specificContext.debug(`...resolved the ${substitutionString} substitution.`);
    }

    return substitutionResolved;
  }

  unifyStatement(statement, generalContext, specificContext) {
    let specificSubstitution = null;

    const substitutions = Substitutions.fromNothing(),
          statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      const substitutionsLength = substitutions.getLength();

      if (substitutionsLength === 1) {
        const firstSubstitution = substitutions.getFirstSubstitution();

        specificSubstitution = firstSubstitution; ///
      }
    }

    return specificSubstitution;
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.metavariable),
          statementJSON = statementToStatementJSON(this.statement),
          metavariable = metavariableJSON,  ///
          statement = statementJSON,  ///
          string = this.string,
          json = {
            string,
            statement,
            metavariable
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          context = fileContext,  ///
          statementSubstitutionPartialContext = StatementSubstitutionPartialContext.fromString(string, context),
          node = statementSubstitutionPartialContext.getNode(),
          tokens = statementSubstitutionPartialContext.getTokens(),
          resolved = true,
          statement = statementFromJSON(json, fileContext),
          metavariable = metavariableFromJSON(json, fileContext),
          substitution = null,  ///
          statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const string = stringFromStatementAndMetavariable(statement, metavariable),
          statementSubstitutionPartialContext = StatementSubstitutionPartialContext.fromString(string, context),
          node = statementSubstitutionPartialContext.getNode(),
          tokens = statementSubstitutionPartialContext.getTokens(),
          resolved = true,
          substitution = null,
          statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context),
          statementSubstitutionPartialContext = StatementSubstitutionPartialContext.fromString(string, context),
          node = statementSubstitutionPartialContext.getNode(),
          tokens = statementSubstitutionPartialContext.getTokens(),
          resolved = false,
          statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }
}

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
