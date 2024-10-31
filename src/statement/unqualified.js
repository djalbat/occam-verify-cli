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

  matchStatementNode(statementNode) { return this.statement.matchStatementNode(statementNode); }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnified;

    const statementString = statement.getString(),
          unqualifiedStatement = this,  ///
          unqualifiedStatementString = unqualifiedStatement.getString();  ///

    specificContext.trace(`Unifying the '${statementString}' statement with the '${unqualifiedStatementString}' unqualified statement...`);

    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${unqualifiedStatementString}' unqualified statement.`);
    }

    return statementUnified;
  }

  unifyIndependently(substitutions, generalContext, specificContext) {
    let unifiedIndependently;

    const unqualifiedStatement = this,  ///
          unqualifiedStatementString = unqualifiedStatement.getString();  ///

    specificContext.trace(`Resolving the '${unqualifiedStatementString}' unqualified statement independently...`);

    const statementResolvedIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);

    unifiedIndependently = statementResolvedIndependently;  ///

    if (unifiedIndependently) {
      specificContext.debug(`...resolved the '${unqualifiedStatementString}' unqualified statement independently.`);
    }

    return unifiedIndependently;
  }

  unifyStatementWithProofSteps(statement, assignments, stated, context) {
    let statementUnifiedWithProofSteps;

    let proofSteps = context.getProofSteps();

    proofSteps = reverse(proofSteps); ///

    statementUnifiedWithProofSteps = proofSteps.some((proofStep) => {
      const statementUnified = proofStep.unifyStatement(statement, context);

      if (statementUnified) {
        return true;
      }
    });

    return statementUnifiedWithProofSteps;
  }

  verify(assignments, stated, context) {
    let verified;

    const unqualifiedStatement = this,  ///
          unqualifiedStatementString = unqualifiedStatement.getString();  ///

    if (this.statement !== null) {
      context.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`);

      const statementVerified = this.statement.verify(assignments, stated, context);

      if (statementVerified) {
        verified = true;
      } else {
        const statementUnifiedWithProofSteps = this.unifyStatementWithProofSteps(this.statement, assignments, stated, context);

        if (statementUnifiedWithProofSteps) {
          verified = true;
        }
      }

      if (verified) {
        context.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`);
      }
    } else {
      context.debug(`Cannot verify the '${unqualifiedStatementString}' unqualified statement because it is nonsense.`);
    }

    return verified;
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
            context = localContext, ///
            statement = Statement.fromStatementNode(statementNode, context),
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
