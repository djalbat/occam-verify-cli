"use strict";

const MetaproofContext = require("../context/metaproof"),
      verifyMetaAntecedent = require("../verify/metaAntecedent"),
      verifyQualifiedMetastatement = require("../verify/metastatement/qualified"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery, nodesQuery } = require("../utilities/query"),
      { META_CONDITIONAL_PROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } = require("../ruleNames");

const metaAntecedentNodeQuery = nodeQuery("/metaConditionalProof/metaAntecedent!"),
      metaDerivationNodeQuery = nodeQuery("/metaConditionalProof/metaDerivation!"),
      metaDerivationChildNodesQuery = nodesQuery("/metaDerivation/*"),
      qualifiedMetastatementNodeQuery = nodeQuery("/metaConditionalProof/qualifiedMetastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaConditionalProof/unqualifiedMetastatement!");

function verifyMetaDerivation(metaDerivationNode, context) {
  const derived = true;

  context.setDerived(derived);

  const metaConditionalProofChildNodes = metaDerivationChildNodesQuery(metaDerivationNode),
        metaConditionalProofChildNodesVerified = metaConditionalProofChildNodes.every((metaConditionalProofChildNode) => {
          let metaConditionalProofChildNodeVerified;

          const ruleName = metaConditionalProofChildNode.getRuleName();

          switch (ruleName) {
            case META_CONDITIONAL_PROOF_RULE_NAME: {
              const metaConditionalProofNode = metaConditionalProofChildNode,  ///
                    metaConditionalProofVerified = verifyMetaConditionalProof(metaConditionalProofNode, context);

              metaConditionalProofChildNodeVerified = metaConditionalProofVerified;  ///

              break;
            }

            case QUALIFIED_METASTATEMENT_RULE_NAME: {
              const qualifiedMetastatementNode = metaConditionalProofChildNode,  ///
                    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, context);

              metaConditionalProofChildNodeVerified = qualifiedMetastatementVerified;  ///

              break;
            }

            case UNQUALIFIED_METASTATEMENT_RULE_NAME: {
              const unqualifiedMetastatementNode = metaConditionalProofChildNode,  ///
                    unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

              metaConditionalProofChildNodeVerified = unqualifiedMetastatementVerified;  ///

              break;
            }
          }

          return metaConditionalProofChildNodeVerified;
        }),
        metaDerivationVerified = metaConditionalProofChildNodesVerified;  ///

  return metaDerivationVerified;
}

module.exports = verifyMetaDerivation;

function verifyMetaConditionalProof(metaConditionalProofNode, context) {
  let metaConditionalProofVerified = false;

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const metaAntecedentNode = metaAntecedentNodeQuery(metaConditionalProofNode),
        metaAntecedentVerified = verifyMetaAntecedent(metaAntecedentNode, context);

  if (metaAntecedentVerified) {
    let metaDerivationVerified = true;

    const metaDerivationNode = metaDerivationNodeQuery(metaConditionalProofNode);

    if (metaDerivationNode !== null) {
      metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, context);
    }

    if (metaDerivationVerified) {
      const qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(metaConditionalProofNode),
            unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaConditionalProofNode);

      if (qualifiedMetastatementNode !== null) {
        const qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, context);

        metaConditionalProofVerified = qualifiedMetastatementVerified;  ///
      }

      if (unqualifiedMetastatementNode !== null) {
        const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

        metaConditionalProofVerified = unqualifiedMetastatementVerified;  ///
      }
    }
  }

  return metaConditionalProofVerified;
}
