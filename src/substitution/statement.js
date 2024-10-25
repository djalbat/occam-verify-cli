"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";
import StatementSubstitutionNodeAndTokens from "../nodeAndTokens/substitution/statement";

import { stripBracketsFromStatementNode } from "../utilities/brackets";
import { statementFromJSON, statementToStatementJSON, metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

class StatementSubstitution extends Substitution {
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

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  matchStatementNode(statementNode) {
    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const statementNodeMatches = this.statement.matchStatementNode(statementNode);

    return statementNodeMatches;
  }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  matchSubstitutionNode(substitutionNode) {
    let substitutionNodeMatches;

    if ((substitutionNode === null) && (this.substitution === null)) {
      substitutionNodeMatches = true;
    } else if ((substitutionNode === null) && (this.substitution !== null)) {
      substitutionNodeMatches = false;
    } else if ((substitutionNode !== null) && (this.substitution === null)) {
      substitutionNodeMatches = false;
    } else {
      substitutionNodeMatches = this.substitution.matchSubstitutionNode(substitutionNode);
    }

    return substitutionNodeMatches;
  }

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const metavariableNodeMatches = this.matchMetavariableNode(metavariableNode),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          metavariableNodeAndSubstitutionNodeMatches = (metavariableNodeMatches && substitutionNodeMatches);

    return metavariableNodeAndSubstitutionNodeMatches;
  }

  resolve(substitutions, generalContext, specificContext) {
    const substitutionString = this.string;

    const metavariableNode = this.getMetavariableNode(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);

    if (simpleSubstitution !== null) {
      specificContext.trace(`Resolving the ${substitutionString} substitution...`);

      const context = generalContext, ///
            localContext = LocalContext.fromContextAndTokens(context, this.tokens);

      generalContext = localContext;  ///

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

      const generalSubstitutionNode = generalSubstitution.getNode(),
            specificSubstitutionNode = specificSubstitution.getNode(),
            generalSubstitutionTokens = generalSubstitution.getTokens(),
            specificSubstitutionTokens = specificSubstitution.getTokens();

      let tokens,
          context,
          localContext;

      tokens = generalSubstitutionTokens; ///

      context = generalContext; ///

      localContext = LocalContext.fromContextAndTokens(context, tokens);

      generalContext = localContext;  ///

      tokens = specificSubstitutionTokens;  ///

      context = specificContext;  ///

      localContext = LocalContext.fromContextAndTokens(context, tokens);

      specificContext = localContext; ///

      const generalNode = generalSubstitutionNode,  ///
            specificNode = specificSubstitutionNode,  ///,
            unifiedAtMetaLevel = metaLevelUnifier.unify(generalNode, specificNode, substitutions, generalContext, specificContext);

      if (unifiedAtMetaLevel) {
        specificContext.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
      }

      unifiedAtMetaLevel ?
        substitutions.continue() :
          substitutions.rollback(specificContext);

      substitutionResolved = unifiedAtMetaLevel;  ///
    }

    if (substitutionResolved) {
      specificContext.debug(`...resolved the ${substitutionString} substitution.`);
    }

    return substitutionResolved;
  }

  unifyStatement(statement, generalContext, specificContext) {
    let specificSubstitution = null;

    const { Substitutions } = shim,
          substitutions = Substitutions.fromNothing(),
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
          statementSubstitutionString = string,  ///
          statementSubstitutionNodeAndTokens = StatementSubstitutionNodeAndTokens.fromStatementSubstitutionString(statementSubstitutionString, context),
          node = statementSubstitutionNodeAndTokens.getNode(),
          tokens = statementSubstitutionNodeAndTokens.getTokens(),
          resolved = true,
          statement = statementFromJSON(json, fileContext),
          metavariable = metavariableFromJSON(json, fileContext),
          substitution = null,  ///
          statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, context);

    const string = stringFromStatementAndMetavariable(statement, metavariable),
          statementSubstitutionString = string,  ///
          statementSubstitutionNodeAndTokens = StatementSubstitutionNodeAndTokens.fromStatementSubstitutionString(statementSubstitutionString, context),
          node = statementSubstitutionNodeAndTokens.getNode(),
          tokens = statementSubstitutionNodeAndTokens.getTokens(),
          resolved = true,
          substitution = null,
          statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, context);

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context),
          statementSubstitutionString = string,  ///
          statementSubstitutionNodeAndTokens = StatementSubstitutionNodeAndTokens.fromStatementSubstitutionString(statementSubstitutionString, context),
          node = statementSubstitutionNodeAndTokens.getNode(),
          tokens = statementSubstitutionNodeAndTokens.getTokens(),
          resolved = false,
          statementSubstitution = new StatementSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementSubstitution;
  }
}

Object.assign(shim, {
  StatementSubstitution
});

export default StatementSubstitution;

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
