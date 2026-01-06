"use strict";

import Element from "../element";
import elements from "../elements";
import unifyMixins from "../mixins/step/unify";
import TemporaryContext from "../context/temporary";

import { define } from "../elements";
import { equateStatements } from "../process/equate";
import { propertyAssertionFromStatement } from "../utilities/statement";

export default define(class Step extends Element {
  constructor(context, string, node, statement, reference, satisfiesAssertion) {
    super(context, string, node);

    this.statement = statement;
    this.reference = reference;
    this.satisfiesAssertion = satisfiesAssertion;
  }

  getStatement() {
    return this.statement;
  }

  getReference() {
    return this.reference;
  }

  getSatisfiesAssertion() {
    return this.satisfiesAssertion;
  }

  isSatisfied() {
    const satisfied = (this.satisfiesAssertion !== null);

    return satisfied;
  }

  isQualified() {
    const qualified = (this.reference !== null);

    return qualified;
  }

  isStated() {
    const qualified = this.isQualified(),
          stated = qualified; ///

    return stated;
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

  verify(substitutions, assignments, context) {
    let verifies = false;

    const temporaryContext = TemporaryContext.fromNothing(context);

    context = temporaryContext; ///

    const stepString = this.string; ///

    context.trace(`Verifying the '${stepString}' step...`, this.node);

    if (this.statement !== null) {
      const stated = this.isStated(),
            statementVerifies = this.statement.verify(assignments, stated, context);

      if (statementVerifies) {
        const qualified = this.isQualified(),
              satisfied = this.isSatisfied();

        if (false) {
          ///
        } else if (qualified) {
          const referenceVerifies = this.reference.verify(context);

          if (referenceVerifies) {
            verifies = true;
          }
        } else if (satisfied) {
          const stated = true,
                assignments = null,
                satisfiesAssertionVerifies = this.satisfiesAssertion.verify(assignments, stated, context);

          if (satisfiesAssertionVerifies) {
            verifies = true;
          }
        } else {
          verifies = true;
        }
      }
    } else {
      context.debug(`Cannot verify the '${stepString}' step because it is nonsense.`, this.node);
    }

    if (verifies) {
      this.context = context;

      context.debug(`...verified the '${stepString}' step.`, this.node);
    }

    return verifies;
  }

  unify(substitutions, context) {
    let unifies;

    context = this.context;

    const stepString = this.string;  ///

    context.trace(`Unifying the '${stepString}' step...`, this.node);

    unifies = unifyMixins.some((unifyMixin) => {
      const unifies = unifyMixin(this.statement, this.reference, this.satisfiesAssertion, substitutions, context);

      if (unifies) {
        return true;
      }
    });

    if (unifies) {
      context.debug(`...unified the '${stepString}' step.`, this.node);
    }

    return unifies;
  }

  equateWithStatement(statement, context) {
    let statementEquates;

    const leftStatement = statement,  ///
          rightStatement = this.statement,  ///
          leftStatementNode = leftStatement.getNode(),
          rightStatementNode = rightStatement.getNode(),
          statementsEquate = equateStatements(leftStatementNode, rightStatementNode, context);

    statementEquates = statementsEquate;  ///

    return statementEquates;
  }

  unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
    let unifiesWithSatisfiesAssertion = false;

    const stepString = this.string, ///
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion...`, this.node);

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference);

    if (axiom !== null) {
      const { Substitutions } = elements,
            step = this,  ///
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
      context.debug(`...unified the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion.`, this.node);
    }

    return unifiesWithSatisfiesAssertion;
  }

  static name = "Step";
});
