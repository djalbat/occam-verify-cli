"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";
import metaLevelUnifier from "../unifier/metaLevel";

import { stripBracketsFromStatementNode } from "../utilities/brackets";

export default class StatementForMetavariableSubstitution extends Substitution {
  constructor(string, statement, metavariable, substitution) {
    super(string);

    this.statement = statement;
    this.metavariable = metavariable;
    this.substitution = substitution;
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

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  resolve(substitutions, localContextA, localContextB) {
    let resolved = false;

    const substitutionString = this.string;

    localContextB.trace(`Resolving the ${substitutionString} substitution...`);

    const metavariableName = this.getMetavariableName(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableName(metavariableName);

    if (simpleSubstitution !== null) {
      const substitution = simpleSubstitution,  ///
            substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, localContextA, localContextB);

      resolved = substitutionResolved; ///
    }

    if (resolved) {
      localContextB.debug(`...resolved the ${substitutionString} substitution.`);
    }

    return resolved;
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

      const nodeA = substitutionA.getSubstitutionNode(),  ///
            nodeB = substitutionB.getSubstitutionNode(),  ///
            unifiedAtMetaLevel = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

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

    const substitutions = Substitutions.fromNothing(),
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

  matchMetavariableName(metavariableName) { return this.metavariable.matchMetavariableName(metavariableName); }

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

  matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
    const metavariableNameMatches = this.matchMetavariableName(metavariableName),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          metavariableNameAndSubstitutionNodeMatches = (metavariableNameMatches && substitutionNodeMatches);

    return metavariableNameAndSubstitutionNodeMatches;
  }

  static fromStatementAndMetavariable(statement, metavariable, localContext) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, localContext);

    const substitution = null,
          string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, localContext);

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }
}

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
