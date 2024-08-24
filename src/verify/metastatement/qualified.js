"use strict";

import verifyMetastatement from "../metastatement";

import { nodeQuery } from "../../utilities/query";

const metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!"),
      referenceMetavariableNodeQuery = nodeQuery("/qualifiedMetastatement/reference!/metavariable!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, metavariableReferences, assignments, derived, localMetaContext) {
  let qualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode),
          metastatementLocalMetaContext = localMetaContext; ///

    localMetaContext.trace(`Verifying the '${metastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

    const referenceMetavariableNode = referenceMetavariableNodeQuery(qualifiedMetastatementNode),
          labelMetavariableNode = referenceMetavariableNode,  ///
          rule = localMetaContext.findRuleByLabelMetavariableNode(labelMetavariableNode);

    if (rule !== null) {
      const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, metastatementLocalMetaContext);

      qualifiedMetastatementVerified = ruleMatchesMetastatement;  ///
    } else {
      if (metavariableReferences) {
        const metavariableNode = referenceMetavariableNode, ///
              metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext);

        if (metavariablePresent) {
          const metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, () => {
                  const verifiedAhead = true;

                  return verifiedAhead;
                });

          qualifiedMetastatementVerified = metastatementVerified; ///
        }
      }
    }

    if (qualifiedMetastatementVerified) {
      localMetaContext.debug(`...verified the '${metastatementString}' qualified metastatement.`, qualifiedMetastatementNode);
    }
  }

  return qualifiedMetastatementVerified;
}
