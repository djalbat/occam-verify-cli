"use strict";

import verifyTerm from "./term";
import metaLevelNodeVerifier from "../verifier/node/metaLevel";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";
import { isStatementNegated } from "../utilities/verify";

const termNodeQuery = nodeQuery("/statement/term!"),
      variableNodeQuery = nodeQuery("/statement/term/variable!");

export default function verifyStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsDefinedAssertion;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement as a defined assertion...`, statementNode);

  const definedAssertionFunctions = [
    verifyDerivedStatementAsDefinedAssertion,
    verifyStatedStatementAsDefinedAssertion
  ];

  statementVerifiedAsDefinedAssertion = definedAssertionFunctions.some((definedAssertionFunction) => {
    const statementVerifiedAsDefinedAssertion = definedAssertionFunction(statementNode, assignments, derived, localContext);

    if (statementVerifiedAsDefinedAssertion) {
      return true;
    }
  });

  if (statementVerifiedAsDefinedAssertion) {
    localContext.debug(`...verified the '${statementString}' statement as a defined assertion.`, statementNode);
  }

  return statementVerifiedAsDefinedAssertion;
}

function verifyDerivedStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
  let derivedStatementVerifiedAsDefeindAssertion = false;

  if (derived) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the derived '${statementString}' statement as a defined assertion...`, statementNode);

    const statementNegated = isStatementNegated(statementNode),
          variableNode = variableNodeQuery(statementNode),
          termNode = termNodeQuery(statementNode);

    if (false) {
      ///
    } else if (variableNode !== null) {
      const variable = localContext.findVariableByVariableNode(variableNode);

      if (variable !== null) {
        const variableDefined = localContext.isVariableDefined(variable);

        if (!statementNegated) {
          if (variableDefined) {
            derivedStatementVerifiedAsDefeindAssertion = true;
          }
        }

        if (statementNegated) {
          if (!variableDefined) {
            derivedStatementVerifiedAsDefeindAssertion = true;
          }
        }
      }
    } else if (termNode !== null) {
      const terms = [],
            termVerified = verifyTerm(termNode, terms, localContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      if (termVerified) {
        const firstTerm = first(terms),
              term = firstTerm, ///
              termGrounded = localContext.isTermGrounded(term);

        if (!statementNegated) {
          if (termGrounded) {
            derivedStatementVerifiedAsDefeindAssertion = true;
          }
        }

        if (statementNegated) {
          if (!termGrounded) {
            derivedStatementVerifiedAsDefeindAssertion = true;
          }
        }
      }
    }

    if (derivedStatementVerifiedAsDefeindAssertion) {
      localContext.debug(`...verified the derived '${statementString}' statement as a defined assertion.`, statementNode);
    }
  }

  return derivedStatementVerifiedAsDefeindAssertion;
}

function verifyStatedStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
  let statedStatementVerifiedAsDefinedAssertion = false;

  if (!derived) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the stated '${statementString}' statement as a defined assertion...`, statementNode);

    const intrinsicLevel = localContext.isIntrinsicLevel();

    if (intrinsicLevel) {
      localContext.debug(`The stated '${statementString}' statement as a defined assertion cannot be verified at intrinsic level.`, statementNode);
    } else {
      const nonTerminalNode = statementNode, ///
            nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      statedStatementVerifiedAsDefinedAssertion = nonTerminalNodeVerified; ///
    }

    if (statedStatementVerifiedAsDefinedAssertion) {
      localContext.debug(`...verified the stated '${statementString}' statement as a defined assertion.`, statementNode);
    }
  }

  return statedStatementVerifiedAsDefinedAssertion;
}
