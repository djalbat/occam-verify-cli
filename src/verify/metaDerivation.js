"use strict";

import MetaproofStep from "../step/metaproof";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const childNodesQuery = nodesQuery("/metaDerivation|metaSubDerivation/*"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");

export default function verifyMetaDerivation(metaDerivationNode, metaproofContext) {
  let metaDerivationVerified;

  metaproofContext.begin(metaDerivationNode);

  const childNodes = childNodesQuery(metaDerivationNode);

  metaDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, metaproofContext);

    if (childVerified) {
      return true;
    }
  });

  metaDerivationVerified ?
    metaproofContext.complete(metaDerivationNode) :
      metaproofContext.halt(metaDerivationNode);

  return metaDerivationVerified;
}

function verifyChild(childNode, metaproofContext) {
  let childVerified;

  const childNodeRuleName = childNode.getRuleName();

  switch (childNodeRuleName) {
    case QUALIFIED_METASTATEMENT_RULE_NAME: {
      const qualifiedMetastatementNode = childNode,  ///
            qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, metaproofContext);

      if (qualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        metaproofContext.addMetaproofStep(metaproofStep);

        childVerified = qualifiedMetastatementVerified; ///
      }

      break;
    }

    case UNQUALIFIED_METASTATEMENT_RULE_NAME: {
      const unqualifiedMetastatementNode = childNode,  ///
            unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

      if (unqualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        metaproofContext.addMetaproofStep(metaproofStep);

        childVerified = true;
      }

      break;
    }
  }

  return childVerified;
}
