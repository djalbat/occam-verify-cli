"use strict";

import shim from "./shim";

import { assignAssignments } from "./utilities/assignments";

class ProofStep {
  constructor(string, subproof, statement, reference) {
    this.string = string;
    this.subproof = subproof;
    this.statement = statement;
    this.reference = reference;
  }

  getString() {
    return this.string;
  }

  getSubproof() {
    return this.subproof;
  }

  getStatement() {
    return this.statement;
  }

  getReference() {
    return this.reference;
  }

  isQualified() {
    const qualified = (this.reference !== null);

    return qualified;
  }

  unifyStatement(statement, context) {
    let statementUnified;

    const statementString = this.statement.getString();

    context.trace(`Unifying the '${statementString}' statement...`);

    const { Substitutions } = shim,
          specificContext = context, ///
          generalContext = context, ///
          substitutions = Substitutions.fromNothing();

    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    const substitutionsLength = substitutions.getLength();

    if (substitutionsLength > 0) {
      statementUnified = false;
    }

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement.`);
    }

    return statementUnified;
  }

  unifySubproofAssertion(subproofAssertion, context) {
    let subproofAssertionUnified = false;

    if (this.subproof !== null) {
      const subproofAssertionString = subproofAssertion.getString();

      context.trace(`Unifying the '${subproofAssertionString}' subproof assertion...`);

      const { Substitutions } = shim,
            specificContext = context, ///
            generalContext = context, ///
            substitutions = Substitutions.fromNothing();

      subproofAssertionUnified = this.subproof.unifySubproofAssertion(subproofAssertion, substitutions, generalContext, specificContext);

      if (subproofAssertionUnified) {
        const substitutionsLength = substitutions.getLength();

        if (substitutionsLength > 0) {
          subproofAssertionUnified = false;
        }
      }

      if (subproofAssertionUnified) {
        context.debug(`...unified the '${subproofAssertionString}' subproof assertion.`);
      }
    }

    return subproofAssertionUnified;
  }

  verify(substitutions, context) {
    let verified = false;

    if (false) {
      ///
    } else if (this.subproof !== null) {
      const subproofVerified = this.subproof.verify(substitutions, context);

      verified = subproofVerified;  ///
    } else if (this.statement !== null) {
      const qualified = this.isQualified(),
            assignments = [],
            stated = qualified, ///
            statementVerified = this.statement.verify(substitutions, assignments, stated, context);

      if (statementVerified) {
        let statementUnified = false;

        debugger

        if (qualified) {

        } else {

        }

        if (statementUnified) {
          const assignmentsAssigned = assignAssignments(assignments, context);

          verified = assignmentsAssigned; ///
        }
      }
    } else {
      const proofStepString = this.string;

      context.debug(`Cannot verify the '${proofStepString}' proof step because it is nonsense.`);
    }

    if (verified) {
      const proofStep = this; ///

      context.addProofStep(proofStep);
    }

    return verified;
  }

  static fromProofStepNode(proofStepNode, fileContext) {
    const { Subproof, Statement, Reference } = shim,
          subproofNode = subproofNodeQuery(proofStepNode),
          statementNode = statementNodeQuery(proofStepNode),
          node = proofStepNode, ///
          string = fileContext.nodeAsString(node),
          subproof = Subproof.fromProofStepNode(subproofNode, fileContext),
          statement = Statement.fromProofStepNode(statementNode, fileContext),
          reference = Reference.fromProofStepNode(proofStepNode, fileContext),
          proofStep = new ProofStep(string, subproof, statement, reference);

    return proofStep;
  }
}

Object.assign(shim, {
  ProofStep
});

export default ProofStep;