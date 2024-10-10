"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import metaLevelUnifier from "./unifier/metaLevel";
import SubproofAssertion from "./assertion/subproof";
import UnqualifiedStatement from "./statement/unqualified";

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

  verify(localContext) {
    let verified = false;

    const suppositionString = this.getString(); ///

    localContext.trace(`Verifying the '${suppositionString}' supposition...`);

    const stated = true,
          assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);

    if (unqualifiedStatementVerified) {
      const assignmentsAssigned = assignAssignments(assignments, localContext);

      if (assignmentsAssigned) {
        const { ProofStep } = shim,
              proofStep = ProofStep.fromUnqualifiedStatement(this.unqualifiedStatement);

        localContext.addProofStep(proofStep);

        verified = true;
      }
    }

    if (verified) {
      localContext.debug(`...verified the '${suppositionString}' supposition.`);
    }

    return verified;
  }

  unifySubproof(subproof, substitutions, localContext) {
    let subproofUnified = false;

    const supposition = this, ///
          subproofString = subproof.getString(),
          suppositionStatement = supposition.getStatement(),
          suppositionStatementString = suppositionStatement.getString();

    localContext.trace(`Unifying the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement...`);

    const statement = this.unqualifiedStatement.getStatement(),
          subproofAssertion = SubproofAssertion.fromStatement(statement, this.fileContext);

    if (subproofAssertion !== null) {
      subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, this.fileContext, localContext);
    }

    if (subproofUnified) {
      localContext.debug(`...unified the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement.`);
    }

    return subproofUnified;
  }

  unifyProofStep(proofStep, substitutions, localContext) {
    let proofStepUnified = false;

    const subproof = proofStep.getSubproof(),
          statement = proofStep.getStatement();

    substitutions.snapshot();

    if (false) {
      ///
    } else if (subproof !== null) {
      proofStepUnified = this.unifySubproof(subproof, substitutions, localContext);
    } else if (statement !== null) {
      proofStepUnified = this.unifyStatement(statement, substitutions, localContext);
    }

    proofStepUnified ?
      substitutions.continue() :
        substitutions.rollback(localContext);

    return proofStepUnified;
  }

  unifyStatement(statement, substitutions, localContext) {
    let statementUnified;

    const supposition = this, ///
          statementString = statement.getString(),
          suppositionStatement = supposition.getStatement(),
          suppositionStatementString = suppositionStatement.getString();

    localContext.trace(`Unifying the '${statementString}' statement with the supposition's '${suppositionStatementString}' statement...`);

    const statementNode = statement.getNode(),
          suppositionStatementNode = suppositionStatement.getNode(),
          nodeA = suppositionStatementNode,  ///
          nodeB = statementNode,  ///
          fileContextA = this.fileContext,  ///
          localContextA = LocalContext.fromFileContext(fileContextA),
          localContextB = localContext, ///
          unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

    statementUnified = unified; ///

    if (statementUnified) {
      localContext.debug(`...unified the '${statementString}' statement with the supposition's '${suppositionStatementString}' statement.`);
    }

    return statementUnified;
  }

  toJSON() {
    const unqualifiedStatementJSON = this.unqualifiedStatement.toJSON(),
          unqualifiedStatement = unqualifiedStatementJSON,  ///
          json = {
            unqualifiedStatement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { unqualifiedStatement } = json;

    json = unqualifiedStatement;  ///

    unqualifiedStatement = UnqualifiedStatement.fromJSON(json, fileContext);

    const supposition = new Supposition(fileContext, unqualifiedStatement);

    return supposition;
  }

  static fromSuppositionNode(suppositionNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          supposition = new Supposition(fileContext, unqualifiedStatement);

    return supposition
  }
}
