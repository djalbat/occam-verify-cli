"use strict";

import shim from "../shim";

import { isAssertionNegated } from "../utilities/assertion";
import { variableNameFromVariableNode, metavariableNameFromMetavariableNode } from "../utilities/name";

export default class DefinedAssertion {
  constructor(string, node, term, frame) {
    this.string = string;
    this.node = node;
    this.term = term;
    this.frame= frame
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

  getStatement() {
    return this.frame;
  }

  verify(assignments, stated, localContext) {
    let verified = false;

    const definedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`);

    let termVerified = true,  ///
        frameVerified = true; ///

    if (this.term !== null) {
      termVerified = this.term.verify(localContext, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });
    }

    if (this.frame!== null) {
      frameVerified = this.frame.verify(localContext);
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

    debugger

    if (this.term !== null) {

    }

    if (this.frame!== null) {

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

function verifyDerivedDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
  let derivedDefinedAssertionVerified = false;

  if (!stated) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' derived defined assertion...`, definedAssertionNode);

    const assertionNegated = isAssertionNegated(definedAssertionNode),
      metavariableNode = metavariableNodeQuery(definedAssertionNode),
      variableNode = variableNodeQuery(definedAssertionNode);

    if (false) {
      ///
    } else if (metavariableNode !== null) {
      const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        metavariableDefinedByMetavariableName = localContext.isMetavariableDefinedByMetavariableName(metavariableName);

      if (!assertionNegated) {
        if (metavariableDefinedByMetavariableName) {
          derivedDefinedAssertionVerified = true;
        }
      }

      if (assertionNegated) {
        if (!metavariableDefinedByMetavariableName) {
          derivedDefinedAssertionVerified = true;
        }
      }
    } else if (variableNode !== null) {
      const variableName = variableNameFromVariableNode(variableNode),
        variable = localContext.findVariableByVariableName(variableName),
        variableDefined = localContext.isVariableDefined(variable);

      if (!assertionNegated) {
        if (variableDefined) {
          derivedDefinedAssertionVerified = true;
        }
      }

      if (assertionNegated) {
        if (!variableDefined) {
          derivedDefinedAssertionVerified = true;
        }
      }
    }

    if (derivedDefinedAssertionVerified) {
      localContext.debug(`...verified the '${definedAssertionString}' derived defined assertion.`, definedAssertionNode);
    }
  }

  return derivedDefinedAssertionVerified;
}
