"use strict";

import Label from "./label";
import Premise from "./premise";
import Conclusion from "./conclusion";

import { prune } from "./utilities/array";
import { RULE_KIND } from "./kinds";
import { someSubArray } from "./utilities/array";

export default class Rule {
  constructor(labels, premises, conclusion) {
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
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

  matchStatement(statementNode, proofContext) {
    let statementNatches;

    const premisesLength = this.premises.length;

    if (premisesLength === 0) {
      const substitutions = [],
            conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions);

      statementNatches = conclusionMatches; ///
    } else {
      const proofSteps = proofContext.getProofSteps();

      statementNatches = someSubArray(proofSteps, premisesLength, (proofSteps) => {
        let premisesMatchConclusion = false;

        const substitutions = [],
              premisesMatch = matchPremises(this.premises, proofSteps, substitutions);

        if (premisesMatch) {
          const conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions);

          premisesMatchConclusion = conclusionMatches;  ///
        }

        if (premisesMatchConclusion) {
          return true;
        }
      });
    }

    return statementNatches;
  }

  matchMetastatement(metastatementNode, metaproofContext) {
    let metastatementNatches;

    const premisesLength = this.premises.length;

    if (premisesLength === 0) {
      const metaSubstitutions = [],
            conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, metaSubstitutions);

      metastatementNatches = conclusionMatches; ///
    } else {
      const metaproofSteps = metaproofContext.getMetaproofSteps();

      metastatementNatches = someSubArray(metaproofSteps, premisesLength, (metaproofSteps) => {
        let premisesMatchConclusion = false;

        const metaSubstitutions = [],
              premisesMatch = metaMatchPremises(this.premises, metaproofSteps, metaSubstitutions);

        if (premisesMatch) {
          const conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, metaSubstitutions);

          premisesMatchConclusion = conclusionMatches;  ///
        }

        if (premisesMatchConclusion) {
          return true;
        }
      });
    }

    return metastatementNatches;
  }

  toJSON() {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON();

            return labelJSON;
          }),
          premisesJSON = this.premises.map((premise) => {
            const premiseJSON = premise.toJSON();

            return premiseJSON;
          }),
          conclusionJSON = this.conclusion.toJSON(),
          kind = RULE_KIND,
          labels = labelsJSON,  ///
          premises = premisesJSON,  ///
          conclusion = conclusionJSON,  ///
          json = {
            kind,
            labels,
            premises,
            conclusion
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    let rule;

    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSON(json, releaseContext);

      return label;
    });

    let { premises } = json;

    const premisesJSON = premises;  ///

    premises = premisesJSON.map((premiseJSON) => {
      const json = premiseJSON, ///
            premise = Premise.fromJSON(json, releaseContext);

      return premise;
    });

    let { conclusion } = json;

    const conclusionJSON = conclusion;  ///

    json = conclusionJSON;  ///

    conclusion = Conclusion.fromJSON(json, releaseContext);

    rule = new Rule(labels, premises, conclusion);

    return rule;
  }

  static fromLabelsPremisesAndConclusion(labels, premises, conclusion) {
    const rule = new Rule(labels, premises, conclusion);

    return rule;
  }
}

function matchPremise(premise, proofSteps, substitutions) {
  const proofStep = prune(proofSteps, (proofStep) => {
    const subproofNode = proofStep.getSubproofNode(),
          statementNode = proofStep.getStatementNode()

    if (subproofNode !== null) {
      const subProofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions);

      if (!subProofNodeMatches) {  ///
        return true;
      }
    }

    if (statementNode !== null) {
      const statementNodeMatches = premise.matchStatementNode(statementNode, substitutions);

      if (!statementNodeMatches) {  ///
        return true;
      }
    }
  }) || null;

  const premiseMatches = (proofStep !== null);

  return premiseMatches;
}

function matchPremises(premise, proofSteps, substitutions) {
  const premisesMatch = premise.every((premise) => {
    const premiseMatches = matchPremise(premise, proofSteps, substitutions);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatch;
}

function matchConclusion(conclusion, statementNode, substitutions) {
  const statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions),
        conclusionMatches = statementNodeMatches; ///

  return conclusionMatches;
}

function metaMatchPremise(premise, metaproofSteps, metaSubstitutions) {
  const metaproofStep = prune(metaproofSteps, (metaproofStep) => {
    const ruleSubproofNode = metaproofStep.getRuleSubproofNode(),
          metastatementNode = metaproofStep.getMetastatementNode()

    if (ruleSubproofNode !== null) {
      const ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, metaSubstitutions);

      if (!ruleSubProofNodeMatches) {  ///
        return true;
      }
    }

    if (metastatementNode !== null) {
      const metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, metaSubstitutions);

      if (!metastatementNodeMatches) {  ///
        return true;
      }
    }
  }) || null;

  const premiseMatches = (metaproofStep !== null);

  return premiseMatches;
}

function metaMatchPremises(premise, metaproofSteps, metaSubstitutions) {
  const premisesMatch = premise.every((premise) => {
    const premiseMatches = metaMatchPremise(premise, metaproofSteps, metaSubstitutions);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatch;
}

function metaMatchConclusion(conclusion, metastatementNode, metaSubstitutions) {
  const metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, metaSubstitutions),
        conclusionMatches = metastatementNodeMatches; ///

  return conclusionMatches;
}
