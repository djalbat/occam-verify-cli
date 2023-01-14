"use strict";

import AxiomLemmaTheorem from "./axiomLemmaTheorem";

import { LEMMA_KIND } from "./kinds";

export default class Lemma extends AxiomLemmaTheorem {
  static kind = LEMMA_KIND;

  static fromJSON(json, releaseContext) { return AxiomLemmaTheorem.fromJSON(Lemma, json, releaseContext); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheorem.fromLabelsSuppositionsAndConsequence(Lemma, labels, suppositions, consequence); }
}
