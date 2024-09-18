"use strict";

import { subproofNodeAsSubproofString } from "../utilities/subproof";

export default function unifyPremiseWithProofStep(premiseA, proofStepB, substitutions, localContextA, localContextB) {
  let premiseUnified = false;

  const premiseAStatementNode = premiseA.getStatementNode();

  if (premiseAStatementNode !== null) {
    const proofStepBSubproofNode = proofStepB.getSubproofNode(),
          proofStepBStatementNode = proofStepB.getStatementNode(),
          subproofNodeB = proofStepBSubproofNode, ///
          statementNodeB = proofStepBStatementNode, ///
          statementNodeA = premiseAStatementNode, ///
          statementStringA = localContextA.nodeAsString(statementNodeA)

    substitutions.snapshot();

    if (subproofNodeB !== null) {
      const subproofStringB = subproofNodeAsSubproofString(subproofNodeB, localContextB);

      localContextB.trace(`Unifying the '${subproofStringB}' subproof with the premise's '${statementStringA}' statement...`, subproofNodeB);

      const subproofUnified = premiseA.unifySubproof(subproofNodeB, substitutions, localContextA, localContextB);

      if (subproofUnified) {
        localContextB.debug(`...unified the '${subproofStringB}' subproof with the premise's '${statementStringA}' statement.`, subproofNodeB);

        premiseUnified = true;
      }
    }

    if (statementNodeB !== null) {
      const statementStringB = localContextB.nodeAsString(statementNodeB);

      localContextB.trace(`Unifying the '${statementStringB}' statement with the premise's '${statementStringA}' statement...`, statementNodeB);

      const statementUnified = premiseA.unifyStatement(statementNodeB, substitutions, localContextA, localContextB);

      if (statementUnified) {
        localContextB.debug(`...unified the '${statementStringB}' statement with the premise's '${statementStringA}' statement.`, statementNodeB);

        premiseUnified = true;
      }
    }

    premiseUnified ?
      substitutions.continue() :
        substitutions.rollback(localContextA, localContextB);
  }

  return premiseUnified;
}
