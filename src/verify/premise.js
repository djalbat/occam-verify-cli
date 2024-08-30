"use strict";

import Premise from "../premise";
import MetaproofStep from "../step/metaproof";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/premise/unqualifiedMetastatement!");

export default function verifyPremise(premiseNode, premises, localMetaContext) {
  let premiseVerified;

  const premiseString = localMetaContext.nodeAsString(premiseNode);

  localMetaContext.trace(`Verifying the '${premiseString}' premise...`, premiseNode);

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(premiseNode);

  if (unqualifiedMetastatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext);

    if (unqualifiedMetastatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localMetaContext);

      premiseVerified = assignmentAssigned; ///
    }
  }

  if (premiseVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode),
          premise = Premise.fromMetastatementNode(metastatementNode);

    premises.push(premise);

    localMetaContext.addMetaproofStep(metaproofStep);

    localMetaContext.debug(`...verified the '${premiseString}' premise.`, premiseNode);
  }

  return premiseVerified;
}
