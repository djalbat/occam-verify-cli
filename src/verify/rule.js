"use strict";

import Rule from "../rule";
import verifyLabels from "../verify/labels";
import verifyPremise from "../verify/premise";
import verifyRuleProof from "../verify/ruleProof";
import MetaproofContext from "../context/metaproof";
import verifyConclusion from "../verify/conclusion";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/rule/label"),
      premisesNodeQuery = nodesQuery("/rule/premise"),
      ruleProofNodeQuery = nodeQuery("/rule/ruleProof!"),
      conclusionNodeQuery = nodeQuery("/rule/conclusion!");

export default function verifyRule(ruleNode, fileContext) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        metaProofContext = MetaproofContext.fromFileContext(fileContext);

  fileContext.debug(`Verifying the '${labelsString}' rule...`, ruleNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const premises = [],
          premiseNodes = premisesNodeQuery(ruleNode),
          premisesVerified = premiseNodes.every((premiseNode) => {
            const premiseVerified = verifyPremise(premiseNode, premises, metaProofContext);

            if (premiseVerified) {
              return true;
            }
          });

    if (premisesVerified) {
      const conclusions = [],
            conclusionNode = conclusionNodeQuery(ruleNode),
            conclusionVerified = verifyConclusion(conclusionNode, conclusions, metaProofContext);

      if (conclusionVerified) {
        const ruleProofNode = ruleProofNodeQuery(ruleNode),
              firstConclusion = first(conclusions),
              conclusion = firstConclusion; ///

        let ruleProofVerified = true; ///

        if (ruleProofNode !== null) {
          ruleProofVerified = verifyRuleProof(ruleProofNode, conclusion, metaProofContext);
        }

        if (ruleProofVerified) {
          const rule = Rule.fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext);

          fileContext.addRule(rule);

          ruleVerified = true;
        }
      }
    }
  }

  if (ruleVerified) {
    fileContext.info(`Verified the '${labelsString}' rule.`, ruleNode);
  }

  return ruleVerified;
}
