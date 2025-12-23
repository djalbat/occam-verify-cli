"use strict";

import ontology from "../../ontology";
import Assertion from "../assertion";
import TemporaryContext from "../../context/temporary";

import { define } from "../../ontology";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions } from "../../utilities/substitutions";

export default define(class DefinedAssertion extends Assertion {
  constructor(string, node, tokens, term, frame, negated) {
    super(string, node, tokens);

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

    const termVerifies = this.verifyTerm(assignments, stated, context),
          frameVerifies = this.verifyFrame(assignments, stated, context);

    if (termVerifies || frameVerifies) {
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

  verifyTerm(assignments, stated, context) {
    let termVerifies = false;

    if (this.term !== null) {
      const termString = this.term.getString(); ///

      context.trace(`Verifying the '${termString}' term...`);

      const termSimple = this.term.isSimple();

      if (!termSimple) {
        context.debug(`The '${termString}' term is not simple.`);
      } else {
        termVerifies = this.term.verify(context, () => {
          const verifiesAhead = true;

          return verifiesAhead;
        });

        if (termVerifies) {
          context.debug(`...verified the '${termString}' term.`);
        }
      }
    }

    return termVerifies;
  }

  verifyFrame(assignments, stated, context) {
    let frameVerifies = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString(); ///

      context.trace(`Verifying the '${frameString}' frame...`);

      const frameSimple = this.frame.isSimple();

      if (!frameSimple) {
        context.debug(`The '${frameString}' frame is not simple.`);
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

    verifiesWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, context);

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${definedAssertionString}' derived defined assertion.`);
    }

    return verifiesWhenDerived;
  }

  unifyIndependently(substitutions, generalContext, specificContext) {
    let unifiesIndependently;

    const context = generalContext, ///
          definedAssertionString = this.getString(); ///

    context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);

    const term = termFromTermAndSubstitutions(this.term, substitutions, context),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions, context),
          verifiesWhenDerived = verifyWhenDerived(term, frame, this.negated, context);

    unifiesIndependently = verifiesWhenDerived; ///

    if (unifiesIndependently) {
      context.debug(`...unified the '${definedAssertionString}' defined assertion independently.`);
    }

    return unifiesIndependently;
  }

  static name = "DefinedAssertion";

  static fromStatementNode(statementNode, context) {
    let definedAssertion = null;

    const definedAssertionNode = statementNode.getDefinedAssertionNode();

    if (definedAssertionNode !== null) {
      const { Term, Frame } = ontology,
            node = definedAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            negated = definedAssertionNode.isNegated(),
            term = Term.fromDefinedAssertionNode(definedAssertionNode, context),
            frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context);

      definedAssertion = new DefinedAssertion(string, node, tokens, term, frame, negated);
    }

    return definedAssertion;
  }
});

function verifyWhenDerived(term, frame, negated, context) {
  let verifiesWhenDerived = false;

  if (term !== null) {
    const { Variable } = ontology,
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
    const { Metavariable } = ontology,
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
