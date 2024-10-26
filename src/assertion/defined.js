"use strict";

import shim from "../shim";

import { nodeQuery } from "../utilities/query";
import { isAssertionNegated } from "../utilities/assertion";
import { variableNameFromVariableNode } from "../utilities/name";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions } from "../utilities/substitutions";

const variableNodeQuery = nodeQuery("/term/variable!"),
      metavariableNodeQuery = nodeQuery("/frame/metavariable!");

export default class DefinedAssertion {
  constructor(string, node, term, frame, negated) {
    this.string = string;
    this.node = node;
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

  getTerm() {
    return this.term;
  }

  getFrame() {
    return this.frame;
  }

  isNegated() {
    return this.negated;
  }

  resolve(substitutions, context) {
    let resolved;

    const definedAssertionString = this.string; ///

    context.trace(`Resolving the '${definedAssertionString}' defined assertion...`);

    const term = termFromTermAndSubstitutions(this.term, substitutions),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions),
          verifiedWhenDerived = verifyWhenDerived(term, frame, this.negated, context);

    resolved = verifiedWhenDerived; ///

    if (resolved) {
      context.debug(`...resolved the '${definedAssertionString}' defined assertion.`);
    }

    return resolved;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const definedAssertionString = this.string; ///

    context.trace(`Verifying the '${definedAssertionString}' defined assertion...`);

    stated = true;  ///

    assignments = null; ///

    let termVerified = false,
        frameVerified = false;

    if (this.term !== null) {
      termVerified = this.term.verify(context, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });
    }

    if (this.frame!== null) {
      frameVerified = this.frame.verify(assignments, stated, context);
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

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    let definedAssertion = null;

    if (definedAssertionNode !== null) {
      const { Term, Frame } = shim,
            node = definedAssertionNode,  ///
            string = context.nodeAsString(node),
            term = Term.fromDefinedAssertionNode(definedAssertionNode, context),
            frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context),
            definedAssertionNegated = isAssertionNegated(definedAssertionNode),
            negated = definedAssertionNegated;  ///

      definedAssertion = new DefinedAssertion(string, node, term, frame, negated);
    }

    return definedAssertion;
  }
}

function verifyWhenDerived(term, frame, negated, context) {
  let verifiedWhenDerived = false;

  if (term !== null) {
    const termNode = term.getNode(),
          variableNode = variableNodeQuery(termNode),
          variableName = variableNameFromVariableNode(variableNode),
          variableDefined = context.isVariableDefinedByVariableName(variableName);

    if (!negated && variableDefined) {
      verifiedWhenDerived = true;
    }

    if (negated && !variableDefined) {
      verifiedWhenDerived = true;
    }
  }

  if (frame!== null) {
    const frameNode = frame.getNode(),
          metavariableNode = metavariableNodeQuery(frameNode),
          metavariableDefined = context.isMetavariableDefinedByMetavariableNode(metavariableNode);

    if (!negated && metavariableDefined) {
      verifiedWhenDerived = true;
    }

    if (negated && !metavariableDefined) {
      verifiedWhenDerived = true;
    }
  }

  return verifiedWhenDerived;
}