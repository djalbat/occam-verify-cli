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

  unifyStatement(statementNode, equivalences, localContext) {
    let statementUnified = false;

    if (this.statementNode !== null) {
      let statementUnifiedAgainstStatement = false;

      if (!statementUnifiedAgainstStatement) {
        const statementNodeA = statementNode, ///
              statementNodeB = this.statementNode;  ///

        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContext);
      }

      if (!statementUnifiedAgainstStatement) {
        const statementNodeA = statementNode, ///
              statementNodeB = this.statementNode;  ///

        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContext);
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

function unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContext) {
  let statementUnifiedAgainstStatement = false;

  const nodeA = statementNodeA,  ///
        nodeB = statementNodeB,  ///
        localContextA = localContext, ///
        localContextB = localContext,  ///
        substitutions = Substitutions.fromNothing(),
        unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

  if (unified) {
    const substitutionsUnified = substitutions.everySubstitution((substitution) => {
      const substitutionUnified = equivalences.some((equivalence) => {
        const substitutionUnifiedAgainstEquivalence = substitution.unifyAgainstEquivalence(equivalence, substitutions, localContext);

        if (substitutionUnifiedAgainstEquivalence) {
          return true;
        }
      });

      if (substitutionUnified) {
        return true;
      }
    });

    statementUnifiedAgainstStatement = substitutionsUnified;  ///
  }

  return statementUnifiedAgainstStatement;
}