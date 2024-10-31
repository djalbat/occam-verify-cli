"use strict";

import shim from "../shim";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { isAssertionNegated } from "../utilities/assertion";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions, statementFromStatementAndSubstitutions } from "../utilities/substitutions";

const containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion");

export default class ContainedAssertion {
  constructor(string, node, tokens, term, frame, negated, statement) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
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

  getStatement() {
    return this.statement;
  }

  unifyIndependently(substitutions, context) {
    let unifiedIndependently;

    const containedAssertionString = this.string; ///

    context.trace(`Unifying the '${containedAssertionString}' contained assertion independently...`);

    const localContext = LocalContext.fromContextAndTokens(context, this.tokens);

    context = localContext; ///

    const term = termFromTermAndSubstitutions(this.term, substitutions, context),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions, context),
          statement = statementFromStatementAndSubstitutions(this.statement, substitutions, context),
          verifiedWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, context);

    unifiedIndependently = verifiedWhenDerived; ///

    if (unifiedIndependently) {
      context.debug(`...unified the '${containedAssertionString}' contained assertion independently.`);
    }

    return unifiedIndependently;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const containedAssertionString = this.string; ///

    context.trace(`Verifying the '${containedAssertionString}' contained assertion...`);

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
      frameVerified = this.verifyFrame(this.frame, assignments, stated, context);
    }

    if (this.statement !== null) {
      statementVerified = this.verifyStatement(this.statement, assignments, stated, context);
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

  verifyFrame(frame, assignments, stated, context) {
    stated = true;  ///

    assignments = null; ///

    const frameVerified = frame.verify(assignments, stated, context);

    return frameVerified;
  }

  verifyStatement(statement, assignments, stated, context) {
    stated = true;  ///

    assignments = null; ///

    const statementVerified = statement.verify(assignments, stated, context);

    return statementVerified;
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

  static fromStatementNode(statementNode, context) {
    let containedAssertion = null;

    const containedAssertionNode = containedAssertionNodeQuery(statementNode);

    if (containedAssertionNode !== null) {
      const { Term, Frame, Statement } = shim,
            node = containedAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            term = Term.fromContainedAssertionNode(containedAssertionNode, context),
            frame = Frame.fromContainedAssertionNode(containedAssertionNode, context),
            statement = Statement.fromContainedAssertionNode(containedAssertionNode, context),
            containedAssertionNegated = isAssertionNegated(containedAssertionNode),
            negated = containedAssertionNegated;  ///

      containedAssertion = new ContainedAssertion(string, node, tokens, term, frame, negated, statement);
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
