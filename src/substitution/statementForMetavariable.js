"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import Substitutions from "../substitutions";

import { stripBracketsFromStatement } from "../utilities/brackets";

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

  getStatementNode() {
    const statementNode = this.statement.getNode();

    return statementNode;
  }

  getMetavariableNode() {
    const metavariableNode = this.metavariable.getNode();

    return metavariableNode;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  resolve(substitutions, localContext) {
    let resolved = false;

    const substitutionString = this.string;

    localContext.trace(`Resolving the ${substitutionString} substitution...`);

    const metavariableNode = this.getMetavariableNode(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);

    if (simpleSubstitution !== null) {
      const substitution = simpleSubstitution,  ///
            substitutionResolved = substitution.resolveSubstitution(this.substitution, this.statement, substitutions, localContext);

      resolved = substitutionResolved; ///
    }

    if (resolved) {
      localContext.debug(`...resolved the ${substitutionString} substitution.`);
    }

    return resolved;
  }

  resolveSubstitution(substitution, statement, substitutions, localContext) {
    let substitutionResolved = false;

    const substitutionString = substitution.getString();

    localContext.trace(`Resolving the ${substitutionString} substitution...`);

    const transformedSubstitution = substitution.transformed(substitutions, localContext);

    if (transformedSubstitution !== null) {
      const transformedSubstitutionString = transformedSubstitution.getString();

      localContext.trace(`Transformed the substitution to ${transformedSubstitutionString}...`);

      substitutions = Substitutions.fromNothing();  ///

      const localContextA = localContext, ///
            localContextB = localContext, ///
            statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);

      if (statementUnified) {
        const substitutionsLength = substitutions.getLength();

        if (substitutionsLength === 1) {
          const firstSubstitution = substitutions.getFirstSubstitution(),
                substitution = firstSubstitution, ///
                substitutionEqualToTransformedSubstitution = substitution.isEqualTo(transformedSubstitution);

          substitutionResolved = substitutionEqualToTransformedSubstitution;  ///
        }
      }
    }

    if (substitutionResolved) {
      localContext.debug(`...resolved the ${substitutionString} substitution.`);
    }

    return substitutionResolved;
  }

  matchStatementNode(statementNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

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

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatement(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, localContext);

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statement, metavariable, substitution);

    return statementForMetavariableSubstitution;
  }
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