"use strict";

import MetaproofStep from "../step/metaproof";
import MetaSupposition from "../metaSupposition";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaSupposition/unqualifiedMetastatement!");

export default function verifyMetaSupposition(metaSuppositionNode, metaSuppositions, localContext) {
  let metaSuppositionVerified = false;

  const metaSuppositionString = localContext.nodeAsString(metaSuppositionNode);

  localContext.trace(`Verifying the '${metaSuppositionString}' meta-supposition...`, metaSuppositionNode);

  const derived = false,
        assignments = [],
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaSuppositionNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localContext);

  if (unqualifiedMetastatementVerified) {
    const assignmentAssigned = assignAssignment(assignments, localContext);

    metaSuppositionVerified = assignmentAssigned; ///
  }

  if (metaSuppositionVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaSupposition = MetaSupposition.fromMetastatementNode(metastatementNode),
          metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

    metaSuppositions.push(metaSupposition);

    localContext.addMetaproofStep(metaproofStep);

    localContext.debug(`...verified the '${metaSuppositionString}' meta-supposition.`, metaSuppositionNode);
  }

  return metaSuppositionVerified;
}
