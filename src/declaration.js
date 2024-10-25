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

  unifyStatement(statement, context) {
    let statementUnified;

    const statementString = statement.getString(),
          declarationStatementString = this.statement.getString(); ///

    context.trace(`Unifying the '${statementString}' statement with the '${declarationStatementString}' statement...`);

    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const statementNodeMatches = this.statement.matchStatementNode(statementNode);

    statementUnified = statementNodeMatches;  ///

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${declarationStatementString}' statement.`);
    }

    return statementUnified;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnified;

    const referenceString = this.reference.getString(),
          metavariableString = metavariable.getString();

    context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);

    const metavariableNode = metavariable.getNode(),
          metavariableNodeMatches = this.reference.matchMetavariableNode(metavariableNode);

    metavariableUnified = metavariableNodeMatches;  ///

    if (metavariableUnified) {
      context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
    }

    return metavariableUnified;
  }

  unifySubstitution(substitution, context) {
    let substitutionUnified;

    const declarationString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Unifying the '${substitutionString}' substitution with the '${declarationString}' declaration...`);

    const statement = substitution.getStatement(),
          metavariable = substitution.getMetavariable(),
          statementUnified = this.unifyStatement(statement, context),
          metavariableUnified = this.unifyMetavariable(metavariable, context);

    substitutionUnified = (metavariableUnified && statementUnified);

    if (substitutionUnified) {
      context.debug(`...unified the '${declarationString}' substitution with the '${substitutionString}' declaration.`);
    }

    return substitutionUnified;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' declaration...`);

    stated = true;  ///

    assignments = null; ///

    const referenceVerified = this.reference.verify(context);

    if (referenceVerified) {
      const statementVerified = this.statement.verify(assignments, stated, context);

      verified = statementVerified; ///
    }

    if (verified) {
      context.debug(`...verified the '${declarationString}' declaration.`);
    }

    return verified;
  }

  static fromDeclarationNode(declarationNode, context) {
    let declaration = null;

    if (declarationNode !== null) {
      const { Statement } = shim,
            referenceNode = referenceNodeQuery(declarationNode);

      let statementNode = statementNodeQuery(declarationNode);

      statementNode = stripBracketsFromStatementNode(statementNode);  ///

      const reference = Reference.fromReferenceNode(referenceNode, context),
            statement = Statement.fromStatementNode(statementNode, context),
            node = declarationNode,  ///
            string = context.nodeAsString(node);

      declaration = new Declaration(string, reference, statement);
    }

    return declaration;
  }
}

Object.assign(shim, {
  Declaration
});

export default Declaration;
