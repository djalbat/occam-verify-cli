"use strict";

import dom from "../../dom";
import LocalContext from "../../context/local";

import { MISSING } from "../../constants";
import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions, statementFromStatementAndSubstitutions } from "../../utilities/substitutions";

const terminalNodesQuery = nodesQuery("/containedAssertion/@*"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion");

export default domAssigned(class ContainedAssertion {
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

  verify(assignments, stated, context) {
    let verified = false;

    const containedAssertionString = this.string; ///

    context.trace(`Verifying the '${containedAssertionString}' contained assertion...`);

    const termVerified = this.verifyTerm(assignments, stated, context),
          frameVerified = this.verifyFrame(assignments, stated, context),
          statementVerified = this.verifyStatement(assignments, stated, context)

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

  verifyTerm(assignments, stated, context) {
    let termVerified = false;

    if (this.term !== null) {
      const termString = this.term.getString(),
            containedAssertionString = this.string; ///

      context.trace(`Verifying the '${containedAssertionString}' contained assertion's '${termString}' term...`);

      termVerified = this.term.verify(context, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });

      if (termVerified) {
        context.debug(`...verified the '${containedAssertionString}' contained assertion's '${termString}' term.`);
      }
    }

    return termVerified;
  }

  verifyFrame(assignments, stated, context) {
    let frameVerified = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString(),
            containedAssertionString = this.string; ///

      context.trace(`Verifying the '${containedAssertionString}' contained assertion's '${frameString}' frame...`);

      stated = true;  ///

      assignments = null; ///

      frameVerified = this.frame.verify(assignments, stated, context);

      if (frameVerified) {
        context.debug(`...verified the '${containedAssertionString}' contained assertion's '${frameString}' frame.`);
      }
    }

    return frameVerified;
  }

  verifyStatement(assignments, stated, context) {
    let statementVerified = false;

    if (this.statement !== null) {
      const statementString = this.statement.getString(),
            containedAssertionString = this.string; ///

      context.trace(`Verifying the '${containedAssertionString}' contained assertion's '${statementString}' statement...`);

      stated = true;  ///

      assignments = null; ///

      statementVerified = this.statement.verify(assignments, stated, context);

      if (statementVerified) {
        context.debug(`...verified the '${containedAssertionString}' contained assertion's '${statementString}' statement.`);
      }
    }

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

  static name = "ContainedAssertion";

  static fromStatementNode(statementNode, context) {
    let containedAssertion = null;

    const containedAssertionNode = containedAssertionNodeQuery(statementNode);

    if (containedAssertionNode !== null) {
      const { Term, Frame, Statement } = dom,
            node = containedAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            term = Term.fromContainedAssertionNode(containedAssertionNode, context),
            frame = Frame.fromContainedAssertionNode(containedAssertionNode, context),
            statement = Statement.fromContainedAssertionNode(containedAssertionNode, context),
            negated = isNegated(containedAssertionNode);  ///

      containedAssertion = new ContainedAssertion(string, node, tokens, term, frame, negated, statement);
    }

    return containedAssertion;
  }
});

function isNegated(definedAssertionNode) {
  const terminalNodes = terminalNodesQuery(definedAssertionNode),
        negated = terminalNodes.some((terminalNode) => {  ///
          const content = terminalNode.getContent(),
                contentMessing = (content === MISSING);

          if (contentMessing) {
            return true;
          }
        });

  return negated;
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