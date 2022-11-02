"use strict";

import { prune } from "./utilities/array";
import { someSubArray } from "./utilities/array";
import { labelsAsString } from "./utilities/string";

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

  asString() {
    const string = labelsAsString(this.labels);

    return string;
  }

  asJSON(tokens) {

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
