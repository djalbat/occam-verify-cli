"use strict";

import unifyStatementWithStatementGivenEquivalences from "./unify/statementWithSttaemetnGivenEquivalences";

export default class ProofStep {
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

  unifyStatement(statementB, equivalences, localContextA, localContextB) {
    let statementUnified = false;

    if (this.statement !== null) {
      const statementA = this.statement,  ///
            statementUnifiedWithStatement = unifyStatementWithStatementGivenEquivalences(statementA, statementB, equivalences, localContextA, localContextB);

      statementUnified = statementUnifiedWithStatement;  ///
    }

    return statementUnified;
  }

  static fromSubproof(subproof) {
    const statement = null,
          proofStep = new ProofStep(subproof, statement);

    return proofStep;
  }

  static fromStatement(statement) {
    const subproof = null,
          proofStep = new ProofStep(subproof, statement);

    return proofStep;
  }
}
