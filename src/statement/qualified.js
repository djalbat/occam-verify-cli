"use strict";

import Statement from "../statement";
import Reference from "../reference";
import unifyMixins from "../mixins/statement/qualified/unify";
import LocalContext from "../context/local";

import { trim } from "../utilities/string";
import { nodeQuery } from "../utilities/query";
import { assignAssignments } from "../utilities/assignments";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement"),
      referenceNodeQuery = nodeQuery("/qualifiedStatement/reference");

export default class QualifiedStatement {
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

  verify(substitutions, localContext) {
    let verified;

    const qualifiedStatementString = trim(this.string); ///

    localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`);

    const stated = true,
          assignments = [],
          statementVerified = this.statement.verify(assignments, stated, localContext);

    if (statementVerified) {
      const unified = this.unify(substitutions, localContext);

      if (unified) {
        const assignmentsAssigned = assignAssignments(assignments, localContext);

        verified = assignmentsAssigned; ///
      }
    }

    if (verified) {
      localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement.`);
    }

    return verified;
  }

  unify(substitutions, localContext) {
    let unified;

    const qualifiedStatement = this,  ///
          qualifiedStatementString = trim(this.string); ///

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement...`);

    unified = unifyMixins.some((unifyMixin) => {
      const unified = unifyMixin(qualifiedStatement, substitutions, localContext);

      return unified;
    });

    if (unified) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement.`);
    }

    return unified;
  }

  static fromQualifiedStatementNode(qualifiedStatementNode, fileContext) {
    let qualifiedStatement = null;

    if (qualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(qualifiedStatementNode),
            referenceNode = referenceNodeQuery(qualifiedStatementNode),
            localContext = LocalContext.fromFileContext(fileContext),
            statement = (statementNode !== null) ?
                          Statement.fromStatementNode(statementNode, localContext) :
                            null,
            reference = Reference.fromReferenceNode(referenceNode, fileContext),
            node = qualifiedStatementNode,  ///
            string = fileContext.nodeAsString(node);

        qualifiedStatement = new QualifiedStatement(string, statement, reference);
    }

    return qualifiedStatement;
  }
}
