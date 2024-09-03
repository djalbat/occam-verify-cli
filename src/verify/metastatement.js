"use strict";

import verifyJudgement from "../verify/judgement";
import metaLevelNodeVerifier from "../verifier/node/metaLevel";
import verifyMetastatementAsDefinedAssertion from "./metastatementAsDefinedAssertion";
import verifyMetastatementAsContainedAssertion from "./metastatementAsContainedAssertion";

import { nodeQuery } from "../utilities/query";

const judgementNodeQuery = nodeQuery("/metastatement/judgement!");

function verifyMetastatement(metastatementNode, assignments, derived, localContext) {
  let metastatementVerified;

  const metastatementString = localContext.nodeAsString(metastatementNode);

  localContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const verifyMetaStatementFunctions = [
    verifyMetastatementAsJudgement,
    verifyMetastatementAsDefinedAssertion,
    verifyMetastatementAsContainedAssertion,
    verifyMetastatementAsIs
  ];

  metastatementVerified = verifyMetaStatementFunctions.some((verifyStatementFunction) => {
    const metastatementVerified = verifyStatementFunction(metastatementNode, assignments, derived, localContext);

    if (metastatementVerified) {
      return true;
    }
  });

  if (metastatementVerified) {
    localContext.debug(`...verified the '${metastatementString}' metastatement.`, metastatementNode);
  }

  return metastatementVerified;
}

Object.assign(metaLevelNodeVerifier, {
  verifyMetastatement
});

export default verifyMetastatement;

function verifyMetastatementAsJudgement(metastatementNode, assignments, derived, localContext) {
  let metastatementVerifiedAsJudgement = false;

  const metastatementJudgement = isMetastatementJudgement(metastatementNode);

  if (metastatementJudgement) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the '${metastatementString}' metastatement as a judgement...`, metastatementNode);

    const judgementNode = judgementNodeQuery(metastatementNode),
          judgementVerified = verifyJudgement(judgementNode, assignments, derived, localContext);

    metastatementVerifiedAsJudgement = judgementVerified;  ///

    if (metastatementVerifiedAsJudgement) {
      localContext.debug(`...verified the '${metastatementString}' metastatement as a judgement.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsJudgement;
}

function verifyMetastatementAsIs(metastatementNode, assignments, derived, localContext) {
  let metastatementVerifiedAsIs;

  const metastatementJudgement = isMetastatementJudgement(metastatementNode);

  if (!metastatementJudgement) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the '${metastatementString}' metastatement as is...`, metastatementNode);

    const verifyMetastatementAsIsFunctions = [
      verifyDerivedMetastatementAsIs,
      verifyStatedMetastatementAsIs
    ];

    metastatementVerifiedAsIs = verifyMetastatementAsIsFunctions.some((verifyMetastatementAsIsFunction) => {
      const metastatementVerifiedAsIs = verifyMetastatementAsIsFunction(metastatementNode, assignments, derived, localContext);

      if (metastatementVerifiedAsIs) {
        return true;
      }
    });

    if (metastatementVerifiedAsIs) {
      localContext.debug(`...verified the '${metastatementString}' metastatement as is.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsIs;
}

function verifyDerivedMetastatementAsIs(metastatementNode, assignments, derived, localContext) {
  let derivedMetastatementVerifiedAsIs = false;

  if (derived) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.debug(`Cannot verify the derived '${metastatementString}' metastatement as is.`, metastatementNode);
  }

  return derivedMetastatementVerifiedAsIs;
}

function verifyStatedMetastatementAsIs(metastatementNode, assignments, derived, localContext) {
  let statedMetastatementVerifiedAsIs = false;

  if (!derived) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the stated '${metastatementString}' metastatement as is...`, metastatementNode);

    const nonTerminalNode = metastatementNode, ///
          nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    statedMetastatementVerifiedAsIs = nonTerminalNodeVerified;  ///

    if (statedMetastatementVerifiedAsIs) {
      localContext.debug(`...verified the stated '${metastatementString}' metastatement as is.`, metastatementNode);
    }
  }

  return statedMetastatementVerifiedAsIs;
}

function isMetastatementJudgement(metastatementNode) {
  const judgementNode = judgementNodeQuery(metastatementNode),
        metastatementJudgement = (judgementNode !== null);

  return metastatementJudgement;
}