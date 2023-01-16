"use strict";

import MetaproofStep from "../step/metaproof";
import verifyPremise from "../verify/premise";
import MetaproofContext from "../context/metaproof";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { RULE_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const childNodesQuery = nodesQuery("/ruleDerivation|ruleSubDerivation/*"),
      premiseNodesQuery = nodesQuery("/ruleSubproof/premise"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"),
      ruleSubDerivationNodeQuery = nodeQuery("/ruleSubproof/ruleSubDerivation");

export default function verifyRuleDerivation(ruleDerivationNode, metaproofContext) {
  let ruleDerivationVerified;

  metaproofContext.begin(ruleDerivationNode);

  const childNodes = childNodesQuery(ruleDerivationNode);

  ruleDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, metaproofContext);

    if (childVerified) {
      return true;
    }
  });

  ruleDerivationVerified ?
    metaproofContext.complete(ruleDerivationNode) :
      metaproofContext.halt(ruleDerivationNode);

  return ruleDerivationVerified;
}

function verifyRuleSubDerivation(ruleSubDerivationNode, metaproofContext) {
  let ruleSubDerivationVerified;

  metaproofContext.begin(ruleSubDerivationNode);

  const childNodes = childNodesQuery(ruleSubDerivationNode);

  ruleSubDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, metaproofContext);

    if (childVerified) {
      return true;
    }
  });

  ruleSubDerivationVerified ?
    metaproofContext.complete(ruleSubDerivationNode) :
      metaproofContext.halt(ruleSubDerivationNode);

  return ruleSubDerivationVerified;
}

function verifyRuleSubproof(ruleSubproofNode, metaproofContext) {
  let ruleSubproofVerified = false;

  metaproofContext = MetaproofContext.fromMetaproofContext(metaproofContext); ///

  const premises = [],
        premiseNodes = premiseNodesQuery(ruleSubproofNode),
        premisesVerified = premiseNodes.every((premiseNode) => {
          const premiseVerified = verifyPremise(premiseNode, premises, metaproofContext);

          if (premiseVerified) {
            return true;
          }
        });

  if (premisesVerified) {
    const ruleSubDerivationNode = ruleSubDerivationNodeQuery(ruleSubproofNode),
          ruleSubDerivationVerified = verifyRuleSubDerivation(ruleSubDerivationNode, metaproofContext);

    if (ruleSubDerivationVerified) {
      ruleSubproofVerified = true;
    }
  }

  return ruleSubproofVerified;
}

function verifyChild(childNode, metaproofContext) {
  let childVerified;

  const childNodeRuleName = childNode.getRuleName();

  switch (childNodeRuleName) {
    case RULE_SUBPROOF_RULE_NAME: {
      const ruleSubproofNode = childNode,  ///
            ruleSubproofVerified = verifyRuleSubproof(ruleSubproofNode, metaproofContext);

      if (ruleSubproofVerified) {
        const metaproofStep = MetaproofStep.fromRuleSubproofNode(ruleSubproofNode);

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
      const derived = true,
            unqualifiedMetastatementNode = childNode,  ///
            unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, derived, metaproofContext);

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
