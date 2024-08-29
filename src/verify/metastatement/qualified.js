"use strict";

// import verifyMetastatement from "../metastatement";
// import verifyMetavariableAgainstMetastatement from "../../verify/metavariableAgainstMetastatement";

import { nodeQuery } from "../../utilities/query";

const metavariableNodeQuery = nodeQuery("/qualifiedMetastatement/reference!/metavariable!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, derived, localMetaContext) {
  let qualifiedMetastatementVerified = false;

  const qualifiedMetastatementString = localMetaContext.nodeAsString(qualifiedMetastatementNode);

  localMetaContext.trace(`Verifying the '${qualifiedMetastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

  const metavariableNode = metavariableNodeQuery(qualifiedMetastatementNode),
        rule = localMetaContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
          ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, localMetaContext);

    qualifiedMetastatementVerified = ruleMatchesMetastatement;  ///
  }

  // if (!qualifiedMetastatementVerified) {
  //   if (substitutions !== null) {
  //     const metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext);
  //
  //     if (metavariablePresent) {
  //       const metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, () => {
  //         const verifiedAhead = true;
  //
  //         return verifiedAhead;
  //       });
  //
  //       if (metastatementVerified) {
  //         const metavariableVerifiedAgainstMetastatement = verifyMetavariableAgainstMetastatement(metavariableNode, metastatementNode, substitutions, () => {
  //           const verifiedAhead = true;
  //
  //           return verifiedAhead;
  //         });
  //
  //         qualifiedMetastatementVerified = metavariableVerifiedAgainstMetastatement; ///
  //       }
  //     }
  //   }
  // }

  if (qualifiedMetastatementVerified) {
    localMetaContext.debug(`...verified the '${qualifiedMetastatementString}' qualified metastatement.`, qualifiedMetastatementNode);
  }

  return qualifiedMetastatementVerified;
}
