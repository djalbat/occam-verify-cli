"use strict";

import shim from "../shim";

import { isAssertionNegated } from "../utilities/assertion";

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

  verify(assignments, stated, localContext) {
    let verified = false;

    const definedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`);

    stated = true;  ///

    assignments = null; ///

    let termVerified = true,  ///
        frameVerified = true; ///

    if (this.term !== null) {
      termVerified = this.term.verify(localContext, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });
    }

    if (this.frame!== null) {
      frameVerified = this.frame.verify(assignments, stated, localContext);
    }

    if (termVerified && frameVerified) {
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
    let verifiedWhenDerived = false;

    const definedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${definedAssertionString}' derived defined assertion...`);

    if (this.term !== null) {
      const { Variable } = shim,
            termNode = this.term.getNode(),
            variable = Variable.fromTermNode(termNode, localContext),
            variableDefined = localContext.isVariableDefined(variable);

      if (!this.negated && variableDefined) {
        verifiedWhenDerived = true;
      }

      if (this.negated && !variableDefined) {
        verifiedWhenDerived = true;
      }
    }

    if (this.frame!== null) {
      debugger

      const { Metavariable } = shim,
            frameNode = this.frame.getNode(),
            metavariable = Metavariable.fromTermNode(frameNode, localContext),
            metavariableDefined = localContext.isMetametavariableDefined(metavariable);

      if (!this.negated && metavariableDefined) {
        verifiedWhenDerived = true;
      }

      if (this.negated && !metavariableDefined) {
        verifiedWhenDerived = true;
      }
    }

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
