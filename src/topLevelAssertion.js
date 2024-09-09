"use strict";

import Label from "./label";
import Consequent from "./consequent";
import Supposition from "./supposition";
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

  toJSON(tokens) {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON(tokens);

            return labelJSON;
          }),
          suppositionsJSON = this.suppositions.map((supposition) => {
            const suppositionJSON = supposition.toJSON(tokens);

            return suppositionJSON;
          }),
          consequentJSON = this.consequent.toJSON(tokens),
          substitutionsJSON = this.substitutions.toJSON(tokens),
          labels = labelsJSON,  ///
          suppositions = suppositionsJSON,  ///
          consequent = consequentJSON,  ///
          substitutions = substitutionsJSON,  ///
          json = {
            labels,
            suppositions,
            consequent,
            substitutions
          };

    return json;
  }

  static fromJSONAndFileContext(Class, json, fileContext) {
    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSONAndFileContext(json, fileContext);

      return label;
    });

    let { suppositions, consequent, substitutions } = json;

    const suppositionsJSON = suppositions;  ///

    suppositions = suppositionsJSON.map((suppositionJSON) => {
      const json = suppositionJSON, ///
            supposition = Supposition.fromJSONAndFileContext(json, fileContext);

      return supposition;
    });

    const consequentJSON = consequent;  ///

    json = consequentJSON;  ///

    consequent = Consequent.fromJSONAndFileContext(json, fileContext);

    const substitutionsJSON = substitutions;  ///

    json = substitutionsJSON; ///

    substitutions = Substitutions.fromJSONAndFileContext(json, fileContext);

    return new Class(labels, suppositions, consequent, substitutions, fileContext);  ///
  }

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) { return new Class(labels, suppositions, consequent, substitutions, fileContext); }
}
