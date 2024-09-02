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

const statementNodeQuery = nodeQuery("/qualifiedStatement|unqualifiedStatement/statement!"),
      ruleSubproofNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/ruleSubproof!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      qualifiedStatementNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/qualifiedStatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/unqualifiedStatement!"),
      qualifiedMetastatementNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/qualifiedMetastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/ruleProofStep|lastRuleProofStep/unqualifiedMetastatement!");

export default function verifyRuleProofStep(ruleProofStepNode, localContext) {
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

    ruleSubproofVerified = verifyRuleSubproof(ruleSubproofNode, localContext);

    if (ruleSubproofVerified) {
      const metaproofStep = MetaproofStep.fromRuleSubproofNode(ruleSubproofNode);

      localContext.addMetaproofStep(metaproofStep);

      ruleProofStepVerified = true;
    }
  } else if (qualifiedStatementNode !== null) {
    let qualifiedStatementVerified;

    const assignments = [];

    qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, assignments, localContext);

    if (qualifiedStatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      qualifiedStatementVerified = assignmentAssigned; ///
    }

    if (qualifiedStatementVerified) {
      const statementNode = statementNodeQuery(qualifiedStatementNode),
            metaproofStep = MetaproofStep.fromStatementNode(statementNode);

      localContext.addMetaproofStep(metaproofStep);

      ruleProofStepVerified = true;
    }
  } else if (unqualifiedStatementNode !== null) {
    let unqualifiedStatementVerified;

    const derived = true,
          assignments = [];

    unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    if (unqualifiedStatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      unqualifiedStatementVerified = assignmentAssigned; ///
    }

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            metaproofStep = MetaproofStep.fromStatementNode(statementNode);

      localContext.addMetaproofStep(metaproofStep);

      ruleProofStepVerified = unqualifiedStatementVerified; ///
    }
  } else if (qualifiedMetastatementNode !== null) {
    let qualifiedMetastatementVerified;

    const assignments = [],
          substitutions = null;

    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, localContext);

    if (qualifiedMetastatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      qualifiedMetastatementVerified = assignmentAssigned; ///
    }

    if (qualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
            metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      localContext.addMetaproofStep(metaproofStep);

      ruleProofStepVerified = qualifiedMetastatementVerified; ///
    }
  } else if (unqualifiedMetastatementNode !== null) {
    let unqualifiedMetastatementVerified;

    const derived = true,
          assignments = [];

    unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localContext);

    if (unqualifiedMetastatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      unqualifiedMetastatementVerified = assignmentAssigned; ///
    }

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      localContext.addMetaproofStep(metaproofStep);

      ruleProofStepVerified = true;
    }
  }

  return ruleProofStepVerified;
}

Object.assign(verifyRuleSubDerivation, {
  verifyRuleProofStep
});
