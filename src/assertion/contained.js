"use strict";

import shim from "../shim";

import { isAssertionNegated } from "../utilities/assertion";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions, statementFromStatementAndSubstitutions } from "../utilities/substitutions";

export default class ContainedAssertion {
  constructor(string, node, term, frame, negated, statement) {
    this.string = string;
    this.node = node;
    this.term = term;
    this.frame = frame;
    this.negated = negated;
    this.statement = statement;
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

  getStatement() {
    return this.statement;
  }

  resolve(substitutions, localContext) {
    let resolved;

    const containedAssertionString = this.string; ///

    localContext.trace(`Resolving the '${containedAssertionString}' contained assertion...`);

    const term = termFromTermAndSubstitutions(this.term, substitutions),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions),
          statement = statementFromStatementAndSubstitutions(this.statement, substitutions),
          verifiedWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, localContext);

    resolved = verifiedWhenDerived; ///

    if (resolved) {
      localContext.debug(`...resolved the '${containedAssertionString}' contained assertion.`);
    }

    return resolved;
  }

  verify(assignments, stated, localContext) {
    let verified = false;

    const containedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${containedAssertionString}' contained assertion...`);

    stated = true;  ///

    assignments = null; ///

    let termVerified = false,
        frameVerified = false,
        statementVerified = false;

    if (this.term !== null) {
      termVerified = this.term.verify(localContext, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });
    }

    if (this.frame !== null) {
      frameVerified = this.frame.verify(assignments, stated, localContext);
    }

    if (this.statement !== null) {
      statementVerified = this.statement.verify(assignments, stated, localContext);
    }

    if (termVerified || frameVerified || statementVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(localContext);
      }

      if (verifiedWhenStated || verifiedWhenDerived) {
        verified = true;
      }
    }

    if (verified) {
      localContext.debug(`...verified the '${containedAssertionString}' contained assertion.`);
    }

    return verified;
  }

  verifyWhenStated(assignments, localContext) {
    let verifiedWhenStated;

    const containedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${containedAssertionString}' stated contained assertion...`);

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      localContext.debug(`...verified the '${containedAssertionString}' stated contained assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(localContext) {
    let verifiedWhenDerived;

    const containedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${containedAssertionString}' derived contained assertion...`);

    verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.statement, this.negated, localContext);

    if (verifiedWhenDerived) {
      localContext.debug(`...verified the '${containedAssertionString}' derived contained assertion.`);
    }

    return verifiedWhenDerived;
  }

  static fromContainedAssertionNode(containedAssertionNode, localContext) {
    let containedAssertion = null;

    if (containedAssertionNode !== null) {
      const { Term, Frame, Statement } = shim,
            node = containedAssertionNode,  ///
            string = localContext.nodeAsString(node),
            term = Term.fromContainedAssertionNode(containedAssertionNode, localContext),
            frame = Frame.fromContainedAssertionNode(containedAssertionNode, localContext),
            statement = Statement.fromContainedAssertionNode(containedAssertionNode, localContext),
            containedAssertionNegated = isAssertionNegated(containedAssertionNode),
            negated = containedAssertionNegated;  ///

      containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
    }

    return containedAssertion;
  }
}

function verifyWhenDerived(term, frame, statement, negated, localContext) {
  let verifiedWhenDerived = false;

  if (term !== null) {
    const termContained = statement.isTermContained(term, localContext);

    if (!negated && termContained) {
      verifiedWhenDerived = true;
    }

    if (negated && !termContained) {
      verifiedWhenDerived = true;
    }
  }

  if (frame !== null) {
    const frameContained = statement.isFrameContained(frame, localContext);

    if (!negated && frameContained) {
      verifiedWhenDerived = true;
    }

    if (negated && !frameContained) {
      verifiedWhenDerived = true;
    }
  }

  return verifiedWhenDerived;
}
