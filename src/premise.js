"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import metaLevelUnifier from "./unifier/metaLevel";
import SubproofAssertion from "./assertion/subproof";
import UnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "./utilities/query";
import { assignAssignments } from "./utilities/assignments";

const unqualifiedStatementNodeQuery = nodeQuery("/premise/unqualifiedStatement");

export default class Premise {
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

  unifySubproof(subproof, substitutions, localContext) {
    let subproofUnified = false;

    const premise = this, ///
          subproofString = subproof.getString(),
          premiseStatement = premise.getStatement(),
          premiseStatementString = premiseStatement.getString();

    localContext.trace(`Unifying the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement...`);

    const statement = this.unqualifiedStatement.getStatement(),
          statementNode = statement.getNode(),
          subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, this.fileContext);

    if (subproofAssertion !== null) {
      subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, this.fileContext, localContext);
    }

    if (subproofUnified) {
      localContext.debug(`...unified the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement.`);
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

    const premise = this, ///
          statementString = statement.getString(),
          premiseStatement = premise.getStatement(),
          premiseStatementString = premiseStatement.getString();

    localContext.trace(`Unifying the '${statementString}' statement with the premise's '${premiseStatementString}' statement...`);

    const statementNode = statement.getNode(),
          premiseStatementNode = premiseStatement.getNode(),
          nodeA = premiseStatementNode,  ///
          nodeB = statementNode,  ///
          fileContextA = this.fileContext,  ///
          localContextA = LocalContext.fromFileContext(fileContextA),
          localContextB = localContext, ///
          unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

    statementUnified = unified; ///

    if (statementUnified) {
      localContext.debug(`...unified the '${statementString}' statement with the premise's '${premiseStatementString}' statement.`);
    }

    return statementUnified;
  }

  verify(localContext) {
    let verified = false;

    const premiseString = this.getString(); ///

    localContext.trace(`Verifying the '${premiseString}' premise...`);

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
      localContext.debug(`...verified the '${premiseString}' premise.`);
    }

    return verified;
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

    const premise = new Premise(fileContext, unqualifiedStatement);

    return premise;
  }

  static fromPremiseNode(suppositionNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          premise = new Premise(fileContext, unqualifiedStatement);

    return premise
  }
}
