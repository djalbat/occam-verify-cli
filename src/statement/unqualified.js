"use strict";

import { arrayUtilities } from "necessary";

import shim from "../shim";
import LocalContext from "../context/local";

import { trim } from "../utilities/string";
import { nodeQuery } from "../utilities/query";

const { reverse } = arrayUtilities;

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement");

export default class UnqualifiedStatement {
  constructor(string, statement) {
    this.string = string;
    this.statement = statement;
  }

  getString() {
    return this.string;
  }

  getStatement() {
    return this.statement;
  }

  verify(assignments, stated, localContext) {
    let verified;

    const unqualifiedStatementString = this.getString(); ///

    if (this.statement !== null) {
      localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`);

      const statementVerified = this.statement.verify(assignments, stated, localContext);

      if (statementVerified) {
        verified = true;
      } else {
        const statementUnifiedWithProofSteps = this.unifyStatementWithProofSteps(this.statement, assignments, stated, localContext);

        if (statementUnifiedWithProofSteps) {
          verified = true;
        }
      }

      if (verified) {
        localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`);
      }

    } else {
      localContext.debug(`Cannot verify the '${unqualifiedStatementString}' unqualified statement because it is nonsense.`);
    }

    return verified;
  }

  unifyStatement(statement, substitutions, localContextA, localContextB) {
    let statementUnified;

    const statementString = statement.getString(),
          unqualifiedStatementString = this.getString();  ///

    localContextB.trace(`Unifying the '${statementString}' statement with the '${unqualifiedStatementString}' unqualified statement...`);

    statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);

    if (statementUnified) {
      localContextB.debug(`...unified the '${statementString}' statement with the '${unqualifiedStatementString}' unqualified statement.`);
    }

    return statementUnified;
  }

  unifyStatementWithProofSteps(statement, assignments, stated, localContext) {
    let statementUnifiedWithProofSteps;

    let proofSteps = localContext.getProofSteps();

    proofSteps = reverse(proofSteps); ///

    statementUnifiedWithProofSteps = proofSteps.some((proofStep) => {
      const statementUnified = proofStep.unifyStatement(statement, localContext);

      if (statementUnified) {
        return true;
      }
    });

    return statementUnifiedWithProofSteps;
  }

  toJSON() {
    const statementJSON = this.statement.toJSON(),
          statement = statementJSON,  ///
          string = this.string, ///
          json = {
            string,
            statement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { Statement } = shim;

    let { statement } = json;

    json = statement; ///

    statement = Statement.fromJSON(json, fileContext);

    const { string } = json,
          unqualifiedStatement = new UnqualifiedStatement(string, statement);

    return unqualifiedStatement;
  }

  static fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
    let unqualifiedStatement = null;

    if (unqualifiedStatementNode !== null) {
      let string;

      const { Statement } = shim,
            statementNode = statementNodeQuery(unqualifiedStatementNode),
            localContext = LocalContext.fromFileContext(fileContext),
            statement = Statement.fromStatementNode(statementNode, localContext),
            node = unqualifiedStatementNode;  ///

      string = fileContext.nodeAsString(node);

      string = trim(string);  ///

      unqualifiedStatement = new UnqualifiedStatement(string, statement);
    }

    return unqualifiedStatement;
  }
}
