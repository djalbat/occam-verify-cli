"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { instantiate } from "../../utilities/context";
import { instantiateDefinedAssertion } from "../../process/instantiate";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions } from "../../utilities/substitutions";
import { termFromJDefinedAssertionNode, frameFromJDefinedAssertionNode, negatedFromJDefinedAssertionNode, definedAssertionFromStatementNode } from "../../utilities/element";

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

  validate(context) {
    let definedAssertion = null;

    const definedAssertionString = this.getString(); ///

    context.trace(`Validating the '${definedAssertionString}' defined assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion !== null) {
      definedAssertion = validAssertion;  ///

      context.debug(`...the '${definedAssertionString}' defined definedAssertion is already valid.`);
    } else {
      let validates = false;

      const termValidates = this.validateTerm(context),
            frameValidates = this.validateFrame(context);

      if (termValidates || frameValidates) {
        const stated = context.isStated();

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

        definedAssertion = assertion; ///

        context.addAssertion(assertion);

        context.debug(`...validated the '${definedAssertionString}' defined assertion.`);
      }
    }

    return definedAssertion;
  }

  validateTerm(context) {
    let termValidates = false;

    if (this.term !== null) {
      const termString = this.term.getString(), ///
            definedAssertionString = this.getString();  ///

      context.trace(`Validating the '${definedAssertionString}' defined assertion's '${termString}' term...`);

      const termSingular = this.term.isSingular();

      if (!termSingular) {
        context.debug(`The '${termString}' term is not singular.`);
      } else {
        const term = this.term.validate(context, (term) => {
                const validatesForwards = true;

                return validatesForwards;
              });

        if (term !== null) {
          this.term = term; ///

          termValidates = true;
        }

        if (termValidates) {
          context.debug(`...validates the'${definedAssertionString}' defined assertion's '${termString}' term.`);
        }
      }
    }

    return termValidates;
  }

  validateFrame(context) {
    let frameValidates = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString(), ///
            definedAssertionString = this.getString();  ///

      context.trace(`Validating the'${definedAssertionString}' defined assertion's '${frameString}' frame...`);

      const frameSingular = this.frame.isSingular();

      if (frameSingular) {
        const frame = this.frame.validate(context);

        if (frame !== null) {
          this.frame = frame;

          frameValidates = true;
        }
      } else {
        context.debug(`The '${frameString}' frame is not singular.`);
      }

      if (frameValidates) {
        context.debug(`...validates the'${definedAssertionString}' defined assertion's '${frameString}' frame.`);
      }
    }

    return frameValidates;
  }

  validateWhenStated(context) {
    let validatesWhenStated;

    const definedAssertionString = this.getString(); ///

    context.trace(`Validating the '${definedAssertionString}' stated defined assertion...`);

    validatesWhenStated = true;

    if (validatesWhenStated) {
      context.debug(`...validates the '${definedAssertionString}' stated defined assertion.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived;

    const definedAssertionString = this.getString(); ///

    context.trace(`Validating the '${definedAssertionString}' derived defined assertion...`);

    const generalContext = null,
          specificContext = context;  ///

    validatesWhenDerived = validateWhenDerived(this.term, this.frame, this.negated, generalContext, specificContext);

    if (validatesWhenDerived) {
      context.debug(`...validates the '${definedAssertionString}' derived defined assertion.`);
    }

    return validatesWhenDerived;
  }

  unifyIndependently(generalContext, specificContext) {
    let unifiesIndependently = false;

    const context = specificContext, ///
          definedAssertionString = this.getString(); ///

    context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);

    const term = termFromTermAndSubstitutions(this.term, generalContext, specificContext),
          frame = frameFromFrameAndSubstitutions(this.frame, generalContext, specificContext),
          validatesWhenDerived = validateWhenDerived(term, frame, this.negated, generalContext, specificContext);

    if (validatesWhenDerived) {
      unifiesIndependently = true;
    }

    if (unifiesIndependently) {
      context.debug(`...unified the '${definedAssertionString}' defined assertion independently.`);
    }

    return unifiesIndependently;
  }

  static name = "DefinedAssertion";

  static fromJSON(json, context) {
    let definedAssertion = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string } = json,
              definedAssertionNode = instantiateDefinedAssertion(string, context),
              node = definedAssertionNode,  ///
              term = termFromJDefinedAssertionNode(definedAssertionNode, context),
              frame = frameFromJDefinedAssertionNode(definedAssertionNode, context),
              negated = negatedFromJDefinedAssertionNode(definedAssertionNode, context);

        context = null;

        definedAssertion = new DefinedAssertion(context, string, node, term, frame, negated);
      }, context);
    }

    return definedAssertion;
  }

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          definedAssertion = definedAssertionFromStatementNode(statementNode, context);

    return definedAssertion;
  }
});

function validateWhenDerived(term, frame, negated, generalContext, specificContext) {
  let validatesWhenDerived = false;

  const context = specificContext;  ///

  if (term !== null) {
    const variableIdentifier = term.getVariableIdentifier(),
          declaredDariable = context.findDeclaredVariableByVariableIdentifier(variableIdentifier),
          declaredDariableDefined = isVariableDefined(declaredDariable, context);

    if (!negated && declaredDariableDefined) {
      validatesWhenDerived = true;
    }

    if (negated && !variableDefined) {
      validatesWhenDerived = true;
    }
  }

  if (frame!== null) {
    const metavariableName = frame.getMetavariableName(),
          declaredMetavariable = context.findDeclaredMetavariableByMetavariableName(metavariableName),
          metavariableDefined = isMetavariableDefined(declaredMetavariable, context);

    if (!negated && metavariableDefined) {
      validatesWhenDerived = true;
    }

    if (negated && !metavariableDefined) {
      validatesWhenDerived = true;
    }
  }

  return validatesWhenDerived;
}

function isVariableDefined(variable, context) {
  const equivalences = context.getEquivalences(),
        groundedTerms = [],
        definedVariables = [];

  equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);

  const variableMatchesDefinedVariable = definedVariables.some((definedVariable) => {
          const definedVariableComparesToVariable = definedVariable.compareVariable(variable);

          if (definedVariableComparesToVariable === variable) {
            return true;
          }
        }),
        variableDefined = variableMatchesDefinedVariable; ///

  return variableDefined;
}

function isMetavariableDefined(metavariable, context) {
  const metavariableNode = metavariable.getNode(),
        judgementPresent = context.isJudgementPresentByMetavariableNode(metavariableNode),
        metavariableDefined = judgementPresent; ///

  return metavariableDefined
}
