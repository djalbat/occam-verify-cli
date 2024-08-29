"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeQuery } from "../../utilities/query";

const metavariableNodeQuery = nodeQuery("/qualifiedMetastatement/reference!/metavariable!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, localMetaContext) {
  let qualifiedMetastatementVerified;

  const qualifiedMetastatementString = localMetaContext.nodeAsString(qualifiedMetastatementNode);

  localMetaContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

  const derived = false,
        metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
        metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (metastatementVerified) {
    const metavariableNode = metavariableNodeQuery(qualifiedMetastatementNode),
          verifyQualifiedMetastatementFunctions = [
            verifyQualifiedMetastatementAAgainstRule
          ];

    qualifiedMetastatementVerified = verifyQualifiedMetastatementFunctions.some((verifyQualifiedMetastatementFunction) => {  ///
      const qualifiedMetastatementVerified = verifyQualifiedMetastatementFunction(qualifiedMetastatementNode, metavariableNode, localMetaContext);

      if (qualifiedMetastatementVerified) {
        return true;
      }
    });
  }

  if (qualifiedMetastatementVerified) {
    localMetaContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement.`, qualifiedMetastatementNode);
  }

  return qualifiedMetastatementVerified;
}

function verifyQualifiedMetastatementAAgainstRule(qualifiedMetastatementNode, metavariableNode, localMetaContext) {
  let qualifiedMetastatementVerifiedAgainstRule = false;

  const rule = localMetaContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const referenceMetavariableString = localMetaContext.nodeAsString(metavariableNode),
          metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
          statementLocalContext = localMetaContext, ///
          qualifiedMetastatementString = localMetaContext.nodeAsString(qualifiedMetastatementNode);

    localMetaContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement against the '${referenceMetavariableString}' rule...`, metastatementNode);

    const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, statementLocalContext);

    qualifiedMetastatementVerifiedAgainstRule = ruleMatchesMetastatement;  ///

    if (qualifiedMetastatementVerifiedAgainstRule) {
      localMetaContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement against the '${referenceMetavariableString}' rule.`, metastatementNode);
    }
  }

  return qualifiedMetastatementVerifiedAgainstRule;
}
