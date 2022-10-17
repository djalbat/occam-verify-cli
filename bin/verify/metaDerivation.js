"use strict";

const MetaAssertion = require("../metaAssertion"),
      MetaproofContext = require("../context/metaproof"),
      verifyMetaSupposition = require("../verify/metaSupposition"),
      verifyQualifiedMetastatement = require("../verify/metastatement/qualified"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery, nodesQuery } = require("../utilities/query"),
      { META_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } = require("../ruleNames");

const metaSuppositionNodeQuery = nodeQuery("/metaSubproof/metaSupposition!"),
      metaDerivationNodeQuery = nodeQuery("/metaSubproof/metaDerivation!"),
      metaDerivationChildNodesQuery = nodesQuery("/metaDerivation/*"),
      qualifiedMetastatementNodeQuery = nodeQuery("/metaSubproof/qualifiedMetastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaSubproof/unqualifiedMetastatement!");

function verifyMetaDerivation(metaDerivationNode, context) {
  const derived = true;

  context.setDerived(derived);

  const metaDerivationChildNodes = metaDerivationChildNodesQuery(metaDerivationNode),
        metaDerivationChildNodesVerified = metaDerivationChildNodes.every((metaDerivationChildNode) => {
          let metaDerivationChildNodeVerified;

          const ruleName = metaDerivationChildNode.getRuleName();

          switch (ruleName) {
            case META_SUBPROOF_RULE_NAME: {
              const metaSubproofNode = metaDerivationChildNode,  ///
                    metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, context);

              if (metaSubproofVerified) {
                const metaAssertion = MetaAssertion.fromMetaSubproofNode(metaSubproofNode);

                context.addMetaAssertion(metaAssertion);

                metaDerivationChildNodeVerified = true;
              }

              break;
            }

            case QUALIFIED_METASTATEMENT_RULE_NAME: {
              const qualifiedMetastatementNode = metaDerivationChildNode,  ///
                    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, context);

              if (qualifiedMetastatementVerified) {
                const metaAssertion = MetaAssertion.fromQualifiedMetastatementNode(qualifiedMetastatementNode);

                context.addMetaAssertion(metaAssertion);

                metaDerivationChildNodeVerified = qualifiedMetastatementVerified; ///
              }

              break;
            }

            case UNQUALIFIED_METASTATEMENT_RULE_NAME: {
              const unqualifiedMetastatementNode = metaDerivationChildNode,  ///
                    unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

              if (unqualifiedMetastatementVerified) {
                const metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode);

                context.addMetaAssertion(metaAssertion);

                metaDerivationChildNodeVerified = true;
              }

              break;
            }
          }

          return metaDerivationChildNodeVerified;
        }),
        metaDerivationVerified = metaDerivationChildNodesVerified;  ///

  return metaDerivationVerified;
}

module.exports = verifyMetaDerivation;

function verifyMetaSubproof(metaSubproofNode, context) {
  let metaSubproofVerified = false;

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const metaSuppositionNode = metaSuppositionNodeQuery(metaSubproofNode),
        metaSuppositionVerified = verifyMetaSupposition(metaSuppositionNode, context);

  if (metaSuppositionVerified) {
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
