"use strict";

import { arrayUtilities } from "necessary";

import shim from "../shim";
import LocalContext from "../context/local";

import { trim } from "../utilities/string";
import { nodeQuery } from "../utilities/query";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

const { reverse } = arrayUtilities;

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement");

class UnqualifiedStatement {
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

  resolveIndependently(substitutions, localContextA, localContextB) {
    let resolveIndependently;

    const unqualifiedStatementString = this.getString();  ///

    localContextB.trace(`Resolving the '${unqualifiedStatementString}' unqualified statement independently...`);

    const statementResolvedIndependently = this.statement.resolveIndependently(substitutions, localContextA, localContextB);

    resolveIndependently = statementResolvedIndependently;  ///

    if (resolveIndependently) {
      localContextB.debug(`...resolved the '${unqualifiedStatementString}' unqualified statement independently.`);
    }

    return resolveIndependently;
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
    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          string = this.string, ///
          json = {
            string,
            statement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          statement = statementFromJSON(json, fileContext),
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

Object.assign(shim, {
  UnqualifiedStatement
});

export default UnqualifiedStatement;
