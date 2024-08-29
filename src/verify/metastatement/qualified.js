"use strict";

import verifyMetavariableAgainstMetastatement from "../../verify/metavariableAgainstMetastatement";

import { nodeQuery } from "../../utilities/query";
import { verifyMetastatementAsFrameAssertion } from "../../verify/metastatement";

const metavariableNodeQuery = nodeQuery("/qualifiedMetastatement/reference!/metavariable!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, localMetaContext) {
  let qualifiedMetastatementVerified;

  const qualifiedMetastatementString = localMetaContext.nodeAsString(qualifiedMetastatementNode);

  localMetaContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

  const metavariableNode = metavariableNodeQuery(qualifiedMetastatementNode),
        verifyQualifiedMetastatementFunctions = [
          verifyQualifiedMetastatementAAgainstRule,
          verifyQualifiedMetastatementAAgainstReference
        ];

  qualifiedMetastatementVerified = verifyQualifiedMetastatementFunctions.some((verifyQualifiedMetastatementFunction) => {  ///
    const qualifiedMetastatementVerified = verifyQualifiedMetastatementFunction(qualifiedMetastatementNode, metavariableNode, substitutions, localMetaContext);

    if (qualifiedMetastatementVerified) {
      return true;
    }
  });

  if (qualifiedMetastatementVerified) {
    const derived = false,
          metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
          metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    qualifiedMetastatementVerified = metastatementVerified; ///
  }

  if (qualifiedMetastatementVerified) {
    localMetaContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement.`, qualifiedMetastatementNode);
  }

  return qualifiedMetastatementVerified;
}

function verifyQualifiedMetastatementAAgainstRule(qualifiedMetastatementNode, metavariableNode, substitutions, localMetaContext) {
  let qualifiedMetastatementVerifiedAgainstRule = false;

  const rule = localMetaContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
          metavariableString = localMetaContext.nodeAsString(metavariableNode),
          qualifiedMetastatementString = localMetaContext.nodeAsString(qualifiedMetastatementNode);

    localMetaContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement against the '${metavariableString}' rule...`, qualifiedMetastatementNode);

    const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, localMetaContext);

    qualifiedMetastatementVerifiedAgainstRule = ruleMatchesMetastatement;  ///

    if (qualifiedMetastatementVerifiedAgainstRule) {
      localMetaContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement against the '${metavariableString}' rule.`, qualifiedMetastatementNode);
    }
  }

  return qualifiedMetastatementVerifiedAgainstRule;
}

function verifyQualifiedMetastatementAAgainstReference(qualifiedMetastatementNode, metavariableNode, substitutions, localMetaContext) {
  let qualifiedMetastatementVerifiedAgainstReference = false;

  if (substitutions !== null) {
    const metavariableString = localMetaContext.nodeAsString(metavariableNode),
          metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext),
          qualifiedMetastatementString = localMetaContext.nodeAsString(qualifiedMetastatementNode);

    localMetaContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement against the '${metavariableString}' reference...`, qualifiedMetastatementNode);

    if (metavariablePresent) {
      const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
            metavariableVerifiedAgainstMetastatement = verifyMetavariableAgainstMetastatement(metavariableNode, metastatementNode, substitutions, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      qualifiedMetastatementVerifiedAgainstReference = metavariableVerifiedAgainstMetastatement; ///
    }

    if (qualifiedMetastatementVerifiedAgainstReference) {
      localMetaContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement against the '${metavariableString}' reference.`, qualifiedMetastatementNode);
    }
  }

  return qualifiedMetastatementVerifiedAgainstReference;
}

function verifyMetastatement(metastatementNode, assignments, derived, localMetaContext) {
  let metastatementVerified;

  const metastatementString = localMetaContext.nodeAsString(metastatementNode);

  localMetaContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const verifyMetaStatementFunctions = [
    verifyMetastatementAsFrameAssertion
  ];

  verifyMetaStatementFunctions.some((verifyStatementFunction) => {
    const metastatementVerified = verifyStatementFunction(metastatementNode, assignments, derived, localMetaContext);

    if (metastatementVerified) {
      return true;
    }
  });

  metastatementVerified = true; ///

  if (metastatementVerified) {
    localMetaContext.debug(`...verified the '${metastatementString}' metastatement.`, metastatementNode);
  }

  return metastatementVerified;
}

