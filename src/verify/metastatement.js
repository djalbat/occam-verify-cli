"use strict";

import verifyFrameAssertion from "../verify/frameAssertion";
import metastatementNodeVerifier from "../verifier/node/metastatement";

import { nodeQuery } from "../utilities/query";

const frameAssertionNodeQuery = nodeQuery("/metastatement/frameAssertion!");

function verifyMetastatement(metastatementNode, assignments, derived, localContext) {
  let metastatementVerified;

  const metastatementString = localContext.nodeAsString(metastatementNode);

  localContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const verifyMetaStatementFunctions = [
    verifyMetastatementAsFrameAssertion,
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

Object.assign(metastatementNodeVerifier, {
  verifyMetastatement
});

export default verifyMetastatement;

function verifyMetastatementAsFrameAssertion(metastatementNode, assignments, derived, localContext) {
  let metastatementVerifiedAsFrameAssertion = false;

  const frameAssertionNode = frameAssertionNodeQuery(metastatementNode);

  if (frameAssertionNode !== null) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the '${metastatementString}' metastatement as a frame assertion...`, metastatementNode);

    const frameAssertionVerified = verifyFrameAssertion(frameAssertionNode, assignments, derived, localContext);

    metastatementVerifiedAsFrameAssertion = frameAssertionVerified;  ///

    if (metastatementVerifiedAsFrameAssertion) {
      localContext.debug(`...verified the '${metastatementString}' metastatement as a frame assertion.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsFrameAssertion;
}

function verifyMetastatementAsIs(metastatementNode, assignments, derived, localContext) {
  let metastatementVerifiedAsIs;

  const frameAssertionNode = frameAssertionNodeQuery(metastatementNode);

  if (frameAssertionNode === null) {
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
          nonTerminalNodeVerified = metastatementNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
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
