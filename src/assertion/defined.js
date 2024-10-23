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

  resolve(substitutions, localContext) {
    let resolved;

    const definedAssertionString = this.string; ///

    localContext.trace(`Resolving the '${definedAssertionString}' defined assertion...`);

    const term = termFromTermAndSubstitutions(this.term, substitutions),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions),
          verifiedWhenDerived = verifyWhenDerived(term, frame, this.negated, localContext);

    resolved = verifiedWhenDerived; ///

    if (resolved) {
      localContext.debug(`...resolved the '${definedAssertionString}' defined assertion.`);
    }

    return resolved;
  }

  verify(assignments, stated, localContext) {
    let verified = false;

    const definedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`);

    stated = true;  ///

    assignments = null; ///

    let termVerified = false,
        frameVerified = false;

    if (this.term !== null) {
      termVerified = this.term.verify(localContext, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });
    }

    if (this.frame!== null) {
      frameVerified = this.frame.verify(assignments, stated, localContext);
    }

    if (termVerified || frameVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(localContext);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(localContext);
      }

      if (verifiedWhenStated || verifiedWhenDerived) {
        verified = true;
      }
    }

    if (verified) {
      localContext.debug(`...verified the '${definedAssertionString}' defined assertion.`);
    }

    return verified;
  }

  verifyWhenStated(localContext) {
    let verifiedWhenStated;

    const definedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${definedAssertionString}' stated defined assertion...`);

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      localContext.debug(`...verified the '${definedAssertionString}' stated defined assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(localContext) {
    let verifiedWhenDerived;

    const definedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${definedAssertionString}' derived defined assertion...`);

    verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, localContext);

    if (verifiedWhenDerived) {
      localContext.debug(`...verified the '${definedAssertionString}' derived defined assertion.`);
    }

    return verifiedWhenDerived;
  }

  static fromDefinedAssertionNode(definedAssertionNode, localContext) {
    let definedAssertion = null;

    if (definedAssertionNode !== null) {
      const { Term, Frame } = shim,
            node = definedAssertionNode,  ///
            string = localContext.nodeAsString(node),
            term = Term.fromDefinedAssertionNode(definedAssertionNode, localContext),
            frame = Frame.fromDefinedAssertionNode(definedAssertionNode, localContext),
            definedAssertionNegated = isAssertionNegated(definedAssertionNode),
            negated = definedAssertionNegated;  ///

      definedAssertion = new DefinedAssertion(string, node, term, frame, negated);
    }

    return definedAssertion;
  }
}

function verifyWhenDerived(term, frame, negated, localContext) {
  let verifiedWhenDerived = false;

  if (term !== null) {
    const termNode = term.getNode(),
          variableNode = variableNodeQuery(termNode),
          variableName = variableNameFromVariableNode(variableNode),
          variableDefined = localContext.isVariableDefinedByVariableName(variableName);

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
          metavariableDefined = localContext.isMetavariableDefinedByMetavariableNode(metavariableNode);

    if (!negated && metavariableDefined) {
      verifiedWhenDerived = true;
    }

    if (negated && !metavariableDefined) {
      verifiedWhenDerived = true;
    }
  }

  return verifiedWhenDerived;
}