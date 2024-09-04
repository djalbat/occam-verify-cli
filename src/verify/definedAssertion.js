"use strict";

import verifyTerm from "./term";
import metaLevelNodeVerifier from "../verifier/node/metaLevel";

import { first } from "../utilities/array";
import { DEFINED } from "../constants";
import { nodeQuery } from "../utilities/query";
import { isAssertionNegated } from "../utilities/verify";

const termNodeQuery = nodeQuery("/statement/term!"),
      variableNodeQuery = nodeQuery("/statement/term/variable!");

export default function verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let statementVerifiedAsDefinedAssertion = false;

  const statementDefinedAssertion = isStatementDefinedAssertion(definedAssertionNode);

  if (statementDefinedAssertion) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' statement as a defined assertion...`, definedAssertionNode);

    const definedAssertionFunctions = [
      verifyDerivedStatementAsDefinedAssertion,
      verifyStatedStatementAsDefinedAssertion
    ];

    statementVerifiedAsDefinedAssertion = definedAssertionFunctions.some((definedAssertionFunction) => {
      const statementVerifiedAsDefinedAssertion = definedAssertionFunction(definedAssertionNode, assignments, derived, localContext);

      if (statementVerifiedAsDefinedAssertion) {
        return true;
      }
    });

    if (statementVerifiedAsDefinedAssertion) {
      localContext.debug(`...verified the '${definedAssertionString}' statement as a defined assertion.`, definedAssertionNode);
    }
  }

  return statementVerifiedAsDefinedAssertion;
}

function verifyDerivedStatementAsDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let derivedStatementVerifiedAsDefeindAssertion = false;

  if (derived) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' derived statement as a defined assertion...`, definedAssertionNode);

    const statementNegated = isAssertionNegated(definedAssertionNode),
          variableNode = variableNodeQuery(definedAssertionNode),
          termNode = termNodeQuery(definedAssertionNode);

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
      localContext.debug(`...verified the '${definedAssertionString}' derived statement as a defined assertion.`, definedAssertionNode);
    }
  }

  return derivedStatementVerifiedAsDefeindAssertion;
}

function verifyStatedStatementAsDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let statedStatementVerifiedAsDefinedAssertion = false;

  if (!derived) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' stated statement as a defined assertion...`, definedAssertionNode);

    const intrinsicLevel = localContext.isIntrinsicLevel();

    if (intrinsicLevel) {
      localContext.debug(`The '${definedAssertionString}' stated statement as a defined assertion cannot be verified at intrinsic level.`, definedAssertionNode);
    } else {
      const nonTerminalNode = definedAssertionNode, ///
            nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      statedStatementVerifiedAsDefinedAssertion = nonTerminalNodeVerified; ///
    }

    if (statedStatementVerifiedAsDefinedAssertion) {
      localContext.debug(`...verified the '${definedAssertionString}' stated statement as a defined assertion.`, definedAssertionNode);
    }
  }

  return statedStatementVerifiedAsDefinedAssertion;
}
