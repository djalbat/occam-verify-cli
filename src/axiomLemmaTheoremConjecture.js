"use strict";

import Label from "./label";
import Supposition from "./supposition";
import Consequence from "./consequence";
import ProofContext from "./context/proof";

import { prune } from "./utilities/array";
import { someSubArray } from "./utilities/array";

export default class AxiomLemmaTheoremConjecture {
  constructor(labels, suppositions, consequence, proofContext) {
    this.labels = labels;
    this.suppositions = suppositions;
    this.consequence = consequence;
    this.proofContext = proofContext;
  }

  getLabels() {
    return this.labels;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getConsequence() {
    return this.consequence;
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
            consequenceMatches = matchConsequence(this.consequence, statementNode, substitutions, this.proofContext, statementProofContext);

      statementNatches = consequenceMatches; ///
    } else {
      const proofSteps = statementProofContext.getProofSteps();

      statementNatches = someSubArray(proofSteps, suppositionsLength, (proofSteps) => {
        let suppositionsMatchConsequence = false;

        const substitutions = [],
              suppositionsMatch = matchSuppositions(this.suppositions, proofSteps, substitutions, this.proofContext, statementProofContext);

        if (suppositionsMatch) {
          const consequenceMatches = matchConsequence(this.consequence, statementNode, substitutions, this.proofContext, statementProofContext);

          suppositionsMatchConsequence = consequenceMatches;  ///
        }

        if (suppositionsMatchConsequence) {
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
          consequenceJSON = this.consequence.toJSON(tokens),
          proofContextJSON = this.proofContext.toJSON(tokens),
          labels = labelsJSON,  ///
          suppositions = suppositionsJSON,  ///
          consequence = consequenceJSON,  ///
          proofContext = proofContextJSON,  ///
          json = {
            labels,
            suppositions,
            consequence,
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

    let { suppositions, consequence, proofContext } = json;

    const suppositionsJSON = suppositions;  ///

    suppositions = suppositionsJSON.map((suppositionJSON) => {
      const json = suppositionJSON, ///
            supposition = Supposition.fromJSONAndFileContext(json, fileContext);

      return supposition;
    });

    const consequenceJSON = consequence;  ///

    json = consequenceJSON;  ///

    consequence = Consequence.fromJSONAndFileContext(json, fileContext);

    const proofContextJSON = proofContext;  ///

    json = proofContextJSON;  ///

    proofContext = ProofContext.fromJSONAndFileContext(json, fileContext);

    return new Class(labels, suppositions, consequence, proofContext);  ///
  }

  static fromLabelsSuppositionsConsequenceAndProofContext(Class, labels, suppositions, consequence, proofContext) { return new Class(labels, suppositions, consequence, proofContext); }
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

function matchConsequence(consequence, statementNode, substitutions, proofContext, statementProofContext) {
  const nonTerminalNodeMatches = consequence.matchStatementNode(statementNode, substitutions, proofContext, statementProofContext),
        consequenceMatches = nonTerminalNodeMatches; ///

  return consequenceMatches;
}
