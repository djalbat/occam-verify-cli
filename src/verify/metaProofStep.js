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

const metaSubproofNodeQuery = nodeQuery("/metaProofStep|lastMetaProofStep/metaSubproof!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      qualifiedStatementNodeQuery = nodeQuery("/metaProofStep|lastMetaProofStep/qualifiedStatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/metaProofStep|lastMetaProofStep/unqualifiedStatement!"),
      qualifiedMetastatementNodeQuery = nodeQuery("/metaProofStep|lastMetaProofStep/qualifiedMetastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaProofStep|lastMetaProofStep/unqualifiedMetastatement!");

export default function verifyMetaProofStep(metaProofStepNode, substitutions, localMetaContext) {
  let metaProofStepVerified = false;

  const metaSubproofNode = metaSubproofNodeQuery(metaProofStepNode),
        qualifiedStatementNode = qualifiedStatementNodeQuery(metaProofStepNode),
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(metaProofStepNode),
        qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(metaProofStepNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaProofStepNode);

  if (false) {
    ///
  } else if (metaSubproofNode !== null) {
    let metaSubproofVerified;

    metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, substitutions, localMetaContext);

    if (metaSubproofVerified) {
      const metaproofStep = MetaproofStep.fromMetaSubproofNode(metaSubproofNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      metaProofStepVerified = true;
    }
  } else if (qualifiedStatementNode !== null) {
    debugger
  } else if (unqualifiedStatementNode !== null) {
    debugger
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

      metaProofStepVerified = qualifiedMetastatementVerified; ///
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

      metaProofStepVerified = true;
    }
  }

  return metaProofStepVerified;
}

Object.assign(verifyMetaSubDerivation, {
  verifyMetaProofStep
});
