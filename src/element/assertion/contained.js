"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { termToTermJSON, frameToFrameJSON, negatedToNegatedJSON, statementToStatementJSON } from "../../utilities/json";
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

  validate(stated, context) {
    let containedAssertion = null;

    const containedAssertionString = this.getString(); ///

    context.trace(`Validating the '${containedAssertionString}' contained assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion !== null) {
      containedAssertion = validAssertion;  ///

      context.debug(`...the '${containedAssertionString}' contained assertion is already valid.`);
    } else {
      let validates = false;

      const termValidates = this.validateTerm(stated, context),
            frameValidates = this.validateFrame(stated, context),
            statementValidates = this.validateStatement(stated, context)

      if (termValidates || frameValidates || statementValidates) {
        let validatesWhenStated = false,
            validatesWhenDerived = false;

        if (stated) {
          validatesWhenStated = this.validateWhenStated(context);
        } else {
          validatesWhenDerived = this.validateWhenDerived(context);
        }

        if (validatesWhenStated || validatesWhenDerived) {
          validates = true;
        }
      }

      if (validates) {
        const assertion = this; ///

        containedAssertion = assertion;  ///

        context.addAssertion(assertion);

        context.debug(`...validated the '${containedAssertionString}' contained assertion.`);
      }
    }

    return containedAssertion;
  }

  validateTerm(stated, context) {
    let termValidates = false;

    if (this.term !== null) {
      const termString = this.term.getString(),
            containedAssertionString = this.getString(); ///

      context.trace(`Validating the '${containedAssertionString}' contained assertino's '${termString}' term...`);

      const termSingular = this.term.isSingular();

      if (!termSingular) {
        context.debug(`The '${termString}' term is not singular.`);
      } else {
        const term = this.term.validate(context, () => {
          const validatesForwards = true;

          return validatesForwards;
        });

        if (term !== null) {
          this.term = term;

          termValidates = true;
        }

        if (termValidates) {
          context.debug(`...validated the '${containedAssertionString}' contained assertino's '${termString}' term.`);
        }
      }
    }

    return termValidates;
  }

  validateFrame(stated, context) {
    let frameValidates = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString(),
            containedAssertionString = this.getString(); ///

      context.trace(`Validating the '${containedAssertionString}' contained assertino's '${frameString}' frame...`);

      const frameSingular = this.frame.isSingular();

      if (!frameSingular) {
        context.debug(`The '${frameString}' frame is not singular.`);
      } else {
        stated = true;  ///

        const frame = this.frame.validate(stated, context);

        if (frame !== null) {
          this.frame = frame;

          frameValidates = true;
        }
      }

      if (frameValidates) {
        context.debug(`...validated the '${containedAssertionString}' contained assertino's '${frameString}' frame.`);
      }
    }

    return frameValidates;
  }

  validateStatement(stated, context) {
    let statementValidates = false;

    if (this.statement !== null) {
      const statementString = this.statement.getString();

      context.trace(`Validating the '${statementString}' statement...`);

      stated = true;  ///

      const statement = this.statement.validate(stated, context);

      if (statement !== null) {
        statementValidates = true;
      }

      if (statementValidates) {
        context.debug(`...validated the '${statementString}' statement.`);
      }
    }

    return statementValidates;
  }

  validateWhenStated(context) {
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

  toJSON() {
    const { name } = this.constructor,
          termJSON = termToTermJSON(this.term),
          frameJSON = frameToFrameJSON(this.frame),
          negatedJSON = negatedToNegatedJSON(this.negated),
          statementJSON = statementToStatementJSON(this.statement),
          term = termJSON,  ///
          frame = frameJSON,  ///
          negated = negatedJSON,  ///
          statement = statementJSON,  ///
          string = this.getString(),
          json = {
            name,
            string,
            term,
            frame,
            negated,
            statement
          };

    return json;
  }

  static name = "ContainedAssertion";

  static fromJSON(json, context) {
    let containedAssertion = null;

    const { name } = json;

    if (this.name === name) {
      debugger
    }

    return containedAssertion;
  }
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