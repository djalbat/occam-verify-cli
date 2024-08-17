"use strict";

import LocalContext from "../context/local";
import MetaproofStep from "../step/metaproof";
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

export default function verifyMetaDerivation(metaDerivationNode, localContext) {
  let metaDerivationVerified;

  const childNodes = childNodesQuery(metaDerivationNode);

  metaDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, localContext);

    if (childVerified) {
      return true;
    }
  });

  return metaDerivationVerified;
}

function verifyMetaSubDerivation(metaSubDerivationNode, localContext) {
  let metaSubDerivationVerified;

  const childNodes = childNodesQuery(metaSubDerivationNode);

  metaSubDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, localContext);

    if (childVerified) {
      return true;
    }
  });

  return metaSubDerivationVerified;
}

function verifyMetaSubproof(metaSubproofNode, localContext) {
  let metaSubproofVerified = false;

  localContext = LocalContext.fromLocalContext(localContext); ///

  const metaSuppositions = [],
        metaSuppositionNodes = metaSuppositionNodesQuery(metaSubproofNode),
        metaSuppositionsVerified = verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, localContext);

  if (metaSuppositionsVerified) {
    const metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode),
          metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, localContext);

    if (metaSubDerivationVerified) {
      metaSubproofVerified = true;
    }
  }

  return metaSubproofVerified;
}

function verifyChild(childNode, localContext) {
  let childVerified = false;

  const childNodeRuleName = childNode.getRuleName();

  switch (childNodeRuleName) {
    case META_SUBPROOF_RULE_NAME: {
      let metaSubproofVerified;

      const metaSubproofNode = childNode;  ///

      metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, localContext);

      if (metaSubproofVerified) {
        const metaproofStep = MetaproofStep.fromMetaSubproofNode(metaSubproofNode);

        localContext.addMetaproofStep(metaproofStep);

        childVerified = true;
      }

      break;
    }

    case QUALIFIED_METASTATEMENT_RULE_NAME: {
      let qualifiedMetastatementVerified;

      const derived = true,
            assignments = [],
            qualifiedMetastatementNode = childNode;  ///

      qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, assignments, derived, localContext);

      if (qualifiedMetastatementVerified) {
        const assignmentAssigned = assignAssignment(assignments, localContext);

        qualifiedMetastatementVerified = assignmentAssigned; ///
      }

      if (qualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        localContext.addMetaproofStep(metaproofStep);

        childVerified = true; ///
      }

      break;
    }

    case UNQUALIFIED_METASTATEMENT_RULE_NAME: {
      let unqualifiedMetastatementVerified;

      const derived = true,
            assignments = [],
            unqualifiedMetastatementNode = childNode;  ///

      unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localContext);

      if (unqualifiedMetastatementVerified) {
        const assignmentAssigned = assignAssignment(assignments, localContext);

        unqualifiedMetastatementVerified = assignmentAssigned;  ///
      }

      if (unqualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        localContext.addMetaproofStep(metaproofStep);

        childVerified = true;
      }

      break;
    }
  }

  return childVerified;
}
