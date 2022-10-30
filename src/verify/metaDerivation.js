"use strict";

import MetaAssertion from "../metaAssertion";
import MetaproofContext from "../context/metaproof";
import verifyQualifiedMetastatement from "../verify/metastatement/qualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { first, second } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { META_SUBPROOF_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const metaDerivationNodeQuery = nodeQuery("/metaSubproof/metaDerivation!"),
      metaDerivationChildNodesQuery = nodesQuery("/metaDerivation/*"),
      qualifiedMetastatementNodeQuery = nodeQuery("/qualifiedMetastatement"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unqualifiedMetastatement!"),
      qualifiedOrUnqualifiedMetastatementNodesQuery = nodesQuery("/metaSubproof/qualifiedMetastatement|unqualifiedMetastatement")

export default function verifyMetaDerivation(metaDerivationNode, context) {
  let metaDerivationVerified;

  context.begin(metaDerivationNode);

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
        });

  metaDerivationVerified = metaDerivationChildNodesVerified;  ///

  metaDerivationVerified ?
    context.complete(metaDerivationNode) :
      context.halt(metaDerivationNode);

  return metaDerivationVerified;
}

function verifyMetaSubproof(metaSubproofNode, context) {
  let metaSubproofVerified = false;

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const qualifiedOrUnqualifiedMetastatementNodes = qualifiedOrUnqualifiedMetastatementNodesQuery(metaSubproofNode),
        firstQualifiedOrUnqualifiedMetastatementNode = first(qualifiedOrUnqualifiedMetastatementNodes),
        unqualifiedMetastatementNode = firstQualifiedOrUnqualifiedMetastatementNode,  ///
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

  if (unqualifiedMetastatementVerified) {
    const metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode);

    context.addMetaAssertion(metaAssertion);

    let metaDerivationVerified = true;

    const metaDerivationNode = metaDerivationNodeQuery(metaSubproofNode);

    if (metaDerivationNode !== null) {
      metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, context);
    }

    if (metaDerivationVerified) {
      const secondQualifiedOrUnqualifiedMetastatementNode = second(qualifiedOrUnqualifiedMetastatementNodes),
            qualifiedOrUnqualifiedMetastatementNode = secondQualifiedOrUnqualifiedMetastatementNode,  ///
            qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(qualifiedOrUnqualifiedMetastatementNode),
            unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(qualifiedOrUnqualifiedMetastatementNode);

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
