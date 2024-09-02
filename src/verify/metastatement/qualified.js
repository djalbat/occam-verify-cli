"use strict";

import verifyMetavariableAgainstMetastatement from "../../verify/metavariableAgainstMetastatement";

import { nodeQuery } from "../../utilities/query";

const metavariableNodeQuery = nodeQuery("/qualifiedMetastatement/reference!/metavariable!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, localContext) {
  let qualifiedMetastatementVerified;

  const qualifiedMetastatementString = localContext.nodeAsString(qualifiedMetastatementNode);

  localContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

  const metavariableNode = metavariableNodeQuery(qualifiedMetastatementNode),
        verifyQualifiedMetastatementFunctions = [
          verifyQualifiedMetastatementAAgainstRule,
          verifyQualifiedMetastatementAAgainstReference
        ];

  qualifiedMetastatementVerified = verifyQualifiedMetastatementFunctions.some((verifyQualifiedMetastatementFunction) => {  ///
    const qualifiedMetastatementVerified = verifyQualifiedMetastatementFunction(qualifiedMetastatementNode, metavariableNode, substitutions, localContext);

    if (qualifiedMetastatementVerified) {
      return true;
    }
  });

  if (qualifiedMetastatementVerified) {
    const derived = false,
          metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
          metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    qualifiedMetastatementVerified = metastatementVerified; ///
  }

  if (qualifiedMetastatementVerified) {
    localContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement.`, qualifiedMetastatementNode);
  }

  return qualifiedMetastatementVerified;
}

function verifyQualifiedMetastatementAAgainstRule(qualifiedMetastatementNode, metavariableNode, substitutions, localContext) {
  let qualifiedMetastatementVerifiedAgainstRule = false;

  const rule = localContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedMetastatementString = localContext.nodeAsString(qualifiedMetastatementNode);

    localContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement against the '${metavariableString}' rule...`, qualifiedMetastatementNode);

    const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, localContext);

    qualifiedMetastatementVerifiedAgainstRule = ruleMatchesMetastatement;  ///

    if (qualifiedMetastatementVerifiedAgainstRule) {
      localContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement against the '${metavariableString}' rule.`, qualifiedMetastatementNode);
    }
  }

  return qualifiedMetastatementVerifiedAgainstRule;
}

function verifyQualifiedMetastatementAAgainstReference(qualifiedMetastatementNode, metavariableNode, substitutions, localContext) {
  let qualifiedMetastatementVerifiedAgainstReference = false;

  if (substitutions !== null) {
    const metavariableString = localContext.nodeAsString(metavariableNode),
          metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode, localContext),
          qualifiedMetastatementString = localContext.nodeAsString(qualifiedMetastatementNode);

    localContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement against the '${metavariableString}' reference...`, qualifiedMetastatementNode);

    if (metavariablePresent) {
      const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
            metavariableVerifiedAgainstMetastatement = verifyMetavariableAgainstMetastatement(metavariableNode, metastatementNode, substitutions, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      qualifiedMetastatementVerifiedAgainstReference = metavariableVerifiedAgainstMetastatement; ///
    }

    if (qualifiedMetastatementVerifiedAgainstReference) {
      localContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement against the '${metavariableString}' reference.`, qualifiedMetastatementNode);
    }
  }

  return qualifiedMetastatementVerifiedAgainstReference;
}

function verifyMetastatement(metastatementNode, assignments, derived, localContext) {
  let metastatementVerified;

  const metastatementString = localContext.nodeAsString(metastatementNode);

  localContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const verifyMetaStatementFunctions = [
    ///
  ];

  verifyMetaStatementFunctions.some((verifyStatementFunction) => {
    const metastatementVerified = verifyStatementFunction(metastatementNode, assignments, derived, localContext);

    if (metastatementVerified) {
      return true;
    }
  });

  metastatementVerified = true; ///

  if (metastatementVerified) {
    localContext.debug(`...verified the '${metastatementString}' metastatement.`, metastatementNode);
  }

  return metastatementVerified;
}

