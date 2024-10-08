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
  constructor(fileContext, subproofAssertion, unqualifiedStatement) {
    this.fileContext = fileContext;
    this.subproofAssertion = subproofAssertion;
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getFileContext() {
    return this.fileContext;
  }

  getSubproofAssertion() {
    return this.subproofAssertion;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }

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

  unifySubproof(subproof, substitutions, localContext) {
    let subproofUnified = false;

    const supposition = this, ///
          subproofString = subproof.getString(),
          suppositionStatement = supposition.getStatement(),
          suppositionStatementString = suppositionStatement.getString();

    localContext.trace(`Unifying the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement...`);

    if (this.subproofAssertion !== null) {
      subproofUnified = this.subproofAssertion.unifySubproof(subproof, substitutions, localContext);
    }

    if (subproofUnified) {
      localContext.debug(`...unified the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement.`);
    }

    return subproofUnified;
  }

  verify(localContext) {
    let verified = false;

    const suppositionString = this.getString(); ///

    if (this.unqualifiedStatement !== null) {
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
    } else {
      localContext.debug(`The '${suppositionString}' supposition cannot be verified because it is nonsense.`);
    }

    return verified;
  }

  toJSON() {
    const unqualifiedStatementJSON = this.unqualifiedStatement.toJSON(),
          subproofAssertionJSON = (this.subproofAssertion !== null) ?
                                     this.subproofAssertion.toJSON() :
                                       null,
          unqualifiedStatement = unqualifiedStatementJSON,  ///
          subproofAssertion = subproofAssertionJSON,  ///
          json = {
            unqualifiedStatement,
            subproofAssertion
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { subproofAssertion, unqualifiedStatement } = json;

    json = unqualifiedStatement;  ///

    unqualifiedStatement = UnqualifiedStatement.fromJSON(json, fileContext);

    json = subproofAssertion; ///

    subproofAssertion = (json !== null) ?
                          SubproofAssertion.fromJSON(json, fileContext) :
                            null;

    const supposition = new Supposition(fileContext, subproofAssertion, unqualifiedStatement);

    return supposition;
  }

  static fromSuppositionNode(suppositionNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          subproofAssertion = SubproofAssertion.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          supposition = new Supposition(fileContext, subproofAssertion, unqualifiedStatement);

    return supposition
  }
}
