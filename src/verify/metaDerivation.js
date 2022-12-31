"use strict";

import MetaAssertion from "../metaAssertion";
import MetaproofContext from "../context/metaproof";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { META_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const metaDerivationNodeQuery = nodeQuery("/metaSubproof/metaDerivation|abridgedMetaDerivation!"),  ///
      metaDerivationChildNodesQuery = nodesQuery("/metaDerivation|abridgedMetaDerivation/*"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/metaSubproof/unqualifiedMetastatement")

export default function verifyMetaDerivation(metaDerivationNode, metaproofContext) {
  let metaDerivationVerified,
      derived;

  metaproofContext.begin(metaDerivationNode);

  derived = true;

  metaproofContext.setDerived(derived);

  const metaDerivationChildNodes = metaDerivationChildNodesQuery(metaDerivationNode);

  metaDerivationVerified = metaDerivationChildNodes.every((metaDerivationChildNode) => {  ///
    const metaDerivationChildVerified = verifyMetaDerivationChild(metaDerivationChildNode, metaproofContext);

    if (metaDerivationChildVerified) {
      return true;
    }
  });

  derived = false;

  metaproofContext.setDerived(derived);

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
        const metaAssertion = MetaAssertion.fromMetaSubproofNode(metaSubproofNode);

        metaproofContext.addMetaAssertion(metaAssertion);

        metaDerivationChildVerified = true;
      }

      break;
    }

    case QUALIFIED_METASTATEMENT_RULE_NAME: {
      const qualifiedMetastatementNode = metaDerivationChildNode,  ///
            qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, metaproofContext);

      if (qualifiedMetastatementVerified) {
        const metaAssertion = MetaAssertion.fromQualifiedMetastatementNode(qualifiedMetastatementNode);

        metaproofContext.addMetaAssertion(metaAssertion);

        metaDerivationChildVerified = qualifiedMetastatementVerified; ///
      }

      break;
    }

    case UNQUALIFIED_METASTATEMENT_RULE_NAME: {
      const unqualifiedMetastatementNode = metaDerivationChildNode,  ///
            unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

      if (unqualifiedMetastatementVerified) {
        const metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode);

        metaproofContext.addMetaAssertion(metaAssertion);

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
      const metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode);

      metaproofContext.addMetaAssertion(metaAssertion);
    });

    const metaDerivationNode = metaDerivationNodeQuery(metaSubproofNode),
          metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, metaproofContext);

    if (metaDerivationVerified) {
      metaSubproofVerified = true;
    }
  }

  return metaSubproofVerified;
}
