"use strict";

import verifyJudgement from "../verify/judgement";
import metaLevelNodeVerifier from "../verifier/node/metaLevel";
import verifyStatementAsDefinedAssertion from "./statementAsDefinedAssertion";
import verifyStatementAsContainedAssertion from "./statementAsContainedAssertion";

import { nodeQuery } from "../utilities/query";

const judgementNodeQuery = nodeQuery("/statement/judgement!");

function verifyStatement(statementNode, assignments, derived, localContext) {
  let statementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsJudgement,
    verifyStatementAsDefinedAssertion,
    verifyStatementAsContainedAssertion,
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

function verifyStatementAsJudgement(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsJudgement = false;

  const statementJudgement = isStatementJudgement(statementNode);

  if (statementJudgement) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a judgement...`, statementNode);

    const judgementNode = judgementNodeQuery(statementNode),
          judgementVerified = verifyJudgement(judgementNode, assignments, derived, localContext);

    statementVerifiedAsJudgement = judgementVerified;  ///

    if (statementVerifiedAsJudgement) {
      localContext.debug(`...verified the '${statementString}' statement as a judgement.`, statementNode);
    }
  }

  return statementVerifiedAsJudgement;
}

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

    localContext.debug(`Cannot verify the derived '${statementString}' statement as is.`, statementNode);
  }

  return derivedStatementVerifiedAsIs;
}

function verifyStatedStatementAsIs(statementNode, assignments, derived, localContext) {
  let statedStatementVerifiedAsIs = false;

  if (!derived) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the stated '${statementString}' statement as is...`, statementNode);

    const nonTerminalNode = statementNode, ///
          nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    statedStatementVerifiedAsIs = nonTerminalNodeVerified;  ///

    if (statedStatementVerifiedAsIs) {
      localContext.debug(`...verified the stated '${statementString}' statement as is.`, statementNode);
    }
  }

  return statedStatementVerifiedAsIs;
}

function isStatementJudgement(statementNode) {
  const judgementNode = judgementNodeQuery(statementNode),
        statementJudgement = (judgementNode !== null);

  return statementJudgement;
}