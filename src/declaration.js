"use strict";

import shim from "./shim";
import Reference from "./reference";

import { nodeQuery } from "./utilities/query";
import { stripBracketsFromStatementNode } from "./utilities/brackets";

const referenceNodeQuery = nodeQuery("/declaration/reference"),
      statementNodeQuery = nodeQuery("/declaration/statement");

class Declaration {
  constructor(string, reference, statement) {
    this.string = string;
    this.reference = reference;
    this.statement = statement;
  }

  getString() {
    return this.string;
  }

  getReference() {
    return this.reference;
  }

  getStatement() {
    return this.statement;
  }

  unifyStatement(statement, localContext) {
    let statementUnified;

    const statementString = statement.getString(),
          declarationStatementString = this.statement.getString(); ///

    localContext.trace(`Unifying the '${statementString}' statement with the '${declarationStatementString}' statement...`);

    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const statementNodeMatches = this.statement.matchStatementNode(statementNode);

    statementUnified = statementNodeMatches;  ///

    if (statementUnified) {
      localContext.debug(`...unified the '${statementString}' statement with the '${declarationStatementString}' statement.`);
    }

    return statementUnified;
  }

  unifyMetavariable(metavariable, localContext) {
    let metavariableUnified;

    const referenceString = this.reference.getString(),
          metavariableString = metavariable.getString();

    localContext.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);

    const metavariableNode = metavariable.getNode(),
          metavariableNodeMatches = this.reference.matchMetavariableNode(metavariableNode);

    metavariableUnified = metavariableNodeMatches;  ///

    if (metavariableUnified) {
      localContext.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
    }

    return metavariableUnified;
  }

  unifySubstitution(substitution, localContext) {
    let substitutionUnified;

    const declarationString = this.string,  ///
          substitutionString = substitution.getString();

    localContext.trace(`Unifying the '${substitutionString}' substitution with the '${declarationString}' declaration...`);

    const statement = substitution.getStatement(),
          metavariable = substitution.getMetavariable(),
          statementUnified = this.unifyStatement(statement, localContext),
          metavariableUnified = this.unifyMetavariable(metavariable, localContext);

    substitutionUnified = (metavariableUnified && statementUnified);

    if (substitutionUnified) {
      localContext.debug(`...unified the '${declarationString}' substitution with the '${substitutionString}' declaration.`);
    }

    return substitutionUnified;
  }

  verify(assignments, stated, localContext) {
    let verified;

    const declarationString = this.string;  ///

    localContext.trace(`Verifying the '${declarationString}' declaration...`);

    stated = true;  ///

    assignments = null; ///

    const referenceVerified = this.reference.verify(localContext),
          statementVerified = this.statement.verify(assignments, stated, localContext);

    verified = (referenceVerified && statementVerified);

    if (verified) {
      localContext.debug(`...verified the '${declarationString}' declaration.`);
    }

    return verified;
  }

  static fromDeclarationNode(declarationNode, localContext) {
    let declaration = null;

    if (declarationNode !== null) {
      const { Statement } = shim,
            referenceNode = referenceNodeQuery(declarationNode);

      let statementNode = statementNodeQuery(declarationNode);

      statementNode = stripBracketsFromStatementNode(statementNode);  ///

      const reference = Reference.fromReferenceNode(referenceNode, localContext),
            statement = Statement.fromStatementNode(statementNode, localContext),
            node = declarationNode,  ///
            string = localContext.nodeAsString(node);

      declaration = new Declaration(string, reference, statement);
    }

    return declaration;
  }
}

Object.assign(shim, {
  Declaration
});

export default Declaration;
