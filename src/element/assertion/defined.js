"use strict";

import elements from "../../elements";
import Assertion from "../assertion";

import { define } from "../../elements";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions } from "../../utilities/substitutions";

export default define(class DefinedAssertion extends Assertion {
  constructor(context, string, node, term, frame, negated) {
    super(context, string, node);

    this.term = term;
    this.frame= frame;
    this.negated = negated;
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

  verify(assignments, stated, context) {
    let verifies = false;

    const definedAssertionString = this.getString(); ///

    context.trace(`Verifying the '${definedAssertionString}' defined assertion...`);

    const termValidates = this.validateTerm(assignments, stated, context),
          frameVerifies = this.verifyFrame(assignments, stated, context);

    if (termValidates || frameVerifies) {
      let verifiesWhenStated = false,
          verifiesWhenDerived = false;

      if (stated) {
        verifiesWhenStated = this.verifyWhenStated(assignments, context);
      } else {
        verifiesWhenDerived = this.verifyWhenDerived(context);
      }

      if (verifiesWhenStated || verifiesWhenDerived) {
        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${definedAssertionString}' defined assertion.`);
    }

    return verifies;
  }

  validateTerm(assignments, stated, context) {
    let termValidates = false;

    if (this.term !== null) {
      const termString = this.term.getString(); ///

      context.trace(`Validating the '${termString}' term...`);

      const termSingular = this.term.isSingular();

      if (!termSingular) {
        context.debug(`The '${termString}' term is not singular.`);
      } else {
        termValidates = this.term.validate(context, () => {
          const verifiesAhead = true;

          return verifiesAhead;
        });

        if (termValidates) {
          context.debug(`...validated the '${termString}' term.`);
        }
      }
    }

    return termValidates;
  }

  verifyFrame(assignments, stated, context) {
    let frameVerifies = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString(); ///

      context.trace(`Verifying the '${frameString}' frame...`);

      const frameSingular = this.frame.isSingular();

      if (!frameSingular) {
        context.debug(`The '${frameString}' frame is not singular.`);
      } else {
        stated = true;  ///

        assignments = null; ///

        frameVerifies = this.frame.verify(assignments, stated, context);

        if (frameVerifies) {
          context.debug(`...verified the '${frameString}' frame.`);
        }
      }
    }

    return frameVerifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated;

    const definedAssertionString = this.getString(); ///

    context.trace(`Verifying the '${definedAssertionString}' stated defined assertion...`);

    verifiesWhenStated = true;

    if (verifiesWhenStated) {
      context.debug(`...verified the '${definedAssertionString}' stated defined assertion.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const definedAssertionString = this.getString(); ///

    context.trace(`Verifying the '${definedAssertionString}' derived defined assertion...`);

    const generalContext = null,
          specificContext = context;  ///

    verifiesWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, generalContext, specificContext);

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${definedAssertionString}' derived defined assertion.`);
    }

    return verifiesWhenDerived;
  }

  unifyIndependently(substitutions, generalContext, specificContext) {
    let unifiesIndependently;

    const context = specificContext, ///
          definedAssertionString = this.getString(); ///

    context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);

    const term = termFromTermAndSubstitutions(this.term, substitutions, generalContext, specificContext),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions, generalContext, specificContext),
          verifiesWhenDerived = verifyWhenDerived(term, frame, this.negated, generalContext, specificContext);

    unifiesIndependently = verifiesWhenDerived; ///

    if (unifiesIndependently) {
      context.debug(`...unified the '${definedAssertionString}' defined assertion independently.`);
    }

    return unifiesIndependently;
  }

  static name = "DefinedAssertion";
});

function verifyWhenDerived(term, frame, negated, generalContext, specificContext) {
  let verifiesWhenDerived = false;

  const context = specificContext;  ///

  if (term !== null) {
    const { Variable } = elements,
          termNode = term.getNode(),
          variable = Variable.fromTermNode(termNode, context),
          generalContext = context, ///
          variableDefined = generalContext.isVariableDefined(variable);

    if (!negated && variableDefined) {
      verifiesWhenDerived = true;
    }

    if (negated && !variableDefined) {
      verifiesWhenDerived = true;
    }
  }

  if (frame!== null) {
    const { Metavariable } = elements,
          frameNode = frame.getNode(),
          metavariable = Metavariable.fromFrameNode(frameNode, context),
          metavariableDefined = context.isMetavariableDefined(metavariable);

    if (!negated && metavariableDefined) {
      verifiesWhenDerived = true;
    }

    if (negated && !metavariableDefined) {
      verifiesWhenDerived = true;
    }
  }

  return verifiesWhenDerived;
}
