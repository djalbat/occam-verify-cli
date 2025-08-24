"use strict";

import dom from "../dom";
import unifyMixins from "../mixins/step/unify";
import Substitutions from "../substitutions";
import equationalUnifier from "../unifier/equantional";

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
    let unifies;

    const stepString = this.string;  ///

    context.trace(`Unifying the '${stepString}' step...`);

    unifies = unifyMixins.some((unifyMixin) => {
      const unifies = unifyMixin(this.statement, this.reference, substitutions, context);

      if (unifies) {
        return true;
      }
    });

    if (unifies) {
      context.debug(`...unified the '${stepString}' step.`);
    }

    return unifies;
  }

  verify(substitutions, assignments, context) {
    let verifies = false;

    const stepString = this.string; ///

    context.trace(`Verifying the '${stepString}' step...`);

    if (this.statement !== null) {
      const qualified = this.isQualified(),
            stated = qualified, ///
            statementVerifies = this.statement.verify(assignments, stated, context);

      if (statementVerifies) {
        if (this.reference === null) {
          verifies = true;
        } else {
          const referenceVerifies = this.reference.verify(context);

          verifies = referenceVerifies; ///
        }
      }
    } else {
      context.debug(`Cannot verify the '${stepString}' step because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${stepString}' step.`);
    }

    return verifies;
  }

  equateWithStatement(statement, context) {
    let statementEquates;

    const statementA = statement,  ///
          statementB = this.statement,  ///
          statementANode = statementA.getNode(),
          statementBNode = statementB.getNode(),
          statementsEquates = equationalUnifier.equateStatements(statementANode, statementBNode, context);

    statementEquates = statementsEquates;  ///

    return statementEquates;
  }

  unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
    let unifiesWithSatisfiesAssertion = false;

    const stepString = this.string, ///
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion...`);

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference);

    if (axiom !== null) {
      const step = this,  ///
            substitutions = Substitutions.fromNothing(),
            stepUnifies = axiom.unifyStep(step, substitutions, context);

      if (stepUnifies) {
        const substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);

        if (substitutionsCompare) {
          unifiesWithSatisfiesAssertion = true;
        }
      }
    }

    if (unifiesWithSatisfiesAssertion) {
      context.debug(`...unified the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion.`);
    }

    return unifiesWithSatisfiesAssertion;
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
