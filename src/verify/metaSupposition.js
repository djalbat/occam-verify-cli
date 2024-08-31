"use strict";

import MetaproofStep from "../step/metaproof";
import MetaSupposition from "../metaSupposition";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaSupposition/unqualifiedMetastatement!");

export default function verifyMetaSupposition(metaSuppositionNode, metaSuppositions, localMetaContext) {
  let metaSuppositionVerified = false;

  const metaSuppositionString = localMetaContext.nodeAsString(metaSuppositionNode);

  localMetaContext.trace(`Verifying the '${metaSuppositionString}' meta-supposition...`, metaSuppositionNode);

  const derived = false,
        assignments = [],
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaSuppositionNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext);

  if (unqualifiedMetastatementVerified) {
    const localContext = localMetaContext,  ///
          assignmentAssigned = assignAssignment(assignments, localContext);

    metaSuppositionVerified = assignmentAssigned; ///
  }

  if (metaSuppositionVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaSupposition = MetaSupposition.fromMetastatementNode(metastatementNode),
          metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

    metaSuppositions.push(metaSupposition);

    localMetaContext.addMetaproofStep(metaproofStep);

    localMetaContext.debug(`...verified the '${metaSuppositionString}' meta-supposition.`, metaSuppositionNode);
  }

  return metaSuppositionVerified;
}
