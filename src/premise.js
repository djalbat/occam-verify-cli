"use strict";

import shim from "./shim";

import { nodeQuery } from "./utilities/query";
import { assignAssignments } from "./utilities/assignments";
import { subproofAssertionFromStatement } from "./utilities/verification";
import { unqualifiedStatementFromJSON, unqualifiedStatementToUnqualifiedStatementJSON } from "./utilities/json";

const unqualifiedStatementNodeQuery = nodeQuery("/premise/unqualifiedStatement");

class Premise {
  constructor(unqualifiedStatement) {
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }

  unifyIndependently(substitutions, generalContext, specificContext) {
    let unifiedIndependently;

    const premise = this, ///
          premiseString = premise.getString();

    specificContext.trace(`Unifying the '${premiseString}' premise independently...`);

    const unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.unifyIndependently(substitutions, generalContext, specificContext);

    unifiedIndependently = unqualifiedStatementResolvedIndependently;  ///

    if (unifiedIndependently) {
      specificContext.trace(`...unified the '${premiseString}' premise independently.`);
    }

    return unifiedIndependently;
  }

  unifyProofStep(proofStep, substitutions, generalContext, specificContext) {
    let proofStepUnified = false;

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
      substitutions.resolve(generalContext, specificContext);

      proofStepUnified = true;
    }

    const context = specificContext;  ///

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

    specificContext.trace(`Unifying the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement...`);

    const context = generalContext,
          statement = this.unqualifiedStatement.getStatement(),
          subproofAssertion = subproofAssertionFromStatement(statement, context);

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
          premise = new Premise(unqualifiedStatement);

    return premise;
  }

  static fromPremiseNode(suppositionNode, fileContext) {
    const { UnqualifiedStatement } = shim,
          unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          premise = new Premise(unqualifiedStatement);

    return premise
  }
}

Object.assign(shim, {
  Premise
});

export default Premise;
