"use strict";

import dom from "../../dom";
import LocalContext from "../../context/local";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { isAssertionNegated } from "../../utilities/assertion";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions } from "../../utilities/substitutions";

const definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion");

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

  unifyIndependently(substitutions, context) {
    let unifiedIndependently;

    const definedAssertionString = this.string; ///

    context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);

    const localContext = LocalContext.fromContextAndTokens(context, this.tokens);

    context = localContext; ///

    const term = termFromTermAndSubstitutions(this.term, substitutions, context),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions, context),
          verifiedWhenDerived = verifyWhenDerived(term, frame, this.negated, context);

    unifiedIndependently = verifiedWhenDerived; ///

    if (unifiedIndependently) {
      context.debug(`...unified the '${definedAssertionString}' defined assertion independently.`);
    }

    return unifiedIndependently;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const definedAssertionString = this.string; ///

    context.trace(`Verifying the '${definedAssertionString}' defined assertion...`);

    let termVerified = false,
        frameVerified = false;

    if (this.term !== null) {
      termVerified = this.term.verify(context, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });
    }

    if (this.frame!== null) {
      frameVerified = this.verifyFrame(this.frame, assignments, stated, context);
    }

    if (termVerified || frameVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(context);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(context);
      }

      if (verifiedWhenStated || verifiedWhenDerived) {
        verified = true;
      }
    }

    if (verified) {
      context.debug(`...verified the '${definedAssertionString}' defined assertion.`);
    }

    return verified;
  }

  verifyFrame(frame, assignments, stated, context) {
    stated = true;  ///

    assignments = null; ///

    const frameVerified = frame.verify(assignments, stated, context);

    return frameVerified;
  }

  verifyWhenStated(context) {
    let verifiedWhenStated;

    const definedAssertionString = this.string; ///

    context.trace(`Verifying the '${definedAssertionString}' stated defined assertion...`);

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      context.debug(`...verified the '${definedAssertionString}' stated defined assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiedWhenDerived;

    const definedAssertionString = this.string; ///

    context.trace(`Verifying the '${definedAssertionString}' derived defined assertion...`);

    verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, context);

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${definedAssertionString}' derived defined assertion.`);
    }

    return verifiedWhenDerived;
  }

  static name = "DefinedAssertion";

  static fromStatementNode(statementNode, context) {
    let definedAssertion = null;

    const definedAssertionNode = definedAssertionNodeQuery(statementNode);

    if (definedAssertionNode !== null) {
      const { Term, Frame } = dom,
            node = definedAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            term = Term.fromDefinedAssertionNode(definedAssertionNode, context),
            frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context),
            definedAssertionNegated = isAssertionNegated(definedAssertionNode),
            negated = definedAssertionNegated;  ///

      definedAssertion = new DefinedAssertion(string, node, tokens, term, frame, negated);
    }

    return definedAssertion;
  }
});

function verifyWhenDerived(term, frame, negated, context) {
  let verifiedWhenDerived = false;

  if (term !== null) {
    const { Variable } = dom,
          termNode = term.getNode(),
          variable = Variable.fromTermNode(termNode, context),
          generalContext = context, ///
          variableDefined = generalContext.isVariableDefined(variable);

    if (!negated && variableDefined) {
      verifiedWhenDerived = true;
    }

    if (negated && !variableDefined) {
      verifiedWhenDerived = true;
    }
  }

  if (frame!== null) {
    const { Metavariable } = dom,
          frameNode = frame.getNode(),
          metavariable = Metavariable.fromFrameNode(frameNode, context),
          metavariableDefined = context.isMetavariableDefined(metavariable);

    if (!negated && metavariableDefined) {
      verifiedWhenDerived = true;
    }

    if (negated && !metavariableDefined) {
      verifiedWhenDerived = true;
    }
  }

  return verifiedWhenDerived;
}
