"use strict";

import shim from "./shim";

import { nodeQuery } from "./utilities/query";
import { assignAssignments } from "./utilities/assignments";
import { subproofAssertionFromStatement } from "./utilities/verification";
import { unqualifiedStatementFromJSON, unqualifiedStatementToUnqualifiedStatementJSON } from "./utilities/json";

const unqualifiedStatementNodeQuery = nodeQuery("/supposition/unqualifiedStatement");

class Supposition {
  constructor(unqualifiedStatement) {
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }

  resolveIndependently(substitutions, generalContext, specificContext) {
    let resolvedIndependently;

    const supposition = this, ///
          suppositionString = supposition.getString();

    specificContext.trace(`Resolving the '${suppositionString}' supposition independently...`);

    const unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.resolveIndependently(substitutions, generalContext, specificContext);

    resolvedIndependently = unqualifiedStatementResolvedIndependently;  ///

    if (resolvedIndependently) {
      specificContext.trace(`...resolved the '${suppositionString}' supposition independently.`);
    }

    return resolvedIndependently;
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

    const supposition = this, ///
          suppositionString = supposition.getString(),
          statementString = statement.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${suppositionString}' supposition...`);

    statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${suppositionString}' supposition.`);
    }

    return statementUnified;
  }

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnified = false;

    const supposition = this, ///
          subproofString = subproof.getString(),
          suppositionStatement = supposition.getStatement(),
          suppositionStatementString = suppositionStatement.getString();

    specificContext.trace(`Unifying the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement...`);

    const context = generalContext, ///
          statement = this.unqualifiedStatement.getStatement(),
          subproofAssertion = subproofAssertionFromStatement(statement, context);

    if (subproofAssertion !== null) {
      subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
    }

    if (subproofUnified) {
      specificContext.debug(`...unified the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement.`);
    }

    return subproofUnified;
  }

  verify(context) {
    let verified = false;

    const suppositionString = this.getString(); ///

    context.trace(`Verifying the '${suppositionString}' supposition...`);

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
      context.debug(`...verified the '${suppositionString}' supposition.`);
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
          supposition = new Supposition(unqualifiedStatement);

    return supposition;
  }

  static fromSuppositionNode(suppositionNode, fileContext) {
    const { UnqualifiedStatement } = shim,
          unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          supposition = new Supposition(unqualifiedStatement);

    return supposition
  }
}

Object.assign(shim, {
  Supposition
});

export default Supposition;
