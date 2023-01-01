"use strict";

import AxiomLemmaTheorem from "./axiomLemmaTheorem";

import { LEMMA_KIND } from "./kinds";

export default class Lemma extends AxiomLemmaTheorem {
  static kind = LEMMA_KIND;

  static fromJSON(json, releaseContext) { return AxiomLemmaTheorem.fromJSON(Lemma, json, releaseContext); }

  static fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent) { return AxiomLemmaTheorem.fromLabelsAntecedentsAndConsequent(Lemma, labels, antecedents, consequent); }
}
