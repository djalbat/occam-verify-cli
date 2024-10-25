"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import SubproofAssertion from "./assertion/subproof";

import { nodeQuery } from "./utilities/query";
import { assignAssignments } from "./utilities/assignments";
import { unqualifiedStatementFromJSON, unqualifiedStatementToUnqualifiedStatementJSON } from "./utilities/json";
import local from "./context/local";

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

  resolveIndependently(substitutions, context) {
    let resolvedIndependently;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext,  ///
          specificContext = context; ///

    const premise = this, ///
          premiseString = premise.getString();

    specificContext.trace(`Resolving the '${premiseString}' premise independently...`);

    const unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.resolveIndependently(substitutions, generalContext, specificContext);

    resolvedIndependently = unqualifiedStatementResolvedIndependently;  ///

    if (resolvedIndependently) {
      specificContext.trace(`...resolved the '${premiseString}' premise independently.`);
    }

    return resolvedIndependently;
  }

  unifyProofStep(proofStep, substitutions, context) {
    let proofStepUnified = false;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext,  ///
          specificContext = context; ///

    const subproof = proofStep.getSubproof(),
          statement = proofStep.getStatement();

    substitutions.snapshot();

    let subproofUnified = false,
        statementUnified = false;

    if (false) {
      ///
    } else if (subproof !== null) {
      subproofUnified = this.unifySubproof(subproof, substitutions, generalContext, specificContext);
    } else if (statement !== null) {
      statementUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);
    }

    if (subproofUnified || statementUnified) {
      const localContext = LocalContext.fromFileContext(this.fileContext),
            generalContext = localContext,  ///
            specificContext = context; ///

      substitutions.resolve(generalContext, specificContext);

      proofStepUnified = true;
    }

    proofStepUnified ?
      substitutions.continue() :
        substitutions.rollback(context);

    return proofStepUnified;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnified;

    const premise = this, ///
          premiseString = premise.getString(),
          statementString = statement.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${premiseString}' premise...`);

    statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${premiseString}' premise.`);
    }

    return statementUnified;
  }

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnified = false;

    const premise = this, ///
          subproofString = subproof.getString(),
          premiseStatement = premise.getStatement(),
          premiseStatementString = premiseStatement.getString();

    const statement = this.unqualifiedStatement.getStatement(),
          statementNode = statement.getNode();

    specificContext.trace(`Unifying the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement...`);

    const context = specificContext,  ///
          subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, context);

    if (subproofAssertion !== null) {
      subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
    }

    if (subproofUnified) {
      specificContext.debug(`...unified the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement.`);
    }

    return subproofUnified;
  }

  verify(context) {
    let verified = false;

    const premiseString = this.getString(); ///

    context.trace(`Verifying the '${premiseString}' premise...`);

    const stated = true,
          assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);

    if (unqualifiedStatementVerified) {
      const assignmentsAssigned = assignAssignments(assignments, context);

      if (assignmentsAssigned) {
        const { ProofStep } = shim,
              proofStep = ProofStep.fromUnqualifiedStatement(this.unqualifiedStatement);

        context.addProofStep(proofStep);

        verified = true;
      }
    }

    if (verified) {
      context.debug(`...verified the '${premiseString}' premise.`);
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
