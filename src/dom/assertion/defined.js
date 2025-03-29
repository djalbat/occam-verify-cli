"use strict";

import dom from "../../dom";
import LocalContext from "../../context/local";

import { UNDEFINED } from "../../constants";
import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions } from "../../utilities/substitutions";

const terminalNodesQuery = nodesQuery("/definedAssertion/@*"),
      definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion");

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
    let verified = false;

    const definedAssertionString = this.string; ///

    context.trace(`Verifying the '${definedAssertionString}' defined assertion...`);

    const termVerified = this.verifyTerm(assignments, stated, context),
          frameVerified = this.verifyFrame(assignments, stated, context);

    if (termVerified || frameVerified) {
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
      context.debug(`...verified the '${definedAssertionString}' defined assertion.`);
    }

    return verified;
  }

  verifyTerm(assignments, stated, context) {
    let termVerified = false;

    if (this.term !== null) {
      const termString = this.term.getString(),
            definedAssertionString = this.string; ///

      context.trace(`Verifying the '${definedAssertionString}' defined assertion's '${termString}' term...`);

      const termSimple = this.term.isSimple();

      if (!termSimple) {
        context.debug(`The '${termString}' term is not simple.`);
      } else {
        termVerified = this.term.verify(context, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

        if (termVerified) {
          context.debug(`...verified the '${definedAssertionString}' defined assertion's '${termString}' term.`);
        }
      }
    }

    return termVerified;
  }

  verifyFrame(assignments, stated, context) {
    let frameVerified = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString(),
            definedAssertionString = this.string; ///

      context.trace(`Verifying the '${definedAssertionString}' defined assertion's '${frameString}' frame...`);

      const frameSimple = this.frame.isSimple();

      if (!frameSimple) {
        context.debug(`The '${frameString}' frame is not simple.`);
      } else {
        stated = true;  ///

        assignments = null; ///

        frameVerified = this.frame.verify(assignments, stated, context);

        if (frameVerified) {
          context.debug(`...verified the '${definedAssertionString}' defined assertion's '${frameString}' frame.`);
        }
      }
    }

    return frameVerified;
  }

  verifyWhenStated(assignments, context) {
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
            negated = isNegated(definedAssertionNode);

      definedAssertion = new DefinedAssertion(string, node, tokens, term, frame, negated);
    }

    return definedAssertion;
  }
});

function isNegated(definedAssertionNode) {
  const terminalNodes = terminalNodesQuery(definedAssertionNode),
        negated = terminalNodes.some((terminalNode) => {  ///
          const content = terminalNode.getContent(),
                contentUndefined = (content === UNDEFINED);

          if (contentUndefined) {
            return true;
          }
        });

  return negated;
}

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
