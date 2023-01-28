"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { THEOREM_KIND } from "./kinds";

export default class Theorem extends AxiomLemmaTheoremConjecture {
  static kind = THEOREM_KIND;

  static fromJSON(json, lexer, parser) { return AxiomLemmaTheoremConjecture.fromJSON(Theorem, json, lexer, parser); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsAndConsequence(Theorem, labels, suppositions, consequence); }
}
