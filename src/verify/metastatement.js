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
  let metastatementVerifiedAsIs = false;

  const frameAssertionNode = frameAssertionNodeQuery(metastatementNode);

  if (frameAssertionNode === null) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode);

    localMetaContext.trace(`Verifying the '${metastatementString}' metastatement as is...`, metastatementNode);

    const nonTerminalNode = metastatementNode, ///
          nonTerminalNodeVerified = metastatementNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localMetaContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    metastatementVerifiedAsIs = nonTerminalNodeVerified;  ///

    if (metastatementVerifiedAsIs) {
      localMetaContext.debug(`...verified the '${metastatementString}' metastatement as is.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsIs;
}
