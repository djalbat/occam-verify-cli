"use strict";

const MetaproofContext = require("../context/metaproof"),
      verifyMetaAntecedent = require("../verify/metaAntecedent"),
      verifyQualifiedMetastatement = require("../verify/metastatement/qualified"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery, nodesQuery } = require("../utilities/query"),
      { META_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } = require("../ruleNames");

const metaAntecedentNodeQuery = nodeQuery("/metaSubproof/metaAntecedent!"),
      metaDerivationNodeQuery = nodeQuery("/metaSubproof/metaDerivation!"),
      metaDerivationChildNodesQuery = nodesQuery("/metaDerivation/*"),
      qualifiedMetastatementNodeQuery = nodeQuery("/metaSubproof/qualifiedMetastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaSubproof/unqualifiedMetastatement!");

function verifyMetaDerivation(metaDerivationNode, context) {
  const derived = true;

  context.setDerived(derived);

  const metaSubproofChildNodes = metaDerivationChildNodesQuery(metaDerivationNode),
        metaSubproofChildNodesVerified = metaSubproofChildNodes.every((metaSubproofChildNode) => {
          let metaSubproofChildNodeVerified;

          const ruleName = metaSubproofChildNode.getRuleName();

          switch (ruleName) {
            case META_SUBPROOF_RULE_NAME: {
              const metaSubproofNode = metaSubproofChildNode,  ///
                    metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, context);

              metaSubproofChildNodeVerified = metaSubproofVerified;  ///

              break;
            }

            case QUALIFIED_METASTATEMENT_RULE_NAME: {
              const qualifiedMetastatementNode = metaSubproofChildNode,  ///
                    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, context);

              metaSubproofChildNodeVerified = qualifiedMetastatementVerified;  ///

              break;
            }

            case UNQUALIFIED_METASTATEMENT_RULE_NAME: {
              const unqualifiedMetastatementNode = metaSubproofChildNode,  ///
                    unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

              metaSubproofChildNodeVerified = unqualifiedMetastatementVerified;  ///

              break;
            }
          }

          return metaSubproofChildNodeVerified;
        }),
        metaDerivationVerified = metaSubproofChildNodesVerified;  ///

  return metaDerivationVerified;
}

module.exports = verifyMetaDerivation;

function verifyMetaSubproof(metaSubproofNode, context) {
  let metaSubproofVerified = false;

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const metaAntecedentNode = metaAntecedentNodeQuery(metaSubproofNode),
        metaAntecedentVerified = verifyMetaAntecedent(metaAntecedentNode, context);

  if (metaAntecedentVerified) {
    let metaDerivationVerified = true;

    const metaDerivationNode = metaDerivationNodeQuery(metaSubproofNode);

    if (metaDerivationNode !== null) {
      metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, context);
    }

    if (metaDerivationVerified) {
      const qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(metaSubproofNode),
            unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaSubproofNode);

      if (qualifiedMetastatementNode !== null) {
        const qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, context);

        metaSubproofVerified = qualifiedMetastatementVerified;  ///
      }

      if (unqualifiedMetastatementNode !== null) {
        const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

        metaSubproofVerified = unqualifiedMetastatementVerified;  ///
      }
    }
  }

  return metaSubproofVerified;
}
