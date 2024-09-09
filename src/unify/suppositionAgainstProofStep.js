"use strict";

import { subproofNodeAsSubproofString } from "../utilities/unify";

export default function unifySuppositionAgainstProofStep(suppositionA, proofStepB, substitutions, localContextA, localContextB) {
  let suppositionUnified = false;

  const suppositionAStatementNode = suppositionA.getStatementNode();

  if (suppositionAStatementNode !== null) {
    const proofStepBSubproofNode = proofStepB.getSubproofNode(),
          proofStepBStatementNode = proofStepB.getStatementNode(),
          subproofNodeB = proofStepBSubproofNode, ///
          statementNodeB = proofStepBStatementNode, ///
          statementNodeA = suppositionAStatementNode, ///
          statementStringA = localContextA.nodeAsString(statementNodeA)

    substitutions.snapshot();

    if (subproofNodeB !== null) {
      const subproofStringB = subproofNodeAsSubproofString(subproofNodeB, localContextB);

      localContextA.trace(`Unifying the proof step's '${subproofStringB}' subproof against the supposition's '${statementStringA}' statement...`, statementNodeA);

      const subproofUnified = suppositionA.unifySubproof(subproofNodeB, substitutions, localContextA, localContextB);

      if (subproofUnified) {
        localContextA.debug(`...unified the proof step's '${subproofStringB}' subproof against the supposition's '${statementStringA}' statement.`, statementNodeA);

        suppositionUnified = true;
      }
    }

    if (statementNodeB !== null) {
      const statementStringB = localContextB.nodeAsString(statementNodeB);

      localContextA.trace(`Unifying the proof step's '${statementStringB}' statement against the supposition's '${statementStringA}' statement...`, statementNodeA);

      const statementUnified = suppositionA.unifyStatement(statementNodeB, substitutions, localContextA, localContextB);

      if (statementUnified) {
        localContextA.debug(`...unified the proof step's '${statementStringB}' statement against the supposition's '${statementStringA}' statement.`, statementNodeA);

        suppositionUnified = true;
      }
    }

    suppositionUnified ?
      substitutions.continue() :
        substitutions.rollback();
  }

  return suppositionUnified;
}
