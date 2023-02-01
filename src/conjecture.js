"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { CONJECTURE_KIND } from "./kinds";

export default class Conjecture extends AxiomLemmaTheoremConjecture {
  static kind = CONJECTURE_KIND;

  static fromJSON(json, context) { return AxiomLemmaTheoremConjecture.fromJSON(Conjecture, json, context); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsAndConsequence(Conjecture, labels, suppositions, consequence); }
}
