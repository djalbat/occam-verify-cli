"use strict";

import { subproofNodeAsSubproofString } from "../utilities/unify";

export default function unifyPremiseAgainstProofStep(premiseA, proofStepB, substitutions, localContextA, localContextB) {
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

      localContextA.trace(`Unifying the proof step's '${subproofStringB}' subproof against the premise's '${statementStringA}' statement...`, statementNodeA);

      const subproofUnified = premiseA.unifySubproof(subproofNodeB, substitutions, localContextA, localContextB);

      if (subproofUnified) {
        localContextA.debug(`...unified the proof step's '${subproofStringB}' subproof against the premise's '${statementStringA}' statement.`, statementNodeA);

        premiseUnified = true;
      }
    }

    if (statementNodeB !== null) {
      const statementStringB = localContextB.nodeAsString(statementNodeB);

      localContextA.trace(`Unifying the proof step's '${statementStringB}' statement against the premise's '${statementStringA}' statement...`, statementNodeA);

      const statementUnified = premiseA.unifyStatement(statementNodeB, substitutions, localContextA, localContextB);

      if (statementUnified) {
        localContextA.debug(`...unified the proof step's '${statementStringB}' statement against the premise's '${statementStringA}' statement.`, statementNodeA);

        premiseUnified = true;
      }
    }

    premiseUnified ?
      substitutions.continue() :
        substitutions.rollback();
  }

  return premiseUnified;
}
