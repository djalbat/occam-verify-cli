"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import SubproofAssertion from "./assertion/subproof";

import { nodeQuery } from "./utilities/query";
import { assignAssignments } from "./utilities/assignments";
import { unqualifiedStatementFromJSON, unqualifiedStatementToUnqualifiedStatementJSON } from "./utilities/json";

const unqualifiedStatementNodeQuery = nodeQuery("/premise/unqualifiedStatement");

class Premise {
  constructor(fileContext, unqualifiedStatement) {
    this.fileContext = fileContext;
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getFileContext() {
    return this.fileContext;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }

  resolveIndependently(substitutions, localContext) {
    let resolvedIndependently;

    const premiseString = this.getString();

    const localContextB = localContext; ///

    localContext = LocalContext.fromFileContext(this.fileContext);

    const localContextA = localContext; ///

    localContextB.trace(`Resolving the '${premiseString}' premise independently...`);

    const unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.resolveIndependently(substitutions, localContextA, localContextB);

    resolvedIndependently = unqualifiedStatementResolvedIndependently;  ///

    if (resolvedIndependently) {
      localContextB.trace(`...resolved the '${premiseString}' premise independently.`);
    }

    return resolvedIndependently;
  }

  unifyProofStep(proofStep, substitutions, localContext) {
    let proofStepUnified = false;

    const subproof = proofStep.getSubproof(),
          statement = proofStep.getStatement();

    substitutions.snapshot();

    let subproofUnified = false,
        statementUnified = false;

    if (false) {
      ///
    } else if (subproof !== null) {
      subproofUnified = this.unifySubproof(subproof, substitutions, localContext);
    } else if (statement !== null) {
      statementUnified = this.unifyStatement(statement, substitutions, localContext);
    }

    if (subproofUnified || statementUnified) {
      const localContextB = localContext; ///

      localContext = LocalContext.fromFileContext(this.fileContext);

      const localContextA = localContext; ///

      substitutions.resolve(localContextA, localContextB);

      proofStepUnified = true;
    }

    proofStepUnified ?
      substitutions.continue() :
        substitutions.rollback(localContext);

    return proofStepUnified;
  }

  unifyStatement(statement, substitutions, localContext) {
    let statementUnified;

    const statementString = statement.getString(),
          premiseString = this.getString();

    const localContextB = localContext; ///

    localContext = LocalContext.fromFileContext(this.fileContext);

    const localContextA = localContext; ///

    localContextB.trace(`Unifying the '${statementString}' statement with the '${premiseString}' premise...`);

    statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);

    if (statementUnified) {
      localContextB.debug(`...unified the '${statementString}' statement with the '${premiseString}' premise.`);
    }

    return statementUnified;
  }

  unifySubproof(subproof, substitutions, localContext) {
    let subproofUnified = false;

    const premise = this, ///
          subproofString = subproof.getString(),
          premiseStatement = premise.getStatement(),
          premiseStatementString = premiseStatement.getString();

    localContext.trace(`Unifying the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement...`);

    const statement = this.unqualifiedStatement.getStatement(),
          statementNode = statement.getNode(),
          statementTokens = statement.getTokens(),
          context = this.fileContext, ///
          tokens = statementTokens; ///

    localContext = LocalContext.fromContextAndTokens(context, tokens);  ///

    const subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, localContext);

    if (subproofAssertion !== null) {
      subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, this.fileContext, localContext);
    }

    if (subproofUnified) {
      localContext.debug(`...unified the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement.`);
    }

    return subproofUnified;
  }

  verify(localContext) {
    let verified = false;

    const premiseString = this.getString(); ///

    localContext.trace(`Verifying the '${premiseString}' premise...`);

    const stated = true,
          assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);

    if (unqualifiedStatementVerified) {
      const assignmentsAssigned = assignAssignments(assignments, localContext);

      if (assignmentsAssigned) {
        const { ProofStep } = shim,
              proofStep = ProofStep.fromUnqualifiedStatement(this.unqualifiedStatement);

        localContext.addProofStep(proofStep);

        verified = true;
      }
    }

    if (verified) {
      localContext.debug(`...verified the '${premiseString}' premise.`);
    }

    return verified;
  }

  toJSON() {
    const unqualifiedStatementJSON = unqualifiedStatementToUnqualifiedStatementJSON(this.unqualifiedStatement),
          unqualifiedStatement = unqualifiedStatementJSON,  ///
          json = {
            unqualifiedStatement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const unqualifiedStatement = unqualifiedStatementFromJSON(json, fileContext),
          premise = new Premise(fileContext, unqualifiedStatement);

    return premise;
  }

  static fromPremiseNode(suppositionNode, fileContext) {
    const { UnqualifiedStatement } = shim,
          unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          premise = new Premise(fileContext, unqualifiedStatement);

    return premise
  }
}

Object.assign(shim, {
  Premise
});

export default Premise;
