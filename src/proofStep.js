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
  constructor(subproof, statement) {
    this.subproof = subproof;
    this.statement = statement;
  }

  getSubproof() {
    return this.subproof;
  }

  getStatement() {
    return this.statement;
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
      const qualifiedStatementVerified = this.qualifiedStatment.verify(substitutions, localContext);

      verified = qualifiedStatementVerified;  ///
    } else if (this.unqualifiedStatement !== null) {
      const unqualifiedStatementVerified = this.unqualifiedStatement.verify(localContext);

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