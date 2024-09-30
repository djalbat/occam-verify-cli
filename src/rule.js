"use strict";

import Label from "./label";
import Premise from "./premise";
import Conclusion from "./conclusion";
import LocalContext from "./context/local";
import Substitutions from "./substitutions";
import resolveSubstitutions from "./resolve/substitutions";
import unifyPremisesWithProofSteps from "./unify/premisesWithProofSteps";
import unifyConclusionWithStatement from "./unify/conclusionWithStatement";

import { nodeQuery, nodesQuery } from "./utilities/query";

const labelNodesQuery = nodesQuery("/rule/label"),
      premiseNodesQuery = nodesQuery("/rule/premise"),
      conclusionNodeQuery = nodeQuery("/rule/conclusion");

export default class Rule {
  constructor(labels, premises, conclusion) {
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
  }

  getLabels() {
    return this.labels;
  }

  getPremises() {
    return this.premises;
  }

  getConclusion() {
    return this.conclusion;
  }

  unifyStatement(statementNode, localContext) {
    let statementUnified = false;

    const substitutions = Substitutions.fromNothing(),
          proofSteps = localContext.getProofSteps(),
          premisesA = this.premises,
          proofStepsB = proofSteps, ///
          fileContextA = this.fileContext,  ///
          localContextB = localContext, ///
          premisesUnified = unifyPremisesWithProofSteps(premisesA, proofStepsB, substitutions, fileContextA, localContextB);

    if (premisesUnified) {
      const conclusionA = this.conclusion,  ///
            conclusionUnified = unifyConclusionWithStatement(conclusionA, statementNode, substitutions, fileContextA, localContextB);

      if (conclusionUnified) {
        const substitutionsResolved = resolveSubstitutions(substitutions, fileContextA, localContextB);

        statementUnified = substitutionsResolved; ///
      }
    }

    return statementUnified;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.labels.some((label) => {
      const metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        return true;
      }
    });

    return metavariableNodeMatches;
  }

  verify(fileContext) {
    let veriried = false;

    const labelsString = labelsStringFromLabels(this.labels);

    fileContext.trace(`Verifying the '${labelsString}' rule...`);

    const labelsVerified = this.labels.every((label) => {
      const labelVVerified = label.verify(fileContext);

      if (labelVVerified) {
        return true;
      }
    });

    if (labelsVerified) {
      const localContext = LocalContext.fromFileContext(fileContext),
            premisesVerified = this.premises.every((premise) => {
              const premiseVerified = premise.verify(fileContext);

              if (premiseVerified) {
                return true;
              }
            });

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

            veriried = true;
          }
        }
      }
    }

    if (veriried) {
      fileContext.debug(`...verified the '${labelsString}' rule.`, ruleNode);
    }

    return veriried;
  }

  toJSON(fileContext) {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON(fileContext);

            return labelJSON;
          }),
          premisesJSON = this.premises.map((premise) => {
            const premiseJSON = premise.toJSON(fileContext);

            return premiseJSON;
          }),
          conclusionJSON = this.conclusion.toJSON(fileContext),
          labels = labelsJSON,  ///
          premises = premisesJSON,  ///
          conclusion = conclusionJSON,  ///
          json = {
            labels,
            premises,
            conclusion
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let rule;

    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSON(json, fileContext);

      return label;
    });

    let { premises } = json;

    const premisesJSON = premises;  ///

    premises = premisesJSON.map((premiseJSON) => {
      const json = premiseJSON, ///
            premise = Premise.fromJSON(json, fileContext);

      return premise;
    });

    let { conclusion } = json;

    const conclusionJSON = conclusion;  ///

    json = conclusionJSON;  ///

    conclusion = Conclusion.fromJSON(json, fileContext);

    rule = new Rule(labels, premises, conclusion);

    return rule;
  }

  static fromRuleNode(ruleNode, fileContext) {
    const labelNodes = labelNodesQuery(ruleNode),
          premiseNodes = premiseNodesQuery(ruleNode),
          conclusionNode = conclusionNodeQuery(ruleNode),
          labels = labelNodes.map((labelNode) => {
            const label = Label.fromLabelNode(labelNode, fileContext);

            return label;
          }),
          premises = premiseNodes.map((premiseNode) => {
            const premise = Premise.fromPremiseNode(premiseNode, fileContext);

            return premise;
          }),
          conclusion = Conclusion.fromConclusionNode(conclusionNode, fileContext),
          rule = new Rule(labels, premises, conclusion);

    return rule;
  }

  static fromRuleNodeLabelsPremisesAndConclusion(ruleNode, labels, premises, conclusion) {
    const rule = new Rule(labels, premises, conclusion);

    return rule;
  }
}

function labelsStringFromLabels(labels) {
  const labelsString = labels.map((label) => {
          const labelString = label.getString();

          return labelString;
        });

  return labelsString;
}