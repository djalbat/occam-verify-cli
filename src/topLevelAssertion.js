"use strict";

import Substitutions from "./substitutions";
import unifyConsequentAgainstStatement from "./unify/consequentAgainstStatement";
import unifySuppositionsAgainstProofSteps from "./unify/suppositionsAgainstProofSteps";

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
          suppositionsUnified = unifySuppositionsAgainstProofSteps(suppositionsA, proofStepsB, substitutions, fileContextA, localContextB);

    if (suppositionsUnified) {
      const consequentA = this.consequent,  ///
            consequentUnified = unifyConsequentAgainstStatement(consequentA, statementNode, substitutions, fileContextA, localContext);

      statementUnified = consequentUnified;  ///
    }

    return statementUnified;
  }

  matchMetavariableNode(metavariableNode) {
    const matchesMetavariableNode = this.labels.some((label) => {
      const labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);

      if (labelMatchesMetavariableNode) {
        return true;
      }
    });

    return matchesMetavariableNode;
  }

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) { return new Class(labels, suppositions, consequent, substitutions, fileContext); }
}
