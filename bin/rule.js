"use strict";

const { labelsAsString } = require("./utilities/string"),
      { prune, someChoice } = require("./utilities/array");

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
    let metaAssertions = context.getMetaAssertions();

    const premisesLength = this.premises.length,
          start = -premisesLength;

    metaAssertions = metaAssertions.slice(start); ///

    const matchesMetastatement = someChoice(metaAssertions, (metaAssertions) => {
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
    const nonTerminalNode = metaAssertion.getNonTerminalNode();

    if (nonTerminalNode !== null) {
      const nonTerminalNodeMatches = premise.matchNonTerminalNode(nonTerminalNode, metaSubstitutions);

      if (!nonTerminalNodeMatches) {  ///
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
  const nonTerminalNode = metastatementNode,  ///
        nonTerminalNodeMatches = conclusion.matchNonTerminalNode(nonTerminalNode, metaSubstitutions),
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
