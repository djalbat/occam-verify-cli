"use strict";

import dom from "../dom";
import unifyMixins from "../mixins/proofStep/unify";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";

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
    let unified;

    if (this.subproof !== null) {
      unified = true; ///
    }

    if (this.statement !== null) {
      const proofStepString = this.string;  ///

      context.trace(`Unifying the '${proofStepString}' proof step...`);

      unified = unifyMixins.some((unifyMixin) => {
        const unified = unifyMixin(this.statement, this.reference, substitutions, context);

        if (unified) {
          return true;
        }
      });

      if (unified) {
        context.debug(`...unified the '${proofStepString}' proof step.`);
      }
    }

    return unified;
  }

  unifyStatement(statement, context) {
    let statementUnified;

    const specificContext = context, ///
          generalContext = context, ///
          substitutions = Substitutions.fromNothing();

    if (this.subproof !== null) {
      const subproofUnified = statement.unifySubproof(this.subproof, substitutions, generalContext, specificContext);

      statementUnified = subproofUnified; ///
    }

    if (this.statement !== null) {
      statementUnified = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);
    }

    if (statementUnified) {
      const equivalences = context.getEquivalences(),
            substitutionsUnified = equivalences.unifySubstitutions(substitutions);

      statementUnified = substitutionsUnified;  ///
    }

    return statementUnified;
  }

  verifyAndUnify(substitutions, context) {
    let verifiedAndUnified = false;

    const assignments = [],
          verified = this.verify(substitutions, assignments, context);

    if (verified) {
      const unified = this.unify(substitutions, context);

      if (unified) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          const proofStep = this; ///

          context.addProofStep(proofStep);

          verifiedAndUnified = true; ///
        }
      }
    }

    return verifiedAndUnified;
  }

  verify(substitutions, assignments, context) {
    let verified = false;

    if (false) {
      ///
    } else if (this.subproof !== null) {
      const subproofVerified = this.subproof.verify(substitutions, context);

      verified = subproofVerified;  ///
    } else if (this.statement !== null) {
      const qualified = this.isQualified(),
            stated = qualified, ///
            statementVerified = this.statement.verify(assignments, stated, context);

      if (statementVerified) {
        if (this.reference === null) {
          verified = true;
        } else {
          const referenceVerified = this.reference.verify(context);

          verified = referenceVerified; ///
        }
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
