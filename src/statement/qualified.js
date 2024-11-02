"use strict";

import shim from "../shim";
import Reference from "../reference";
import unifyMixins from "../mixins/statement/qualified/unify";
import LocalContext from "../context/local";

import { trim } from "../utilities/string";
import { nodeQuery } from "../utilities/query";
import { assignAssignments } from "../utilities/assignments";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement");

class QualifiedStatement {
  constructor(string, statement, reference) {
    this.string = string;
    this.statement = statement;
    this.reference = reference;
  }

  getString() {
    return this.string;
  }

  getStatement() {
    return this.statement;
  }

  getReference() {
    return this.reference;
  }

  getMetavariableNode() { return this.reference.getMetavariableNode(); }

  unify(substitutions, context) {
    let unified;

    const qualifiedStatementString = this.string; ///

    context.trace(`Unifying the '${qualifiedStatementString}' qualified statement...`);

    unified = unifyMixins.some((unifyMixin) => {
      const qualifiedStatement = this,  ///
            unified = unifyMixin(qualifiedStatement, substitutions, context);

      return unified;
    });

    if (unified) {
      context.debug(`...unified the '${qualifiedStatementString}' qualified statement.`);
    }

    return unified;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnified;

    const statementString = statement.getString(),
          unqualifiedStatementString = this.getString();  ///

    specificContext.trace(`Unifying the '${statementString}' statement with the '${unqualifiedStatementString}' qualified statement...`);

    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${unqualifiedStatementString}' qualified statement.`);
    }

    return statementUnified;
  }

  verify(substitutions, assignments, stated, context) {
    let verified;

    const qualifiedStatementString = this.string; ///

    if (this.statement !== null) {
      context.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`);

      const statementVerified = this.statement.verify(assignments, stated, context);

      if (statementVerified) {
        const unified = this.unify(substitutions, context);

        if (unified) {
          const assignmentsAssigned = assignAssignments(assignments, context);

          verified = assignmentsAssigned; ///
        }
      }

      if (verified) {
        context.debug(`...verified the '${qualifiedStatementString}' qualified statement.`);
      }
    } else {
      context.debug(`Cannot verify the '${qualifiedStatementString}' qualified statement because it is nonsense.`);
    }

    return verified;
  }

  static fromQualifiedStatementNode(qualifiedStatementNode, fileContext) {
    let qualifiedStatement = null;

    if (qualifiedStatementNode !== null) {
      let string;

      const { Statement } = shim,
            statementNode = statementNodeQuery(qualifiedStatementNode),
            referenceNode = referenceNodeQuery(qualifiedStatementNode),
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext, ///
            statement = Statement.fromStatementNode(statementNode, context),
            reference = Reference.fromReferenceNode(referenceNode, context),
            node = qualifiedStatementNode;  ///

      string = fileContext.nodeAsString(node);

      string = trim(string);  ///

      qualifiedStatement = new QualifiedStatement(string, statement, reference);
    }

    return qualifiedStatement;
  }
}

Object.assign(shim, {
  QualifiedStatement
});

export default QualifiedStatement;
