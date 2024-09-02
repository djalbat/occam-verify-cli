"use strict";

import MetaproofStep from "../step/metaproof";
import verifyMetaSubproof from "../verify/metaSubproof";
import verifyMetaSubDerivation from "../verify/metaSubDerivation";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const metaSubproofNodeQuery = nodeQuery("/metaproofStep|lastMetaproofStep/metaSubproof!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      qualifiedStatementNodeQuery = nodeQuery("/metaproofStep|lastMetaproofStep/qualifiedStatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/metaproofStep|lastMetaproofStep/unqualifiedStatement!"),
      qualifiedMetastatementNodeQuery = nodeQuery("/metaproofStep|lastMetaproofStep/qualifiedMetastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaproofStep|lastMetaproofStep/unqualifiedMetastatement!");

export default function verifyMetaproofStep(metaproofStepNode, substitutions, localMetaContext) {
  let metaproofStepVerified = false;

  const metaSubproofNode = metaSubproofNodeQuery(metaproofStepNode),
        qualifiedStatementNode = qualifiedStatementNodeQuery(metaproofStepNode),
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(metaproofStepNode),
        qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(metaproofStepNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaproofStepNode);

  if (false) {
    ///
  } else if (metaSubproofNode !== null) {
    let metaSubproofVerified;

    metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, substitutions, localMetaContext);

    if (metaSubproofVerified) {
      const metaproofStep = MetaproofStep.fromMetaSubproofNode(metaSubproofNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      metaproofStepVerified = true;
    }
  } else if (qualifiedStatementNode !== null) {
    let qualifiedStatementVerified;

    const assignments = [],
          localContext = localMetaContext;  ///

    qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, assignments, localContext);

    if (qualifiedStatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      qualifiedStatementVerified = assignmentAssigned; ///
    }

    if (qualifiedStatementVerified) {
      const statementNode = statementNodeQuery(qualifiedStatementNode),
            metaproofStep = MetaproofStep.fromStatementNode(statementNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      metaproofStepVerified = true;
    }
  } else if (unqualifiedStatementNode !== null) {
    let unqualifiedStatementVerified;

    const derived = true,
          assignments = [],
          localContext = localMetaContext;

    unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    if (unqualifiedStatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      unqualifiedStatementVerified = assignmentAssigned; ///
    }

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            metaproofStep = MetaproofStep.fromStatementNode(statementNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      metaproofStepVerified = unqualifiedStatementVerified; ///
    }
  } else if (qualifiedMetastatementNode !== null) {
    let qualifiedMetastatementVerified;

    const assignments = [];

    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, localMetaContext);

    if (qualifiedMetastatementVerified) {
      const localContext = localMetaContext,  ///
            assignmentAssigned = assignAssignment(assignments, localContext);

      qualifiedMetastatementVerified = assignmentAssigned; ///
    }

    if (qualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
            metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      metaproofStepVerified = qualifiedMetastatementVerified; ///
    }
  } else if (unqualifiedMetastatementNode !== null) {
    let unqualifiedMetastatementVerified;

    const derived = true,
          assignments = [];

    unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext);

    if (unqualifiedMetastatementVerified) {
      const localContext = localMetaContext,  ///
            assignmentAssigned = assignAssignment(assignments, localContext);

      unqualifiedMetastatementVerified = assignmentAssigned; ///
    }

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      metaproofStepVerified = true;
    }
  }

  return metaproofStepVerified;
}

Object.assign(verifyMetaSubDerivation, {
  verifyMetaproofStep
});
