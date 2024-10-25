"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";

import { stripBracketsFromStatementNode } from "../utilities/brackets";
import { statementFromJSON, statementToStatementJSON, metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";
import { unqualifiedStatementTokensFromUnqualifiedStatementString, substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode } from "../utilities/tokens";
import { substitutionNodeFromUnqualifiedStatementNode,
         unqualifiedStatementStringFromSubstitutionString,
         unqualifiedStatementNodeFromUnqualifiedStatementTokens } from "../utilities/node";

class StatementForMetavariableSubstitution extends Substitution {
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
      generalContext = contextFromLocalContextAndSubstitution(generalContext, generalSubstitution);  ///

      specificContext = contextFromLocalContextAndSubstitution(specificContext, specificSubstitution);  ///

      substitutions.snapshot();

      const generalSubstitutionNode = generalSubstitution.getSubstitutionNode(),  ///
            specificSubstitutionNode = specificSubstitution.getSubstitutionNode(),  ///
            generalSubstitutionString = generalContext.nodeAsString(generalSubstitutionNode),
            specificSubstitutionString = specificContext.nodeAsString(specificSubstitutionNode);

      specificContext.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);

      const generalNode = generalSubstitutionNode,  ///
            specificNode = specificSubstitutionNode,  ///
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
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          substitutionString = string,  ///
          unqualifiedStatementString = unqualifiedStatementStringFromSubstitutionString(substitutionString),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
          unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
          substitutionNode = substitutionNodeFromUnqualifiedStatementNode(unqualifiedStatementNode),
          substitutionTokens = substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode(unqualifiedStatementTokens, substitutionNode),
          node = substitutionNode,  ///
          tokens = substitutionTokens,  ///
          resolved = true,
          statement = statementFromJSON(json, fileContext),
          metavariable = metavariableFromJSON(json, fileContext),
          substitution = null,  ///
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, context);

    const lexer = context.getLexer(),
          parser = context.getParser(),
          string = stringFromStatementAndMetavariable(statement, metavariable),
          substitutionString = string,  ///
          unqualifiedStatementString = unqualifiedStatementStringFromSubstitutionString(substitutionString),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
          unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
          substitutionNode = substitutionNodeFromUnqualifiedStatementNode(unqualifiedStatementNode),
          substitutionTokens = substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode(unqualifiedStatementTokens, substitutionNode),
          node = substitutionNode,  ///
          tokens = substitutionTokens,  ///
          resolved = true,
          substitution = null,
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, context);

    const lexer = context.getLexer(),
          parser = context.getParser(),
          string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context),
          substitutionString = string,  ///
          unqualifiedStatementString = unqualifiedStatementStringFromSubstitutionString(substitutionString),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
          unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
          substitutionNode = substitutionNodeFromUnqualifiedStatementNode(unqualifiedStatementNode),
          substitutionTokens = substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode(unqualifiedStatementTokens, substitutionNode),
          node = substitutionNode,  ///
          tokens = substitutionTokens,  ///
          resolved = false,
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, node, tokens, resolved, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }
}

Object.assign(shim, {
  StatementForMetavariableSubstitution
});

export default StatementForMetavariableSubstitution;

function contextFromLocalContextAndSubstitution(context, substitution) {
  const substitutionTokens = substitution.getTokens(),
        tokens = substitutionTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens); ///

  context = localContext; ///

  return context;
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
