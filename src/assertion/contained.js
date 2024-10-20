"use strict";

import shim from "../shim";

import { isAssertionNegated } from "../utilities/assertion";

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

  verify(assignments, stated, localContext) {
    let verified = false;

    const containedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${containedAssertionString}' contained assertion...`);

    stated = true;  ///

    assignments = null; ///

    let termVerified = true,
        frameVerified = true,
        statementVerified = true;

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

    if (termVerified && frameVerified && statementVerified) {
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
    let verifiedWhenDerived = false;

    const containedAssertionString = this.string; ///

    localContext.trace(`Verifying the '${containedAssertionString}' derived contained assertion...`);

    if (this.term !== null) {
      const variable = this.term.getVariable(localContext);

      if (variable !== null) {
        const variableContained = this.statement.isVariableContained(variable, localContext);

        if (!this.negated && variableContained) {
          verifiedWhenDerived = true;
        }

        if (this.negated && !variableContained) {
          verifiedWhenDerived = true;
        }
      }
    }

    if (this.frame !== null) {
      const metavariable = this.frame.getVariable(localContext);

      if (metavariable !== null) {
        const metavariableContained = this.statement.isMetavariableContained(metavariable, localContext);

        if (!this.negated && metavariableContained) {
          verifiedWhenDerived = true;
        }

        if (this.negated && !metavariableContained) {
          verifiedWhenDerived = true;
        }
      }
    }

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
