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

  resolve(substitutions, context) {
    let resolved;

    const containedAssertionString = this.string; ///

    context.trace(`Resolving the '${containedAssertionString}' contained assertion...`);

    const term = termFromTermAndSubstitutions(this.term, substitutions),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions),
          statement = statementFromStatementAndSubstitutions(this.statement, substitutions),
          verifiedWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, context);

    resolved = verifiedWhenDerived; ///

    if (resolved) {
      context.debug(`...resolved the '${containedAssertionString}' contained assertion.`);
    }

    return resolved;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const containedAssertionString = this.string; ///

    context.trace(`Verifying the '${containedAssertionString}' contained assertion...`);

    stated = true;  ///

    assignments = null; ///

    let termVerified = false,
        frameVerified = false,
        statementVerified = false;

    if (this.term !== null) {
      termVerified = this.term.verify(context, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });
    }

    if (this.frame !== null) {
      frameVerified = this.frame.verify(assignments, stated, context);
    }

    if (this.statement !== null) {
      statementVerified = this.statement.verify(assignments, stated, context);
    }

    if (termVerified || frameVerified || statementVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(assignments, context);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(context);
      }

      if (verifiedWhenStated || verifiedWhenDerived) {
        verified = true;
      }
    }

    if (verified) {
      context.debug(`...verified the '${containedAssertionString}' contained assertion.`);
    }

    return verified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated;

    const containedAssertionString = this.string; ///

    context.trace(`Verifying the '${containedAssertionString}' stated contained assertion...`);

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      context.debug(`...verified the '${containedAssertionString}' stated contained assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiedWhenDerived;

    const containedAssertionString = this.string; ///

    context.trace(`Verifying the '${containedAssertionString}' derived contained assertion...`);

    verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.statement, this.negated, context);

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${containedAssertionString}' derived contained assertion.`);
    }

    return verifiedWhenDerived;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    let containedAssertion = null;

    if (containedAssertionNode !== null) {
      const { Term, Frame, Statement } = shim,
            node = containedAssertionNode,  ///
            string = context.nodeAsString(node),
            term = Term.fromContainedAssertionNode(containedAssertionNode, context),
            frame = Frame.fromContainedAssertionNode(containedAssertionNode, context),
            statement = Statement.fromContainedAssertionNode(containedAssertionNode, context),
            containedAssertionNegated = isAssertionNegated(containedAssertionNode),
            negated = containedAssertionNegated;  ///

      containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
    }

    return containedAssertion;
  }
}

function verifyWhenDerived(term, frame, statement, negated, context) {
  let verifiedWhenDerived = false;

  if (statement !== null) {
    if (term !== null) {
      const termContained = statement.isTermContained(term, context);

      if (!negated && termContained) {
        verifiedWhenDerived = true;
      }

      if (negated && !termContained) {
        verifiedWhenDerived = true;
      }
    }

    if (frame !== null) {
      const frameContained = statement.isFrameContained(frame, context);

      if (!negated && frameContained) {
        verifiedWhenDerived = true;
      }

      if (negated && !frameContained) {
        verifiedWhenDerived = true;
      }
    }
  }

  return verifiedWhenDerived;
}
