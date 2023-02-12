"use strict";

import Label from "./label";
import Premise from "./premise";
import Conclusion from "./conclusion";

import { prune } from "./utilities/array";
import { someSubArray } from "./utilities/array";

export default class Rule {
  constructor(labels, premises, conclusion, fileContext) {
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
    this.fileContext = fileContext;
  }

  getLabels() {
    return this.labels;
  }

  getPremises() {
    return this.premises;
  }

  getConclusion() {
    return this.conclusion;
  }

  getFileContext() {
    return this.fileContext;
  }

  matchLabelName(labelName) {
    const matchesLabelName = this.labels.some((label) => {
      const name = labelName, ///
            labelMatchesName = label.matchName(name);

      if (labelMatchesName) {
        return true;
      }
    });

    return matchesLabelName;
  }

  matchStatement(statementNode, statementProofContext) {
    let statementNatches;

    const premisesLength = this.premises.length;

    if (premisesLength === 0) {
      const substitutions = [],
            conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, statementProofContext);

      statementNatches = conclusionMatches; ///
    } else {
      const proofSteps = statementProofContext.getProofSteps();

      statementNatches = someSubArray(proofSteps, premisesLength, (proofSteps) => {
        let premisesMatchConclusion = false;

        const substitutions = [],
              premisesMatch = matchPremises(this.premises, proofSteps, substitutions, this.fileContext, statementProofContext);

        if (premisesMatch) {
          const conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, statementProofContext);

          premisesMatchConclusion = conclusionMatches;  ///
        }

        if (premisesMatchConclusion) {
          return true;
        }
      });
    }

    return statementNatches;
  }

  matchMetastatement(metastatementNode, metastatementMetaproofContext) {
    let metastatementNatches;

    const premisesLength = this.premises.length;

    if (premisesLength === 0) {
      const substitutions = [],
            conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, metastatementMetaproofContext);

      metastatementNatches = conclusionMatches; ///
    } else {
      const metaproofSteps = metastatementMetaproofContext.getMetaproofSteps();

      metastatementNatches = someSubArray(metaproofSteps, premisesLength, (metaproofSteps) => {
        let premisesMatchConclusion = false;

        const substitutions = [],
              premisesMatch = metaMatchPremises(this.premises, metaproofSteps, substitutions, this.fileContext, metastatementMetaproofContext);

        if (premisesMatch) {
          const conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, metastatementMetaproofContext);

          premisesMatchConclusion = conclusionMatches;  ///
        }

        if (premisesMatchConclusion) {
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
          premisesJSON = this.premises.map((premise) => {
            const premiseJSON = premise.toJSON(tokens);

            return premiseJSON;
          }),
          conclusionJSON = this.conclusion.toJSON(tokens),
          labels = labelsJSON,  ///
          premises = premisesJSON,  ///
          conclusion = conclusionJSON,  ///
          json = {
            labels,
            premises,
            conclusion
          };

    return json;
  }

  static fromJSONAndFileContext(json, fileContext) {
    let rule;

    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSONAndFileContext(json, fileContext);

      return label;
    });

    let { premises } = json;

    const premisesJSON = premises;  ///

    premises = premisesJSON.map((premiseJSON) => {
      const json = premiseJSON, ///
            premise = Premise.fromJSONAndFileContext(json, fileContext);

      return premise;
    });

    let { conclusion } = json;

    const conclusionJSON = conclusion;  ///

    json = conclusionJSON;  ///

    conclusion = Conclusion.fromJSONAndFileContext(json, fileContext);

    rule = new Rule(labels, premises, conclusion, fileContext);

    return rule;
  }

  static fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext) {
    const rule = new Rule(labels, premises, conclusion, fileContext);

    return rule;
  }
}

function matchPremise(premise, proofSteps, substitutions, fileContext, statementProofContext) {
  const proofStep = prune(proofSteps, (proofStep) => {
    const subproofNode = proofStep.getSubproofNode(),
          statementNode = proofStep.getStatementNode()

    if (subproofNode !== null) {
      const subProofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions, fileContext, statementProofContext);

      if (!subProofNodeMatches) {  ///
        return true;
      }
    }

    if (statementNode !== null) {
      const statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, fileContext, statementProofContext);

      if (!statementNodeMatches) {  ///
        return true;
      }
    }
  }) || null;

  const premiseMatches = (proofStep !== null);

  return premiseMatches;
}

function matchPremises(premise, proofSteps, substitutions, fileContext, statementProofContext) {
  const premisesMatch = premise.every((premise) => {
    const premiseMatches = matchPremise(premise, proofSteps, substitutions, fileContext, statementProofContext);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatch;
}

function matchConclusion(conclusion, statementNode, substitutions, fileContext, statementProofContext) {
  const statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions, fileContext, statementProofContext),
        conclusionMatches = statementNodeMatches; ///

  return conclusionMatches;
}

function metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, metastatementMetaproofContext) {
  const metaproofStep = prune(metaproofSteps, (metaproofStep) => {
    const ruleSubproofNode = metaproofStep.getRuleSubproofNode(),
          metastatementNode = metaproofStep.getMetastatementNode()

    if (ruleSubproofNode !== null) {
      const ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, metastatementMetaproofContext);

      if (!ruleSubProofNodeMatches) {  ///
        return true;
      }
    }

    if (metastatementNode !== null) {
      const metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementMetaproofContext);

      if (!metastatementNodeMatches) {  ///
        return true;
      }
    }
  }) || null;

  const premiseMatches = (metaproofStep !== null);

  return premiseMatches;
}

function metaMatchPremises(premise, metaproofSteps, substitutions, fileContext, metastatementMetaproofContext) {
  const premisesMatch = premise.every((premise) => {
    const premiseMatches = metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, metastatementMetaproofContext);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatch;
}

function metaMatchConclusion(conclusion, metastatementNode, substitutions, fileContext, metastatementMetaproofContext) {
  const metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementMetaproofContext),
        conclusionMatches = metastatementNodeMatches; ///

  return conclusionMatches;
}
