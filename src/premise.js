"use strict";

import ProofStep from "./proofStep";
import metaLevelUnifier from "./unifier/metaLevel";
import UnqualifiedStatement from "./statement/unqualified";

import { match } from "./utilities/array";
import { assignAssignments } from "./utilities/assignments";
import { nodeQuery, nodesQuery } from "./utilities/query";

const unqualifiedStatementNodeQuery = nodeQuery("/premise/unqualifiedStatement"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      subproofAssertionStatementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofSuppositionStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement/statement!"),
      subproofLastProofStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!");

export default class Premise {
  constructor(unqualifiedStatement) {
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }

  unifyStatement(statementNodeB, substitutions, localContextA, localContextB) {
    let statementUnified = false;

    if (this.statementNode !== null) {
      const nodeA = this.statementNode,  ///
            nodeB = statementNodeB,  ///
            unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      statementUnified = unified; ///
    }

    return statementUnified;
  }

  unifySubproof(subproofNodeB, substitutions, localContextA, localContextB) {
    let subproofUnified = false;

    if (this.statementNode !== null) {
      const statementNodeA = this.statementNode,
            subproofAssertionNodeA = subproofAssertionNodeQuery(statementNodeA);  ///

      if (subproofAssertionNodeA !== null) {
        const subproofAssertionStatementNodesA = subproofAssertionStatementNodesQuery(subproofAssertionNodeA),  ///
              subproofSuppositionStatementNodesB = subproofSuppositionStatementNodesQuery(subproofNodeB), ///
              subproofLastProofStepStatementNodeB = subproofLastProofStepStatementNodeQuery(subproofNodeB), ///
              subproofStatementNodesB = [
                ...subproofSuppositionStatementNodesB,
                subproofLastProofStepStatementNodeB
              ];

        subproofUnified = match(subproofAssertionStatementNodesA, subproofStatementNodesB, (subproofAssertionStatementNodeA, subproofStatementNodeB) => {
          const nodeA = subproofAssertionStatementNodeA,  ///
                nodeB = subproofStatementNodeB, ///
                unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

          if (unified) {
            return true;
          }
        });
      }
    }

    return subproofUnified;
  }

  verify(localContext) {
    let verified;

    const premiseString = this.getString(); ///

    localContext.trace(`Verifying the '${premiseString}' premise...`);

    const assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, localContext);

    if (unqualifiedStatementVerified) {
      const assignmentsAssigned = assignAssignments(assignments, localContext);

      if (assignmentsAssigned) {
        const statement = this.getStatement(),
              proofStep = ProofStep.fromStatement(statement);

        localContext.addProofStep(proofStep);

        verified = true;
      }
    }

    if (verified) {
      localContext.debug(`...verified the '${premiseString}' premise.`);
    }

    return verified;
  }

  static fromPremiseNode(premiseNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(premiseNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          premise = new Premise(unqualifiedStatement);

    return premise
  }
}
