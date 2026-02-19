"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions, statementFromStatementAndSubstitutions } from "../../utilities/substitutions";

export default define(class ContainedAssertion extends Assertion {
  constructor(context, string, node, term, frame, negated, statement) {
    super(context, string, node);

    this.term = term;
    this.frame = frame;
    this.negated = negated;
    this.statement = statement;
  }

  getTerm() {
    return this.term;
  }

  getFrame() {
    return this.frame;
  }

  isNegated() {
    return this.negated;
  }

  getStatement() {
    return this.statement;
  }

  getContainedAssertionNode() {
    const node = this.getNode(),
          containedAssertionNode = node;  ///

    return containedAssertionNode;
  }

  validate(assignments, stated, context) {
    let validates = false;

    const containedAssertionString = this.getString(); ///

    context.trace(`Validating the '${containedAssertionString}' contained assertion...`);

    const valid = this.isValid(context);

    if (!valid) {
      validates = true;

      context.debug(`...the '${containedAssertionString}' contained assertion is already valid.`);
    } else {
      const termValidates = this.validateTerm(assignments, stated, context),
            frameVerifies = this.validateFrame(assignments, stated, context),
            statementValidates = this.validateStatement(assignments, stated, context)

      if (termValidates || frameVerifies || statementValidates) {
        let validatesWhenStated = false,
            validatesWhenDerived = false;

        if (stated) {
          validatesWhenStated = this.validateWhenStated(assignments, context);
        } else {
          validatesWhenDerived = this.validateWhenDerived(context);
        }

        if (validatesWhenStated || validatesWhenDerived) {
          validates = true;
        }
      }

      if (validates) {
        const assertion = this; ///

        context.addAssertion(assertion);

        context.debug(`...validated the '${containedAssertionString}' contained assertion.`);
      }
    }

    return validates;
  }

  validateTerm(assignments, stated, context) {
    let termValidates = false;

    if (this.term !== null) {
      const termString = this.term.getString(),
            containedAssertionString = this.getString(); ///

      context.trace(`Validating the '${containedAssertionString}' contained assertino's '${termString}' term...`);

      const termSingular = this.term.isSingular();

      if (!termSingular) {
        context.debug(`The '${termString}' term is not singular.`);
      } else {
        termValidates = this.term.validate(context, () => {
          const validatesForwards = true;

          return validatesForwards;
        });

        if (termValidates) {
          context.debug(`...validated the '${containedAssertionString}' contained assertino's '${termString}' term.`);
        }
      }
    }

    return termValidates;
  }

  validateFrame(assignments, stated, context) {
    let frameVerifies = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString(),
            containedAssertionString = this.getString(); ///

      context.trace(`Validating the '${containedAssertionString}' contained assertino's '${frameString}' frame...`);

      const frameSingular = this.frame.isSingular();

      if (!frameSingular) {
        context.debug(`The '${frameString}' frame is not singular.`);
      } else {
        stated = true;  ///

        assignments = null; ///

        frameVerifies = this.frame.validate(assignments, stated, context);

        if (frameVerifies) {
          context.debug(`...validated the '${containedAssertionString}' contained assertino's '${frameString}' frame.`);
        }
      }
    }

    return frameVerifies;
  }

  validateStatement(assignments, stated, context) {
    let statementValidates = false;

    if (this.statement !== null) {
      const statementString = this.statement.getString();

      context.trace(`Validating the '${statementString}' statement...`);

      stated = true;  ///

      assignments = null; ///

      statementValidates = this.statement.validate(assignments, stated, context);

      if (statementValidates) {
        context.debug(`...validated the '${statementString}' statement.`);
      }
    }

    return statementValidates;
  }

  validateWhenStated(assignments, context) {
    let validatesWhenStated;

    const containedAssertionString = this.getString(); ///

    context.trace(`Validating the '${containedAssertionString}' stated contained assertion...`);

    validatesWhenStated = true;

    if (validatesWhenStated) {
      context.debug(`...validated the '${containedAssertionString}' stated contained assertion.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived;

    const containedAssertionString = this.getString(); ///

    context.trace(`Validating the '${containedAssertionString}' derived contained assertion...`);

    const generalCotnext = null,
          specificContext = context; ///

    validatesWhenDerived = validateWhenDerived(this.term, this.frame, this.statement, this.negated, generalCotnext, specificContext);

    if (validatesWhenDerived) {
      context.debug(`...validated the '${containedAssertionString}' derived contained assertion.`);
    }

    return validatesWhenDerived;
  }

  unifyIndependently(generalContext, specificContext) {
    let unifiesIndependently;

    const context = specificContext,  ///
          containedAssertionString = this.getString(); ///

    context.trace(`Unifying the '${containedAssertionString}' contained assertion independently...`);

    const term = termFromTermAndSubstitutions(this.term, generalContext, specificContext),
          frame = frameFromFrameAndSubstitutions(this.frame, generalContext, specificContext),
          statement = statementFromStatementAndSubstitutions(this.statement, generalContext, specificContext),
          validatesWhenDerived = validateWhenDerived(term, frame, statement, this.negated, generalContext, specificContext);

    unifiesIndependently = validatesWhenDerived; ///

    if (unifiesIndependently) {
      context.debug(`...unified the '${containedAssertionString}' contained assertion independently.`);
    }

    return unifiesIndependently;
  }

  static name = "ContainedAssertion";
});

function validateWhenDerived(term, frame, statement, negated, generalContext, specificContext) {
  let validatesWhenDerived = false;

  const context = specificContext;  ///

  if (statement !== null) {
    if (term !== null) {
      const termContained = statement.isTermContained(term, context);

      if (!negated && termContained) {
        validatesWhenDerived = true;
      }

      if (negated && !termContained) {
        validatesWhenDerived = true;
      }
    }

    if (frame !== null) {
      const frameContained = statement.isFrameContained(frame, context);

      if (!negated && frameContained) {
        validatesWhenDerived = true;
      }

      if (negated && !frameContained) {
        validatesWhenDerived = true;
      }
    }
  }

  return validatesWhenDerived;
}