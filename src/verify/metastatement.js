"use strict";

import verifyFrameAssertion from "../verify/frameAssertion";
import metastatementNodeVerifier from "../verifier/node/metastatement";

import { nodeQuery } from "../utilities/query";

const frameAssertionNodeQuery = nodeQuery("/metastatement/frameAssertion!");

function verifyMetastatement(metastatementNode, assignments, derived, localMetaContext) {
  let metastatementVerified;

  const metastatementString = localMetaContext.nodeAsString(metastatementNode);

  localMetaContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const verifyMetaStatementFunctions = [
    verifyMetastatementAsFrameAssertion,
    verifyMetastatementAsIs
  ];

  metastatementVerified = verifyMetaStatementFunctions.some((verifyStatementFunction) => {
    const metastatementVerified = verifyStatementFunction(metastatementNode, assignments, derived, localMetaContext);

    if (metastatementVerified) {
      return true;
    }
  });

  if (metastatementVerified) {
    localMetaContext.debug(`...verified the '${metastatementString}' metastatement.`, metastatementNode);
  }

  return metastatementVerified;
}

Object.assign(metastatementNodeVerifier, {
  verifyMetastatement
});

export default verifyMetastatement;

function verifyMetastatementAsFrameAssertion(metastatementNode, assignments, derived, localMetaContext) {
  let metastatementVerifiedAsFrameAssertion = false;

  const frameAssertionNode = frameAssertionNodeQuery(metastatementNode);

  if (frameAssertionNode !== null) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode);

    localMetaContext.trace(`Verifying the '${metastatementString}' metastatement as a frame assertion...`, metastatementNode);

    const frameAssertionVerified = verifyFrameAssertion(frameAssertionNode, assignments, derived, localMetaContext);

    metastatementVerifiedAsFrameAssertion = frameAssertionVerified;  ///

    if (metastatementVerifiedAsFrameAssertion) {
      localMetaContext.debug(`...verified the '${metastatementString}' metastatement as a frame assertion.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsFrameAssertion;
}

function verifyMetastatementAsIs(metastatementNode, assignments, derived, localMetaContext) {
  let metastatementVerifiedAsIs;

  const frameAssertionNode = frameAssertionNodeQuery(metastatementNode);

  if (frameAssertionNode === null) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode);

    localMetaContext.trace(`Verifying the '${metastatementString}' metastatement as is...`, metastatementNode);

    const verifyMetastatementAsIsFunctions = [
      verifyDerivedMetastatementAsIs,
      verifyStatedMetastatementAsIs
    ];

    metastatementVerifiedAsIs = verifyMetastatementAsIsFunctions.some((verifyMetastatementAsIsFunction) => {
      const metastatementVerifiedAsIs = verifyMetastatementAsIsFunction(metastatementNode, assignments, derived, localMetaContext);

      if (metastatementVerifiedAsIs) {
        return true;
      }
    });

    if (metastatementVerifiedAsIs) {
      localMetaContext.debug(`...verified the '${metastatementString}' metastatement as is.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsIs;
}

function verifyDerivedMetastatementAsIs(metastatementNode, assignments, derived, localMetaContext) {
  let derivedMetastatementVerifiedAsIs = false;

  if (derived) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode);

    localMetaContext.debug(`Cannot verify the derived '${metastatementString}' metastatement as is.`, metastatementNode);
  }

  return derivedMetastatementVerifiedAsIs;
}

function verifyStatedMetastatementAsIs(metastatementNode, assignments, derived, localMetaContext) {
  let statedMetastatementVerifiedAsIs = false;

  if (!derived) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode);

    localMetaContext.trace(`Verifying the stated '${metastatementString}' metastatement as is...`, metastatementNode);

    const nonTerminalNode = metastatementNode, ///
          nonTerminalNodeVerified = metastatementNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localMetaContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    statedMetastatementVerifiedAsIs = nonTerminalNodeVerified;  ///

    if (statedMetastatementVerifiedAsIs) {
      localMetaContext.debug(`...verified the stated '${metastatementString}' metastatement as is.`, metastatementNode);
    }
  }

  return statedMetastatementVerifiedAsIs;
}
