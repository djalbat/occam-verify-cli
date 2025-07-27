"use strict";

import dom from "../dom";
import unifyMixins from "../mixins/step/unify";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { propertyAssertionFromStatement } from "../utilities/context";

export default domAssigned(class Step {
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

  isStep() {
    const step = true;

    return step;
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

    const stepString = this.string;  ///

    context.trace(`Unifying the '${stepString}' step...`);

    unified = unifyMixins.some((unifyMixin) => {
      const unified = unifyMixin(this.statement, this.reference, substitutions, context);

      if (unified) {
        return true;
      }
    });

    if (unified) {
      context.debug(`...unified the '${stepString}' step.`);
    }

    return unified;
  }

  verify(substitutions, assignments, context) {
    let verified = false;

    const stepString = this.string;

    context.trace(`Verifying the '${stepString}' step...`);

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
      context.debug(`Cannot verify the '${stepString}' step because it is nonsense.`);
    }

    if (verified) {
      context.debug(`...verified the '${stepString}' step.`);
    }

    return verified;
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

  static name = "Step";

  static fromStatement(statement, context) {
    const statementString = statement.getString(),
          string = statementString, ///
          reference = null,
          step = new Step(string, statement, reference);

    return step;
  }

  static fromStepOrSubproofNode(stepOrSubproofNode, fileContext) {
    let step = null;

    const stepNode = stepOrSubproofNode.isStepNode();

    if (stepNode) {
      const { Statement, Reference } = dom,
            stepNode = stepOrSubproofNode,  ///
            node = stepNode, ///
            string = fileContext.nodeAsString(node),
            statement = Statement.fromStepNode(stepNode, fileContext),
            reference = Reference.fromStepNode(stepNode, fileContext);

      step = new Step(string, statement, reference);
    }

    return step;
  }
});
