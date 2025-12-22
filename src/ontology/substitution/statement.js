"use strict";

import Substitution from "../substitution";
import Substitutions from "../../substitutions";
import StatementSubstitutionPartialContext from "../../context/partial/substitution/statement";

import { define } from "../../ontology";
import { unifySubstitution } from "../../utilities/unification";
import { stripBracketsFromStatement } from "../../utilities/brackets";
import { statementFromJSON, statementToStatementJSON, metavariableFromJSON, metavariableToMetavariableJSON } from "../../utilities/json";

export default define(class StatementSubstitution extends Substitution {
  constructor(context, string, node, tokens, resolved, statement, metavariable, substitution) {
    super(context, string, node, tokens);

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
        substitutionEqualToSubstitution = this.substitution.isEqualToSubstitution(substitution);
      }
    }

    return substitutionEqualToSubstitution;
  }

  matchParameter(parameter) { return this.metavariable.matchParameter(parameter); }

  unifyStatement(statement, context) {
    let substitution = null;

    const substitutions = Substitutions.fromNothing(),
          generalContext = context; ///

    context = this.getContext();

    const specificContext = context, ///
          statementUnifies = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);

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
    const frame = context.getFrame(),
          generalSubstitution = this.substitution,  ///
          specificSubstitution = substitution,  ///
          generalSubstitutionString = generalSubstitution.getString(),
          specificSubstitutionString = specificSubstitution.getString();

    context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);

    let substitutionContext;

    substitutionContext = this.substitution.getContext();

    const generalContext = substitutionContext; ///

    substitutionContext = substitution.getContext();

    const specificContext = substitutionContext;  ///

    specificContext.addFrame(frame);

    substitutions.snapshot();

    const substitutionUnifies = unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);

    specificContext.removeFrame(frame);

    substitutionUnifies ?
      substitutions.continue() :
        substitutions.rollback(context);

    if (substitutionUnifies) {
      context.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
    }

    return substitutionUnifies;
  }

  resolve(substitutions, context) {
    const substitutionString = this.string; ///

    context.trace(`Resolving the ${substitutionString} substitution...`);

    const metavariable = this.getMetavariable(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable);

    if (simpleSubstitution !== null) {
      let substitution;

      substitution = simpleSubstitution;  ///

      const context = substitution.getContext(),
            statement = substitution.getStatement();

      substitution = this.unifyStatement(statement, context);

      if (substitution !== null) {
        const substitutionUnifies = this.unifySubstitution(substitution, substitutions, context);

        if (substitutionUnifies) {
          this.resolved = true;
        }
      }
    }

    if (this.resolved) {
      context.debug(`...resolved the ${substitutionString} substitution.`);
    }
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

  static name = "StatementSubstitution";

  static fromJSON(json, context) {
    const { string } = json,
          lexer = context.getLexer(),
          parser = context.getParser(),
          statementSubstitutionPartialContext = StatementSubstitutionPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = statementSubstitutionPartialContext.getNode(),
          tokens = statementSubstitutionPartialContext.getTokens(),
          resolved = true,
          statement = statementFromJSON(json, context),
          metavariable = metavariableFromJSON(json, context),
          substitution = null,  ///
          statementSubstitution = new StatementSubstitution(context, string, node, tokens, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const string = stringFromStatementAndMetavariable(statement, metavariable),
          lexer = context.getLexer(),
          parser = context.getParser(),
          statementSubstitutionPartialContext = StatementSubstitutionPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = statementSubstitutionPartialContext.getNode(),
          tokens = statementSubstitutionPartialContext.getTokens(),
          resolved = true,
          substitution = null,
          statementSubstitution = new StatementSubstitution(context, string, node, tokens, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context),
          lexer = context.getLexer(),
          parser = context.getParser(),
          statementSubstitutionPartialContext = StatementSubstitutionPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = statementSubstitutionPartialContext.getNode(),
          tokens = statementSubstitutionPartialContext.getTokens(),
          resolved = false,
          statementSubstitution = new StatementSubstitution(context, string, node, tokens, resolved, statement, metavariable, substitution);

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
