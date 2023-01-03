"use strict";

import MetaproofStep from "../step/metaproof";
import MetaproofContext from "../context/metaproof";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { META_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      metaDerivationNodeQuery = nodeQuery("/metaSubproof/metaDerivation|abridgedMetaDerivation!"),  ///
      metaDerivationChildNodesQuery = nodesQuery("/metaDerivation|abridgedMetaDerivation/*"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/metaSubproof/unqualifiedMetastatement")

export default function verifyMetaDerivation(metaDerivationNode, metaproofContext) {
  let metaDerivationVerified;

  metaproofContext.begin(metaDerivationNode);

  metaproofContext.setDerived();

  const metaDerivationChildNodes = metaDerivationChildNodesQuery(metaDerivationNode);

  metaDerivationVerified = metaDerivationChildNodes.every((metaDerivationChildNode) => {  ///
    const metaDerivationChildVerified = verifyMetaDerivationChild(metaDerivationChildNode, metaproofContext);

    if (metaDerivationChildVerified) {
      return true;
    }
  });

  metaproofContext.resetDerived();

  metaDerivationVerified ?
    metaproofContext.complete(metaDerivationNode) :
      metaproofContext.halt(metaDerivationNode);

  return metaDerivationVerified;
}

function verifyMetaDerivationChild(metaDerivationChildNode, metaproofContext) {
  let metaDerivationChildVerified;

  const ruleName = metaDerivationChildNode.getRuleName();

  switch (ruleName) {
    case META_SUBPROOF_RULE_NAME: {
      const metaSubproofNode = metaDerivationChildNode,  ///
            metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, metaproofContext);

      if (metaSubproofVerified) {
        const metaproofStep = MetaproofStep.fromMetaSubproofNode(metaSubproofNode);

        metaproofContext.addMetaproofStep(metaproofStep);

        metaDerivationChildVerified = true;
      }

      break;
    }

    case QUALIFIED_METASTATEMENT_RULE_NAME: {
      const qualifiedMetastatementNode = metaDerivationChildNode,  ///
            qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, metaproofContext);

      if (qualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        metaproofContext.addMetaproofStep(metaproofStep);

        metaDerivationChildVerified = qualifiedMetastatementVerified; ///
      }

      break;
    }

    case UNQUALIFIED_METASTATEMENT_RULE_NAME: {
      const unqualifiedMetastatementNode = metaDerivationChildNode,  ///
            unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

      if (unqualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
              metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

        metaproofContext.addMetaproofStep(metaproofStep);

        metaDerivationChildVerified = true;
      }

      break;
    }
  }

  return metaDerivationChildVerified;
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

    const metaDerivationNode = metaDerivationNodeQuery(metaSubproofNode),
          metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, metaproofContext);

    if (metaDerivationVerified) {
      metaSubproofVerified = true;
    }
  }

  return metaSubproofVerified;
}
