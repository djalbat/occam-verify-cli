"use strict";

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

  const nonTerminalNodeA = statementNodeA,  ///
        nonTerminalNodeB = statementNodeB,  ///
        substitutions = [],
        localContextA = localContext, ///
        localContextB = localContext,  ///
        nonTerminalNodeUnified = metaLevelUnifier.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (nonTerminalNodeUnified) {
    const substitutionsUnified = substitutions.every((substitution) => {
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