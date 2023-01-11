"use strict";

import MetaproofStep from "../step/metaproof";
import MetaproofContext from "../context/metaproof";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { META_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const childNodesQuery = nodesQuery("/metaDerivation|metaSubDerivation/*"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      metaSubDerivationNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/metaSubproof/unqualifiedMetastatement");

export default function verifyMetaDerivation(metaDerivationNode, metaproofContext) {
  let metaDerivationVerified;

  metaproofContext.begin(metaDerivationNode);

  metaproofContext.setDerived();

  const childNodes = childNodesQuery(metaDerivationNode);

  metaDerivationVerified = childNodes.every((childNode) => {  ///
    const childVerified = verifyChild(childNode, metaproofContext);

    if (childVerified) {
      return true;
    }
  });

  metaproofContext.resetDerived();

  metaDerivationVerified ?
    metaproofContext.complete(metaDerivationNode) :
      metaproofContext.halt(metaDerivationNode);

  return metaDerivationVerified;
}

function verifyMetaSubDerivation(metaSubDerivationNode, metaproofContext) {
  let metaDerivationVerified;

  metaproofContext.begin(metaSubDerivationNode);

  metaproofContext.setDerived();

  const childNodes = childNodesQuery(metaSubDerivationNode);

  metaDerivationVerified = childNodes.every((childNode) => {  ///
    const childVerified = verifyChild(childNode, metaproofContext);

    if (childVerified) {
      return true;
    }
  });

  metaproofContext.resetDerived();

  metaDerivationVerified ?
    metaproofContext.complete(metaSubDerivationNode) :
      metaproofContext.halt(metaSubDerivationNode);

  return metaDerivationVerified;
}

function verifyMetaSubproof(metaSubproofNode, metaproofContext) {
  let metaSubproofVerified = false;

  metaproofContext = MetaproofContext.fromMetaproofContext(metaproofContext); ///

  const unqualifiedMetastatementNodes = unqualifiedMetastatementNodesQuery(metaSubproofNode),
        unqualifiedMetastatementsVerified = unqualifiedMetastatementNodes.every((unqualifiedMetastatementNode) => {
      const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

      if (unqualifiedMetastatementVerified) {
        return true;
      }
    });

  if (unqualifiedMetastatementsVerified) {
    unqualifiedMetastatementNodes.forEach((unqualifiedMetastatementNode) => {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
        metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      metaproofContext.addMetaproofStep(metaproofStep);
    });

    const metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode),
          metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, metaproofContext);

    if (metaSubDerivationVerified) {
      metaSubproofVerified = true;
    }
  }

  return metaSubproofVerified;
}

function verifyChild(childNode, metaproofContext) {
  let childVerified;

  const childNodeRuleName = childNode.getRuleName();

  switch (childNodeRuleName) {
    case META_SUBPROOF_RULE_NAME: {
      const metaSubproofNode = childNode,  ///
            metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, metaproofContext);

      if (metaSubproofVerified) {
        const metaproofStep = MetaproofStep.fromMetaSubproofNode(metaSubproofNode);

        metaproofContext.addMetaproofStep(metaproofStep);

        childVerified = true;
      }

      break;
    }

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
