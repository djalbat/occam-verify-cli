"use strict";

import dom from "../../dom";
import LocalContext from "../../context/local";

import { domAssigned } from "../../dom";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions } from "../../utilities/substitutions";

export default domAssigned(class DefinedAssertion {
  constructor(string, node, tokens, term, frame, negated) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.term = term;
    this.frame= frame;
    this.negated = negated;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
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

    const definedAssertionString = this.string; ///

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

    const definedAssertionString = this.string; ///

    context.trace(`Verifying the '${definedAssertionString}' stated defined assertion...`);

    verifiesWhenStated = true;

    if (verifiesWhenStated) {
      context.debug(`...verified the '${definedAssertionString}' stated defined assertion.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const definedAssertionString = this.string; ///

    context.trace(`Verifying the '${definedAssertionString}' derived defined assertion...`);

    verifiesWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, context);

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${definedAssertionString}' derived defined assertion.`);
    }

    return verifiesWhenDerived;
  }

  unifyIndependently(substitutions, context) {
    let unifiesIndependently;

    const definedAssertionString = this.string; ///

    context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);

    const localContext = LocalContext.fromContextAndTokens(context, this.tokens);

    context = localContext; ///

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
      const { Term, Frame } = dom,
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
    const { Variable } = dom,
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
    const { SimpleReference } = dom,
          frameNode = frame.getNode(),
          simpleReference = SimpleReference.fromFrameNode(frameNode, context),
          simpleReferenceDefined = context.isSimpleReferenceDefined(simpleReference);

    if (!negated && simpleReferenceDefined) {
      verifiesWhenDerived = true;
    }

    if (negated && !simpleReferenceDefined) {
      verifiesWhenDerived = true;
    }
  }

  return verifiesWhenDerived;
}
