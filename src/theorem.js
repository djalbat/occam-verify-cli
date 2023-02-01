"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { THEOREM_KIND } from "./kinds";

export default class Theorem extends AxiomLemmaTheoremConjecture {
  static kind = THEOREM_KIND;

  static fromJSON(json, context) { return AxiomLemmaTheoremConjecture.fromJSON(Theorem, json, context); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsAndConsequence(Theorem, labels, suppositions, consequence); }
}
