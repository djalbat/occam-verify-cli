"use strict";

import Rule from "../rule";
import verifyProof from "../verify/proof";
import LocalContext from "../context/local";
import verifyLabels from "../verify/labels";
import verifyPremises from "../verify/premises";
import verifyConclusion from "../verify/conclusion";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import Substitutions from "../substitutions";

const proofNodeQuery = nodeQuery("/rule/proof!"),
      labelNodesQuery = nodesQuery("/rule/label"),
      premisesNodeQuery = nodesQuery("/rule/premise"),
      conclusionNodeQuery = nodeQuery("/rule/conclusion!");

export default function verifyRule(ruleNode, fileContext) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = fileContext.nodesAsString(labelNodes);

  fileContext.trace(`Verifying the '${labelsString}' rule...`, ruleNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const localContext = LocalContext.fromFileContext(fileContext),
          premises = [],
          premiseNodes = premisesNodeQuery(ruleNode),
          premisesVerified = verifyPremises(premiseNodes, premises, localContext);

    if (premisesVerified) {
      const conclusions = [],
            conclusionNode = conclusionNodeQuery(ruleNode),
            conclusionVerified = verifyConclusion(conclusionNode, conclusions, localContext);

      if (conclusionVerified) {
        let proofVerified = true; ///

        const firstConclusion = first(conclusions),
              proofNode = proofNodeQuery(ruleNode),
              conclusion = firstConclusion; ///

        if (proofNode !== null) {
          const substitutions = Substitutions.fromNothing(),
                statementNode = conclusion.getStatementNode();

          proofVerified = verifyProof(proofNode, statementNode, substitutions, localContext);
        }

        if (proofVerified) {
          const rule = Rule.fromRuleNodeLabelsPremisesAndConclusion(ruleNode, labels, premises, conclusion);

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
