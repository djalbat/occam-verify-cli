"use strict";

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

  getDefinedAssertionNode() {
    const node = this.getNode(),
          definedAssertionNode = node;  ///

    return definedAssertionNode;
  }

  validate(stated, context) {
    let definedAssertion = null;

    const definedAssertionString = this.getString(); ///

    context.trace(`Validating the '${definedAssertionString}' defined assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion !== null) {
      definedAssertion = validAssertion;  ///

      context.debug(`...the '${definedAssertionString}' defined definedAssertion is already valid.`);
    } else {
      let validates = false;

      const termValidates = this.validateTerm(stated, context),
            frameValidates = this.validateFrame(stated, context);

      if (termValidates || frameValidates) {
        let verifiesWhenStated = false,
            verifiesWhenDerived = false;

        if (stated) {
          verifiesWhenStated = this.validateWhenStated(context);
        } else {
          verifiesWhenDerived = this.validateWhenDerived(context);
        }

        if (verifiesWhenStated || verifiesWhenDerived) {
          validates = true;
        }
      }

      if (validates) {
        const assertion = this; ///

        definedAssertion = assertion; ///

        context.addAssertion(assertion);

        context.debug(`...validated the '${definedAssertionString}' defined assertion.`);
      }
    }

    return definedAssertion;
  }

  validateTerm(stated, context) {
    let termValidates = false;

    if (this.term !== null) {
      const termString = this.term.getString(), ///
            definedAssertionString = this.getString();  ///

      context.trace(`Validating the '${definedAssertionString}' defined assertino's '${termString}' term...`);

      const termSingular = this.term.isSingular();

      if (!termSingular) {
        context.debug(`The '${termString}' term is not singular.`);
      } else {
        const term = this.term.validate(context, () => {
                const validatesForwards = true;

                return validatesForwards;
              });

        if (term !== null) {
          this.term = term; ///

          termValidates = true;
        }

        if (termValidates) {
          context.debug(`...validates the'${definedAssertionString}' defined assertino's '${termString}' term.`);
        }
      }
    }

    return termValidates;
  }

  validateFrame(stated, context) {
    let frameValidates = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString(), ///
            definedAssertionString = this.getString();  ///

      context.trace(`Validating the'${definedAssertionString}' defined assertino's '${frameString}' frame...`);

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

        if (frameValidates) {
          context.debug(`...validates the'${definedAssertionString}' defined assertino's '${frameString}' frame.`);
        }
      }
    }

    return frameValidates;
  }

  validateWhenStated(context) {
    let verifiesWhenStated;

    const definedAssertionString = this.getString(); ///

    context.trace(`Validating the '${definedAssertionString}' stated defined assertion...`);

    verifiesWhenStated = true;

    if (verifiesWhenStated) {
      context.debug(`...validates the '${definedAssertionString}' stated defined assertion.`);
    }

    return verifiesWhenStated;
  }

  validateWhenDerived(context) {
    let verifiesWhenDerived;

    const definedAssertionString = this.getString(); ///

    context.trace(`Validating the '${definedAssertionString}' derived defined assertion...`);

    const generalContext = null,
          specificContext = context;  ///

    verifiesWhenDerived = validateWhenDerived(this.term, this.frame, this.negated, generalContext, specificContext);

    if (verifiesWhenDerived) {
      context.debug(`...validates the '${definedAssertionString}' derived defined assertion.`);
    }

    return verifiesWhenDerived;
  }

  unifyIndependently(generalContext, specificContext) {
    let unifiesIndependently;

    const context = specificContext, ///
          definedAssertionString = this.getString(); ///

    context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);

    const term = termFromTermAndSubstitutions(this.term, generalContext, specificContext),
          frame = frameFromFrameAndSubstitutions(this.frame, generalContext, specificContext),
          verifiesWhenDerived = validateWhenDerived(term, frame, this.negated, generalContext, specificContext);

    unifiesIndependently = verifiesWhenDerived; ///

    if (unifiesIndependently) {
      context.debug(`...unified the '${definedAssertionString}' defined assertion independently.`);
    }

    return unifiesIndependently;
  }

  toJSON() {
    debugger

    const { name } = this.constructor,
          string = this.getString(),
          json = {
            name,
            string
          };

    return json;
  }

  static name = "DefinedAssertion";

  static fromJSON(json, context) {
    let definedAssertion = null;

    const { name } = json;

    if (this.name === name) {
      debugger
    }

    return definedAssertion;
  }
});

function validateWhenDerived(term, frame, negated, generalContext, specificContext) {
  let verifiesWhenDerived = false;

  const context = specificContext;  ///

  if (term !== null) {
    const variableIdentifier = term.getVariableIdentifier(),
          variable = context.findVariableByVariableIdentifier(variableIdentifier),
          variableDefined = isVariableDefined(variable, context);

    if (!negated && variableDefined) {
      verifiesWhenDerived = true;
    }

    if (negated && !variableDefined) {
      verifiesWhenDerived = true;
    }
  }

  if (frame!== null) {
    const metavariableName = frame.getMetavariableName(),
          metavariable = context.findMetavariableByMetavariableName(metavariableName),
          metavariableDefined = isMetavariableDefined(metavariable, context);

    if (!negated && metavariableDefined) {
      verifiesWhenDerived = true;
    }

    if (negated && !metavariableDefined) {
      verifiesWhenDerived = true;
    }
  }

  return verifiesWhenDerived;
}

function isVariableDefined(variable, context) {
  const equivalences = context.getEquivalences(),
        groundedTerms = [],
        definedVariables = [];

  equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);

  const variableMatchesDefinedVariable = definedVariables.some((definedVariable) => {
          const definedVariableEqualToVariable = definedVariable.compare(variable);

          if (definedVariableEqualToVariable === variable) {
            return true;
          }
        }),
        variableDefined = variableMatchesDefinedVariable; ///

  return variableDefined;
}

function isMetavariableDefined(metavariable, context) {
  const metavariableName = metavariable.getNode(),
        judgementPresent = context.isJudgementPresentByMetavariableName(metavariableName),
        metavariableDefined = judgementPresent; ///

  return metavariableDefined
}
