"use strict";

import Label from "./label";
import Consequent from "./consequent";
import Supposition from "./supposition";
import ProofContext from "./context/proof";

import { prune } from "./utilities/array";
import { someSubArray } from "./utilities/array";

export default class AxiomLemmaTheoremConjecture {
  constructor(labels, suppositions, consequent, proofContext) {
    this.labels = labels;
    this.suppositions = suppositions;
    this.consequent = consequent;
    this.proofContext = proofContext;
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

  getProofContext() {
    return this.proofContext;
  }

  matchLabelName(labelName) {
    const labelNameMatches = this.labels.some((label) => {
      const name = labelName, ///
            labelMatchesName = label.matchName(name);

      if (labelMatchesName) {
        return true;
      }
    });

    return labelNameMatches;
  }

  matchStatement(statementNode, statementProofContext) {
    let statementNatches;

    const suppositionsLength = this.suppositions.length;

    if (suppositionsLength === 0) {
      const substitutions = [],
            consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.proofContext, statementProofContext);

      statementNatches = consequentMatches; ///
    } else {
      const proofSteps = statementProofContext.getProofSteps();

      statementNatches = someSubArray(proofSteps, suppositionsLength, (proofSteps) => {
        let suppositionsMatchConsequent = false;

        const substitutions = [],
              suppositionsMatch = matchSuppositions(this.suppositions, proofSteps, substitutions, this.proofContext, statementProofContext);

        if (suppositionsMatch) {
          const consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.proofContext, statementProofContext);

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
          proofContextJSON = this.proofContext.toJSON(tokens),
          labels = labelsJSON,  ///
          suppositions = suppositionsJSON,  ///
          consequent = consequentJSON,  ///
          proofContext = proofContextJSON,  ///
          json = {
            labels,
            suppositions,
            consequent,
            proofContext
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

    let { suppositions, consequent, proofContext } = json;

    const suppositionsJSON = suppositions;  ///

    suppositions = suppositionsJSON.map((suppositionJSON) => {
      const json = suppositionJSON, ///
            supposition = Supposition.fromJSONAndFileContext(json, fileContext);

      return supposition;
    });

    const consequentJSON = consequent;  ///

    json = consequentJSON;  ///

    consequent = Consequent.fromJSONAndFileContext(json, fileContext);

    const proofContextJSON = proofContext;  ///

    json = proofContextJSON;  ///

    proofContext = ProofContext.fromJSONAndFileContext(json, fileContext);

    return new Class(labels, suppositions, consequent, proofContext);  ///
  }

  static fromLabelsSuppositionsConsequentAndProofContext(Class, labels, suppositions, consequent, proofContext) { return new Class(labels, suppositions, consequent, proofContext); }
}

function matchSupposition(supposition, proofSteps, substitutions, proofContext, statementProofContext) {
  const proofStep = prune(proofSteps, (proofStep) => {
    const subproofNode = proofStep.getSubproofNode(),
          statementNode = proofStep.getStatementNode();

    if (subproofNode !== null) {
      const subProofMatches = supposition.matchSubproofNode(subproofNode, substitutions, proofContext, statementProofContext);

      if (!subProofMatches) {  ///
        return true;
      }
    }

    if (statementNode !== null) {
      const statementMatches = supposition.matchStatementNode(statementNode, substitutions, proofContext, statementProofContext);

      if (!statementMatches) {  ///
        return true;
      }
    }

  }) || null;

  const suppositionMatches = (proofStep !== null);

  return suppositionMatches;
}

function matchSuppositions(supposition, proofSteps, substitutions, proofContext, statementProofContext) {
  const suppositionsMatch = supposition.every((supposition) => {
    const suppositionMatches = matchSupposition(supposition, proofSteps, substitutions, proofContext, statementProofContext);

    if (suppositionMatches) {
      return true;
    }
  });

  return suppositionsMatch;
}

function matchConsequent(consequent, statementNode, substitutions, proofContext, statementProofContext) {
  const nonTerminalNodeMatches = consequent.matchStatementNode(statementNode, substitutions, proofContext, statementProofContext),
        consequentMatches = nonTerminalNodeMatches; ///

  return consequentMatches;
}
