"use strict";

import Substitutions from "./substitutions";
import resolveSubstitutions from "./resolve/substitutions";
import unifyPremisesWithProofSteps from "./unify/premisesWithProofSteps";
import unifyConclusionWithStatement from "./unify/conclusionWithStatement";

export default class Rule {
  constructor(labels, premises, conclusion, fileContext) {
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
    this.fileContext = fileContext;
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

  getFileContext() {
    return this.fileContext;
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

  static fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext) {
    const rule = new Rule(labels, premises, conclusion, fileContext);

    return rule;
  }
}
