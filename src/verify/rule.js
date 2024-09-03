"use strict";

import Rule from "../rule";
import verifyLabels from "../verify/labels";
import verifyPremises from "../verify/premises";
import verifyMetaproof from "../verify/metaproof";
import verifyConclusion from "../verify/conclusion";
import MetaLevelLocalContext from "../context/local/metaLevel";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/rule/label"),
      premisesNodeQuery = nodesQuery("/rule/premise"),
      metaproofNodeQuery = nodeQuery("/rule/metaproof!"),
      conclusionNodeQuery = nodeQuery("/rule/conclusion!");

export default function verifyRule(ruleNode, fileContext) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = fileContext.nodesAsString(labelNodes);

  fileContext.trace(`Verifying the '${labelsString}' rule...`, ruleNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const metaLevelLocalContext = MetaLevelLocalContext.fromFileContext(fileContext),
          premises = [],
          localContext = metaLevelLocalContext, ///
          premiseNodes = premisesNodeQuery(ruleNode),
          premisesVerified = verifyPremises(premiseNodes, premises, localContext);

    if (premisesVerified) {
      const conclusions = [],
            conclusionNode = conclusionNodeQuery(ruleNode),
            conclusionVerified = verifyConclusion(conclusionNode, conclusions, localContext);

      if (conclusionVerified) {
        let metaproofVerified = true; ///

        const firstConclusion = first(conclusions),
              metaproofNode = metaproofNodeQuery(ruleNode),
              conclusion = firstConclusion; ///

        if (metaproofNode !== null) {
          const substitutions = [],
                metastatementNode = conclusion.getMetastatementNode();

          metaproofVerified = verifyMetaproof(metaproofNode, metastatementNode, substitutions, localContext);
        }

        if (metaproofVerified) {
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
