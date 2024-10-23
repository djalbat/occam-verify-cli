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

  resolve(substitutions, localContextA, localContextB) {
    const substitutionString = this.string;

    const metavariableNode = this.getMetavariableNode(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);

    if (simpleSubstitution !== null) {
      localContextB.trace(`Resolving the ${substitutionString} substitution...`);

      const substitution = simpleSubstitution,  ///
            substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, localContextA, localContextB);

      this.resolved = substitutionResolved; ///

      if (this.resolved) {
        localContextB.debug(`...resolved the ${substitutionString} substitution.`);
      }
    }
  }

  resolveSubstitution(substitution, statement, substitutions, localContextA, localContextB) {
    let substitutionResolved = false;

    const substitutionString = substitution.getString();

    localContextB.trace(`Resolving the ${substitutionString} substitution...`);

    const substitutionA = substitution, ///
          substitutionB = this.unifyStatement(statement, localContextB, localContextB);  ///

    if (substitutionB !== null) {
      localContextA = localContextFromLocalContextAndSubstitution(localContextA, substitutionA);  ///

      localContextB = localContextFromLocalContextAndSubstitution(localContextB, substitutionB);  ///

      substitutions.snapshot();

      const substitutionNodeA = substitutionA.getSubstitutionNode(),  ///
            substitutionNodeB = substitutionB.getSubstitutionNode(),  ///
            substitutionStringA = localContextA.nodeAsString(substitutionNodeA),
            substitutionStringB = localContextB.nodeAsString(substitutionNodeB);

      localContextB.trace(`Unifying the '${substitutionStringB}' substitution with the '${substitutionStringA}' substitution...`);

      const nodeA = substitutionNodeA,  ///
            nodeB = substitutionNodeB,  ///
            unifiedAtMetaLevel = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      if (unifiedAtMetaLevel) {
        localContextB.trace(`...unified the '${substitutionStringB}' substitution with the '${substitutionStringA}' substitution.`);
      }

      unifiedAtMetaLevel ?
        substitutions.continue() :
          substitutions.rollback(localContextB);

      substitutionResolved = unifiedAtMetaLevel;  ///
    }

    if (substitutionResolved) {
      localContextB.debug(`...resolved the ${substitutionString} substitution.`);
    }

    return substitutionResolved;
  }

  unifyStatement(statement, localContextA, localContextB) {
    let substitution = null;

    const { Substitutions } = shim,
          substitutions = Substitutions.fromNothing(),
          statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);

    if (statementUnified) {
      const substitutionsLength = substitutions.getLength();

      if (substitutionsLength === 1) {
        const firstSubstitution = substitutions.getFirstSubstitution();

        substitution = firstSubstitution; ///
      }
    }

    return substitution;
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

  static fromStatementAndMetavariable(statement, metavariable, localContext) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, localContext);

    const substitution = null,
          resolved = true,
          string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, localContext);

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext),
          resolved = false,
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, resolved, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }
}

Object.assign(shim, {
  StatementForMetavariableSubstitution
});

export default StatementForMetavariableSubstitution;

function localContextFromLocalContextAndSubstitution(localContext, substitution) {
  substitution.setSubstitutionNodeAndTokens(localContext);

  const substitutionTokens = substitution.getSubstitutionTokens(),
        context = localContext, ///
        tokens = substitutionTokens; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens); ///

  return localContext;
}

function stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
  let string;

  const statementNode = statement.getNode(),
        statementString = localContext.nodeAsString(statementNode),
        metavariableString = metavariable.getString();

  if (substitution === null) {
    string = `[${statementString} for ${metavariableString}]`;
  } else {
    const substitutionString = substitution.getString();

    string = `[${statementString} for ${metavariableString}${substitutionString}]`;
  }

  return string;
}
