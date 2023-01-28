"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { LEMMA_KIND } from "./kinds";

export default class Lemma extends AxiomLemmaTheoremConjecture {
  static kind = LEMMA_KIND;

  static fromJSON(json, lexer, parser) { return AxiomLemmaTheoremConjecture.fromJSON(Lemma, json, lexer, parser); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsAndConsequence(Lemma, labels, suppositions, consequence); }
}
