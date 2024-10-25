"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";

import { stripBracketsFromStatementNode } from "../utilities/brackets";
import { statementFromJSON, statementToStatementJSON, metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

class StatementForMetavariableSubstitution extends Substitution {
  constructor(string, resolved, statement, metavariable, substitution) {
    super(string);

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
            substitutionStringA = generalContext.nodeAsString(generalSubstitutionNode),
            substitutionStringB = specificContext.nodeAsString(specificSubstitutionNode);

      specificContext.trace(`Unifying the '${substitutionStringB}' substitution with the '${substitutionStringA}' substitution...`);

      const generalNode = generalSubstitutionNode,  ///
            specificNode = specificSubstitutionNode,  ///
            unifiedAtMetaLevel = metaLevelUnifier.unify(generalNode, specificNode, substitutions, generalContext, specificContext);

      if (unifiedAtMetaLevel) {
        specificContext.trace(`...unified the '${substitutionStringB}' substitution with the '${substitutionStringA}' substitution.`);
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
          resolved = true,
          statement = statementFromJSON(json, fileContext),
          metavariable = metavariableFromJSON(json, fileContext),
          substitution = null,  ///
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, context);

    const substitution = null,
          resolved = true,
          string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, context);

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context),
          resolved = false,
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }
}

Object.assign(shim, {
  StatementForMetavariableSubstitution
});

export default StatementForMetavariableSubstitution;

function contextFromLocalContextAndSubstitution(context, substitution) {
  substitution.setSubstitutionNodeAndTokens(context);

  const substitutionTokens = substitution.getSubstitutionTokens(),
        tokens = substitutionTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens); ///

  context = localContext; ///

  return context;
}

function stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
  let string;

  const statementNode = statement.getNode(),
        statementString = context.nodeAsString(statementNode),
        metavariableString = metavariable.getString();

  if (substitution === null) {
    string = `[${statementString} for ${metavariableString}]`;
  } else {
    const substitutionString = substitution.getString();

    string = `[${statementString} for ${metavariableString}${substitutionString}]`;
  }

  return string;
}
