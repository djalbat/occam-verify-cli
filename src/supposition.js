"use strict";

import ProofStep from "./proofStep";
import UnqualifiedStatement from "./statement/unqualified";

import { trim } from "./utilities/string";
import { nodeQuery } from "./utilities/query";
import { assignAssignments } from "./utilities/assignments";

const unqualifiedStatementNodeQuery = nodeQuery("/supposition/unqualifiedStatement");

export default class Supposition {
  constructor(fileContext, unqualifiedStatement) {
    this.fileContext = fileContext;
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getFileContext() {
    return this.fileContext;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }

  // unifyStatement(statementNodeB, substitutions, localContextA, localContextB) {
  //   let statementUnified = false;
  //
  //   if (this.statementNode !== null) {
  //     const nodeA = this.statementNode,  ///
  //           nodeB = statementNodeB,  ///
  //           unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
  //
  //     statementUnified = unified; ///
  //   }
  //
  //   return statementUnified;
  // }

  // unifySubproof(subproofNodeB, substitutions, localContextA, localContextB) {
  //   let subproofUnified = false;
  //
  //   if (this.statementNode !== null) {
  //     const statementNodeA = this.statementNode,
  //           subproofAssertionNodeA = subproofAssertionNodeQuery(statementNodeA);  ///
  //
  //     if (subproofAssertionNodeA !== null) {
  //       const subproofAssertionStatementNodesA = subproofAssertionStatementNodesQuery(subproofAssertionNodeA),  ///
  //             subproofSuppositionStatementNodesB = subproofSuppositionStatementNodesQuery(subproofNodeB), ///
  //             subproofLastProofStepStatementNodeB = subproofLastProofStepStatementNodeQuery(subproofNodeB), ///
  //             subproofStatementNodesB = [
  //               ...subproofSuppositionStatementNodesB,
  //               subproofLastProofStepStatementNodeB
  //             ];
  //
  //       subproofUnified = match(subproofAssertionStatementNodesA, subproofStatementNodesB, (subproofAssertionStatementNodeA, subproofStatementNodeB) => {
  //         const nodeA = subproofAssertionStatementNodeA,  ///
  //               nodeB = subproofStatementNodeB, ///
  //               unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
  //
  //         if (unified) {
  //           return true;
  //         }
  //       });
  //     }
  //   }
  //
  //   return subproofUnified;
  // }

  verify(localContext) {
    let verified = false,
        suppositionString = this.getString(); ///

    suppositionString = trim(suppositionString);  ///

    if (this.unqualifiedStatement !== null) {
      localContext.trace(`Verifying the '${suppositionString}' supposition...`);

      const stated = true,
            assignments = [],
            unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);

      if (unqualifiedStatementVerified) {
        const assignmentsAssigned = assignAssignments(assignments, localContext);

        if (assignmentsAssigned) {
          const proofStep = ProofStep.fromUnqualifiedStatement(this.unqualifiedStatement);

          localContext.addProofStep(proofStep);

          verified = true;
        }
      }

    } else {
      localContext.debug(`The '${suppositionString}' supposition cannot be verified because it is nonsense.`);
    }

    if (verified) {
      localContext.debug(`...verified the '${suppositionString}' supposition.`);
    }

    return verified;
  }

  static fromSuppositionNode(suppositionNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          supposition = new Supposition(fileContext, unqualifiedStatement);

    return supposition;
  }
}
