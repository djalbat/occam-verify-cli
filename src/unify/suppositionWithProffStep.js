"use strict";

import { subproofNodeAsSubproofString } from "../utilities/subproof";

export default function unifySuppositionWithProofStep(suppositionA, proofStepB, substitutions, localContextA, localContextB) {
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

      localContextB.trace(`Unifying the '${subproofStringB}' subproof with the supposition's '${statementStringA}' statement...`, subproofNodeB);

      const subproofUnified = suppositionA.unifySubproof(subproofNodeB, substitutions, localContextA, localContextB);

      if (subproofUnified) {
        localContextB.debug(`...unified the '${subproofStringB}' subproof with the supposition's '${statementStringA}' statement.`, subproofNodeB);

        suppositionUnified = true;
      }
    }

    if (statementNodeB !== null) {
      const statementStringB = localContextB.nodeAsString(statementNodeB);

      localContextB.trace(`Unifying the '${statementStringB}' statement with the supposition's '${statementStringA}' statement...`, statementNodeB);

      const statementUnified = suppositionA.unifyStatement(statementNodeB, substitutions, localContextA, localContextB);

      if (statementUnified) {
        localContextB.debug(`...unified the '${statementStringB}' statement with the supposition's '${statementStringA}' statement.`, statementNodeB);

        suppositionUnified = true;
      }
    }

    suppositionUnified ?
      substitutions.continue() :
        substitutions.rollback(localContextA, localContextB);
  }

  return suppositionUnified;
}
