"use strict";

import { nodeQuery } from "../../utilities/query";

const labelNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/label!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, assignments, derived, localMetaContext) {
  let qualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode),
          metastatementLocalMetaContext = localMetaContext; ///

    localMetaContext.trace(`Verifying the '${metastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

    const labelNode = labelNodeQuery(qualifiedMetastatementNode),
          rule = localMetaContext.findRuleByLabelNode(labelNode);

    if (rule !== null) {
      const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, metastatementLocalMetaContext);

      qualifiedMetastatementVerified = ruleMatchesMetastatement;  ///
    }

    if (qualifiedMetastatementVerified) {
      localMetaContext.debug(`...verified the '${metastatementString}' qualified metastatement.`, qualifiedMetastatementNode);
    }
  }

  return qualifiedMetastatementVerified;
}
