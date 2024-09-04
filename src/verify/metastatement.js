"use strict";

import verifyJudgement from "../verify/judgement";
import metaLevelNodeVerifier from "../verifier/node/metaLevel";

import { nodeQuery } from "../utilities/query";

const judgementNodeQuery = nodeQuery("/statement/judgement!");

function verifyStatement(statementNode, assignments, derived, localContext) {
  let statementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsIs
  ];

  statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
    const statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext);

    if (statementVerified) {
      return true;
    }
  });

  if (statementVerified) {
    localContext.debug(`...verified the '${statementString}' statement.`, statementNode);
  }

  return statementVerified;
}

Object.assign(metaLevelNodeVerifier, {
  verifyStatement
});

export default verifyStatement;

function verifyStatementAsIs(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsIs;

  const statementJudgement = isStatementJudgement(statementNode);

  if (!statementJudgement) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as is...`, statementNode);

    const verifyStatementAsIsFunctions = [
      verifyDerivedStatementAsIs,
      verifyStatedStatementAsIs
    ];

    statementVerifiedAsIs = verifyStatementAsIsFunctions.some((verifyStatementAsIsFunction) => {
      const statementVerifiedAsIs = verifyStatementAsIsFunction(statementNode, assignments, derived, localContext);

      if (statementVerifiedAsIs) {
        return true;
      }
    });

    if (statementVerifiedAsIs) {
      localContext.debug(`...verified the '${statementString}' statement as is.`, statementNode);
    }
  }

  return statementVerifiedAsIs;
}

function verifyDerivedStatementAsIs(statementNode, assignments, derived, localContext) {
  let derivedStatementVerifiedAsIs = false;

  if (derived) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.debug(`Cannot verify the '${statementString}' derived statement as is.`, statementNode);
  }

  return derivedStatementVerifiedAsIs;
}

function verifyStatedStatementAsIs(statementNode, assignments, derived, localContext) {
  let statedStatementVerifiedAsIs = false;

  if (!derived) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' stated statement as is...`, statementNode);

    const nonTerminalNode = statementNode, ///
          nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    statedStatementVerifiedAsIs = nonTerminalNodeVerified;  ///

    if (statedStatementVerifiedAsIs) {
      localContext.debug(`...verified the '${statementString}' stated statement as is.`, statementNode);
    }
  }

  return statedStatementVerifiedAsIs;
}

function isStatementJudgement(statementNode) {
  const judgementNode = judgementNodeQuery(statementNode),
        statementJudgement = (judgementNode !== null);

  return statementJudgement;
}