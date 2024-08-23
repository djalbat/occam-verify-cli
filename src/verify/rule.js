"use strict";

import Rule from "../rule";
import verifyLabels from "../verify/labels";
import verifyPremises from "../verify/premises";
import verifyRuleProof from "../verify/ruleProof";
import LocalMetaContext from "../context/localMeta";
import verifyConclusion from "../verify/conclusion";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelsNodeQuery = nodeQuery("/rule/labels!"),
      premisesNodeQuery = nodesQuery("/rule/premise"),
      ruleProofNodeQuery = nodeQuery("/rule/ruleProof!"),
      conclusionNodeQuery = nodeQuery("/rule/conclusion!");

export default function verifyRule(ruleNode, fileContext) {
  let ruleVerified = false;

  const labelsNode = labelsNodeQuery(ruleNode),
        labelsString = fileContext.nodeAsString(labelsNode),
        localMetaContext = LocalMetaContext.fromFileContext(fileContext);

  fileContext.trace(`Verifying the '${labelsString}' rule...`, ruleNode);

  const labels = [],
        labelsVerified = verifyLabels(labelsNode, labels, fileContext);

  if (labelsVerified) {
    const premises = [],
          premiseNodes = premisesNodeQuery(ruleNode),
          premisesVerified = verifyPremises(premiseNodes, premises, localMetaContext);

    if (premisesVerified) {
      const conclusions = [],
            conclusionNode = conclusionNodeQuery(ruleNode),
            conclusionVerified = verifyConclusion(conclusionNode, conclusions, localMetaContext);

      if (conclusionVerified) {
        const ruleProofNode = ruleProofNodeQuery(ruleNode),
              firstConclusion = first(conclusions),
              conclusion = firstConclusion; ///

        let ruleProofVerified = true; ///

        if (ruleProofNode !== null) {
          ruleProofVerified = verifyRuleProof(ruleProofNode, conclusion, localMetaContext);
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
    fileContext.debug(`...verified the '${labelsString}' rule.`, ruleNode);
  }

  return ruleVerified;
}
