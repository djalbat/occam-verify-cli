"use strict";

const { prune } = require("./utilities/array"),
      { someSubArray } = require("./utilities/array"),
      { labelsAsString } = require("./utilities/string");

class Rule {
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

  matchMetastatement(metastatementNode, context) {
    const metaAssertions = context.getMetaAssertions(),
          premisesLength = this.premises.length,
          matchesMetastatement = someSubArray(metaAssertions, premisesLength, (metaAssertions) => {
            const premisesMatchConclusion = matchPremisesAndConclusion(this.premises, this.conclusion, metaAssertions, metastatementNode);

            if (premisesMatchConclusion) {
              return true;
            }
          });

    return matchesMetastatement;
  }

  asString() {
    const string = labelsAsString(this.labels);

    return string;
  }

  static fromPremisesConclusionAndLabels(premises, conclusion, labels) {
    const rule = new Rule(labels, premises, conclusion);

    return rule;
  }
}

module.exports = Rule;

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
