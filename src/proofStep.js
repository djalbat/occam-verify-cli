"use strict";

import shim from "./shim";
import Subproof from "./subproof";
import Substitutions from "./substitutions";
import QualifiedStatement from "./statement/qualified";
import UnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "./utilities/query";
import { assignAssignments } from "./utilities/assignments";

const subproofNodeQuery = nodeQuery("/proofStep|lastProofStep/subproof"),
      qualifiedStatementNodeQuery = nodeQuery("/proofStep|lastProofStep/qualifiedStatement"),
      unqualifiedStatementNodeQuery = nodeQuery("/proofStep|lastProofStep/unqualifiedStatement");

class ProofStep {
  constructor(subproof, qualifiedStatement, unqualifiedStatement) {
    this.subproof = subproof;
    this.qualifiedStatement = qualifiedStatement;
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getSubproof() {
    return this.subproof;
  }

  getQualifiedStatement() {
    return this.qualifiedStatement;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getStatement() {
    let statement = null;

    if (this.qualifiedStatement !== null) {
      statement = this.qualifiedStatement.getStatement();
    }

    if (this.unqualifiedStatement !== null) {
      statement = this.unqualifiedStatement.getStatement();
    }

    return statement;
  }

  unifyStatement(statement, localContext) {
    let statementUnified = false;

    const substitutions = Substitutions.fromNothing();

    if (this.qualifiedStatement !== null) {
      const localContextA = localContext, ///
            localContextB = localContext; ///

      statementUnified = this.qualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
    }

    if (this.unqualifiedStatement !== null) {
      const localContextA = localContext, ///
            localContextB = localContext; ///

      statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
    }

    const substitutionsLength = substitutions.getLength();

    if (substitutionsLength > 0) {
      statementUnified = false;
    }

    return statementUnified;
  }

  verify(substitutions, localContext) {
    let verified = false;

    if (false) {
      ///
    } else if (this.subproof !== null) {
      const subproofVerified = this.subproof.verify(substitutions, localContext);

      verified = subproofVerified;  ///
    } else if (this.qualifiedStatement !== null) {
      const qualifiedStatementVerified = this.qualifiedStatement.verify(substitutions, localContext);

      verified = qualifiedStatementVerified;  ///
    } else if (this.unqualifiedStatement !== null) {
      const stated = false,
            assignments = [],
            unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);

      if (unqualifiedStatementVerified) {
        const assignmentsAssigned = assignAssignments(assignments, localContext);

        if (assignmentsAssigned) {
          verified = true;
        }
      }
    }

    if (verified) {
      const proofStep = this; ///

      localContext.addProofStep(proofStep);
    }

    return verified;
  }

  static fromProofStepNode(proofStepNode, fileContext) {
    const subproofNode = subproofNodeQuery(proofStepNode),
          qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode),
          unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode),
          subproof = Subproof.fromSubproofNode(subproofNode, fileContext),
          qualifiedStatement = QualifiedStatement.fromQualifiedStatementNode(qualifiedStatementNode, fileContext),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);

    return proofStep;
  }

  static fromUnqualifiedStatement(unqualifiedStatement) {
    const subproof = null,
          qualifiedStatement = null,
          proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);

    return proofStep;
  }
}

Object.assign(shim, {
  ProofStep
});

export default ProofStep;