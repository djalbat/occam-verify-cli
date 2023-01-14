"use strict";

import AxiomLemmaTheorem from "./axiomLemmaTheorem";

import { THEOREM_KIND } from "./kinds";

export default class Theorem extends AxiomLemmaTheorem {
  static kind = THEOREM_KIND;

  static fromJSON(json, releaseContext) { return AxiomLemmaTheorem.fromJSON(Theorem, json, releaseContext); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheorem.fromLabelsSuppositionsAndConsequence(Theorem, labels, suppositions, consequence); }
}
