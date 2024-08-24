"use strict";

import MetaproofStep from "../step/metaproof";
import verifyPremises from "../verify/premises";
import LocalMetaContext from "../context/localMeta";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { assignAssignment } from "../utilities/assignments";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { RULE_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const childNodesQuery = nodesQuery("/ruleDerivation|ruleSubDerivation/*"),
      premiseNodesQuery = nodesQuery("/ruleSubproof/premise"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      ruleSubDerivationNodeQuery = nodeQuery("/ruleSubproof/ruleSubDerivation");

export default function verifyRuleDerivation(ruleDerivationNode, localMetaContext) {
  let ruleDerivationVerified;

  const childNodes = childNodesQuery(ruleDerivationNode);

  ruleDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, localMetaContext);

    if (childVerified) {
      return true;
    }
  });

  return ruleDerivationVerified;
}

function verifyRuleSubDerivation(ruleSubDerivationNode, localMetaContext) {
  let ruleSubDerivationVerified;

  const childNodes = childNodesQuery(ruleSubDerivationNode);

  ruleSubDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, localMetaContext);

    if (childVerified) {
      return true;
    }
  });

  return ruleSubDerivationVerified;
}

function verifyRuleSubproof(ruleSubproofNode, localMetaContext) {
  let ruleSubproofVerified = false;

  localMetaContext = LocalMetaContext.fromLocalMetaContext(localMetaContext); ///

  const premises = [],
        premiseNodes = premiseNodesQuery(ruleSubproofNode),
        premisesVerified = verifyPremises(premiseNodes, premises, localMetaContext);

  if (premisesVerified) {
    const ruleSubDerivationNode = ruleSubDerivationNodeQuery(ruleSubproofNode),
          ruleSubDerivationVerified = verifyRuleSubDerivation(ruleSubDerivationNode, localMetaContext);

    if (ruleSubDerivationVerified) {
      ruleSubproofVerified = true;
    }
  }

  return ruleSubproofVerified;
}

function verifyChild(childNode, localMetaContext) {
  let childVerified;

  const childNodeRuleName = childNode.getRuleName();

  switch (childNodeRuleName) {
    case RULE_SUBPROOF_RULE_NAME: {
      const ruleSubproofNode = childNode,  ///
            ruleSubproofVerified = verifyRuleSubproof(ruleSubproofNode, localMetaContext);

      if (ruleSubproofVerified) {
        const metaproofStep = MetaproofStep.fromRuleSubproofNode(ruleSubproofNode);

        localMetaContext.addMetaproofStep(metaproofStep);

        childVerified = true;
      }

      break;
    }

    case QUALIFIED_METASTATEMENT_RULE_NAME: {
      let qualifiedMetastatementVerified;

      const derived = true,
            assignments = [],
            metavariableReferences = true,
            qualifiedMetastatementNode = childNode;  ///

      qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, metavariableReferences, assignments, derived, localMetaContext);

      if (qualifiedMetastatementVerified) {
        const assignmentAssigned = assignAssignment(assignments, localMetaContext);

        qualifiedMetastatementVerified = assignmentAssigned; ///
      }

      if (qualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        localMetaContext.addMetaproofStep(metaproofStep);

        childVerified = qualifiedMetastatementVerified; ///
      }

      break;
    }

    case UNQUALIFIED_METASTATEMENT_RULE_NAME: {
      let unqualifiedMetastatementVerified;

      const derived = true,
            assignments = [],
            unqualifiedMetastatementNode = childNode;  ///

      unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext);

      if (unqualifiedMetastatementVerified) {
        const assignmentAssigned = assignAssignment(assignments, localMetaContext);

        unqualifiedMetastatementVerified = assignmentAssigned; ///
      }

      if (unqualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        localMetaContext.addMetaproofStep(metaproofStep);

        childVerified = true;
      }

      break;
    }
  }

  return childVerified;
}
