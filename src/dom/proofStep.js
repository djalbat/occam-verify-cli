"use strict";

import dom from "../dom";
import unifyMixins from "../mixins/proofStep/unify";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";

export default domAssigned(class ProofStep {
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

  unify(substitutions, context) {
    let unified = false;

    if (this.statement !== null) {
      const proofStepString = this.string;  ///

      context.trace(`Unifying the '${proofStepString}' proof step's statement...`);

      unified = unifyMixins.some((unifyMixin) => {
        const unified = unifyMixin(this.statement, this.reference, substitutions, context);

        if (unified) {
          return true;
        }
      });

      if (unified) {
        context.debug(`...unified the '${proofStepString}' proof step's statement.`);
      }
    }

    return unified;
  }

  unifyStatement(statement, context) {
    let statementUnified;

    const statementString = this.statement.getString();

    context.trace(`Unifying the '${statementString}' statement...`);

    const specificContext = context, ///
          generalContext = context, ///
          substitutions = Substitutions.fromNothing();

    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement.`);
    }

    return statementUnified;
  }

  unifySubproofAssertion(subproofAssertion, context) {
    let subproofAssertionUnified = false;

    if (this.subproof !== null) {
      subproofAssertionUnified = this.subproof.unifySubproofAssertion(subproofAssertion, context);
    }

    return subproofAssertionUnified;
  }

  verify(substitutions, assignments, context) {
    let verified = false;

    if (false) {
      ///
    } else if (this.subproof !== null) {
      const subproofVerified = this.subproof.verify(substitutions, context);

      verified = subproofVerified;  ///
    } else if (this.statement !== null) {
      const proofStepString = this.string;  ///

      context.trace(`Verifying the '${proofStepString}' proof step's statement...`);

      const qualified = this.isQualified(),
            stated = qualified; ///

      if (!verified) {
        const statementVerified = this.statement.verify(assignments, stated, context);

        verified = statementVerified; ///
      }

      if (!verified) {
        const assignments = null,
              statementUnified = this.statement.unify(assignments, stated, context);

        verified = statementUnified; ///
      }

      if (verified) {
        context.debug(`...verified the '${proofStepString}' proof step's statement.`);
      }
    } else {
      const proofStepString = this.string;

      context.debug(`Cannot verify the '${proofStepString}' proof step because it is nonsense.`);
    }

    return verified;
  }

  static name = "ProofStep";

  static fromStatement(statement, context) {
    const statementString = statement.getString(),
          string = statementString, ///
          subproof = null,
          reference = null,
          proofStep = new ProofStep(string, subproof, statement, reference);

    return proofStep;
  }

  static fromProofStepNode(proofStepNode, fileContext) {
    const { Subproof, Statement, Reference } = dom,
          node = proofStepNode, ///
          string = fileContext.nodeAsString(node),
          subproof = Subproof.fromProofStepNode(proofStepNode, fileContext),
          statement = Statement.fromProofStepNode(proofStepNode, fileContext),
          reference = Reference.fromProofStepNode(proofStepNode, fileContext),
          proofStep = new ProofStep(string, subproof, statement, reference);

    return proofStep;
  }
});
