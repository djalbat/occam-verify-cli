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

  matchStatement(statementNode, metaproofContext) {
    let statementNatches;

    const premisesLength = this.premises.length;

    if (premisesLength === 0) {
      const substitutions = [],
            conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, metaproofContext);

      statementNatches = conclusionMatches; ///
    } else {
      const proofSteps = metaproofContext.getProofSteps();

      statementNatches = someSubArray(proofSteps, premisesLength, (proofSteps) => {
        let premisesMatchConclusion = false;

        const substitutions = [],
              premisesMatch = matchPremises(this.premises, proofSteps, substitutions, metaproofContext);

        if (premisesMatch) {
          const conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, metaproofContext);

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
      const substitutions = [],
            conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, metaproofContext);

      metastatementNatches = conclusionMatches; ///
    } else {
      const metaproofSteps = metaproofContext.getMetaproofSteps();

      metastatementNatches = someSubArray(metaproofSteps, premisesLength, (metaproofSteps) => {
        let premisesMatchConclusion = false;

        const substitutions = [],
              premisesMatch = metaMatchPremises(this.premises, metaproofSteps, substitutions, metaproofContext);

        if (premisesMatch) {
          const conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, metaproofContext);

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

  static fromJSON(json, context) {
    let rule;

    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSON(json, context);

      return label;
    });

    let { premises } = json;

    const premisesJSON = premises;  ///

    premises = premisesJSON.map((premiseJSON) => {
      const json = premiseJSON, ///
            premise = Premise.fromJSON(json, context);

      return premise;
    });

    let { conclusion } = json;

    const conclusionJSON = conclusion;  ///

    json = conclusionJSON;  ///

    conclusion = Conclusion.fromJSON(json, context);

    rule = new Rule(labels, premises, conclusion);

    return rule;
  }

  static fromLabelsPremisesAndConclusion(labels, premises, conclusion) {
    const rule = new Rule(labels, premises, conclusion);

    return rule;
  }
}

function matchPremise(premise, proofSteps, substitutions, metaproofContext) {
  const proofStep = prune(proofSteps, (proofStep) => {
    const subproofNode = proofStep.getSubproofNode(),
          statementNode = proofStep.getStatementNode()

    if (subproofNode !== null) {
      const subProofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions, metaproofContext);

      if (!subProofNodeMatches) {  ///
        return true;
      }
    }

    if (statementNode !== null) {
      const statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, metaproofContext);

      if (!statementNodeMatches) {  ///
        return true;
      }
    }
  }) || null;

  const premiseMatches = (proofStep !== null);

  return premiseMatches;
}

function matchPremises(premise, proofSteps, substitutions, metaproofContext) {
  const premisesMatch = premise.every((premise) => {
    const premiseMatches = matchPremise(premise, proofSteps, substitutions, metaproofContext);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatch;
}

function matchConclusion(conclusion, statementNode, substitutions, metaproofContext) {
  const statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions, metaproofContext),
        conclusionMatches = statementNodeMatches; ///

  return conclusionMatches;
}

function metaMatchPremise(premise, metaproofSteps, substitutions, metaproofContext) {
  const metaproofStep = prune(metaproofSteps, (metaproofStep) => {
    const ruleSubproofNode = metaproofStep.getRuleSubproofNode(),
          metastatementNode = metaproofStep.getMetastatementNode()

    if (ruleSubproofNode !== null) {
      const ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, metaproofContext);

      if (!ruleSubProofNodeMatches) {  ///
        return true;
      }
    }

    if (metastatementNode !== null) {
      const metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, metaproofContext);

      if (!metastatementNodeMatches) {  ///
        return true;
      }
    }
  }) || null;

  const premiseMatches = (metaproofStep !== null);

  return premiseMatches;
}

function metaMatchPremises(premise, metaproofSteps, substitutions, metaproofContext) {
  const premisesMatch = premise.every((premise) => {
    const premiseMatches = metaMatchPremise(premise, metaproofSteps, substitutions, metaproofContext);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatch;
}

function metaMatchConclusion(conclusion, metastatementNode, substitutions, metaproofContext) {
  const metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions, metaproofContext),
        conclusionMatches = metastatementNodeMatches; ///

  return conclusionMatches;
}
