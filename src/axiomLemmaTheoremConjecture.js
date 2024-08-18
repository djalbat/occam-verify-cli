"use strict";

import Label from "./label";
import Consequent from "./consequent";
import Supposition from "./supposition";
import LocalContext from "./context/local";

import { prune } from "./utilities/array";
import { someSubArray } from "./utilities/array";

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

  matchLabelNode(labelNode) {
    const labelNodeMatches = this.labels.some((label) => {
      const node = labelNode, ///
            labelMatchesNode = label.matchNode(node);

      if (labelMatchesNode) {
        return true;
      }
    });

    return labelNodeMatches;
  }

  matchStatement(statementNode, statementLocalContext) {
    let statementNatches;

    const suppositionsLength = this.suppositions.length;

    if (suppositionsLength === 0) {
      const substitutions = [],
            consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.localContext, statementLocalContext);

      statementNatches = consequentMatches; ///
    } else {
      const proofSteps = statementLocalContext.getProofSteps();

      statementNatches = someSubArray(proofSteps, suppositionsLength, (proofSteps) => {
        let suppositionsMatchConsequent = false;

        const substitutions = [],
              suppositionsMatch = matchSuppositions(this.suppositions, proofSteps, substitutions, this.localContext, statementLocalContext);

        if (suppositionsMatch) {
          const consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.localContext, statementLocalContext);

          suppositionsMatchConsequent = consequentMatches;  ///
        }

        if (suppositionsMatchConsequent) {
          return true;
        }
      });
    }

    return statementNatches;
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

function matchSupposition(supposition, proofSteps, substitutions, localContext, statementLocalContext) {
  const proofStep = prune(proofSteps, (proofStep) => {
    const subproofNode = proofStep.getSubproofNode(),
          statementNode = proofStep.getStatementNode();

    if (subproofNode !== null) {
      const subProofMatches = supposition.matchSubproofNode(subproofNode, substitutions, localContext, statementLocalContext);

      if (!subProofMatches) {  ///
        return true;
      }
    }

    if (statementNode !== null) {
      const statementMatches = supposition.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext);

      if (!statementMatches) {  ///
        return true;
      }
    }
  }) || null;

  const suppositionMatches = (proofStep !== null);

  return suppositionMatches;
}

function matchSuppositions(suppositions, proofSteps, substitutions, localContext, statementLocalContext) {
  const suppositionsMatch = suppositions.every((supposition) => {
    const suppositionMatches = matchSupposition(supposition, proofSteps, substitutions, localContext, statementLocalContext);

    if (suppositionMatches) {
      return true;
    }
  });

  return suppositionsMatch;
}

function matchConsequent(consequent, statementNode, substitutions, localContext, statementLocalContext) {
  const nonTerminalNodeMatches = consequent.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext),
        consequentMatches = nonTerminalNodeMatches; ///

  return consequentMatches;
}
