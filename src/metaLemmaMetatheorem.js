"use strict";

import Label from "./label";
import Consequent from "./consequent";
import Supposition from "./supposition";
import StatementForMetavariableSubstitution from "./substitution/statementForMetavariable";

import { reverse, correlate } from "./utilities/array";

export default class MetaLemmaMetatheorem {
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

  matchStatement(statementNode, localContext) {
    let statementNatches = false;

    const metaproofSteps = localContext.getProofSteps(),
          substitutions = [],
          suppositionsMatch = matchSuppositions(this.suppositions, metaproofSteps, substitutions, this.fileContext, localContext);

    if (suppositionsMatch) {
      const consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.fileContext, localContext);

      statementNatches = consequentMatches;  ///
    }

    return statementNatches;
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
          substitutionsJSON = this.substitutions.map((substitution) => {
            const substitutionJSON = substitution.toJSON();

            return substitutionJSON;
          }),
          localContextJSON = this.fileContext.toJSON(tokens),
          labels = labelsJSON,  ///
          suppositions = suppositionsJSON,  ///
          consequent = consequentJSON,  ///
          substitutions = substitutionsJSON,  ///
          fileContext = localContextJSON,  ///
          json = {
            labels,
            suppositions,
            consequent,
            substitutions,
            fileContext
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

    substitutions = substitutionsJSON.map((substitutionJSON) => {
      const json = substitutionJSON,  ///
            statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromJSONAndFileContext(json, fileContext),
            substitution = statementForMetavariableSubstitution;  ///

      return substitution;
    });

    return new Class(labels, suppositions, consequent, substitutions, fileContext);  ///
  }

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) { return new Class(labels, suppositions, consequent, substitutions, fileContext); }
}

function matchSuppositions(suppositions, metaproofSteps, substitutions, fileContext, localContext) {
  suppositions = reverse(suppositions); ///

  metaproofSteps = reverse(metaproofSteps); ///

  const suppositionsMatch = correlate(suppositions, metaproofSteps, (supposition, metaproofStep) => {
    const suppositionMatches = matchSupposition(supposition, metaproofStep, substitutions, fileContext, localContext);

    if (suppositionMatches) {
      return true;
    }
  });

  return suppositionsMatch;
}

function matchSupposition(supposition, metaproofStep, substitutions, fileContext, localContext) {
  let matchesSupposition = false;

  const metaSubproofNode = metaproofStep.getSubproofNode(),
        statementNode = metaproofStep.getStatementNode();

  if (metaSubproofNode !== null) {
    const suppositionMatchesSubproofNode = supposition.matchSubproofNode(metaSubproofNode, substitutions, fileContext, localContext);

    matchesSupposition - suppositionMatchesSubproofNode; ///
  }

  if (statementNode !== null) {
    const suppositionMatchesStatementNode = supposition.matchStatementNode(statementNode, substitutions, fileContext, localContext);

    matchesSupposition - suppositionMatchesStatementNode; ///
  }

  return matchesSupposition;
}

function matchConsequent(consequent, statementNode, substitutions, fileContext, localContext) {
  const consequentMatchesStatementNode = consequent.matchStatementNode(statementNode, substitutions, fileContext, localContext),
        consequentMatches = consequentMatchesStatementNode; ///

  return consequentMatches;
}
