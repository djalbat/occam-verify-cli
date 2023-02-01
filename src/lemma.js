"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { LEMMA_KIND } from "./kinds";

export default class Lemma extends AxiomLemmaTheoremConjecture {
  static kind = LEMMA_KIND;

  static fromJSON(json, context) { return AxiomLemmaTheoremConjecture.fromJSON(Lemma, json, context); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsAndConsequence(Lemma, labels, suppositions, consequence); }
}
