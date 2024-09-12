"use strict";

import Substitutions from "./substitutions";
import intrinsicLevelUnifier from "./unifier/intrinsicLevel";

export default class ProofStep {
  constructor(subproofNode, statementNode) {
    this.subproofNode = subproofNode;
    this.statementNode = statementNode;
  }

  getSubproofNode() {
    return this.subproofNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  unifyStatement(statementNodeB, equivalences, localContextA, localContextB) {
    let statementUnified = false;

    if (this.statementNode !== null) {
      let statementUnifiedWithStatement = false;

      if (!statementUnifiedWithStatement) {
        const statementNodeA = this.statementNode;  ///

        statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB);
      }

      if (!statementUnifiedWithStatement) {
        const statementNodeA = statementNodeB,  ///
              localContext = localContextA; ///

        statementNodeB = this.statementNode;  ///

        localContextA = localContextB;  ///

        localContextB = localContext; ///

        statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB);
      }

      statementUnified = statementUnifiedWithStatement;  ///
    }

    return statementUnified;
  }

  static fromSubproofNode(subproofNode) {
    const statementNode = null,
          proofStep = new ProofStep(subproofNode, statementNode);

    return proofStep;
  }

  static fromStatementNode(statementNode) {
    const subproofNode = null,
          proofStep = new ProofStep(subproofNode, statementNode);

    return proofStep;
  }
}

function unifyStatementWithStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB) {
  let statementUnifiedWithStatement = false;

  const statementStringA = localContextA.nodeAsString(statementNodeA),
        statementStringB = localContextB.nodeAsString(statementNodeB);

  localContextB.trace(`Unifying the '${statementStringB}' statement with the '${statementStringA}' statement...`, statementNodeB);

  const substitutions = Substitutions.fromNothing(),
        nodeA = statementNodeA,  ///
        nodeB = statementNodeB,  ///
        unified = intrinsicLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

  if (unified) {
    const substitutionsUnifiedWithEquivalences = substitutions.unifyWithEquivalences(equivalences, localContextA, localContextB);

    statementUnifiedWithStatement = substitutionsUnifiedWithEquivalences;  ///
  }

  if (statementUnifiedWithStatement) {
    localContextB.debug(`...unified the '${statementStringB}' statement with the '${statementStringA}' statement.`, statementNodeB);
  }

  return statementUnifiedWithStatement;
}