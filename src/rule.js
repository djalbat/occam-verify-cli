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

  matchMetastatement(metastatementNode, metaproofContext) {
    let metastatementNatches;

    const premisesLength = this.premises.length;

    if (premisesLength === 0) {
      const metaSubstitutions = [],
            conclusionMatches = matchConclusion(this.conclusion, metastatementNode, metaSubstitutions);

      metastatementNatches = conclusionMatches; ///
    } else {
      const metaAssertions = metaproofContext.getMetaAssertions();

      metastatementNatches = someSubArray(metaAssertions, premisesLength, (metaAssertions) => {
        const premisesMatchConclusion = matchPremisesAndConclusion(this.premises, this.conclusion, metaAssertions, metastatementNode);

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

  static fromJSON(json, callback) {
    let rule = null;

    let { labels, premises, conclusion } = json;

    labels = labels.reduce((labels, label) => {
      if (labels !== null) {
        const json = label; ///

        label = Label.fromJSON(json, callback); ///

        if (label !== null) {
          labels.push(label);
        } else {
          labels = null;
        }
      }

      return labels;
    }, []);

    premises = premises.reduce((premises, premise) => {
      if (premises !== null) {
        const json = premise; ///

        premise = Premise.fromJSON(json, callback); ///

        if (premise !== null) {
          premises.push(premise);
        } else {
          premises = null;
        }
      }

      return premises;
    }, []);

    json = conclusion;  ///

    conclusion = Conclusion.fromJSON(json, callback);

    if ((labels !== null) && (premises !== null) && (conclusion !== null)) {
      rule = new Rule(labels, premises, conclusion);
    }

    return rule;
  }

  static fromLabelsPremisesAndConclusion(labels, premises, conclusion) {
    const rule = new Rule(labels, premises, conclusion);

    return rule;
  }
}

function matchPremise(premise, metaAssertions, metaSubstitutions) {
  const metaAssertion = prune(metaAssertions, (metaAssertion) => {
    const metaSubproofNode = metaAssertion.getMetaSubproofNode(),
          metastatementNode = metaAssertion.getMetastatementNode()

    if (metaSubproofNode !== null) {
      const metaSubProofMatches = premise.matchMetaSubproofNode(metaSubproofNode, metaSubstitutions);

      if (!metaSubProofMatches) {  ///
        return true;
      }
    }

    if (metastatementNode !== null) {
      const metastatementMatches = premise.matchMetastatementNode(metastatementNode, metaSubstitutions);

      if (!metastatementMatches) {  ///
        return true;
      }
    }

  }) || null;

  const premiseMatches = (metaAssertion !== null);

  return premiseMatches;
}

function matchPremises(premise, metaAssertions, metaSubstitutions) {
  const premisesMatches = premise.every((premise) => {
    const premiseMatches = matchPremise(premise, metaAssertions, metaSubstitutions);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatches;
}

function matchConclusion(conclusion, metastatementNode, metaSubstitutions) {
  const nonTerminalNodeMatches = conclusion.matchMetastatementNode(metastatementNode, metaSubstitutions),
        conclusionMatches = nonTerminalNodeMatches; ///

  return conclusionMatches;
}

function matchPremisesAndConclusion(premises, conclusion, metaAssertions, metastatementNode) {
  let premisesMatchConclusion = false;

  const metaSubstitutions = [],
        premisesMatches = matchPremises(premises, metaAssertions, metaSubstitutions);

  if (premisesMatches) {
    const conclusionMatches = matchConclusion(conclusion, metastatementNode, metaSubstitutions);

    premisesMatchConclusion = conclusionMatches;  ///
  }

  return premisesMatchConclusion;
}
