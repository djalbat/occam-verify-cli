"use strict";

import AxiomLemmaTheorem from "./axiomLemmaTheorem";

import { AXIOM_KIND } from "./kinds";

export default class Axiom extends AxiomLemmaTheorem {
  static kind = AXIOM_KIND;

  static fromJSON(json, releaseContext) { return AxiomLemmaTheorem.fromJSON(Axiom, json, releaseContext); }

  static fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent) { return AxiomLemmaTheorem.fromLabelsAntecedentsAndConsequent(Axiom, labels, antecedents, consequent); }
}
