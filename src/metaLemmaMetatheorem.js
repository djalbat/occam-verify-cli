"use strict";

import Label from "./label";
import LocalContext from "./context/local";
import MetaConsequent from "./metaConsequent";
import MetaSupposition from "./metaSupposition";

import { prune } from "./utilities/array";
import { someSubArray } from "./utilities/array";

export default class MetaLemmaMetatheorem {
  constructor(labels, metaSuppositions, metaConsequent, localContext) {
    this.labels = labels;
    this.metaSuppositions = metaSuppositions;
    this.metaConsequent = metaConsequent;
    this.localContext = localContext;
  }

  getLabels() {
    return this.labels;
  }

  getMetaSuppositions() {
    return this.metaSuppositions;
  }

  getMetaConsequent() {
    return this.metaConsequent;
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

  matchMetastatement(metastatementNode, metastatementLocalContext) {
    let metastatementNatches;

    const metaSuppositionsLength = this.metaSuppositions.length;

    if (metaSuppositionsLength === 0) {
      const substitutions = [],
            metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.localContext, metastatementLocalContext);

      metastatementNatches = metaConsequentMatches; ///
    } else {
      const metaproofSteps = metastatementLocalContext.getProofSteps();

      metastatementNatches = someSubArray(metaproofSteps, metaSuppositionsLength, (metaproofSteps) => {
        let metaSuppositionsMatchMetaConsequent = false;

        const substitutions = [],
              metaSuppositionsMatch = matchMetaSuppositions(this.metaSuppositions, metaproofSteps, substitutions, this.localContext, metastatementLocalContext);

        if (metaSuppositionsMatch) {
          const metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.localContext, metastatementLocalContext);

          metaSuppositionsMatchMetaConsequent = metaConsequentMatches;  ///
        }

        if (metaSuppositionsMatchMetaConsequent) {
          return true;
        }
      });
    }

    return metastatementNatches;
  }

  toJSON(tokens) {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON(tokens);

            return labelJSON;
          }),
          metaSuppositionsJSON = this.metaSuppositions.map((metaSupposition) => {
            const metaSuppositionJSON = metaSupposition.toJSON(tokens);

            return metaSuppositionJSON;
          }),
          metaConsequentJSON = this.metaConsequent.toJSON(tokens),
          localContextJSON = this.localContext.toJSON(tokens),
          labels = labelsJSON,  ///
          metaSuppositions = metaSuppositionsJSON,  ///
          metaConsequent = metaConsequentJSON,  ///
          localContext = localContextJSON,  ///
          json = {
            labels,
            metaSuppositions,
            metaConsequent,
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

    let { metaSuppositions, metaConsequent, localContext } = json;

    const metaSuppositionsJSON = metaSuppositions;  ///

    metaSuppositions = metaSuppositionsJSON.map((metaSuppositionJSON) => {
      const json = metaSuppositionJSON, ///
            metaSupposition = MetaSupposition.fromJSONAndFileContext(json, fileContext);

      return metaSupposition;
    });

    const metaConsequentJSON = metaConsequent;  ///

    json = metaConsequentJSON;  ///

    metaConsequent = MetaConsequent.fromJSONAndFileContext(json, fileContext);

    const localContextJSON = localContext;  ///

    json = localContextJSON;  ///

    localContext = LocalContext.fromJSONAndFileContext(json, fileContext);

    return new Class(labels, metaSuppositions, metaConsequent, localContext);  ///
  }

  static fromLabelsMetaSuppositionsMetaConsequentAndLocalContext(Class, labels, metaSuppositions, metaConsequent, localContext) { return new Class(labels, metaSuppositions, metaConsequent, localContext); }
}

function matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, localContext, metastatementLocalContext) {
  const metaproofStep = prune(metaproofSteps, (metaproofStep) => {
    const metaSubproofNode = metaproofStep.getMetaSubproofNode(),
          metastatementNode = metaproofStep.getMetastatementNode();

    if (metaSubproofNode !== null) {
      const metaSubProofMatches = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, localContext, metastatementLocalContext);

      if (!metaSubProofMatches) {  ///
        return true;
      }
    }

    if (metastatementNode !== null) {
      const metastatementMatches = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, localContext, metastatementLocalContext);

      if (!metastatementMatches) {  ///
        return true;
      }
    }
  }) || null;

  const metaSuppositionMatches = (metaproofStep !== null);

  return metaSuppositionMatches;
}

function matchMetaSuppositions(metaSuppositions, metaproofSteps, substitutions, localContext, metastatementLocalContext) {
  const metaSuppositionsMatch = metaSuppositions.every((metaSupposition) => {
    const metaSuppositionMatches = matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, localContext, metastatementLocalContext);

    if (metaSuppositionMatches) {
      return true;
    }
  });

  return metaSuppositionsMatch;
}

function matchMetaConsequent(metaConsequent, metastatementNode, substitutions, localContext, metastatementLocalContext) {
  const nonTerminalNodeMatches = metaConsequent.matchMetastatementNode(metastatementNode, substitutions, localContext, metastatementLocalContext),
        metaConsequentMatches = nonTerminalNodeMatches; ///

  return metaConsequentMatches;
}
