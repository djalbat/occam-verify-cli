"use strict";

import verifyMetastatement from "../metastatement";
import verifyMetavariableAgainstMetastatement from "../../verify/metavariableAgainstMetastatement";

import { nodeQuery } from "../../utilities/query";

const metavariableNodeQuery = nodeQuery("/qualifiedMetastatement/reference!/metavariable!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, derived, localMetaContext) {
  let qualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode),
          metastatementLocalMetaContext = localMetaContext; ///

    localMetaContext.trace(`Verifying the '${metastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

    const metavariableNode = metavariableNodeQuery(qualifiedMetastatementNode);

    if (!qualifiedMetastatementVerified) {
      const rule = localMetaContext.findRuleByMetavariableNode(metavariableNode);

      if (rule !== null) {
        const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, metastatementLocalMetaContext);

        qualifiedMetastatementVerified = ruleMatchesMetastatement;  ///
      }
    }

    if (!qualifiedMetastatementVerified) {
      if (substitutions !== null) {
        const metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext);

        if (metavariablePresent) {
          const metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

          if (metastatementVerified) {
            const metavariableVerifiedAgainstMetastatement = verifyMetavariableAgainstMetastatement(metavariableNode, metastatementNode, substitutions, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

            qualifiedMetastatementVerified = metavariableVerifiedAgainstMetastatement; ///
          }
        }
      }
    }

    if (qualifiedMetastatementVerified) {
      localMetaContext.debug(`...verified the '${metastatementString}' qualified metastatement.`, qualifiedMetastatementNode);
    }
  }

  return qualifiedMetastatementVerified;
}
