"use strict";

import AxiomLemmaTheorem from "./axiomLemmaTheorem";

import { AXIOM_KIND } from "./kinds";

export default class Axiom extends AxiomLemmaTheorem {
  static kind = AXIOM_KIND;

  static fromJSON(json, releaseContext) { return AxiomLemmaTheorem.fromJSON(Axiom, json, releaseContext); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheorem.fromLabelsSuppositionsAndConsequence(Axiom, labels, suppositions, consequence); }
}
