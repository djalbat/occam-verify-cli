"use strict";

import { loggingUtilities } from "necessary";

import Rule from "../rule";
import verifyLabels from "../verify/labels";
import verifyMetaproof from "../verify/metaproof";
import MetaproofContext from "../context/metaproof";
import verifyConditionalInference from "../verify/conditinalInference";
import verifyUnconditionalInference from "../verify/unconditionalInference";

import { first } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label"),
      metaproofNodeQuery = nodeQuery("/rule/metaproof!"),
      conditionalInferenceNodeQuery = nodeQuery("/rule/conditionalInference!"),
      unconditionalInferenceNodeQuery = nodeQuery("/rule/unconditionalInference!");

export default function verifyRule(ruleNode, context) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = nodesAsString(labelNodes);

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  log.debug(`Verifying the '${labelsString}' rule...`);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, context);

  if (labelsVerified) {
    const premises = [],
          conclusions = [],
          conditionalInferenceNode = conditionalInferenceNodeQuery(ruleNode),
          unconditionalInferenceNode = unconditionalInferenceNodeQuery(ruleNode);

    let conditionalInferenceVerified = false,
        unconditionalInferenceVerified = false;

    if (conditionalInferenceNode !== null) {
      conditionalInferenceVerified = verifyConditionalInference(conditionalInferenceNode, premises, conclusions, context);
    }

    if (unconditionalInferenceNode !== null) {
      unconditionalInferenceVerified = verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, context);
    }

    if (conditionalInferenceVerified || unconditionalInferenceVerified) {
      const metaproofNode = metaproofNodeQuery(ruleNode),
            firstConclusion = first(conclusions),
            conclusion = firstConclusion; ///

      let metaproofVerified = true;

      if (metaproofNode !== null) {
        metaproofVerified = verifyMetaproof(metaproofNode, conclusion, context);
      }

      if (metaproofVerified) {
        const rule = Rule.fromPremisesConclusionAndLabels(premises, conclusion, labels);

        context.addRule(rule);

        ruleVerified = true;
      }
    }

    if (ruleVerified) {
      log.info(`Verified the '${labelsString}' rule.`);
    }
  }

  return ruleVerified;
}
