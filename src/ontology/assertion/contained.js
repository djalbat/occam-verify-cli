"use strict";

import ontology from "../../ontology";
import Assertion from "../assertion";

import { define } from "../../ontology";
import { termFromTermAndSubstitutions, frameFromFrameAndSubstitutions, statementFromStatementAndSubstitutions } from "../../utilities/substitutions";

export default define(class ContainedAssertion extends Assertion {
  constructor(string, node, term, frame, negated, statement) {
    super(string, node);

    this.term = term;
    this.frame = frame;
    this.negated = negated;
    this.statement = statement;
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
    let verifies = false;

    const containedAssertionString = this.getString(); ///

    context.trace(`Verifying the '${containedAssertionString}' contained assertion...`);

    const termVerifies = this.verifyTerm(assignments, stated, context),
          frameVerifies = this.verifyFrame(assignments, stated, context),
          statementVerifies = this.verifyStatement(assignments, stated, context)

    if (termVerifies || frameVerifies || statementVerifies) {
      let verifiesWhenStated = false,
          verifiesWhenDerived = false;

      if (stated) {
        verifiesWhenStated = this.verifyWhenStated(assignments, context);
      } else {
        verifiesWhenDerived = this.verifyWhenDerived(context);
      }

      if (verifiesWhenStated || verifiesWhenDerived) {
        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${containedAssertionString}' contained assertion.`);
    }

    return verifies;
  }

  verifyTerm(assignments, stated, context) {
    let termVerifies = false;

    if (this.term !== null) {
      const termString = this.term.getString();

      context.trace(`Verifying the '${termString}' term...`);

      const termSingular = this.term.isSingular();

      if (!termSingular) {
        context.debug(`The '${termString}' term is not singular.`);
      } else {
        termVerifies = this.term.verify(context, () => {
          const verifiesAhead = true;

          return verifiesAhead;
        });

        if (termVerifies) {
          context.debug(`...verified the '${termString}' term.`);
        }
      }
    }

    return termVerifies;
  }

  verifyFrame(assignments, stated, context) {
    let frameVerifies = false;

    if (this.frame !== null) {
      const frameString = this.frame.getString();

      context.trace(`Verifying the '${frameString}' frame...`);

      const frameSingular = this.frame.isSingular();

      if (!frameSingular) {
        context.debug(`The '${frameString}' frame is not singular.`);
      } else {
        stated = true;  ///

        assignments = null; ///

        frameVerifies = this.frame.verify(assignments, stated, context);

        if (frameVerifies) {
          context.debug(`...verified the '${frameString}' frame.`);
        }
      }
    }

    return frameVerifies;
  }

  verifyStatement(assignments, stated, context) {
    let statementVerifies = false;

    if (this.statement !== null) {
      const statementString = this.statement.getString();

      context.trace(`Verifying the '${statementString}' statement...`);

      stated = true;  ///

      assignments = null; ///

      statementVerifies = this.statement.verify(assignments, stated, context);

      if (statementVerifies) {
        context.debug(`...verified the '${statementString}' statement.`);
      }
    }

    return statementVerifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated;

    const containedAssertionString = this.getString(); ///

    context.trace(`Verifying the '${containedAssertionString}' stated contained assertion...`);

    verifiesWhenStated = true;

    if (verifiesWhenStated) {
      context.debug(`...verified the '${containedAssertionString}' stated contained assertion.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const containedAssertionString = this.getString(); ///

    context.trace(`Verifying the '${containedAssertionString}' derived contained assertion...`);

    const generalCotnext = null,
          specificContext = context; ///

    verifiesWhenDerived = verifyWhenDerived(this.term, this.frame, this.statement, this.negated, generalCotnext, specificContext);

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${containedAssertionString}' derived contained assertion.`);
    }

    return verifiesWhenDerived;
  }

  unifyIndependently(substitutions, generalContext, specificContext) {
    let unifiesIndependently;

    const context = specificContext,  ///
          containedAssertionString = this.getString(); ///

    context.trace(`Unifying the '${containedAssertionString}' contained assertion independently...`);

    const term = termFromTermAndSubstitutions(this.term, substitutions, generalContext, specificContext),
          frame = frameFromFrameAndSubstitutions(this.frame, substitutions, generalContext, specificContext),
          statement = statementFromStatementAndSubstitutions(this.statement, substitutions, generalContext, specificContext),
          verifiesWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, generalContext, specificContext);

    unifiesIndependently = verifiesWhenDerived; ///

    if (unifiesIndependently) {
      context.debug(`...unified the '${containedAssertionString}' contained assertion independently.`);
    }

    return unifiesIndependently;
  }

  static name = "ContainedAssertion";

  static fromStatementNode(statementNode, context) {
    let containedAssertion = null;

    const containedAssertionNode = statementNode.getContainedAssertionNode();

    if (containedAssertionNode !== null) {
      const { Term, Frame, Statement } = ontology,
            node = containedAssertionNode,  ///
            string = context.nodeAsString(node),
            negated = containedAssertionNode.isNegated(),
            term = Term.fromContainedAssertionNode(containedAssertionNode, context),
            frame = Frame.fromContainedAssertionNode(containedAssertionNode, context),
            statement = Statement.fromContainedAssertionNode(containedAssertionNode, context);

      containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
    }

    return containedAssertion;
  }
});

function verifyWhenDerived(term, frame, statement, negated, generalContext, specificContext) {
  let verifiesWhenDerived = false;

  const context = specificContext;  ///

  if (statement !== null) {
    if (term !== null) {
      const termContained = statement.isTermContained(term, context);

      if (!negated && termContained) {
        verifiesWhenDerived = true;
      }

      if (negated && !termContained) {
        verifiesWhenDerived = true;
      }
    }

    if (frame !== null) {
      const frameContained = statement.isFrameContained(frame, context);

      if (!negated && frameContained) {
        verifiesWhenDerived = true;
      }

      if (negated && !frameContained) {
        verifiesWhenDerived = true;
      }
    }
  }

  return verifiesWhenDerived;
}