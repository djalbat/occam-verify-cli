"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";
import metaLevelUnifier from "./unifier/metaLevel";

import { nodeQuery } from "./utilities/query";
import { assignAssignments } from "./utilities/assignments";

const { match } = arrayUtilities;

const subproofNodeQuery = nodeQuery("/proofStep|lastProofStep/subproof"),
      qualifiedStatementNodeQuery = nodeQuery("/proofStep|lastProofStep/qualifiedStatement"),
      unqualifiedStatementNodeQuery = nodeQuery("/proofStep|lastProofStep/unqualifiedStatement");

class ProofStep {
  constructor(subproof, qualifiedStatement, unqualifiedStatement) {
    this.subproof = subproof;
    this.qualifiedStatement = qualifiedStatement;
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getSubproof() {
    return this.subproof;
  }

  getQualifiedStatement() {
    return this.qualifiedStatement;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getStatement() {
    let statement = null;

    if (this.qualifiedStatement !== null) {
      statement = this.qualifiedStatement.getStatement();
    }

    if (this.unqualifiedStatement !== null) {
      statement = this.unqualifiedStatement.getStatement();
    }

    return statement;
  }

  unifyStatement(statement, context) {
    let statementUnified = false;

    if ((this.qualifiedStatement !== null) || (this.unqualifiedStatement !== null !== null)) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement...`);

      const { Substitutions } = shim,
            specificContext = context, ///
            generalContext = context, ///
            substitutions = Substitutions.fromNothing();

      if (this.qualifiedStatement !== null) {
        statementUnified = this.qualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
      }

      if (this.unqualifiedStatement !== null) {
        statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
      }

      const substitutionsLength = substitutions.getLength();

      if (substitutionsLength > 0) {
        statementUnified = false;
      }

      if (statementUnified) {
        context.debug(`...unified the '${statementString}' statement.`);
      }
    }

    return statementUnified;
  }

  unifySubproofAssertion(subproofAssertion, context) {
    let subproofAssertionUnified = false;

    if (this.subproof !== null) {
      const subproofString = this.subproof.getString(),
            subproofAssertionString = subproofAssertion.getString();

      context.trace(`Unifying the '${subproofAssertionString}' subproof assertion with the '${subproofString}' subproof...`);

      const { Substitutions } = shim,
            substitutions = Substitutions.fromNothing(),
            subproofStatements = this.subproof.getStatements(),
            subproofAssertionStatements = subproofAssertion.getStatements();

      subproofAssertionUnified = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
        const subproofAssertionStatementNode = subproofAssertionStatement.getNode(),
              subproofStatementNode = subproofStatement.getNode(),
              generalNode = subproofAssertionStatementNode,  ///
              specificNode = subproofStatementNode,  ///
              generalContext = context, ///
              specificContext = context, ///
              unifiedAtMetaLevel = metaLevelUnifier.unify(generalNode, specificNode, substitutions, generalContext, specificContext);

        if (unifiedAtMetaLevel) {
          return true;
        }
      });

      if (subproofAssertionUnified) {
        const substitutionsLength = substitutions.getLength();

        if (substitutionsLength > 0) {
          subproofAssertionUnified = false;
        }
      }

      if (subproofAssertionUnified) {
        context.trace(`...unified the '${subproofAssertionString}' subproof assertion with the '${subproofString}' subproof.`);
      }
    }

    return subproofAssertionUnified;
  }

  verify(substitutions, context) {
    let verified = false;

    let stated = false;

    const assignments = [];

    let subproofVerified = false,
        qualifiedStatementVerified = false,
        unqualifiedStatementVerified = false;

    if (this.subproof !== null) {
      subproofVerified = this.subproof.verify(substitutions, context);
    }

    if (this.qualifiedStatement !== null) {
      stated = true;

      qualifiedStatementVerified = this.qualifiedStatement.verify(substitutions, assignments, stated, context);
    }

    if (this.unqualifiedStatement !== null) {
      stated = false;

      unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);
    }

    if (subproofVerified || qualifiedStatementVerified || unqualifiedStatementVerified) {
      const assignmentsAssigned = assignAssignments(assignments, context);

      if (assignmentsAssigned) {
        verified = true;
      }
    }

    if (verified) {
      const proofStep = this; ///

      context.addProofStep(proofStep);
    }

    return verified;
  }

  static fromProofStepNode(proofStepNode, fileContext) {
    const { Subproof, QualifiedStatement, UnqualifiedStatement } = shim,
          subproofNode = subproofNodeQuery(proofStepNode),
          qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode),
          unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode),
          subproof = Subproof.fromSubproofNode(subproofNode, fileContext),
          qualifiedStatement = QualifiedStatement.fromQualifiedStatementNode(qualifiedStatementNode, fileContext),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);

    return proofStep;
  }

  static fromUnqualifiedStatement(unqualifiedStatement) {
    const subproof = null,
          qualifiedStatement = null,
          proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);

    return proofStep;
  }
}

Object.assign(shim, {
  ProofStep
});

export default ProofStep;