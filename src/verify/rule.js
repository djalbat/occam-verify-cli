"use strict";

import Rule from "../rule";
import MetaproofContext from "../context/metaproof";

import { first } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/rule/label"),
      metaproofNodeQuery = nodeQuery("/rule/metaproof!"),
      conditionalInferenceNodeQuery = nodeQuery("/rule/conditionalInference!"),
      unconditionalInferenceNodeQuery = nodeQuery("/rule/unconditionalInference!");

export default function verifyRule(ruleNode, context = this) {
  let ruleVerified = false;

  context.begin(ruleNode);

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = nodesAsString(labelNodes),
        metaproofContext = MetaproofContext.fromContext(context);

  context.debug(`Verifying the '${labelsString}' rule...`);

  const labels = [],
        labelsVerified = context.verifyLabels(labelNodes, labels);

  if (labelsVerified) {
    const premises = [],
          conclusions = [],
          conditionalInferenceNode = conditionalInferenceNodeQuery(ruleNode),
          unconditionalInferenceNode = unconditionalInferenceNodeQuery(ruleNode);

    let conditionalInferenceVerified = false,
        unconditionalInferenceVerified = false;

    if (conditionalInferenceNode !== null) {
      conditionalInferenceVerified = metaproofContext.verifyConditionalInference(conditionalInferenceNode, premises, conclusions);
    }

    if (unconditionalInferenceNode !== null) {
      unconditionalInferenceVerified = metaproofContext.verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions);
    }

    if (conditionalInferenceVerified || unconditionalInferenceVerified) {
      const metaproofNode = metaproofNodeQuery(ruleNode),
            firstConclusion = first(conclusions),
            conclusion = firstConclusion; ///

      let metaproofVerified = true;

      if (metaproofNode !== null) {
        metaproofVerified = metaproofContext.verifyMetaproof(metaproofNode, conclusion);
      }

      if (metaproofVerified) {
        const rule = Rule.fromPremisesConclusionAndLabels(premises, conclusion, labels);

        context.addRule(rule);

        ruleVerified = true;
      }
    }
  }

  ruleVerified ?
    context.complete(ruleNode) :
      context.complete(ruleNode);

  return ruleVerified;
}
