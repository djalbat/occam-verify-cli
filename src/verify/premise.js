"use strict";

import Premise from "../premise";
import MetaproofStep from "../step/metaproof";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/premise/unqualifiedStatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/premise/unqualifiedMetastatement!");

export default function verifyPremise(premiseNode, premises, localContext) {
  let premiseVerified;

  const premiseString = localContext.nodeAsString(premiseNode);

  localContext.trace(`Verifying the '${premiseString}' premise...`, premiseNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(premiseNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(premiseNode);

  if (unqualifiedStatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    if (unqualifiedStatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      premiseVerified = assignmentAssigned; ///
    }
  }

  if (unqualifiedMetastatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localContext);

    if (unqualifiedMetastatementVerified) {
      const localContext = localContext,  ///
            assignmentAssigned = assignAssignment(assignments, localContext);

      premiseVerified = assignmentAssigned; ///
    }
  }

  if (premiseVerified) {
    let premise,
        metaproofStep;

    if (unqualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode);

      metaproofStep = MetaproofStep.fromMetastatementNode(statementNode);

      premise = Premise.fromStatementNode(statementNode);
    }

    if (unqualifiedMetastatementNode !== null) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

      metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      premise = Premise.fromMetastatementNode(metastatementNode);
    }

    premises.push(premise);

    localContext.addMetaproofStep(metaproofStep);

    localContext.debug(`...verified the '${premiseString}' premise.`, premiseNode);
  }

  return premiseVerified;
}
