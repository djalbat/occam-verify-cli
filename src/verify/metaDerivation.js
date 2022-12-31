"use strict";

import MetaAssertion from "../metaAssertion";
import MetaproofContext from "../context/metaproof";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { front, last } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { META_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const metaDerivationNodeQuery = nodeQuery("/metaSubproof/metaDerivation!"),
      metaDerivationChildNodesQuery = nodesQuery("/metaDerivation/*"),
      qualifiedMetastatementNodeQuery = nodeQuery("/qualifiedMetastatement"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unqualifiedMetastatement!"),
      qualifiedOrUnqualifiedMetastatementNodesQuery = nodesQuery("/metaSubproof/qualifiedMetastatement|unqualifiedMetastatement")

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

  const qualifiedOrUnqualifiedMetastatementNodes = qualifiedOrUnqualifiedMetastatementNodesQuery(metaSubproofNode),
        frontQualifiedOrUnqualifiedMetastatementNodes = front(qualifiedOrUnqualifiedMetastatementNodes),
        unqualifiedMetastatementNodes = frontQualifiedOrUnqualifiedMetastatementNodes,  ///
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

    let metaDerivationVerified = true;

    const metaDerivationNode = metaDerivationNodeQuery(metaSubproofNode);

    if (metaDerivationNode !== null) {
      metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, metaproofContext);
    }

    if (metaDerivationVerified) {
      const lastQualifiedOrUnqualifiedMetastatementNode = last(qualifiedOrUnqualifiedMetastatementNodes),
            qualifiedOrUnqualifiedMetastatementNode = lastQualifiedOrUnqualifiedMetastatementNode,  ///
            qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(qualifiedOrUnqualifiedMetastatementNode),
            unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(qualifiedOrUnqualifiedMetastatementNode);

      if (qualifiedMetastatementNode !== null) {
        const qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, metaproofContext);

        metaSubproofVerified = qualifiedMetastatementVerified;  ///
      }

      if (unqualifiedMetastatementNode !== null) {
        const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

        metaSubproofVerified = unqualifiedMetastatementVerified;  ///
      }
    }
  }

  return metaSubproofVerified;
}
