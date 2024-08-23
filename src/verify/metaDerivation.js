"use strict";

import MetaproofStep from "../step/metaproof";
import LocalMetaContext from "../context/localMeta";
import verifyMetaSuppositions from "../verify/metaSuppositions";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { assignAssignment } from "../utilities/assignments";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { META_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const childNodesQuery = nodesQuery("/metaDerivation|metaSubDerivation/*"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      metaSuppositionNodesQuery = nodesQuery("/metaSubproof/metaSupposition"),
      metaSubDerivationNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation");

export default function verifyMetaDerivation(metaDerivationNode, localMetaContext) {
  let metaDerivationVerified;

  const childNodes = childNodesQuery(metaDerivationNode);

  metaDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, localMetaContext);

    if (childVerified) {
      return true;
    }
  });

  return metaDerivationVerified;
}

function verifyMetaSubDerivation(metaSubDerivationNode, localMetaContext) {
  let metaSubDerivationVerified;

  const childNodes = childNodesQuery(metaSubDerivationNode);

  metaSubDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, localMetaContext);

    if (childVerified) {
      return true;
    }
  });

  return metaSubDerivationVerified;
}

function verifyMetaSubproof(metaSubproofNode, localMetaContext) {
  let metaSubproofVerified = false;

  localMetaContext = LocalMetaContext.fromLocalMetaContext(localMetaContext); ///

  const metaSuppositions = [],
        metaSuppositionNodes = metaSuppositionNodesQuery(metaSubproofNode),
        metaSuppositionsVerified = verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, localMetaContext);

  if (metaSuppositionsVerified) {
    const metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode),
          metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, localMetaContext);

    if (metaSubDerivationVerified) {
      metaSubproofVerified = true;
    }
  }

  return metaSubproofVerified;
}

function verifyChild(childNode, localMetaContext) {
  let childVerified = false;

  const childNodeRuleName = childNode.getRuleName();

  switch (childNodeRuleName) {
    case META_SUBPROOF_RULE_NAME: {
      let metaSubproofVerified;

      const metaSubproofNode = childNode;  ///

      metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, localMetaContext);

      if (metaSubproofVerified) {
        const metaproofStep = MetaproofStep.fromMetaSubproofNode(metaSubproofNode);

        localMetaContext.addMetaproofStep(metaproofStep);

        childVerified = true;
      }

      break;
    }

    case QUALIFIED_METASTATEMENT_RULE_NAME: {
      let qualifiedMetastatementVerified;

      const derived = true,
            assignments = [],
            qualifiedMetastatementNode = childNode;  ///

      qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, assignments, derived, localMetaContext);

      if (qualifiedMetastatementVerified) {
        const assignmentAssigned = assignAssignment(assignments, localMetaContext);

        qualifiedMetastatementVerified = assignmentAssigned; ///
      }

      if (qualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        localMetaContext.addMetaproofStep(metaproofStep);

        childVerified = true; ///
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

        unqualifiedMetastatementVerified = assignmentAssigned;  ///
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
