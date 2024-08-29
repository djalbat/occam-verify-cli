"use strict";

import MetaproofStep from "../step/metaproof";
import verifyRuleSubproof from "../verify/ruleSubproof";
import verifyRuleSubDerivation from "../verify/ruleSubDerivation";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const ruleSubproofNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/ruleSubproof!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      qualifiedStatementNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/qualifiedStatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/unqualifiedStatement!"),
      qualifiedMetastatementNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/qualifiedMetastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/unqualifiedMetastatement!");

export default function verifyRuleProofStep(ruleProofStepNode, localMetaContext) {
  let ruleProofStepVerified = false;

  const ruleSubproofNode = ruleSubproofNodeQuery(ruleProofStepNode),
        qualifiedStatementNode = qualifiedStatementNodeQuery(ruleProofStepNode),
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(ruleProofStepNode),
        qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(ruleProofStepNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(ruleProofStepNode);

  if (false) {
    ///
  } else if (ruleSubproofNode !== null) {
    let ruleSubproofVerified;

    ruleSubproofVerified = verifyRuleSubproof(ruleSubproofNode, localMetaContext);

    if (ruleSubproofVerified) {
      const metaproofStep = MetaproofStep.fromRuleSubproofNode(ruleSubproofNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      ruleProofStepVerified = true;
    }
  } else if (qualifiedStatementNode !== null) {
    debugger
  } else if (unqualifiedStatementNode !== null) {
    debugger
  } else if (qualifiedMetastatementNode !== null) {
    let qualifiedMetastatementVerified;

    const assignments = [],
          substitutions = null;

    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, localMetaContext);

    if (qualifiedMetastatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localMetaContext);

      qualifiedMetastatementVerified = assignmentAssigned; ///
    }

    if (qualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
            metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      ruleProofStepVerified = qualifiedMetastatementVerified; ///
    }
  } else if (unqualifiedMetastatementNode !== null) {
    let unqualifiedMetastatementVerified;

    const derived = true,
          assignments = [];

    unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext);

    if (unqualifiedMetastatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localMetaContext);

      unqualifiedMetastatementVerified = assignmentAssigned; ///
    }

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      localMetaContext.addMetaproofStep(metaproofStep);

      ruleProofStepVerified = true;
    }
  }

  return ruleProofStepVerified;
}

Object.assign(verifyRuleSubDerivation, {
  verifyRuleProofStep
});
