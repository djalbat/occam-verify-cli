"use strict";

import Label from "./label";
import Consequent from "./consequent";
import Supposition from "./supposition";
import LocalContext from "./context/local";

import { reverse, correlate } from "./utilities/array";

export default class AxiomLemmaTheoremConjecture {
  constructor(labels, suppositions, consequent, localContext) {
    this.labels = labels;
    this.suppositions = suppositions;
    this.consequent = consequent;
    this.localContext = localContext;
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

  getLocalContext() {
    return this.localContext;
  }

  matchStatement(statementNode, localContext) {
    let statementNatches = false;

    const proofSteps = localContext.getProofSteps(),
          substitutions = [],
          suppositionsMatch = matchSuppositions(this.suppositions, proofSteps, substitutions, this.localContext, localContext);

    if (suppositionsMatch) {
      const consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.localContext, localContext);

      statementNatches = consequentMatches;  ///
    }

    return statementNatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.labels.some((label) => {
      const labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);

      if (labelMatchesMetavariableNode) {
        return true;
      }
    });

    return metavariableNodeMatches;
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
          localContextJSON = this.localContext.toJSON(tokens),
          labels = labelsJSON,  ///
          suppositions = suppositionsJSON,  ///
          consequent = consequentJSON,  ///
          localContext = localContextJSON,  ///
          json = {
            labels,
            suppositions,
            consequent,
            localContext
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

    let { suppositions, consequent, localContext } = json;

    const suppositionsJSON = suppositions;  ///

    suppositions = suppositionsJSON.map((suppositionJSON) => {
      const json = suppositionJSON, ///
            supposition = Supposition.fromJSONAndFileContext(json, fileContext);

      return supposition;
    });

    const consequentJSON = consequent;  ///

    json = consequentJSON;  ///

    consequent = Consequent.fromJSONAndFileContext(json, fileContext);

    const localContextJSON = localContext;  ///

    json = localContextJSON;  ///

    localContext = LocalContext.fromJSONAndFileContext(json, fileContext);

    return new Class(labels, suppositions, consequent, localContext);  ///
  }

  static fromLabelsSuppositionsConsequentAndLocalContext(Class, labels, suppositions, consequent, localContext) { return new Class(labels, suppositions, consequent, localContext); }
}

function matchSuppositions(suppositions, proofSteps, substitutions, localContext, statementLocalContext) {
  suppositions = reverse(suppositions); ///

  proofSteps = reverse(proofSteps); ///

  const suppositionsMatch = correlate(suppositions, proofSteps, (supposition, proofStep) => {
    const suppositionMatches = matchSupposition(supposition, proofStep, substitutions, localContext, statementLocalContext);

    if (suppositionMatches) {
      return true;
    }
  });

  return suppositionsMatch;
}

function matchSupposition(supposition, proofStep, substitutions, localContext, statementLocalContext) {
  let suppositionMatches = false;

  const statementNode = proofStep.getStatementNode();

  if (statementNode !== null) {
    const statementMatches = supposition.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext);

    suppositionMatches = statementMatches;  ///
  }

  return suppositionMatches;
}

function matchConsequent(consequent, statementNode, substitutions, localContext, statementLocalContext) {
  const nonTerminalNodeMatches = consequent.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext),
        consequentMatches = nonTerminalNodeMatches; ///

  return consequentMatches;
}
