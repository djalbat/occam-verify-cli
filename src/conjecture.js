"use strict";

import AxiomLemmaTheoremConjecture from "./axiomLemmaTheoremConjecture";

import { CONJECTURE_KIND } from "./kinds";

export default class Conjecture extends AxiomLemmaTheoremConjecture {
  static kind = CONJECTURE_KIND;

  static fromJSON(json, lexer, parser) { return AxiomLemmaTheoremConjecture.fromJSON(Conjecture, json, lexer, parser); }

  static fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) { return AxiomLemmaTheoremConjecture.fromLabelsSuppositionsAndConsequence(Conjecture, labels, suppositions, consequence); }
}
