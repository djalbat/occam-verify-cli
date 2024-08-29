"use strict";

import Label from "./label";
import MetaConsequent from "./metaConsequent";
import MetaSupposition from "./metaSupposition";
import MetastatementForMetavariableSubstitution from "./substitution/metastatementForMetavariable";

import { extract } from "./utilities/array";
import { someSubArray } from "./utilities/array";

export default class MetaLemmaMetatheorem {
  constructor(labels, metaSuppositions, metaConsequent, substitutions, fileContext) {
    this.labels = labels;
    this.metaSuppositions = metaSuppositions;
    this.metaConsequent = metaConsequent;
    this.substitutions = substitutions;
    this.fileContext = fileContext;
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

  getSubstitutions() {
    return this.substitutions;
  }

  getFileContext() {
    return this.fileContext;
  }

  matchMetastatement(metastatementNode, localMetaContext) {
    let metastatementNatches;

    const metaSuppositionsLength = this.metaSuppositions.length;

    if (metaSuppositionsLength === 0) {
      const substitutions = [],
            metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.fileContext, localMetaContext);

      metastatementNatches = metaConsequentMatches; ///
    } else {
      const metaproofSteps = localMetaContext.getProofSteps();

      metastatementNatches = someSubArray(metaproofSteps, metaSuppositionsLength, (metaproofSteps) => {
        let metaSuppositionsMatchMetaConsequent = false;

        const substitutions = [],
              metaSuppositionsMatch = matchMetaSuppositions(this.metaSuppositions, metaproofSteps, substitutions, this.fileContext, localMetaContext);

        if (metaSuppositionsMatch) {
          const metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.fileContext, localMetaContext);

          metaSuppositionsMatchMetaConsequent = metaConsequentMatches;  ///
        }

        if (metaSuppositionsMatchMetaConsequent) {
          return true;
        }
      });
    }

    return metastatementNatches;
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
          metaSuppositionsJSON = this.metaSuppositions.map((metaSupposition) => {
            const metaSuppositionJSON = metaSupposition.toJSON(tokens);

            return metaSuppositionJSON;
          }),
          metaConsequentJSON = this.metaConsequent.toJSON(tokens),
          substitutionsJSON = this.substitutions.map((substitution) => {
            const substitutionJSON = substitution.toJSON();

            return substitutionJSON;
          }),
          localContextJSON = this.fileContext.toJSON(tokens),
          labels = labelsJSON,  ///
          metaSuppositions = metaSuppositionsJSON,  ///
          metaConsequent = metaConsequentJSON,  ///
          substitutions = substitutionsJSON,  ///
          fileContext = localContextJSON,  ///
          json = {
            labels,
            metaSuppositions,
            metaConsequent,
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

    let { metaSuppositions, metaConsequent, substitutions } = json;

    const metaSuppositionsJSON = metaSuppositions;  ///

    metaSuppositions = metaSuppositionsJSON.map((metaSuppositionJSON) => {
      const json = metaSuppositionJSON, ///
            metaSupposition = MetaSupposition.fromJSONAndFileContext(json, fileContext);

      return metaSupposition;
    });

    const metaConsequentJSON = metaConsequent;  ///

    json = metaConsequentJSON;  ///

    metaConsequent = MetaConsequent.fromJSONAndFileContext(json, fileContext);

    const substitutionsJSON = substitutions;  ///

    substitutions = substitutionsJSON.map((substitutionJSON) => {
      const json = substitutionJSON,  ///
            metastatementForMetavariableSubstitution = MetastatementForMetavariableSubstitution.fromJSONAndFileContext(json, fileContext),
            substitution = metastatementForMetavariableSubstitution;  ///

      return substitution;
    });

    return new Class(labels, metaSuppositions, metaConsequent, substitutions, fileContext);  ///
  }

  static fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(Class, labels, metaSuppositions, metaConsequent, substitutions, fileContext) { return new Class(labels, metaSuppositions, metaConsequent, substitutions, fileContext); }
}

function matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, fileContext, localMetaContext) {
  const metaproofStep = extract(metaproofSteps, (metaproofStep) => {
    const metaSubproofNode = metaproofStep.getMetaSubproofNode(),
          metastatementNode = metaproofStep.getMetastatementNode();

    if (metaSubproofNode !== null) {
      const metaSubProofMatches = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);

      if (metaSubProofMatches) {
        return true;
      }
    }

    if (metastatementNode !== null) {
      const metastatementMatches = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);

      if (metastatementMatches) {
        return true;
      }
    }
  }) || null;

  const metaSuppositionMatches = (metaproofStep !== null);

  return metaSuppositionMatches;
}

function matchMetaSuppositions(metaSuppositions, metaproofSteps, substitutions, fileContext, localMetaContext) {
  const metaSuppositionsMatch = metaSuppositions.every((metaSupposition) => {
    const metaSuppositionMatches = matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, fileContext, localMetaContext);

    if (metaSuppositionMatches) {
      return true;
    }
  });

  return metaSuppositionsMatch;
}

function matchMetaConsequent(metaConsequent, metastatementNode, substitutions, fileContext, localMetaContext) {
  const nonTerminalNodeMatches = metaConsequent.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext),
        metaConsequentMatches = nonTerminalNodeMatches; ///

  return metaConsequentMatches;
}
