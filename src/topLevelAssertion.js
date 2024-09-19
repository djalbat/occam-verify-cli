"use strict";

import Substitutions from "./substitutions";
import resolveSubstitutions from "./resolve/substitutions";
import unifyConsequentWithStatement from "./unify/consequentWithStatement";
import unifySuppositionsWithProofSteps from "./unify/suppositionsWithProofSteps";

export default class TopLevelAssertion {
  constructor(labels, suppositions, consequent, substitutions, fileContext) {
    this.labels = labels;
    this.suppositions = suppositions;
    this.consequent = consequent;
    this.substitutions = substitutions;
    this.fileContext = fileContext;
  }

  getLabels() {
    return this.labels;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getConsequent() {
    return this.consequent;
  }

  getSubstitutions() {
    return this.substitutions;
  }

  getFileContext() {
    return this.fileContext;
  }

  unifyStatement(statementNode, localContext) {
    let statementUnified = false;

    const substitutions = Substitutions.fromNothing(),
          proofSteps = localContext.getProofSteps(),
          proofStepsB = proofSteps, ///
          fileContextA = this.fileContext,  ///
          suppositionsA = this.suppositions,  ///
          localContextB = localContext, ///
          suppositionsUnified = unifySuppositionsWithProofSteps(suppositionsA, proofStepsB, substitutions, fileContextA, localContextB);

    if (suppositionsUnified) {
      const consequentA = this.consequent,  ///
            consequentUnified = unifyConsequentWithStatement(consequentA, statementNode, substitutions, fileContextA, localContext);

      if (consequentUnified) {
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

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) { return new Class(labels, suppositions, consequent, substitutions, fileContext); }
}
