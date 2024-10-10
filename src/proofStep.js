"use strict";

import shim from "./shim";
import Subproof from "./subproof";
import QualifiedStatement from "./statement/qualified";
import UnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "./utilities/query";

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

  // unifyStatement(statementB, equivalences, localContextA, localContextB) {
  //   let statementUnified = false;
  //
  //   if (this.statement !== null) {
  //     const statementA = this.statement,  ///
  //           statementUnifiedWithStatement = unifyStatementWithStatementGivenEquivalences(statementA, statementB, equivalences, localContextA, localContextB);
  //
  //     statementUnified = statementUnifiedWithStatement;  ///
  //   }
  //
  //   return statementUnified;
  // }

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
      const stated = true,
            assignments = [],
            unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);

      verified = unqualifiedStatementVerified;  ///
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
          unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode);

    let subproof = null,
        qualifiedStatement = null,
        unqualifiedStatement = null;

    if (false) {
      ///
    } else if (subproofNode !== null) {
      subproof = Subproof.fromSubproofNode(subproofNode, fileContext);
    } else if (qualifiedStatementNode !== null) {
      qualifiedStatement = QualifiedStatement.fromQualifiedStatementNode(qualifiedStatementNode, fileContext);
    } else if (unqualifiedStatementNode !== null) {
      unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext);
    }

    const proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);

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