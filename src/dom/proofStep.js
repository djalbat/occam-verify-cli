"use strict";

import dom from "../dom";
import unifyMixins from "../mixins/proofStep/unify";
import Substitutions from "../substitutions";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";
import { propertyAssertionFromStatement } from "../utilities/context";

const proofStepNodeQuery = nodeQuery("/proofStep");

export default domAssigned(class ProofStep {
  constructor(string, statement, reference) {
    this.string = string;
    this.statement = statement;
    this.reference = reference;
  }

  getString() {
    return this.string;
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

  isProofStep() {
    const proofStep = true;

    return proofStep;
  }

  matchTermAndPropertyRelation(term, propertyRelation, context) {
    let termAndPropertyRelationMatch = false;

    const propertyAssertion = propertyAssertionFromStatement(this.statement, context);

    if (propertyAssertion !== null) {
      termAndPropertyRelationMatch = propertyAssertion.matchTermAndPropertyRelation(term, propertyRelation, context);
    }

    return termAndPropertyRelationMatch;
  }

  unify(substitutions, context) {
    let unified;

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

    return unified;
  }

  unifyStatement(statement, context) {
    let statementUnified;

    const specificContext = context, ///
          generalContext = context, ///
          substitutions = Substitutions.fromNothing();

    statementUnified = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);

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
          const proofStepSubproof = this; ///

          context.addProofStepSubproof(proofStepSubproof);

          verifiedAndUnified = true; ///
        }
      }
    }

    return verifiedAndUnified;
  }

  verify(substitutions, assignments, context) {
    let verified = false;

    const proofStepString = this.string;

    context.trace(`Verifying the '${proofStepString}' proof step...`);

    if (this.statement !== null) {
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
      context.debug(`Cannot verify the '${proofStepString}' proof step because it is nonsense.`);
    }

    if (verified) {
      context.debug(`...verified the '${proofStepString}' proof step.`);
    }

    return verified;
  }

  static name = "ProofStep";

  static fromStatement(statement, context) {
    const statementString = statement.getString(),
          string = statementString, ///
          reference = null,
          proofStep = new ProofStep(string, statement, reference);

    return proofStep;
  }

  static fromProofStepSubproofNode(proofStepSubproofNode, fileContext) {
    let proofStep = null;

    const proofStepNode = proofStepNodeQuery(proofStepSubproofNode);

    if (proofStepNode !== null) {
      const { Statement, Reference } = dom,
            node = proofStepNode, ///
            string = fileContext.nodeAsString(node),
            statement = Statement.fromProofStepNode(proofStepNode, fileContext),
            reference = Reference.fromProofStepNode(proofStepNode, fileContext);

      proofStep = new ProofStep(string, statement, reference);
    }

    return proofStep;
  }
});
