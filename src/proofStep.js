"use strict";

import Substitutions from "./substitutions";
import metaLevelUnifier from "./unifier/metaLevel";

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

  unifyStatement(statementNode, equivalences, localContextA, localContextB) {
    let statementUnified = false;

    if (this.statementNode !== null) {
      let statementUnifiedAgainstStatement = false;

      if (!statementUnifiedAgainstStatement) {
        const statementNodeA = statementNode, ///
              statementNodeB = this.statementNode;  ///

        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB);
      }

      if (!statementUnifiedAgainstStatement) {
        const statementNodeA = statementNode, ///
              statementNodeB = this.statementNode;  ///

        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB);
      }

      statementUnified = statementUnifiedAgainstStatement;  ///
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

function unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB) {
  let statementUnifiedAgainstStatement = false;

  const nodeA = statementNodeA,  ///
        nodeB = statementNodeB,  ///
        statementStringA = localContextA.nodeAsString(statementNodeA),
        statementStringB = localContextB.nodeAsString(statementNodeB);

  localContextB.trace(`Unifying the '${statementStringB}' statement against the '${statementStringA}' statement...`, statementNodeB);

  const substitutions = Substitutions.fromNothing(),
        unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

  if (unified) {
    const substitutionsUnifiedAgainstEquivalences = substitutions.unifyAgainstEquivalences(equivalences, localContextA, localContextB);

    statementUnifiedAgainstStatement = substitutionsUnifiedAgainstEquivalences;  ///
  }

  if (statementUnifiedAgainstStatement) {
    localContextB.debug(`...unified the '${statementStringB}' statement against the '${statementStringA}' statement.`, statementNodeB);
  }

  return statementUnifiedAgainstStatement;
}