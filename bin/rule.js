"use strict";

const { labelsAsString } = require("./utilities/string"),
      { prune, someCombination } = require("./utilities/array");

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
    let metastatementNodes = context.getMetastatementNodes();

    const premisesLength = this.premises.length,
          start = -premisesLength;

    metastatementNodes = metastatementNodes.slice(start); ///

    const matchesMetastatement = someCombination(metastatementNodes, (metastatementNodes) => {
      const premisesMatchConclusion = matchPremisesAndConclusion(this.premises, this.conclusion, metastatementNodes, metastatementNode);

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

function matchPremise(premise, metastatementNodes, metaSubstitutions) {
  const metastatementNode = prune(metastatementNodes, (metastatementNode) => {
    const nonTerminalNode = metastatementNode,  ///
          nonTerminalNodeMatches = premise.matchNonTerminalNode(nonTerminalNode, metaSubstitutions);

    if (!nonTerminalNodeMatches) {  ///
      return true;
    }
  }) || null;

  const premiseMatches = (metastatementNode !== null);

  return premiseMatches;
}

function matchPremises(premise, metastatementNodes, metaSubstitutions) {
  const premisesMatches = premise.every((premise) => {
    const premiseMatches = matchPremise(premise, metastatementNodes, metaSubstitutions);

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

function matchPremisesAndConclusion(premises, conclusion, metastatementNodes, metastatementNode) {
  let premisesMatchConclusion = false;

  const metaSubstitutions = [],
        premisesMatches = matchPremises(premises, metastatementNodes, metaSubstitutions);

  if (premisesMatches) {
    const conclusionMatches = matchConclusion(conclusion, metastatementNode, metaSubstitutions);

    premisesMatchConclusion = conclusionMatches;  ///
  }

  return premisesMatchConclusion;
}
