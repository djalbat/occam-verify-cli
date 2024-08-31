"use strict";

import MetaproofStep from "../step/metaproof";
import MetaSupposition from "../metaSupposition";
import verifyUnqualifiedStatement from "./statement/unqualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/metaSupposition/unqualifiedStatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaSupposition/unqualifiedMetastatement!");

export default function verifyMetaSupposition(metaSuppositionNode, metaSuppositions, localMetaContext) {
  let metaSuppositionVerified = false;

  const metaSuppositionString = localMetaContext.nodeAsString(metaSuppositionNode);

  localMetaContext.trace(`Verifying the '${metaSuppositionString}' meta-supposition...`, metaSuppositionNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(metaSuppositionNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaSuppositionNode);

  if (unqualifiedStatementNode !== null) {
    const derived = false,
          assignments = [],
          localContext = localMetaContext,  ///
          unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    if (unqualifiedStatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      metaSuppositionVerified = assignmentAssigned; ///
    }
  }

  if (unqualifiedMetastatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext);

    if (unqualifiedMetastatementVerified) {
      const localContext = localMetaContext,  ///
            assignmentAssigned = assignAssignment(assignments, localContext);

      metaSuppositionVerified = assignmentAssigned; ///
    }
  }

  if (metaSuppositionVerified) {
    let metaSupposition,
        metaproofStep;

    if (unqualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode);

      metaSupposition = MetaSupposition.fromStatementNode(statementNode);

      metaproofStep = MetaproofStep.fromMetastatementNode(statementNode);
    }

    if (unqualifiedMetastatementNode !== null) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

      metaSupposition = MetaSupposition.fromMetastatementNode(metastatementNode);

      metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);
    }

    metaSuppositions.push(metaSupposition);

    localMetaContext.addMetaproofStep(metaproofStep);

    localMetaContext.debug(`...verified the '${metaSuppositionString}' meta-supposition.`, metaSuppositionNode);
  }

  return metaSuppositionVerified;
}
